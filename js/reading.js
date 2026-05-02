/**
 * DAILY BREAD MODULE - 365-Day Bible Reading Plan
 */

const ReadingModule = (function() {
    let container;
    let completedDays = {};
    let currentDay = 1;
    
    // Get today's day number (Jan 1 = day 1)
    function getCurrentDayNumber() {
        const startDate = new Date(new Date().getFullYear(), 0, 1);
        const today = new Date();
        const diff = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
        return Math.min(diff + 1, getTotalDays());
    }
    
    function loadProgress() {
        const saved = Storage.get('reading_completed', {});
        completedDays = saved;
    }
    
    function saveProgress() {
        Storage.set('reading_completed', completedDays);
        updateStreak();
    }
    
    function updateStreak() {
        let streak = 0;
        let currentCheck = getCurrentDayNumber();
        while (completedDays[`day${currentCheck}`] && currentCheck > 0) {
            streak++;
            currentCheck--;
        }
        Storage.set('reading_streak', streak);
        return streak;
    }
    
    function getStreak() {
        return Storage.get('reading_streak', 0);
    }
    
    function toggleDay(dayNum) {
        const key = `day${dayNum}`;
        if (completedDays[key]) {
            delete completedDays[key];
            App.showToast(`📖 Day ${dayNum} unmarked`, 'info');
        } else {
            completedDays[key] = new Date().toISOString();
            App.showToast(`✅ Completed Day ${dayNum}! +5 points`, 'success');
            // Award points
            if (typeof QuizModule !== 'undefined') {
                // Points added separately
            }
        }
        saveProgress();
        render();
    }
    
    function render() {
        if (!container) return Promise.resolve('<div>Loading...</div>');
        
        const totalDays = getTotalDays();
        const todayNum = getCurrentDayNumber();
        const streak = getStreak();
        const completedCount = Object.keys(completedDays).length;
        
        // Get current week's readings
        let currentWeekReadings = [];
        let currentWeekTheme = '';
        let currentWeekNumber = 1;
        
        for (const week of READING_PLAN.weeks) {
            for (const day of week.days) {
                if (day.day === currentDay || (currentWeekReadings.length === 0 && currentDay === 1)) {
                    currentWeekReadings.push(day);
                    currentWeekTheme = week.theme;
                    currentWeekNumber = week.week;
                } else if (currentWeekReadings.length > 0 && currentWeekReadings.length < 7) {
                    currentWeekReadings.push(day);
                }
            }
            if (currentWeekReadings.length === 7) break;
        }
        
        const daysHtml = currentWeekReadings.map(day => {
            const isCompleted = completedDays[`day${day.day}`];
            const isToday = day.day === todayNum;
            return `
                <div class="reading-day-card ${isCompleted ? 'completed' : ''} ${isToday ? 'today' : ''}" data-day="${day.day}">
                    <div class="day-number">Day ${day.day}</div>
                    <div class="day-title">${escapeHtml(day.title)}</div>
                    <div class="day-readings">${day.readings.join(' • ')}</div>
                    <div class="day-focus">${escapeHtml(day.focus)}</div>
                    <button class="btn btn-sm ${isCompleted ? 'btn-outline' : 'btn-primary'} toggle-day">
                        ${isCompleted ? '✓ Completed' : 'Mark Complete'}
                    </button>
                </div>
            `;
        }).join('');
        
        const html = `
            <div class="card">
                <div class="card-header">
                    <h2>🍞 Daily Bread — Bible Reading Plan</h2>
                    <div class="stats-badge">
                        🔥 ${streak} day streak | ✅ ${completedCount}/${totalDays} completed
                    </div>
                </div>
                
                <div class="reading-overview">
                    <div class="progress-circle" style="--percent: ${(completedCount/totalDays)*100}%">
                        <span>${Math.round((completedCount/totalDays)*100)}%</span>
                    </div>
                    <div class="plan-info">
                        <p>Read through the entire Bible in one year</p>
                        <p class="small">Start any day — check off as you go</p>
                    </div>
                </div>
                
                <div class="week-header">
                    <h3>Week ${currentWeekNumber}: ${escapeHtml(currentWeekTheme)}</h3>
                    <div class="week-nav">
                        <button id="prevWeekBtn" class="btn btn-sm btn-outline" ${currentWeekNumber <= 1 ? 'disabled' : ''}>← Previous Week</button>
                        <button id="nextWeekBtn" class="btn btn-sm btn-outline" ${currentWeekNumber >= READING_PLAN.weeks.length ? 'disabled' : ''}>Next Week →</button>
                        <button id="goToTodayBtn" class="btn btn-sm btn-secondary">📅 Go to Today</button>
                    </div>
                </div>
                
                <div class="days-grid">
                    ${daysHtml}
                </div>
                
                <div class="reading-tips">
                    <h4>📖 Reading Tips</h4>
                    <ul>
                        <li>Start with prayer — ask the Holy Spirit to illuminate Scripture</li>
                        <li>Read the passage, then meditate on the focus verse</li>
                        <li>Journal what God speaks to you</li>
                        <li>Share what you learn with someone</li>
                    </ul>
                </div>
                
                <div class="reset-plan">
                    <button id="resetReadingPlanBtn" class="btn btn-outline">⟳ Reset All Progress</button>
                </div>
            </div>
        `;
        
        container.innerHTML = html;
        
        // Attach event listeners
        document.querySelectorAll('.toggle-day').forEach((btn, idx) => {
            const card = btn.closest('.reading-day-card');
            const dayNum = parseInt(card.dataset.day);
            btn.addEventListener('click', () => toggleDay(dayNum));
        });
        
        document.getElementById('prevWeekBtn')?.addEventListener('click', () => {
            if (currentWeekNumber > 1) {
                currentDay -= 7;
                render();
            }
        });
        
        document.getElementById('nextWeekBtn')?.addEventListener('click', () => {
            if (currentWeekNumber < READING_PLAN.weeks.length) {
                currentDay += 7;
                render();
            }
        });
        
        document.getElementById('goToTodayBtn')?.addEventListener('click', () => {
            currentDay = todayNum;
            render();
        });
        
        document.getElementById('resetReadingPlanBtn')?.addEventListener('click', () => {
            if (confirm('Reset all reading progress? This cannot be undone.')) {
                completedDays = {};
                saveProgress();
                render();
                App.showToast('Reading plan reset', 'info');
            }
        });
        
        return Promise.resolve();
    }
    
    function init() {
        container = document.getElementById('page-container');
        if (container) {
            loadProgress();
            currentDay = getCurrentDayNumber();
            render();
        }
    }
    
    function reset() {
        completedDays = {};
        saveProgress();
        render();
    }
    
    function escapeHtml(str) {
        if (!str) return '';
        return str.replace(/[&<>]/g, function(m) {
            if (m === '&') return '&amp;';
            if (m === '<') return '&lt;';
            if (m === '>') return '&gt;';
            return m;
        });
    }
    
    return { init, render, reset };
})();

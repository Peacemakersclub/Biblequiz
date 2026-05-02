/**
 * QUIZ MODULE - 100 Bible Questions
 * Features: Auto-next, points system, badges, rewards
 */

const QuizModule = (function() {
    // Private state
    let currentIndex = 0;
    let userAnswers = [];
    let points = 0;
    let earnedBadges = [];
    let quizCompleted = false;
    let autoNextTimer = null;

    // DOM References
    let container;

    // Load saved state
    function loadState() {
        const saved = Storage.get('quiz_state');
        if (saved) {
            currentIndex = saved.currentIndex || 0;
            userAnswers = saved.userAnswers || new Array(QUIZ_QUESTIONS.length).fill(null);
            points = saved.points || 0;
            earnedBadges = saved.earnedBadges || [];
            quizCompleted = saved.quizCompleted || false;
        } else {
            resetState();
        }
        updateBadges();
    }

    // Save current state
    function saveState() {
        Storage.set('quiz_state', {
            currentIndex,
            userAnswers,
            points,
            earnedBadges,
            quizCompleted
        });
    }

    // Reset state
    function resetState() {
        currentIndex = 0;
        userAnswers = new Array(QUIZ_QUESTIONS.length).fill(null);
        points = 0;
        earnedBadges = [];
        quizCompleted = false;
        saveState();
    }

    // Update badges based on correct answers
    function updateBadges() {
        const correctCount = getCorrectCount();
        const newBadges = [];
        
        if (correctCount >= 5) newBadges.push({ name: 'Bronze Scholar', icon: '🥉', condition: '5+ correct' });
        if (correctCount >= 15) newBadges.push({ name: 'Silver Scribe', icon: '🥈', condition: '15+ correct' });
        if (correctCount >= 25) newBadges.push({ name: 'Gold Prophet', icon: '🥇', condition: '25+ correct' });
        if (correctCount >= 40) newBadges.push({ name: 'Platinum Evangelist', icon: '💎', condition: '40+ correct' });
        if (correctCount === QUIZ_QUESTIONS.length) newBadges.push({ name: 'Bible Master', icon: '👑', condition: 'Perfect Score' });
        
        // Check for new badges
        newBadges.forEach(badge => {
            if (!earnedBadges.find(b => b.name === badge.name)) {
                earnedBadges.push(badge);
                App.showToast(`🏆 New Badge Unlocked: ${badge.icon} ${badge.name}!`, 'success');
            }
        });
        
        saveState();
    }

    // Get number of correct answers
    function getCorrectCount() {
        return userAnswers.reduce((count, answer, idx) => {
            if (answer !== null && answer === QUIZ_QUESTIONS[idx].correct) {
                return count + 1;
            }
            return count;
        }, 0);
    }

    // Get total points
    function getTotalPoints() {
        return points;
    }

    // Handle answer submission
    function submitAnswer(selectedIndex) {
        if (userAnswers[currentIndex] !== null) return;
        if (autoNextTimer) clearTimeout(autoNextTimer);

        const question = QUIZ_QUESTIONS[currentIndex];
        const isCorrect = (selectedIndex === question.correct);
        
        userAnswers[currentIndex] = selectedIndex;
        
        if (isCorrect) {
            points += 10;
            App.showToast(`✅ Correct! +10 points (Total: ${points})`, 'success');
        } else {
            App.showToast(`❌ Incorrect. The correct answer is: ${question.options[question.correct]}`, 'warning');
        }
        
        saveState();
        updateBadges();
        renderQuestion();
        
        // Auto-next after 1.5 seconds
        autoNextTimer = setTimeout(() => {
            if (currentIndex + 1 < QUIZ_QUESTIONS.length) {
                currentIndex++;
                renderQuestion();
            } else if (!quizCompleted) {
                quizCompleted = true;
                saveState();
                render();
            }
        }, 1500);
    }

    // Render current question
    function renderQuestion() {
        if (!container || quizCompleted) return;
        
        const question = QUIZ_QUESTIONS[currentIndex];
        const alreadyAnswered = userAnswers[currentIndex] !== null;
        const selectedAnswer = userAnswers[currentIndex];
        
        let optionsHtml = '';
        const prefixes = ['A', 'B', 'C', 'D'];
        
        question.options.forEach((opt, idx) => {
            let additionalClass = '';
            let feedbackIcon = '';
            
            if (alreadyAnswered) {
                if (idx === question.correct) {
                    additionalClass = 'correct-answer';
                    feedbackIcon = '✓';
                } else if (idx === selectedAnswer && selectedAnswer !== question.correct) {
                    additionalClass = 'wrong-answer';
                    feedbackIcon = '✗';
                }
            }
            
            optionsHtml += `
                <button class="option-btn ${additionalClass}" data-option="${idx}" ${alreadyAnswered ? 'disabled' : ''}>
                    <span class="option-prefix">${prefixes[idx]}</span>
                    <span>${escapeHtml(opt)}</span>
                    ${feedbackIcon ? `<span style="margin-left:auto;">${feedbackIcon}</span>` : ''}
                </button>
            `;
        });
        
        let feedbackHtml = '';
        if (alreadyAnswered) {
            const isCorrect = selectedAnswer === question.correct;
            feedbackHtml = `
                <div class="feedback-message ${isCorrect ? 'feedback-correct' : 'feedback-wrong'}">
                    ${isCorrect ? '🎉 Correct! Great knowledge of Scripture!' : `📖 ${question.options[question.correct]} is the correct answer.`}
                </div>
            `;
        }
        
        const progress = ((currentIndex + 1) / QUIZ_QUESTIONS.length) * 100;
        const correctSoFar = getCorrectCount();
        
        container.innerHTML = `
            <div class="card">
                <div class="quiz-header-stats">
                    <div class="stat-item">📖 Question ${currentIndex + 1}/${QUIZ_QUESTIONS.length}</div>
                    <div class="stat-item">⭐ ${points} points</div>
                    <div class="stat-item gold">🏅 ${correctSoFar} correct</div>
                </div>
                <div class="progress-bar-container">
                    <div class="progress-fill" style="width: ${progress}%;"></div>
                </div>
                <div class="badges-container">
                    ${earnedBadges.map(b => `<span class="badge">${b.icon} ${b.name}</span>`).join('')}
                </div>
                <div class="question-container">
                    <div class="question-text">${escapeHtml(question.text)}</div>
                    <div class="options-grid" id="optionsGrid">
                        ${optionsHtml}
                    </div>
                    ${feedbackHtml}
                </div>
                <div class="nav-buttons">
                    <button class="btn btn-outline" id="prevBtn" ${currentIndex === 0 ? 'disabled' : ''}>◀ Previous</button>
                    <button class="btn btn-secondary" id="resetQuizBtn">⟳ Reset Quiz</button>
                </div>
            </div>
        `;
        
        // Attach event listeners
        document.querySelectorAll('.option-btn').forEach(btn => {
            if (!btn.disabled) {
                btn.addEventListener('click', (e) => {
                    const optIndex = parseInt(btn.dataset.option);
                    submitAnswer(optIndex);
                });
            }
        });
        
        document.getElementById('prevBtn')?.addEventListener('click', () => {
            if (autoNextTimer) clearTimeout(autoNextTimer);
            if (currentIndex > 0) {
                currentIndex--;
                renderQuestion();
            }
        });
        
        document.getElementById('resetQuizBtn')?.addEventListener('click', () => {
            if (autoNextTimer) clearTimeout(autoNextTimer);
            resetState();
            currentIndex = 0;
            quizCompleted = false;
            render();
        });
    }

    // Render results screen
    function renderResults() {
        const correctCount = getCorrectCount();
        const percentage = Math.round((correctCount / QUIZ_QUESTIONS.length) * 100);
        let message = '';
        
        if (percentage === 100) message = 'Perfect! You have mastered God\'s Word! 🌟';
        else if (percentage >= 80) message = 'Excellent! You are a student of Scripture! 📖';
        else if (percentage >= 60) message = 'Good work! Keep studying the Bible daily. ✝️';
        else if (percentage >= 40) message = 'Good start! Read your Bible more each day. 🌱';
        else message = 'Keep going! Every day in the Word brings growth. 🙏';
        
        container.innerHTML = `
            <div class="card results-card">
                <h2>🏆 Quiz Completed! 🏆</h2>
                <div class="score-circle">
                    <div class="score-number">${correctCount}</div>
                    <div class="score-total">/${QUIZ_QUESTIONS.length}</div>
                    <div class="percentage">${percentage}%</div>
                </div>
                <div class="badges-container" style="justify-content: center;">
                    ${earnedBadges.map(b => `<span class="badge">${b.icon} ${b.name}</span>`).join('')}
                </div>
                <p style="margin: 20px 0; font-size: 1.1rem;">${message}</p>
                <div style="display: flex; gap: 16px; justify-content: center;">
                    <button class="btn btn-primary" id="restartQuizBtn">⟳ Take Quiz Again</button>
                    <button class="btn btn-secondary" id="shareResultsBtn">📤 Share Results</button>
                </div>
            </div>
        `;
        
        document.getElementById('restartQuizBtn')?.addEventListener('click', () => {
            resetState();
            currentIndex = 0;
            quizCompleted = false;
            render();
        });
        
        document.getElementById('shareResultsBtn')?.addEventListener('click', () => {
            const text = `I scored ${correctCount}/${QUIZ_QUESTIONS.length} (${percentage}%) on the FaithBase Bible Quiz! 🙏📖`;
            if (navigator.share) {
                navigator.share({ title: 'My Bible Quiz Score', text });
            } else {
                navigator.clipboard.writeText(text);
                App.showToast('Results copied to clipboard!', 'success');
            }
        });
    }

    // Main render function
    function render() {
        if (!container) return Promise.resolve('<div>Loading...</div>');
        
        if (quizCompleted) {
            renderResults();
        } else {
            renderQuestion();
        }
        return Promise.resolve();
    }

    // Initialize module
    function init() {
        container = document.getElementById('page-container');
        if (!container) return;
        loadState();
        render();
    }

    // Reset public method
    function reset() {
        resetState();
        currentIndex = 0;
        quizCompleted = false;
        render();
    }

    // Escape HTML
    function escapeHtml(str) {
        return str.replace(/[&<>]/g, function(m) {
            if (m === '&') return '&amp;';
            if (m === '<') return '&lt;';
            if (m === '>') return '&gt;';
            return m;
        });
    }

    // Public API
    return {
        init,
        render,
        reset,
        getScore: getCorrectCount,
        getPoints: getTotalPoints
    };
})();

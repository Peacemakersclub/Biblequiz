/* ============================================
   UPPER ROOM FAITH - MAIN APPLICATION LOGIC
   Bible Quiz (100 questions) · Courses (12x5 lessons)
   Church Directory · 50 Men of God
   ============================================ */

// ========== GLOBAL VARIABLES ==========
let userAnswers = new Array(100).fill(null);
let quizSubmitted = false;

// ========== HELPER FUNCTIONS ==========
function saveToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function loadFromLocalStorage(key, defaultValue) {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : defaultValue;
}

// ========== QUIZ LOGIC ==========
function renderQuiz() {
    const container = document.getElementById('quizContainer');
    if (!container || typeof quizQuestions === 'undefined') return;
    
    let html = '<div class="quiz-container-inner">';
    quizQuestions.forEach((q, idx) => {
        const selected = userAnswers[idx];
        const isAnswered = selected !== null;
        html += `
            <div class="quiz-question" data-qidx="${idx}">
                <strong>${idx + 1}. ${q.text}</strong>
                <small>${q.ref || 'Scripture'}</small>
                <div class="options-container">
        `;
        q.options.forEach((opt, optIdx) => {
            const isSelected = (selected === optIdx);
            html += `
                <div class="option ${isSelected ? 'selected' : ''}" data-qidx="${idx}" data-optidx="${optIdx}">
                    ${String.fromCharCode(65 + optIdx)}. ${opt}
                </div>
            `;
        });
        html += `</div></div>`;
    });
    html += '</div>';
    container.innerHTML = html;
    
    // Add event listeners to options
    document.querySelectorAll('.option').forEach(el => {
        el.addEventListener('click', (e) => {
            if (quizSubmitted) {
                alert('Quiz already submitted. Click Reset to take it again.');
                return;
            }
            const qidx = parseInt(el.dataset.qidx);
            const optidx = parseInt(el.dataset.optidx);
            userAnswers[qidx] = optidx;
            renderQuiz();
            updateQuizStats();
        });
    });
    updateQuizStats();
}

function updateQuizStats() {
    const answered = userAnswers.filter(a => a !== null).length;
    const progressPercent = (answered / 100) * 100;
    document.getElementById('quizProgressFill').style.width = `${progressPercent}%`;
    document.getElementById('answeredCount').innerText = answered;
    
    if (!quizSubmitted) {
        let correct = 0;
        for (let i = 0; i < 100; i++) {
            if (userAnswers[i] !== null && userAnswers[i] === quizQuestions[i].correct) {
                correct++;
            }
        }
        document.getElementById('correctCount').innerText = correct;
        document.getElementById('quizScoreDisplay').innerText = correct;
    }
}

function computeQuizScore() {
    let correct = 0;
    for (let i = 0; i < 100; i++) {
        if (userAnswers[i] !== null && userAnswers[i] === quizQuestions[i].correct) {
            correct++;
        }
    }
    return { correct, percent: (correct / 100) * 100 };
}

function generateQuizCertificate() {
    const { correct, percent } = computeQuizScore();
    if (percent < 70) {
        alert("🙏 You need at least 70% to receive the certificate. Keep studying God's Word! 'Study to shew thyself approved unto God' (2 Timothy 2:15)");
        return;
    }
    
    const certHtml = `<!DOCTYPE html>
    <html>
    <head>
        <title>Bible Quiz Certificate - Upper Room Faith</title>
        <style>
            body {
                font-family: 'Georgia', 'Times New Roman', serif;
                text-align: center;
                padding: 3rem;
                background: #FEF9F0;
            }
            .certificate {
                border: 12px double #C49A6C;
                padding: 2.5rem;
                max-width: 700px;
                margin: auto;
                background: white;
                border-radius: 20px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            }
            h1 { color: #1F4E4A; font-size: 2rem; }
            .gold { color: #C49A6C; }
            .signature { margin-top: 2rem; font-style: italic; }
            .verse { margin-top: 1.5rem; font-size: 0.9rem; color: #7A2E3B; }
        </style>
    </head>
    <body>
        <div class="certificate">
            <h1>📜 Certificate of Biblical Knowledge</h1>
            <p>This certifies that</p>
            <h2 class="gold">Faithful Servant of God</h2>
            <p>has successfully completed the</p>
            <h3>100-Question Bible Quiz</h3>
            <p>on Pentecostal Evangelical doctrine with a score of</p>
            <h2>${correct}/100 (${percent}%)</h2>
            <p class="verse">“Your word is a lamp to my feet and a light to my path.” — Psalm 119:105</p>
            <p class="signature">Upper Room Discipleship Ministry</p>
            <p>Date: ${new Date().toLocaleDateString()}</p>
        </div>
    </body>
    </html>`;
    
    const blob = new Blob([certHtml], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `bible_quiz_certificate_${Date.now()}.html`;
    link.click();
    URL.revokeObjectURL(link.href);
}

// ========== COURSES LOGIC (12 courses × 5 lessons) ==========
let coursesProgress = loadFromLocalStorage('coursesProgress', {});

function initCoursesProgress() {
    if (typeof coursesData === 'undefined') return;
    for (let i = 0; i < coursesData.length; i++) {
        if (!coursesProgress[i]) {
            coursesProgress[i] = Array(5).fill(false);
        }
    }
    saveCoursesProgress();
}

function saveCoursesProgress() {
    saveToLocalStorage('coursesProgress', coursesProgress);
}

function toggleLessonDetail(lessonId) {
    const detail = document.getElementById(lessonId);
    if (detail) {
        detail.classList.toggle('show');
    }
}

function renderCourses() {
    const grid = document.getElementById('coursesGrid');
    if (!grid || typeof coursesData === 'undefined') return;
    
    grid.innerHTML = '';
    
    for (let c = 0; c < coursesData.length; c++) {
        const course = coursesData[c];
        const completedLessons = coursesProgress[c].filter(v => v === true).length;
        const isComplete = completedLessons === 5;
        
        const card = document.createElement('div');
        card.className = 'course-card';
        
        let lessonsHtml = '';
        for (let l = 0; l < course.lessons.length; l++) {
            const lesson = course.lessons[l];
            const lessonId = `lesson-detail-${c}-${l}`;
            lessonsHtml += `
                <div class="lesson-item" onclick="toggleLessonDetail('${lessonId}')">
                    <input type="checkbox" data-course="${c}" data-lesson="${l}" ${coursesProgress[c][l] ? 'checked' : ''} onclick="event.stopPropagation()">
                    <div class="lesson-content">
                        <div class="lesson-title">📖 ${lesson.title}</div>
                        <div class="lesson-description">${lesson.shortDescription || 'Click to read full lesson'}</div>
                        <div id="${lessonId}" class="lesson-detail">
                            <strong>📖 Scripture:</strong> ${lesson.scripture || '—'}<br><br>
                            <strong>📝 Teaching:</strong> ${lesson.content || ''}<br><br>
                            <strong>💡 Key Takeaway:</strong> ${lesson.keyTakeaway || ''}<br><br>
                            <strong>🙏 Reflection:</strong> ${lesson.reflection || ''}
                        </div>
                    </div>
                </div>
            `;
        }
        
        card.innerHTML = `
            <h3><i class="fas fa-chalkboard-user"></i> ${course.title}</h3>
            <p class="subtitle">${course.description || 'A deep study in Pentecostal Evangelical doctrine'}</p>
            <div class="course-progress">
                <div class="progress-bar"><div class="progress-fill" style="width: ${(completedLessons / 5) * 100}%"></div></div>
                <small>${completedLessons}/5 lessons completed</small>
            </div>
            <div class="lessons-list">
                ${lessonsHtml}
            </div>
            ${isComplete ? `
                <div class="certificate-card">
                    <i class="fas fa-certificate"></i> Course Complete!
                    <button class="btn btn-gold get-cert-course" data-course="${c}" style="margin-top: 10px; width: 100%;">
                        Download Course Certificate
                    </button>
                </div>
            ` : ''}
        `;
        
        grid.appendChild(card);
    }
    
    // Add event listeners to checkboxes
    document.querySelectorAll('input[type="checkbox"][data-course]').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            e.stopPropagation();
            const courseIdx = parseInt(checkbox.dataset.course);
            const lessonIdx = parseInt(checkbox.dataset.lesson);
            coursesProgress[courseIdx][lessonIdx] = checkbox.checked;
            saveCoursesProgress();
            renderCourses();
        });
    });
    
    // Add event listeners to certificate buttons
    document.querySelectorAll('.get-cert-course').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const courseIdx = parseInt(btn.dataset.course);
            generateCourseCertificate(courseIdx);
        });
    });
}

function generateCourseCertificate(courseIdx) {
    if (typeof coursesData === 'undefined') return;
    const course = coursesData[courseIdx];
    const completed = coursesProgress[courseIdx].filter(v => v === true).length;
    
    if (completed < 5) {
        alert("Please complete all 5 lessons before downloading your certificate.");
        return;
    }
    
    const certHtml = `<!DOCTYPE html>
    <html>
    <head>
        <title>Course Certificate - ${course.title}</title>
        <style>
            body {
                font-family: 'Georgia', 'Times New Roman', serif;
                text-align: center;
                padding: 3rem;
                background: #FEF9F0;
            }
            .certificate {
                border: 12px double #C49A6C;
                padding: 2.5rem;
                max-width: 700px;
                margin: auto;
                background: white;
                border-radius: 20px;
            }
            h1 { color: #1F4E4A; }
            .gold { color: #C49A6C; }
            .course-title { font-size: 1.5rem; margin: 1rem 0; }
        </style>
    </head>
    <body>
        <div class="certificate">
            <h1>📖 Certificate of Completion</h1>
            <p>This certifies that</p>
            <h2 class="gold">Faithful Disciple</h2>
            <p>has successfully completed the course</p>
            <div class="course-title"><strong>${course.title}</strong></div>
            <p>including all 5 lessons, demonstrating knowledge in Pentecostal Evangelical doctrine.</p>
            <p><i>“Study to shew thyself approved unto God, a workman that needeth not to be ashamed.” — 2 Timothy 2:15</i></p>
            <p>Date: ${new Date().toLocaleDateString()}</p>
            <p class="gold">Upper Room Discipleship Ministry</p>
        </div>
    </body>
    </html>`;
    
    const blob = new Blob([certHtml], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `certificate_${course.title.replace(/\s/g, '_')}_${Date.now()}.html`;
    link.click();
    URL.revokeObjectURL(link.href);
}

// ========== CHURCH DIRECTORY LOGIC ==========
function renderChurchDirectory(filter = '') {
    const container = document.getElementById('churchList');
    if (!container || typeof churchesData === 'undefined') return;
    
    const filterLower = filter.toLowerCase();
    const filtered = churchesData.filter(church => 
        church.name.toLowerCase().includes(filterLower) ||
        church.city.toLowerCase().includes(filterLower) ||
        church.state.toLowerCase().includes(filterLower) ||
        church.denomination.toLowerCase().includes(filterLower)
    );
    
    container.innerHTML = filtered.map(church => `
        <div class="church-card">
            <div class="church-name">
                <i class="fas fa-church"></i> ${church.name}
            </div>
            <div><i class="fas fa-map-marker-alt"></i> ${church.city}, ${church.state}</div>
            <div><i class="fas fa-pray"></i> ${church.denomination}</div>
            ${church.website ? `<div><i class="fas fa-globe"></i> <a href="${church.website}" target="_blank">Visit Website</a></div>` : ''}
        </div>
    `).join('');
}

// ========== MEN OF GOD LOGIC ==========
function renderMenOfGod() {
    const container = document.getElementById('menGrid');
    if (!container || typeof menOfGodData === 'undefined') return;
    
    container.innerHTML = menOfGodData.map(man => `
        <div class="men-card">
            <i class="fas fa-praying-hands"></i>
            <div class="men-name">${man.name}</div>
            <div class="men-era">📅 ${man.era || 'Servant of God'}</div>
            <div class="men-legacy">${man.legacy || 'A faithful witness of Jesus Christ'}</div>
            ${man.keyContribution ? `<div class="men-contribution"><small>🔥 ${man.keyContribution}</small></div>` : ''}
        </div>
    `).join('');
}

// ========== TAB NAVIGATION ==========
function initTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    const panels = {
        quiz: document.getElementById('quizPanel'),
        courses: document.getElementById('coursesPanel'),
        directory: document.getElementById('directoryPanel'),
        men: document.getElementById('menPanel')
    };
    
    tabs.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.dataset.tab;
            
            // Hide all panels
            Object.values(panels).forEach(panel => {
                if (panel) panel.classList.remove('active-panel');
            });
            
            // Show selected panel
            if (panels[tabId]) panels[tabId].classList.add('active-panel');
            
            // Update active tab button
            tabs.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Refresh content when switching tabs
            if (tabId === 'courses') renderCourses();
            if (tabId === 'directory') renderChurchDirectory('');
            if (tabId === 'men') renderMenOfGod();
        });
    });
}

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', () => {
    // Wait for data files to load (they load before script.js)
    setTimeout(() => {
        // Initialize quiz
        if (typeof quizQuestions !== 'undefined') {
            renderQuiz();
        } else {
            console.error('Quiz data not loaded');
        }
        
        // Initialize courses
        if (typeof coursesData !== 'undefined') {
            initCoursesProgress();
            renderCourses();
        }
        
        // Initialize church directory
        if (typeof churchesData !== 'undefined') {
            renderChurchDirectory('');
            const searchInput = document.getElementById('churchSearch');
            if (searchInput) {
                searchInput.addEventListener('input', (e) => renderChurchDirectory(e.target.value));
            }
        }
        
        // Initialize men of God
        if (typeof menOfGodData !== 'undefined') {
            renderMenOfGod();
        }
        
        // Initialize tabs
        initTabs();
        
        // Quiz button event listeners
        const submitBtn = document.getElementById('submitQuizBtn');
        const resetBtn = document.getElementById('resetQuizBtn');
        const certBtn = document.getElementById('downloadQuizCertBtn');
        
        if (submitBtn) {
            submitBtn.addEventListener('click', () => {
                quizSubmitted = true;
                const { correct, percent } = computeQuizScore();
                document.getElementById('correctCount').innerText = correct;
                document.getElementById('quizScoreDisplay').innerText = correct;
                const resultDiv = document.getElementById('quizResultMessage');
                if (percent >= 70) {
                    resultDiv.innerHTML = `<div class="certificate-card">✨ Congratulations! You scored ${correct}/100 (${percent}%). You qualify for the certificate. ✨</div>`;
                } else {
                    resultDiv.innerHTML = `<div class="certificate-card">📖 You scored ${correct}/100 (${percent}%). Keep studying God's Word! "Study to shew thyself approved" (2 Timothy 2:15)</div>`;
                }
            });
        }
        
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                userAnswers.fill(null);
                quizSubmitted = false;
                renderQuiz();
                const resultDiv = document.getElementById('quizResultMessage');
                if (resultDiv) resultDiv.innerHTML = '';
                updateQuizStats();
            });
        }
        
        if (certBtn) {
            certBtn.addEventListener('click', generateQuizCertificate);
        }
    }, 100);
});

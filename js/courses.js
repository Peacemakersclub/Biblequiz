/**
 * COURSES MODULE - Free Pentecostal & Evangelical Courses
 */

const CoursesModule = (function() {
    let container;
    let enrolledCourses = [];
    let courseProgress = {};

    // Load saved progress
    function loadProgress() {
        const saved = Storage.get('courses_progress');
        if (saved) {
            courseProgress = saved;
        }
        const savedEnrolled = Storage.get('courses_enrolled');
        if (savedEnrolled) {
            enrolledCourses = savedEnrolled;
        }
    }

    // Save progress
    function saveProgress() {
        Storage.set('courses_progress', courseProgress);
        Storage.set('courses_enrolled', enrolledCourses);
    }

    // Enroll in a course
    function enrollCourse(courseId) {
        if (!enrolledCourses.includes(courseId)) {
            enrolledCourses.push(courseId);
            courseProgress[courseId] = 0;
            saveProgress();
            App.showToast('✅ You have been enrolled!', 'success');
            render();
        }
    }

    // Mark lesson complete
    function completeLesson(courseId, lessonIndex) {
        if (courseProgress[courseId] <= lessonIndex) {
            courseProgress[courseId] = lessonIndex + 1;
            saveProgress();
            App.showToast(`🎉 Lesson ${lessonIndex + 1} completed! +5 points`, 'success');
            
            // Award points to quiz system
            if (typeof QuizModule !== 'undefined' && QuizModule.addPoints) {
                // Points handled separately
            }
            render();
        }
    }

    function render() {
        if (!container) return Promise.resolve('<div>Loading...</div>');

        const coursesData = COURSES_DATA;
        
        const coursesHtml = coursesData.map(course => {
            const isEnrolled = enrolledCourses.includes(course.id);
            const progress = courseProgress[course.id] || 0;
            const percentComplete = (progress / course.lessons.length) * 100;
            
            return `
                <div class="course-card">
                    <div class="course-icon">${course.icon}</div>
                    <div class="course-info">
                        <h3>${escapeHtml(course.title)}</h3>
                        <p class="course-description">${escapeHtml(course.description)}</p>
                        <div class="course-meta">
                            <span>📚 ${course.lessons.length} lessons</span>
                            <span>⏱️ ${course.duration}</span>
                            <span>⭐ ${course.difficulty}</span>
                        </div>
                        ${isEnrolled ? `
                            <div class="course-progress">
                                <div class="progress-label">Progress: ${progress}/${course.lessons.length} (${Math.round(percentComplete)}%)</div>
                                <div class="progress-bar-container">
                                    <div class="progress-fill" style="width: ${percentComplete}%;"></div>
                                </div>
                            </div>
                            <div class="lessons-list">
                                <strong>📖 Lessons:</strong>
                                ${course.lessons.map((lesson, idx) => `
                                    <div class="lesson-item ${progress > idx ? 'completed' : ''}">
                                        <button class="lesson-btn ${progress <= idx ? 'available' : 'completed-btn'}" 
                                                data-course="${course.id}" data-lesson="${idx}"
                                                ${progress > idx ? 'disabled' : ''}>
                                            ${progress > idx ? '✓' : '○'} Lesson ${idx + 1}: ${escapeHtml(lesson)}
                                        </button>
                                    </div>
                                `).join('')}
                            </div>
                        ` : `
                            <button class="btn btn-primary enroll-btn" data-course="${course.id}">Enroll Free →</button>
                        `}
                    </div>
                </div>
            `;
        }).join('');

        const enrolledCount = enrolledCourses.length;
        const totalLessonsCompleted = Object.values(courseProgress).reduce((a,b) => a + b, 0);

        const html = `
            <div class="card">
                <div class="card-header">
                    <h2>📘 Free Biblical Courses</h2>
                    <div class="stats-badge">
                        Enrolled: ${enrolledCount} | Lessons: ${totalLessonsCompleted}
                    </div>
                </div>
                <p class="mb-2">Spirit-filled, Scripture-based courses — completely free. Study at your own pace.</p>
                <div class="course-grid">
                    ${coursesHtml}
                </div>
                <div class="statement-of-faith mt-2">
                    <h4>📖 Pentecostal & Evangelical Foundation</h4>
                    <p>All courses affirm the inerrancy of Scripture, the deity of Christ, the baptism of the Holy Spirit with evidence of speaking in tongues, and the imminent return of Jesus.</p>
                </div>
            </div>
        `;

        container.innerHTML = html;

        // Attach event listeners
        document.querySelectorAll('.enroll-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const courseId = parseInt(btn.dataset.course);
                enrollCourse(courseId);
            });
        });

        document.querySelectorAll('.lesson-btn').forEach(btn => {
            if (!btn.disabled) {
                btn.addEventListener('click', (e) => {
                    const courseId = parseInt(btn.dataset.course);
                    const lessonIdx = parseInt(btn.dataset.lesson);
                    completeLesson(courseId, lessonIdx);
                });
            }
        });

        return Promise.resolve();
    }

    function init() {
        container = document.getElementById('page-container');
        if (container) {
            loadProgress();
            render();
        }
    }

    function escapeHtml(str) {
        return str.replace(/[&<>]/g, function(m) {
            if (m === '&') return '&amp;';
            if (m === '<') return '&lt;';
            if (m === '>') return '&gt;';
            return m;
        });
    }

    return { init, render };
})();

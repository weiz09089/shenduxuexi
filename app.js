// State
let currentMode = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = { correct: 0, wrong: 0 };
let wrongQuestions = JSON.parse(localStorage.getItem('dl_wrong_questions')) || [];
let bookmarkedQuestions = JSON.parse(localStorage.getItem('dl_bookmarked_questions')) || [];
let userProgress = JSON.parse(localStorage.getItem('dl_user_progress')) || {
    judge: { total: 103, completed: 0 },
    choice: { total: 104, completed: 0 },
    fill: { total: 90, completed: 0 },
    short: { total: 40, completed: 0 },
    totalCorrect: 0,
    totalWrong: 0
};

// DOM Elements
const homeScreen = document.getElementById('home-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateHomeStats();
});

function updateHomeStats() {
    // Update progress bars
    const modes = ['judge', 'choice', 'fill', 'short'];
    let totalCompleted = 0;
    let totalQuestions = 0;

    modes.forEach(mode => {
        const stats = userProgress[mode];
        if (stats) {
            totalCompleted += stats.completed;
            totalQuestions += stats.total;
            const percent = stats.total > 0 ? (stats.completed / stats.total) * 100 : 0;
            const fillEl = document.getElementById(`${mode}-fill`);
            if (fillEl) fillEl.style.width = `${Math.min(100, percent)}%`;
        }
    });

    const totalPercent = totalQuestions > 0 ? (totalCompleted / totalQuestions) * 100 : 0;
    document.getElementById('total-progress').textContent = `${Math.round(totalPercent)}%`;
    document.getElementById('total-correct').textContent = userProgress.totalCorrect || 0;
    document.getElementById('total-wrong').textContent = userProgress.totalWrong || 0;

    document.getElementById('wrong-count-badge').textContent = wrongQuestions.length;
    document.getElementById('bookmark-count-badge').textContent = bookmarkedQuestions.length;
}

function startMode(mode) {
    currentMode = mode;
    currentQuestionIndex = 0;
    score = { correct: 0, wrong: 0 };

    if (mode === 'judge') currentQuestions = [...QUESTIONS.judge];
    else if (mode === 'choice') currentQuestions = [...QUESTIONS.choice];
    else if (mode === 'fill') currentQuestions = [...QUESTIONS.fill];
    else if (mode === 'short') currentQuestions = [...QUESTIONS.short];
    else if (mode === 'random') {
        // Mix all
        currentQuestions = [
            ...QUESTIONS.judge.map(q => ({...q, type: 'judge'})),
            ...QUESTIONS.choice.map(q => ({...q, type: 'choice'})),
            ...QUESTIONS.fill.map(q => ({...q, type: 'fill'})),
            ...QUESTIONS.short.map(q => ({...q, type: 'short'}))
        ].sort(() => Math.random() - 0.5).slice(0, 20); // 20 random questions
    } else if (mode === 'wrong') {
        if (wrongQuestions.length === 0) {
            alert('太棒了，目前没有错题！');
            return;
        }
        currentQuestions = [...wrongQuestions];
    } else if (mode === 'bookmark') {
        if (bookmarkedQuestions.length === 0) {
            alert('还没有收藏任何题目哦！');
            return;
        }
        currentQuestions = [...bookmarkedQuestions];
    }

    if (currentQuestions.length === 0) return;

    // Shuffle if it's a regular mode
    if (['judge', 'choice', 'fill', 'short'].includes(mode)) {
        currentQuestions = currentQuestions.sort(() => Math.random() - 0.5);
    }

    document.getElementById('quiz-total').textContent = currentQuestions.length;
    
    switchScreen(quizScreen);
    renderQuestion();
}

function renderQuestion() {
    const q = currentQuestions[currentQuestionIndex];
    
    // Determine type
    let qType = currentMode;
    if (['random', 'wrong', 'bookmark'].includes(currentMode)) {
        // Infer type if not explicitly set
        if (q.type) qType = q.type;
        else if (q.options) qType = 'choice';
        else if (typeof q.answer === 'boolean') qType = 'judge';
        else if (q.answer.includes('\n')) qType = 'short'; // Rough heuristic
        else qType = 'fill';
        
        // ensure type is set for tracking
        q.type = qType; 
    } else {
        q.type = currentMode;
    }

    // Update UI
    document.getElementById('quiz-current').textContent = currentQuestionIndex + 1;
    document.getElementById('quiz-progress-fill').style.width = `${((currentQuestionIndex) / currentQuestions.length) * 100}%`;
    
    const typeNames = { 'judge': '判断题', 'choice': '选择题', 'fill': '填空题', 'short': '简答题' };
    document.getElementById('question-type-badge').textContent = typeNames[qType] || '题目';
    document.getElementById('question-text').innerHTML = q.question;

    // Reset answer section
    document.getElementById('answer-section').style.display = 'none';
    
    // Hide all option containers
    document.getElementById('judge-options').style.display = 'none';
    document.getElementById('choice-options').style.display = 'none';
    document.getElementById('fill-options').style.display = 'none';
    document.getElementById('short-options').style.display = 'none';

    // Show relevant options
    if (qType === 'judge') {
        document.getElementById('judge-options').style.display = 'flex';
        // Reset judge buttons
        document.querySelectorAll('.judge-btn').forEach(btn => {
            btn.classList.remove('selected', 'correct', 'incorrect', 'disabled');
        });
    } else if (qType === 'choice') {
        const container = document.getElementById('choice-options');
        container.innerHTML = '';
        container.style.display = 'flex';
        
        const optLabels = ['A', 'B', 'C', 'D'];
        q.options.forEach((opt, idx) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn choice-btn';
            btn.innerHTML = `<strong>${optLabels[idx]}.</strong> ${opt}`;
            btn.onclick = () => selectChoice(optLabels[idx], btn);
            container.appendChild(btn);
        });
    } else if (qType === 'fill') {
        document.getElementById('fill-options').style.display = 'flex';
        const input = document.getElementById('fill-input');
        input.value = '';
        input.disabled = false;
        input.focus();
    } else if (qType === 'short') {
        document.getElementById('short-options').style.display = 'flex';
    }

    // Update bookmark button
    const bookmarkBtn = document.getElementById('bookmark-btn');
    const isBookmarked = bookmarkedQuestions.some(bq => bq.question === q.question);
    if (isBookmarked) {
        bookmarkBtn.classList.add('bookmarked');
        bookmarkBtn.textContent = '★';
    } else {
        bookmarkBtn.classList.remove('bookmarked');
        bookmarkBtn.textContent = '☆';
    }
}

// Answer Handlers
function selectJudge(userAnswer) {
    const q = currentQuestions[currentQuestionIndex];
    if (document.getElementById('answer-section').style.display === 'block') return; // Already answered

    const buttons = document.querySelectorAll('.judge-btn');
    buttons.forEach(b => b.classList.add('disabled'));

    const correct = userAnswer === q.answer;
    
    if (correct) {
        buttons[userAnswer ? 0 : 1].classList.add('correct');
    } else {
        buttons[userAnswer ? 0 : 1].classList.add('incorrect');
        buttons[q.answer ? 0 : 1].classList.add('correct'); // Show actual correct
    }

    showAnswerResult(correct, q.answer ? '正确' : '错误', q.analysis);
}

function selectChoice(userAnswer, btnElement) {
    const q = currentQuestions[currentQuestionIndex];
    if (document.getElementById('answer-section').style.display === 'block') return;

    const buttons = document.querySelectorAll('.choice-btn');
    buttons.forEach(b => b.classList.add('disabled'));

    // Fix possible variations in answer like "A" vs "A、"
    let cleanAnswer = q.answer;
    if (typeof cleanAnswer === 'string' && cleanAnswer.match(/^[A-D]/)) {
        cleanAnswer = cleanAnswer.charAt(0);
    }
    
    // In case the parser couldn't figure out ABCD, just show correct/wrong based on exact match of text, but let's assume ABCD for now.
    const isCorrect = userAnswer === cleanAnswer;

    if (isCorrect) {
        btnElement.classList.add('correct');
    } else {
        btnElement.classList.add('incorrect');
        // Find and highlight correct one
        const optLabels = ['A', 'B', 'C', 'D'];
        const correctIndex = optLabels.indexOf(cleanAnswer);
        if (correctIndex !== -1 && buttons[correctIndex]) {
            buttons[correctIndex].classList.add('correct');
        }
    }

    showAnswerResult(isCorrect, cleanAnswer, q.analysis);
}

function checkFill() {
    const q = currentQuestions[currentQuestionIndex];
    if (document.getElementById('answer-section').style.display === 'block') return;

    const input = document.getElementById('fill-input');
    const userAnswer = input.value.trim();
    if (!userAnswer) return;

    input.disabled = true;

    // Very basic comparison. Can be improved.
    const isCorrect = userAnswer === q.answer || q.answer.includes(userAnswer);

    showAnswerResult(isCorrect, q.answer, q.analysis);
}

function showShortAnswer() {
    const q = currentQuestions[currentQuestionIndex];
    if (document.getElementById('answer-section').style.display === 'block') return;
    
    // For short answer, we just show the answer, we don't track correct/wrong strictly
    showAnswerResult(null, q.answer, q.analysis, true);
}

function showAnswerResult(isCorrect, correctAnswer, analysis, isShort = false) {
    const section = document.getElementById('answer-section');
    const resultEl = document.getElementById('answer-result');
    const correctEl = document.getElementById('answer-correct');
    const analysisEl = document.getElementById('answer-analysis');

    section.style.display = 'block';

    if (isShort) {
        resultEl.className = 'answer-result neutral';
        resultEl.innerHTML = '参考答案：';
        correctEl.innerHTML = correctAnswer.replace(/\n/g, '<br>');
        correctEl.style.display = 'block';
    } else {
        if (isCorrect) {
            resultEl.className = 'answer-result correct';
            resultEl.innerHTML = '✓ 回答正确';
            score.correct++;
            updateProgress(true);
        } else {
            resultEl.className = 'answer-result incorrect';
            resultEl.innerHTML = '✗ 回答错误';
            score.wrong++;
            updateProgress(false);
            addToWrongQuestions();
        }
        
        correctEl.innerHTML = `<strong>正确答案：</strong>${correctAnswer}`;
        correctEl.style.display = 'block';
    }

    if (analysis) {
        analysisEl.innerHTML = `<strong>解析：</strong>${analysis}`;
        analysisEl.style.display = 'block';
    } else {
        analysisEl.style.display = 'none';
    }

    // Auto scroll to bottom
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
        renderQuestion();
    } else {
        showResult();
    }
}

// Data Management
function updateProgress(isCorrect) {
    const q = currentQuestions[currentQuestionIndex];
    if (['judge', 'choice', 'fill', 'short'].includes(q.type)) {
        if (!userProgress[q.type]) userProgress[q.type] = { total: 0, completed: 0 };
        // We just count completed for simplicity here, could be more complex
        userProgress[q.type].completed++; 
    }
    
    if (isCorrect) userProgress.totalCorrect++;
    else userProgress.totalWrong++;

    saveProgress();
}

function addToWrongQuestions() {
    const q = currentQuestions[currentQuestionIndex];
    // Avoid duplicates
    if (!wrongQuestions.some(wq => wq.question === q.question)) {
        wrongQuestions.push(q);
        saveProgress();
    }
}

function toggleBookmark() {
    const q = currentQuestions[currentQuestionIndex];
    const index = bookmarkedQuestions.findIndex(bq => bq.question === q.question);
    const btn = document.getElementById('bookmark-btn');

    if (index === -1) {
        bookmarkedQuestions.push(q);
        btn.classList.add('bookmarked');
        btn.textContent = '★';
    } else {
        bookmarkedQuestions.splice(index, 1);
        btn.classList.remove('bookmarked');
        btn.textContent = '☆';
    }
    saveProgress();
}

function saveProgress() {
    localStorage.setItem('dl_user_progress', JSON.stringify(userProgress));
    localStorage.setItem('dl_wrong_questions', JSON.stringify(wrongQuestions));
    localStorage.setItem('dl_bookmarked_questions', JSON.stringify(bookmarkedQuestions));
}

function resetAll() {
    if (confirm('确定要清除所有学习进度、错题和收藏吗？此操作不可恢复。')) {
        localStorage.removeItem('dl_user_progress');
        localStorage.removeItem('dl_wrong_questions');
        localStorage.removeItem('dl_bookmarked_questions');
        location.reload();
    }
}

// Navigation
function switchScreen(screenEl) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    screenEl.classList.add('active');
    window.scrollTo(0, 0);
}

function goHome() {
    updateHomeStats();
    switchScreen(homeScreen);
}

function showResult() {
    document.getElementById('result-total').textContent = currentQuestions.length;
    document.getElementById('result-correct').textContent = score.correct;
    document.getElementById('result-wrong').textContent = score.wrong;
    
    const rate = currentQuestions.length > 0 ? (score.correct / currentQuestions.length) * 100 : 0;
    document.getElementById('result-rate').textContent = `${Math.round(rate)}%`;

    const emojiEl = document.getElementById('result-emoji');
    const titleEl = document.getElementById('result-title');
    
    if (rate >= 90) { emojiEl.textContent = '🏆'; titleEl.textContent = '太棒了！继续保持！'; }
    else if (rate >= 60) { emojiEl.textContent = '👍'; titleEl.textContent = '不错，还要继续努力！'; }
    else { emojiEl.textContent = '💪'; titleEl.textContent = '再接再厉，查漏补缺！'; }

    switchScreen(resultScreen);
}

function retryWrong() {
    startMode('wrong');
}

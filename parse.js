const fs = require('fs');
const path = require('path');

const md = fs.readFileSync(path.join(__dirname, '..', '深度学习题库（20260424）.md'), 'utf-8');

const sections = md.split(/^## \d+\.\s+/m).filter(s => s.trim());

function cleanText(t) {
    return t.replace(/\*\*/g, '').replace(/\( \)/g, '').replace(/（ ）/g, '').trim();
}

// ========== 判断题 ==========
function parseJudge(section) {
    const questions = [];
    // Split by --- or by **题目
    const blocks = section.split(/---/).filter(b => b.includes('题目'));
    for (const block of blocks) {
        const lines = block.split('\n').map(l => l.trim()).filter(l => l);
        let questionText = '';
        let answer = null;
        let analysis = '';
        
        for (const line of lines) {
            const clean = line.replace(/\*\*/g, '');
            if (clean.match(/^题目\d+/)) {
                // Extract question text after the colon
                const m = clean.match(/^题目\d+[：:]\s*(.*)/);
                if (m) questionText = m[1].trim();
            } else if (clean.match(/^正确答案[：:]/)) {
                const ans = clean.replace(/^正确答案[：:]/, '').trim();
                answer = ans === '正确' || ans === '对';
            } else if (clean.match(/^答案解析[：:]/)) {
                analysis = clean.replace(/^答案解析[：:]/, '').trim();
            } else if (clean.match(/^A、|^B、/)) {
                // Some judge questions have A/B options, skip
            }
        }
        
        if (questionText && answer !== null) {
            questions.push({ question: questionText, answer, analysis });
        }
    }
    return questions;
}

// ========== 选择题 ==========
function parseChoice(section) {
    const questions = [];
    const blocks = section.split(/---/).filter(b => b.includes('题目'));
    for (const block of blocks) {
        const lines = block.split('\n').map(l => l.trim()).filter(l => l);
        let questionText = '';
        let options = [];
        let answer = '';
        let analysis = '';
        
        for (const line of lines) {
            const clean = line.replace(/\*\*/g, '');
            if (clean.match(/^题目\d+/)) {
                const m = clean.match(/^题目\d+[：:]\s*(.*)/);
                if (m) questionText = m[1].trim();
            } else if (clean.match(/^选项[：:]/)) {
                // skip header
            } else if (clean.match(/^-\s*[A-D][、.．]\s*/)) {
                const optText = clean.replace(/^-\s*[A-D][、.．]\s*/, '').trim();
                options.push(optText);
            } else if (clean.match(/^正确答案[：:]/)) {
                const ans = clean.replace(/^正确答案[：:]/, '').trim();
                // It could be A, B, C, D or text like "正确" or "错误"
                if (['A','B','C','D'].includes(ans)) {
                    answer = ans;
                } else if (ans === '正确' || ans === '对') {
                    answer = 'A';
                } else if (ans === '错误' || ans === '不对') {
                    answer = 'B';
                } else {
                    answer = ans;
                }
            } else if (clean.match(/^答案解析[：:]/)) {
                analysis = clean.replace(/^答案解析[：:]/, '').trim();
            }
        }
        
        if (questionText && options.length > 0) {
            questions.push({ question: questionText, options, answer, analysis });
        }
    }
    return questions;
}

// ========== 填空题 ==========
function parseFill(section) {
    const questions = [];
    const blocks = section.split(/---/).filter(b => b.includes('题目'));
    for (const block of blocks) {
        const lines = block.split('\n').map(l => l.trim()).filter(l => l);
        let questionText = '';
        let answer = '';
        let analysis = '';
        
        for (const line of lines) {
            const clean = line.replace(/\*\*/g, '').replace(/\*$/,'').trim();
            if (clean.match(/^题目\d+/)) {
                const m = clean.match(/^题目\d+[：:]\s*(.*)/);
                if (m) questionText = m[1].trim();
            } else if (clean.match(/^正确答案[：:]/)) {
                answer = clean.replace(/^正确答案[：:]/, '').trim();
            } else if (clean.match(/^答案解析[：:]/)) {
                analysis = clean.replace(/^答案解析[：:]/, '').trim();
            }
        }
        
        if (questionText) {
            questions.push({ question: questionText, answer, analysis });
        }
    }
    return questions;
}

// ========== 简答题 ==========
function parseShort(section) {
    const questions = [];
    const blocks = section.split(/---/).filter(b => b.includes('题目'));
    for (const block of blocks) {
        const lines = block.split('\n').map(l => l.trim()).filter(l => l);
        let questionText = '';
        let answerLines = [];
        let inAnswer = false;
        
        for (const line of lines) {
            const clean = line.replace(/\*\*/g, '').trim();
            if (clean.match(/^题目\d+/)) {
                const m = clean.match(/^题目\d+[：:]\s*(.*)/);
                if (m) questionText = m[1].trim();
                inAnswer = false;
            } else if (clean.match(/^正确答案[：:]/)) {
                inAnswer = true;
                const rest = clean.replace(/^正确答案[：:]/, '').trim();
                if (rest) answerLines.push(rest);
            } else if (inAnswer) {
                answerLines.push(clean);
            }
        }
        
        if (questionText) {
            questions.push({ question: questionText, answer: answerLines.join('\n') });
        }
    }
    return questions;
}

// Parse each section
let judgeSection = '', choiceSection = '', fillSection = '', shortSection = '';

const sectionSplits = md.split(/^## \d+\.\s+/m);
for (const s of sectionSplits) {
    if (s.startsWith('判断题')) judgeSection = s;
    else if (s.startsWith('单项选择题')) choiceSection = s;
    else if (s.startsWith('填空题')) fillSection = s;
    else if (s.startsWith('简答题')) shortSection = s;
}

const judgeQuestions = parseJudge(judgeSection);
const choiceQuestions = parseChoice(choiceSection);
const fillQuestions = parseFill(fillSection);
const shortQuestions = parseShort(shortSection);

console.log(`Parsed: ${judgeQuestions.length} judge, ${choiceQuestions.length} choice, ${fillQuestions.length} fill, ${shortQuestions.length} short`);

const output = `// Auto-generated question data
const QUESTIONS = {
    judge: ${JSON.stringify(judgeQuestions, null, 2)},
    choice: ${JSON.stringify(choiceQuestions, null, 2)},
    fill: ${JSON.stringify(fillQuestions, null, 2)},
    short: ${JSON.stringify(shortQuestions, null, 2)}
};
`;

fs.writeFileSync(path.join(__dirname, 'questions.js'), output, 'utf-8');
console.log('Written to questions.js');

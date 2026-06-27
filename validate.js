const fs = require('fs');
const code = fs.readFileSync(__dirname + '/questions.js', 'utf-8');
eval(code);
let badAnswers = 0;
QUESTIONS.choice.forEach((q, i) => {
    if (!['A', 'B', 'C', 'D'].includes(q.answer)) {
        console.log('Choice #' + (i + 1) + ': answer=[' + q.answer + '] q=' + q.question.substring(0, 50));
        badAnswers++;
    }
});
console.log('Non-ABCD choice answers: ' + badAnswers + '/' + QUESTIONS.choice.length);
console.log('Total: J=' + QUESTIONS.judge.length + ' C=' + QUESTIONS.choice.length + ' F=' + QUESTIONS.fill.length + ' S=' + QUESTIONS.short.length);

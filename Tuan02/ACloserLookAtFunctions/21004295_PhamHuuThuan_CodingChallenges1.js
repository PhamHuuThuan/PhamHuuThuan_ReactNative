//1.1
let poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Java', '3: C++'],
    answers: new Array(4).fill(0),
    registerNewAnswer: function(){
        let answer = prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`);
        if(answer >= 0 && answer <= 3){
            this.answers[answer]++;
        }else{
            console.log('Invalid answer! Let\'s choose again!');
        }
    }
};
//2. Call this method whenever the user clicks the "Answer poll" button.
document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));
//3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
poll.displayResults = function(type = 'array'){
    if(type === 'array'){
        console.log(this.answers);
    }else if(type === 'string'){
        console.log(`Poll results are ${this.answers.join(', ')}`);
    }
}
//4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
poll.displayResults('string');
//5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and 'string' option. Do not put the arrays in the poll object! So what should the this keyword look like in this situation?
let data1 = [5, 2, 3];
let data2 = [1, 5, 3, 9, 6, 1];
poll.displayResults.call({answers: data1}, 'array');
poll.displayResults.call({answers: data2}, 'string');
import React from 'react';

const QuizQuestion = ({ question, options, onAnswer }) => {
    return (
        <div className="quiz-question">
            <h2>{question}</h2>
            <div className="options">
                {options.map((option, index) => (
                    <button key={index} onClick={() => onAnswer(option)}>
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuizQuestion;
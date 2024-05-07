import { useState } from "react";
function Questions() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const mockQuestions = [{
        questionTitle: 'question 01',
        questionContent: 'lorem ipsum dolor sit amet, consectetur adip',
        questionOptionsType: 'simple',
        questionOptions: [{ title: 'lorem1' }, { title: 'lorem2' }, { title: 'lorem3' }, { title: 'lorem4' }]
    }, {}, {}, {}, {}, {}, {}, {}];

    const questionsOptions = (
        <ul>
            {mockQuestions[currentQuestionIndex].questionOptions.map(answer => <li key={answer}>{answer.title}</li>)}
        </ul>
    );

    return (
        <>
            <h1>This is the questions page</h1>
            <div>
                <h2>{mockQuestions[currentQuestionIndex].questionTitle}</h2>
                <p>{mockQuestions[currentQuestionIndex].questionContent}</p>
                {questionsOptions}
            </div>
        </>
    )
}

export default Questions;
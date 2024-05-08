/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
function Questions() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [questionsAreFinished, setQuestionsAreFinished] = useState(false);
    const mockQuestions = [
        {
            questionTitle: 'question 01',
            questionContent: 'lorem ipsum dolor sit amet, consectetur adip',
            questionOptionsType: 'simple',
            questionOptions: [{ title: 'lorem1' }, { title: 'lorem2' }, { title: 'lorem3' }, { title: 'lorem4' }]
        }, {
            questionTitle: 'question 02',
            questionContent: 'lorem olx bando de ***, ',
            questionOptionsType: 'simple',
            questionOptions: [{ title: 'lorem21' }, { title: 'lorem22' }, { title: 'lorem23' }, { title: 'lorem24' }]
        }];

    const questionsOptions = (
        <ul>
            {mockQuestions[currentQuestionIndex]?.questionOptions?.map(answer => <li key={answer?.title}>{answer?.title}</li>)}
        </ul>
    );

    useEffect(() => {
        if (currentQuestionIndex > mockQuestions?.length - 1) {
            setQuestionsAreFinished(true);
        }
    }, [currentQuestionIndex, mockQuestions]);

    const handleNextQuestion = () => {
        if (!questionsAreFinished) {
            setCurrentQuestionIndex(currentQuestionIndex + 1)
        }
        // else {

        // }
    }

    if (questionsAreFinished) {
        return <h1>You finished all questions, congratulations</h1>
    }

    return (
        <>
            <h1>This is the questions page</h1>
            <div>
                <h2>{mockQuestions[currentQuestionIndex]?.questionTitle}</h2>
                <p>{mockQuestions[currentQuestionIndex]?.questionContent}</p>
                {questionsOptions}
            </div>
            <button onClick={() => handleNextQuestion()}>{currentQuestionIndex !== mockQuestions?.length - 1 ? 'Próximo' : 'Submeter'}</button>
        </>
    )
}

export default Questions;
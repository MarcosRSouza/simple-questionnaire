/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
function Questions() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [questionsAreFinished, setQuestionsAreFinished] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [formQuestions, setFormQuestions] = useState([]);
    const [currentFormQuestions, setCurrentFormQuestions] = useState({});

    const handleInputChange = (e) => {
        setCurrentFormQuestions({
            title: questions[currentQuestionIndex]?.questionContent,
            answer: e?.target?.id,
        });
    }

    const questionsOptions = (
        <ul>
            {questions[currentQuestionIndex]?.questionOptions?.map(answer =>
                <li key={answer?.title}>
                    <input id={answer?.title} type="radio" name="question_answer" onChange={(e) => handleInputChange(e)} />
                    <label htmlFor={answer?.title}>{answer?.title}</label>
                </li>
            )}
        </ul>
    );

    useEffect(() => {
        fetch("http://localhost:8000/questions")
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then(data => {
                setQuestions(data)
            })
            .catch((error) => console.error("Error fetching data, ", error));
    }, []);

    useEffect(() => {
        if (currentQuestionIndex > questions?.length - 1) {
            setQuestionsAreFinished(true);
        }
    }, [currentQuestionIndex, questions]);

    const handleNextQuestion = () => {
        if (currentQuestionIndex <= questions?.length - 1) {
            const tempArray = formQuestions;
            tempArray.push(currentFormQuestions);
            setFormQuestions(tempArray);
            setCurrentQuestionIndex(currentQuestionIndex + 1)
        }
        // FIXME: adjust post request when form is finished!
        // else {
        //     setQuestionsAreFinished(true);
        //     fetch("http://localhost:8000/questions", {
        //         method: "POST",
        //         mode: "cors",
        //         body: formQuestions
        //     });
        // }
    }

    return (
        <>
            <h1>This is the questions page</h1>
            <div>
                <h2>{questions[currentQuestionIndex]?.questionTitle}</h2>
                <p>{questions[currentQuestionIndex]?.questionContent}</p>
                {questionsOptions}
            </div>
            <button onClick={() => handleNextQuestion()}>{currentQuestionIndex !== questions?.length - 1 ? 'Próximo' : 'Submeter'}</button>
        </>
    )
}

export default Questions;
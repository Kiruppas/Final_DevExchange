import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import SideNavBar from './SideNavBar';
import { useParams } from 'react-router-dom';

const QuestionDetails = () => {
  const { id } = useParams();
  const [question, setQuestion] = useState(null);
  const [answerText, setAnswerText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isTextAreaEmpty, setIsTextAreaEmpty] = useState(true); // State to track if the textarea is empty

  useEffect(() => {
    const fetchQuestionDetails = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`http://localhost:3001/questiondetails/${id}`);
        setQuestion(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching question details:', error);
        setIsLoading(false);
      }
    };

    fetchQuestionDetails();
  }, [id]);

  const handleAnswerSubmit = async () => {
    if (!answerText.trim()) {
      // If the textarea is empty or contains only whitespace, set isTextAreaEmpty to true
      setIsTextAreaEmpty(true);
      return; // Exit the function early
    }
    
    try {
      await axios.post(`http://localhost:3001/questions/${question._id}/answers`, { text: answerText });
      // Refresh question details after posting answer
      const response = await axios.get(`http://localhost:3001/questiondetails/${question._id}`);
      setQuestion(response.data);
      setAnswerText('');
    } catch (error) {
      console.error('Error posting answer:', error);
    }
  };

  const handleChange = (event) => {
    setAnswerText(event.target.value);
    setIsTextAreaEmpty(false); // Update isTextAreaEmpty state when textarea value changes
  };

  return (
    <div>
      <Navbar />
      <div className="flex">
        <SideNavBar />
        <div className="max-w-6xl mx-auto px-2">
          {isLoading ? (
            <p>Loading question details...</p>
          ) : (
            <div className="bg-white shadow-md rounded-lg p-2 font-sans">
              <h1 className="text-2xl font-semibold mb-4">{question && question.QuesTitle}</h1>
              <p className="text-gray-600 mb-4">{question && question.QuesDescription}</p>
              <p className="text-gray-600 mb-4"><span className='font-bold'>Expected Answer:</span> {question && question.QuesExpectAns}</p>
              <pre className="bg-gray-200 shadow-md rounded-lg p-2 overflow-x-auto mb-4"><span className='font-bold'>CODE:</span><br></br>{question && question.QuesCode}</pre>
              <p className="text-gray-600 mb-4"><span className='font-bold'>Tags:</span> {question && question.QuesTags}</p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <span>{question && question.votes} Votes</span>
                <span className="mx-2">|</span>
                <span>{question && question.answers && question.answers.length} Answers</span>
              </div>
              <div className="border-t border-gray-200 py-4">
                <h2 className="text-xl font-semibold mb-2">Answers:</h2>
                <ul>
                  {question && question.answers && question.answers.map((answer, index) => (
                    <li key={index} className="mb-2">{answer.text}</li>
                  ))}
                </ul>
                <textarea className={`w-full mt-4 p-2 border rounded ${isTextAreaEmpty ? 'border-red-500' : ''}`} value={answerText} onChange={handleChange} />
                {isTextAreaEmpty && <p className="text-red-500">Answer is required</p>} {/* Display error message if textarea is empty */}
                <button className="bg-gradient-to-l from-[rgb(24,204,216)] to-[rgb(239,104,8)] hover:from-[rgba(21,112,209,0.82)] hover:to-[rgba(21,112,209,0.82)]  text-white font-semibold px-4 py-2 rounded-md mt-2" onClick={handleAnswerSubmit}>Submit Answer</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionDetails;

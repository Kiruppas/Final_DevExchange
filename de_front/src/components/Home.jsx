import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import SideNavBar from './SideNavBar';
import { Link } from 'react-router-dom';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa'; 





const QuestionsDisplayPage = () => {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 4; 

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('http://localhost:3001/retrieveques');
        setQuestions(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching questions:', error);
        setIsLoading(false);
      }
    };

    fetchQuestions();
  }, []);




  const handleVote = async (id, type) => {
    try {
      const response = await axios.put(`http://localhost:3001/questions/${id}/${type}`);
      const updatedQuestions = questions.map((ques) => {
        if (ques._id === id) {
          let updatedVotes = ques.votes;
          if (type === 'upvote') {
            updatedVotes += 1; 
          } else if (type === 'downvote') {
            updatedVotes -= 1; 
          }
          return { ...ques, votes: updatedVotes };
        }
        return ques;
      });
      setQuestions(updatedQuestions);
    } catch (error) {
      console.error('Error updating vote:', error);
    }
  };
  
  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion);
  const totalPages = Math.ceil(questions.length / questionsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);




  return (
    <div>
      <Navbar />
      <div className="flex">
        <SideNavBar />
        <div className="container mx-auto px-4">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <div>
              <h1 className="text-2xl font-semibold mb-8 mt-4">QUESTIONS :</h1>
              {currentQuestions.map((ques, index) => (
                <div key={ques.id} className="mb-6">
                  <Link to={`/questions/${ques._id}`} className="text-black font-sans">
                    <h2 className="bg-gradient-to-l from-[rgb(24,204,216)] to-[rgb(239,104,8)] hover:from-[rgba(21,112,209,0.82)] hover:to-[rgba(21,112,209,0.82)]  text-white font-semibold mx-0 px-3 py-1 border-2 border-blue-600 rounded-[5px]">{ques.QuesTitle}</h2>
                  </Link>
                  <p className="text-gray-600 mb-2">{ques.QuesDescription}</p>
                  <div className="flex items-center text-gray-500">
                    <span className="mr-4">{ques.postedTime}</span>
                    <span className="mr-4">{ques.username}</span>
                    <button className="mr-2" onClick={() => handleVote(ques.id, 'upvote')}>
                      <FaArrowUp />
                    </button>
                    <button className="mr-2" onClick={() => handleVote(ques.id, 'downvote')}>
                      <FaArrowDown />
                    </button>
                    <span>{ques.votes} Votes</span>
                    <span className="ml-4">
                      {ques.answers ? ques.answers.length : 0} Answers
                    </span>
                  </div>
                  {index < currentQuestions.length - 1 && <hr className='border-2 my-[10px]' />} {/* Add line if not the last question */}
                </div>
              ))}
              {/* Pagination page numbers */}
              <div className="flex mt-6 items-center justify-center">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => paginate(index + 1)}
                    className={`bg-gradient-to-b from-[rgb(24,204,216)] to-[rgb(239,104,8)] hover:from-[rgba(21,112,209,0.82)] hover:to-[rgba(21,112,209,0.82)]  text-white font-semibold mx-2 px-3 py-1 border-2 border-blue-600 rounded-[5px] ${currentPage === index + 1 ? 'bg-gray-200' : ''}`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionsDisplayPage;

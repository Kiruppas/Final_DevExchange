import React, { useState } from 'react';
import Navbar from './Navbar'; 
import SideNavBar from './SideNavBar';
import axios from 'axios';
import {useNavigate} from 'react-router-dom' ;

const AskQuestionPage = () => {
  const [QuesTitle, setQuesTitle] = useState('');
  const [QuesDescription, setQuesDescription] = useState('');
  const [QuesExpectAns, setQuesExpectAns] = useState('');
  const [QuesCode, setQuesCode] = useState('');
  const [QuesTags, setQuesTags] = useState('');

  const [isLoading, setisLoading] = useState(false);

  const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const AskQuestion = {
      QuesTitle,
      QuesDescription,
      QuesExpectAns,
      QuesCode,
      QuesTags,
    };
  
    try {
      setisLoading(true);
      const response = await axios.post('http://localhost:3001/insertques', AskQuestion);
      console.log(response.data);
      navigate('/Home');
    } catch (error) {
      throw new Error(`Failed to insert data: ${error.message}`);
    } finally {
      setisLoading(false);
    }
    
  }



  return (
    <div>
      <Navbar /> 
      <div className="flex">
        <SideNavBar /> 
        <div className="container mt-8 mx-4">
          <div className='flex space-x-4'>
          <h1 className="text-2xl font-semibold mb-4 font-sans mr-[900px]">ASK A QUESTION :</h1>
          {/* <button
              type="submit"
              className="bg-gradient-to-l from-[rgb(24,204,216)] to-[rgb(239,104,8)] hover:from-[rgba(21,112,209,0.82)] hover:to-[rgba(21,112,209,0.82)]  text-white font-semibold px-4 rounded-md ">
              My Questions
          </button> Just for now it is not used */}
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="title" className="block font-semibold mb-2 font-sans">Title:</label>
              <p className='text-gray-400'>Be specific and imagine you’re asking a question to another person.</p>
              <input
                type="text"
                id="title"
                value={QuesTitle}
                onChange={(e) => setQuesTitle(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="body" className="block font-semibold mb-2 font-sans">What are the details of your problem?</label>
              <p className='text-gray-400'>Introduce the problem and expand on what you put in the title.</p>
              <textarea
                id="body"
                value={QuesDescription}
                onChange={(e) => setQuesDescription(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                rows="6"
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="body" className="block font-semibold mb-2 font-sans">What did you try and what were you expecting?</label>
              <p className='text-gray-400'>Describe what you tried, what you expected to happen, and what actually resulted.</p>
              <textarea
                id="body"
                value={QuesExpectAns}
                onChange={(e) => setQuesExpectAns(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                rows="6"
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="body" className="block font-semibold mb-2 font-sans">Code:</label>
              <p className='text-gray-400'>Give the Code which has bug.</p>
              <textarea
                id="body"
                value={QuesCode}
                onChange={(e) => setQuesCode(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                rows="6"
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="tags" className="block font-semibold mb-2 font-sans">Tags:</label>
              <input
                type="text"
                id="tags"
                value={QuesTags}
                onChange={(e) => setQuesTags(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="e.g., reactjs javascript node.js"
                required
              />
            </div>
            <button
              type="submit"
              className="mb-4 bg-gradient-to-l from-[rgb(24,204,216)] to-[rgb(239,104,8)] hover:from-[rgba(21,112,209,0.82)] hover:to-[rgba(21,112,209,0.82)]  text-white font-semibold px-4 py-2 rounded-md"
            >{isLoading? 'Loading...' : 'Submit' }
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AskQuestionPage;

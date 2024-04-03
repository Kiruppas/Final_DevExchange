import React from 'react';
import firebase,{auth} from '../auth/FireBase';
import { useNavigate } from "react-router-dom";



const HeroSection = () => {

  const navigate = useNavigate();

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try{
      await auth.signInWithPopup(provider);
      navigate('/Home');

    }catch (error){
      console.error('Google Sign-In error:',error);
    }
  
  };






  return (
    <div className='h-screen bg-[#000033]'
        style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url('https://img.freepik.com/free-vector/gradient-futuristic-background-with-connection-concept_23-2149104857.jpg?t=st=1708964383~exp=1708967983~hmac=6bfae60619269375d18e6bfd4f88e6827d22105f8dd026e1b837cc124cb57eb9&w=826')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity:'50'
      }}>
        <div className='flex flex-col items-center justify-center h-full space-y-4'>
            <img src=".\logo.png" className='h-[300px] w-[300px]' alt="MS_logo"></img>
            <p className='bg-gradient-to-l text-transparent from-[rgb(239,104,8)] to-[rgb(24,204,216)] bg-clip-text font-bold text-4xl font-sans'>DEVEXCHANGE</p>
            <p className='text-white font-medium font-sans'>"The Lifeline of Developers"</p>
            <button onClick={login} className='flex items-center justify-center bg-gradient-to-l from-[rgb(24,204,216)] to-[rgb(239,104,8)] hover:from-[rgba(246,246,248,0.82)] hover:to-[rgba(250,250,250,0.82)] px-8 py-2 text-black font-bold rounded-2xl font-sans'>Sign In with 
                <img className="h-[32px] w-[38px] pl-[4px]" src="googleicon.png" alt="Google" />
            </button>
        </div>
    </div>
  )
}



export default HeroSection
import React from 'react';
import { useNavigate } from "react-router-dom";

const PostCard = () => {
    const navigate = useNavigate();

    const  title = 'Welcome to Web3';
    const hashtags = ['Web3 game'];
    const image= 'https://cdn.discordapp.com/attachments/1148598201314725913/1164871023150235698/2.jpg?ex=6544c9ae&is=653254ae&hm=12e8826cd476712890f3219b42e727275b1e5e07c999d400a57ae63855a1dc04&';
    const likes=0 ;
  return (
    <div className="my-2 max-w-md  h-full mx-auto bg-white rounded-xl shadow-md overflow-hidden mb-4">
        <div onClick={()=>{
            navigate('/')
        }} className='absolute left-[29rem] p-2 cursor-pointer bg-black text-white rounded-md my-2'>Home</div>
      <img className="object-cover object-center w-full h-64" src={image} alt="Post" />
      <div className="p-6">
        <div className="flex items-center text-gray-400 mb-2">
          {hashtags.map((tag, index) => (
            <span key={index} className="mr-2 text-indigo-500">
              {tag}
            </span>
          ))}
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
        <div className="flex items-center">
          <svg
            className="w-6 h-6 text-gray-600 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <span className="text-gray-600">{likes} Likes</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;




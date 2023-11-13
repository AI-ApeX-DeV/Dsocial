import React, { useState, useContext, useEffect } from "react";
import { Context } from "../context/ContextProvider";
import { useNavigate } from "react-router-dom";

function MyComponent(props) {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleImageUpload = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handlePost = () => {
    // You can implement the logic to post the content and image here.
    // For example, you can send the content and image to a server.
    // Note: This is a simplified example. You should handle image upload securely and efficiently.
    console.log("Content:", content);
    console.log("Image:", image);
  };
  const { checkIfWalletIsConnected,ConnectWallet, currentAccount, isNewUser ,createUser,createPost,likePost,getUserData,userPost} =
  useContext(Context);
  const navigate = useNavigate();
  return (
    <div className="bg-white flex flex-col px-5 rounded-2xl">
      <div className="text-gray-400 text-sm font-medium self-center items-center border border-[color:var(--gray-400,#9CA3AF)] w-[575px] max-w-full mt-7 pl-3 pr-5 py-3.5 rounded-xl border-solid">
        <input type="text" name="" placeholder="Write a post" id="" />
      </div>
      <textarea
        value={content}
        onChange={handleContentChange}
        placeholder="Write your content here"
        className="w-[calc(100% - 32px)] max-w-full px-2 py-2 text-black text-sm border border-[color:var(--black,#000)] rounded-3xl border-solid mt-4"
      />
      <input
        type="file"
        accept="image/*"
        id="image-upload"
        style={{ display: "none" }}
        onChange={handleImageUpload}
      />
      <label htmlFor="image-upload" className="cursor-pointer mt-4">
        <div className="justify-center items-center border border-[color:var(--black,#000)] bg-amber-200 self-stretch flex gap-2 px-4 py-2.5 rounded-3xl border-solid">
          <div className="text-black text-sm font-medium">Add Image/Video</div>
        </div>
      </label>
      <button
        onClick={handlePost}
        className="justify-center items-center border border-[color:var(--black,#000)] bg-red-500 self-stretch flex mt-4 px-5 py-2.5 rounded-3xl border-solid"
      >
        <div onClick={async()=>{
              console.log("currentAccount",currentAccount);
              await createPost('https://cdn.discordapp.com/attachments/1148598201314725913/1164871023150235698/2.jpg?ex=6544c9ae&is=653254ae&hm=12e8826cd476712890f3219b42e727275b1e5e07c999d400a57ae63855a1dc04&','postId','Welcome to Web3','#web3')
              alert("Post created");
            navigate('/posts')

        }} className="text-white text-sm font-medium self-center">Post</div>
      </button>
    </div>
  );
}

export default MyComponent;

import React, { useState, useContext, useEffect } from "react";
import { Context } from "../context/ContextProvider";
import { useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import PostComponent from "./PostComponent";

const Home = () => {
  const navigate = useNavigate();
  const [commentOpen, setCommentOpen] = useState(false);
  const [userBal, setUserBal] = useState(0);  
  const [likess, setLikess] = useState(477);

  const imgLinks = [
    "https://cdn.discordapp.com/attachments/1148598201314725913/1164977604483371068/image.png?ex=65452cf1&is=6532b7f1&hm=89fd657197685f46d1a5b5f8e88e9a0ed71f85854024cba35069197b1a10e1a7&",
    "https://cdn.discordapp.com/attachments/1148598201314725913/1164977580626153592/image.png?ex=65452ceb&is=6532b7eb&hm=711bb8f7cf53910f9ddf7eb6c079fc1f6d02046545a025cea182e49b53347a97&",
    "https://cdn.discordapp.com/attachments/1148598201314725913/1164977560195702884/image.png?ex=65452ce6&is=6532b7e6&hm=71ac448a37bb1692b9550d5f2037f118bf7b2804d384de88583866d4828a7fcb&",
    "https://cdn.discordapp.com/attachments/1148598201314725913/1164977456139223040/image.png?ex=65452ccd&is=6532b7cd&hm=630f816d2cd6a0a323af298284eb3a1896e0e4e93ecb91b1e632c547603b4170&",
    "https://cdn.discordapp.com/attachments/1148598201314725913/1164977453094162442/image.png?ex=65452ccd&is=6532b7cd&hm=5e5bb5f5c37ebcedf3339a9a162112e29c54f79942748654aa43ca375b5ec269&",
    "https://cdn.discordapp.com/attachments/1148598201314725913/1164977098146975744/image.png?ex=65452c78&is=6532b778&hm=74ca2b0fcb94ef05c6e65fc5e7f56e31a1b513d70f717e260c318b6e55be914e&",
  ];
  const { checkIfWalletIsConnected,ConnectWallet, currentAccount, isNewUser ,createUser,createPost,likePost,getUserData,userPost} =
    useContext(Context);
  const handleConnectWallet = async () => {
  await ConnectWallet()
   
       const login =async ()=>{return await isNewUser()} ;
    if (!login && currentAccount != "") {
     const create = async()=>{
       await createUser('m',1);
     }
     create();

      navigate("/register");
      console.log("login", login);
    }
   
   
  };

  useEffect(() => {
    const getBal = async () => {
      console.log("currentAccount", currentAccount);
      if(currentAccount){
      const bal = await getUserData(currentAccount);
      console.log("bal", Number(bal.token));
      setUserBal( Number(bal.token));
      userPost();
    }}
    getBal();

  }, [currentAccount]);
  return (
    <div
      style={{
        backgroundImage: `url("https://cdn.discordapp.com/attachments/1096324843877703713/1165005685461884998/image.png?ex=65454718&is=6532d218&hm=dfe1517d7016ba5b01d251a009f8e6ed491d3396cfd254b9dcd8f9916b8e5bf5&")`,
      }}
    >
      <div className="relative w-full h-[90rem] text-left text-[0.88rem] text-white font-text-xs-font-medium">
        <div className=" absolute top-[0rem] left-[0rem]  w-full h-[90rem] overflow-hidden">
          <img
            className="absolute top-[0rem] left-[4rem] w-[14rem] h-[10rem] object-cover"
            alt=""
            src="https://cdn.discordapp.com/attachments/1148598201314725913/1164923615620370473/image.png?ex=6544faa9&is=653285a9&hm=b011b3cc6b10d27797bc4802588e6fb37c93bb473333c889a9d2b51163ca8cd3&"
          />
          <div className="absolute top-[2.69rem] left-[24.5rem] rounded-48xl box-border w-[44.75rem] h-[3.31rem] overflow-hidden text-[1.13rem] border-[1px] border-solid border-white">
            <div className="absolute top-[1rem] left-[3.88rem] opacity-[0.41]">
              Search
            </div>
            <img
              className="absolute top-[1.13rem] left-[1.94rem] w-[1.25rem] h-[1.25rem] overflow-hidden"
              alt=""
              src="https://cdn.discordapp.com/attachments/1148598201314725913/1164925367035899975/image.png?ex=6544fc4a&is=6532874a&hm=f5cf0dfb0d119ab54d8b8c7f6cb7edd065a5d33deba4f910bc9c9c930aaa103b&"
            />
          </div>
          <div className="absolute top-[11.44rem] left-[20.31rem] rounded-48xl [background:linear-gradient(95.28deg,_rgba(149,_175,_214,_0.61),_rgba(255,_255,_255,_0))] box-border w-[11.13rem] h-[3.31rem] overflow-hidden text-[1.13rem] border-[1px] border-solid border-white">
            <div onClick={()=>{
         navigate('/post')}} className="absolute top-[1rem] left-[2rem]">Create a post</div>
          </div>
          <div className="absolute top-[8.16rem] left-[18.78rem] bg-teal-300 box-border w-[0.06rem] h-[55.88rem] opacity-[0.48] border-r-[1px] border-solid border-purple-200" />
          <div className="absolute top-[8.16rem] left-[71.34rem] bg-teal-300 box-border w-[0.06rem] h-[55.88rem] opacity-[0.48] border-r-[1px] border-solid border-purple-200" />
          <div className="absolute top-[8.16rem] left-[-0.03rem] bg-teal-300 box-border w-[90.06rem] h-[0.06rem] opacity-[0.48] border-t-[1px] border-solid border-purple-200" />
          <div className="absolute top-[9.75rem] left-[72.56rem] rounded-lg bg-white w-[16.25rem] h-[14.31rem] overflow-hidden opacity-[0.21]" />
          <div className="absolute top-[26.19rem] left-[72.56rem] rounded-lg bg-white w-[16.25rem] h-[25.13rem] overflow-hidden opacity-[0.23]" />
          <div className="absolute top-[27.44rem] left-[1.19rem] rounded-lg bg-white w-[16.44rem] h-[14rem] overflow-hidden opacity-[0.23]" />
          <img
            className="absolute top-[30.44rem] left-[73.94rem] rounded-8xl w-[2rem] h-[2rem] object-cover"
            alt=""
            src={imgLinks[Math.floor(Math.random() * imgLinks.length)]}
          />
          <img
            className="absolute top-[33.88rem] left-[73.94rem] rounded-8xl w-[2rem] h-[2rem] object-cover"
            alt=""
            src="https://cdn.discordapp.com/attachments/1148598201314725913/1164977098146975744/image.png?ex=65452c78&is=6532b778&hm=74ca2b0fcb94ef05c6e65fc5e7f56e31a1b513d70f717e260c318b6e55be914e&"
          />
          <img
            className="absolute top-[37.31rem] left-[73.94rem] rounded-8xl w-[2rem] h-[2rem] object-cover"
            alt=""
            src="https://cdn.discordapp.com/attachments/1148598201314725913/1164977098146975744/image.png?ex=65452c78&is=6532b778&hm=74ca2b0fcb94ef05c6e65fc5e7f56e31a1b513d70f717e260c318b6e55be914e&"
          />
          <img
            className="absolute top-[40.75rem] left-[73.94rem] rounded-8xl w-[2rem] h-[2rem] object-cover"
            alt=""
            src="https://cdn.discordapp.com/attachments/1148598201314725913/1164977098146975744/image.png?ex=65452c78&is=6532b778&hm=74ca2b0fcb94ef05c6e65fc5e7f56e31a1b513d70f717e260c318b6e55be914e&"
          />
          <img
            className="absolute top-[44.19rem] left-[73.94rem] rounded-8xl w-[2rem] h-[2rem] object-cover"
            alt=""
            src="https://cdn.discordapp.com/attachments/1148598201314725913/1164977098146975744/image.png?ex=65452c78&is=6532b778&hm=74ca2b0fcb94ef05c6e65fc5e7f56e31a1b513d70f717e260c318b6e55be914e&"
          />
          <div className="absolute top-[27.56rem] left-[75.63rem] text-[1rem]">
            Popular Communities
          </div>
          <div className="absolute top-[47.88rem] left-[78.13rem] rounded-md bg-black opacity-[0.27]" />
          <div className="absolute top-[48rem] left-[78.75rem] text-[0.75rem] leading-[150%] font-medium text-center">
            Load More
          </div>
          <div className="absolute top-[30.19rem] left-[6.13rem] text-[1rem]">
            Today’s Tasks
          </div>
          <div className="absolute top-[30.44rem] left-[76.56rem]">
            IndiaweIndian
          </div>
          <div className="absolute top-[33.88rem] left-[76.56rem]">
            IndiaweIndian
          </div>
          <div className="absolute top-[37.31rem] left-[76.56rem]">
            IndiaweIndian
          </div>
          <div className="absolute top-[40.75rem] left-[76.56rem]">
            IndiaweIndian
          </div>
          <div className="absolute top-[44.19rem] left-[76.56rem]">
            IndiaweIndian
          </div>
          <div className="absolute top-[31.69rem] left-[76.63rem] text-[0.63rem]">
            500 members
          </div>
          <div className="absolute top-[35.13rem] left-[76.63rem] text-[0.63rem]">
            500 members
          </div>
          <div className="absolute top-[38.56rem] left-[76.63rem] text-[0.63rem]">
            500 members
          </div>
          <div className="absolute top-[42rem] left-[76.63rem] text-[0.63rem]">
            500 members
          </div>
          <div className="absolute top-[45.44rem] left-[76.63rem] text-[0.63rem]">
            500 members
          </div>
          <div className="absolute top-[10.38rem] left-[83.63rem] rounded-24xl box-border w-[4.63rem] h-[1.63rem] overflow-hidden text-[0.75rem] border-[1px] border-solid border-white">
            <div className="absolute top-[0.31rem] left-[1.13rem] font-medium">
              Buy
            </div>
            <img
              className="absolute h-[32.69%] w-[11.49%] top-[35.58%] right-[19.26%] bottom-[31.73%] left-[69.26%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/icon.svg"
            />
          </div>
          <div className="absolute top-[21rem] left-[77.44rem] rounded-24xl box-border w-[6.44rem] h-[1.63rem] overflow-hidden text-[0.75rem] border-[1px] border-solid border-white">
            <div className="absolute top-[0.31rem] left-[1.13rem] font-medium">
              {userBal | 0} Socoins
            </div>
          </div>
          <img
            className="absolute top-[10.19rem] left-[1.19rem] rounded-lg w-[16.44rem] h-[15.5rem] overflow-hidden opacity-[0.21]"
            alt=""
            src="/frame-5.svg"
          />
          <div className="absolute top-[16.94rem] left-[20.19rem] rounded-lg bg-white w-[50rem] h-[40.88rem] overflow-hidden opacity-[0.21]">
            <img
              className="absolute top-[38.44rem] left-[157.94rem] w-[1.5rem] h-[1.5rem] overflow-hidden"
              alt=""
              src="/thumbsup.svg"
            />
            <div className="absolute top-[37.38rem] left-[11.44rem] w-[1.5rem] h-[1.5rem] overflow-hidden" />
            <div className="absolute top-[38.44rem] left-[5.19rem] font-medium">
             { likess}
            </div>
          </div>
          <div className="absolute top-[53rem] left-[30.31rem] rounded-smi bg-white box-border w-[6.06rem] h-[2.38rem] overflow-hidden opacity-[0.24] border-[1px] border-solid border-white" />
          <img
            className="absolute top-[17.75rem] left-[20.94rem] rounded-8xl w-[2rem] h-[2rem] object-cover"
            alt=""
            src="https://cdn.discordapp.com/attachments/1148598201314725913/1164977098146975744/image.png?ex=65452c78&is=6532b778&hm=74ca2b0fcb94ef05c6e65fc5e7f56e31a1b513d70f717e260c318b6e55be914e&"
          />
          <div className="absolute top-[53.44rem] left-[23.69rem] w-[5.31rem] h-[1.5rem]">
         
            <div onClick={()=>{
              setCommentOpen(!commentOpen);
            }} className="absolute top-[0.25rem] left-[8.19rem] flex flex-row items-start justify-start gap-[0.63rem]">
              <img
                className="relative w-[1.25rem] h-[1.25rem]"
                alt=""
                src="https://cdn.discordapp.com/attachments/1148598201314725913/1165031327452626944/image.png?ex=65455ef9&is=6532e9f9&hm=5fda6a845d4e978469cdaeb7076f29eb74df4d0cbd37f5ff634bba39035d63e8&"
              />
              <div className="relative font-medium">21</div>
            </div>
            {commentOpen&&  <div className="relative top-[5rem] right-[3.4rem] w-full h-[58.38rem] text-left text-[0.75rem] text-gray-400 font-text-xs-font-medium">
      <div className="absolute top-[0rem] left-[0rem] rounded-lg bg-white w-[50rem] h-[28.38rem] overflow-hidden opacity-[0.23]" />
      <div className="absolute top-[2.25rem] left-[5.56rem] inline-block w-[5.19rem]">
        Add Comment
      </div>
      <img
        className="absolute top-[1.31rem] left-[2rem] rounded-130xl w-[2.94rem] h-[2.94rem] object-cover"
        alt=""
        src="/image-20@2x.png"
      />
      <div className="absolute top-[3.59rem] left-[5.16rem] box-border w-[42rem] h-[0.06rem] border-t-[1px] border-solid border-gray-400" />
      <div className="absolute top-[6.19rem] left-[1.88rem] w-[46.31rem] h-[17rem] text-white">
        <div className="absolute top-[9.06rem] left-[0rem] w-[46.31rem] h-[3.5rem]">
          <div className="absolute top-[0rem] left-[0rem] rounded-3xs bg-plum w-[46.31rem] h-[3.5rem] overflow-hidden opacity-[0.46]" />
          <img
            className="absolute top-[0.31rem] left-[0.38rem] rounded-130xl w-[2.81rem] h-[2.81rem] object-cover"
            alt=""
            src="/image-28@2x.png"
          />
          <div className="absolute top-[1.69rem] left-[3.75rem] inline-block w-[34.48rem]">
            Internet thinks this tenant's speedy flat hunt is an anti Peak
            Bengaluru moment
          </div>
          <div className="absolute top-[0.31rem] left-[3.75rem] font-medium inline-block w-[2.93rem]">
            swe23
          </div>
        </div>
        <div className="absolute top-[0rem] left-[0rem] w-[46.31rem] h-[8.06rem]">
          <div className="absolute top-[0rem] left-[0rem] w-[46.31rem] h-[3.5rem]">
            <div className="absolute top-[0rem] left-[0rem] rounded-3xs bg-plum w-[46.31rem] h-[3.5rem] overflow-hidden opacity-[0.46]" />
            <div className="absolute top-[0.31rem] left-[0.44rem] w-[37.72rem] h-[2.81rem]">
              <img
                className="absolute top-[0rem] left-[0rem] rounded-130xl w-[2.81rem] h-[2.81rem] object-cover"
                alt=""
                src="/image-281@2x.png"
              />
              <div className="absolute top-[1.5rem] left-[3.25rem] inline-block w-[34.48rem]">
                Internet thinks this tenant's speedy flat hunt is an anti Peak
                Bengaluru moment
              </div>
              <div className="absolute top-[0.13rem] left-[3.25rem] font-medium inline-block w-[2.93rem]">
                swe23
              </div>
            </div>
          </div>
          <div className="absolute top-[4.56rem] left-[0rem] w-[46.31rem] h-[3.5rem]">
            <div className="absolute top-[0rem] left-[0rem] rounded-3xs bg-plum w-[46.31rem] h-[3.5rem] overflow-hidden opacity-[0.46]" />
            <img
              className="absolute top-[0.25rem] left-[0.38rem] rounded-130xl w-[2.81rem] h-[2.81rem] object-cover"
              alt=""
              src="/image-23@2x.png"
            />
            <div className="absolute top-[1.69rem] left-[3.75rem] inline-block w-[34.48rem]">
              Internet thinks this tenant's speedy flat hunt is an anti Peak
              Bengaluru moment
            </div>
            <div className="absolute top-[0.31rem] left-[3.75rem] font-medium inline-block w-[2.93rem]">
              swe23
            </div>
          </div>
        </div>
        <div className="absolute top-[13.5rem] left-[0rem] w-[46.31rem] h-[3.5rem]">
          <div className="absolute top-[0rem] left-[0rem] rounded-3xs bg-plum w-[46.31rem] h-[3.5rem] overflow-hidden opacity-[0.46]" />
          <img
            className="absolute top-[0.31rem] left-[0.38rem] rounded-[83px] w-[2.81rem] h-[2.81rem] object-cover"
            alt=""
            src="/image-282@2x.png"
          />
          <div className="absolute top-[1.75rem] left-[3.75rem] inline-block w-[34.48rem]">
            Internet thinks this tenant's speedy flat hunt is an anti Peak
            Bengaluru moment
          </div>
          <div className="absolute top-[0.38rem] left-[3.75rem] font-medium inline-block w-[2.93rem]">
            swe23
          </div>
        </div>
      </div>
    </div>}
            <img

            onClick={async()=>{
              await likePost('1');

              alert('2 Tokens deducted from your account');
              setLikess(likess+1);


            }}
              className="absolute top-[-0.12rem] left-[-0.75rem] w-[1.5rem] h-[1.5rem] overflow-hidden cursor"
              alt=""
              src="https://cdn.discordapp.com/attachments/1148598201314725913/1165031028822384712/image.png?ex=65455eb2&is=6532e9b2&hm=55dbef10fdd5f352bebd8f7c20ad8f2932f574f5b24d9fbbb34650e7f255babf&"
            />
            <div className="absolute top-[-0.44rem] left-[-1.87rem] rounded-smi bg-white overflow-hidden opacity-[0.24] border-[1px] border-solid border-white" />
            <div className="absolute top-[-0.37rem] left-[35.38rem] rounded-smi bg-white w-[8.31rem] h-[2.56rem] overflow-hidden opacity-[0.24]" />
            <img
              className="absolute top-[-35.62rem] left-[39.81rem] rounded-smi w-[5.19rem] h-[1.88rem] overflow-hidden"
              alt=""
              src="https://cdn.discordapp.com/attachments/1148598201314725913/1164924367910740078/image.png?ex=6544fb5c&is=6532865c&hm=2f03cb3cf58a604bf90be597b53b6e328a78f69101b5e60463ade969025bca74&"
            />
            <div className="absolute top-[-35.25rem] left-[40.69rem] text-[0.75rem] leading-[150%] font-medium text-center">
              Follow
            </div>
            <img
              className="absolute top-[0.06rem] left-[41.75rem] w-[1.5rem] h-[1.56rem] object-cover"
              alt=""
              src="https://cdn.discordapp.com/attachments/1148598201314725913/1164923729936142427/image.png?ex=6544fac4&is=653285c4&hm=f86e812ea8903f00da0d30573c195f6aa2dadc72dc921615a0bed771028fcdd6&"
            />
            <div className="absolute w-4 left-[37rem] top-1 text-[1.1rem] font-semibold">
              Tip User
            </div>
            <div className="absolute top-[0.19rem] left-[1rem] font-medium">
              451
            </div>
            <img
              className="absolute top-[0rem] left-[3rem] w-[1.5rem] h-[1.5rem] overflow-hidden"
              alt=""
              src="https://cdn.discordapp.com/attachments/1148598201314725913/1165031229821829230/image.png?ex=65455ee2&is=6532e9e2&hm=7bb7cd449ee0ac425058f4d3caa6107d39be6bb3e0c9bc0cf0f9b6a888316937&"
            />
          </div>
          <img
            className="absolute top-[12rem] left-[76.44rem] w-[8.5rem] h-[9rem] object-cover"
            alt=""
            src="https://cdn.discordapp.com/attachments/1148598201314725913/1164923729936142427/image.png?ex=6544fac4&is=653285c4&hm=f86e812ea8903f00da0d30573c195f6aa2dadc72dc921615a0bed771028fcdd6&"
          />
          <div className="absolute top-[13.44rem] left-[4.25rem] w-[3.88rem] h-[1.06rem] text-center text-[0.75rem] text-gray-900">
            <img
              className="absolute top-[11.88rem] left-[17.69rem] rounded-8xl w-[45.31rem] h-[25.56rem] object-cover"
              alt=""
              src="https://cdn.discordapp.com/attachments/1148598201314725913/1165027282230980739/web-3.png?ex=65455b35&is=6532e635&hm=d1bfd17ca570f40fbab828d29fd06a1b674a77d041dcaa42e54e7c4b325c593a&"
            />
            <div className="absolute top-[9.31rem] left-[27.31rem] rounded-md bg-green-300 flex flex-row items-center justify-center py-[0.13rem] px-[0.63rem]">
              <div className="relative leading-[150%] font-medium">#FAQ</div>
            </div>
            <div className="absolute top-[9.31rem] left-[17.06rem] rounded-md bg-yellow-300 flex flex-row items-center justify-center py-[0.13rem] px-[0.63rem]">
              <div className="relative leading-[150%] font-medium">#India</div>
            </div>
            <div className="absolute top-[9.31rem] left-[21.69rem] rounded-md bg-red-300 flex flex-row items-center justify-center py-[0.13rem] px-[0.63rem]">
              <div className="relative leading-[150%] font-medium">
                #Opinion
              </div>
            </div>
            <img
              className="absolute h-[64.71%] w-[20.97%] top-[17.65%] right-[79.03%] bottom-[17.65%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector1.svg"
            />
            <div className="absolute top-[0rem] left-[1.38rem] text-[0.88rem] text-white text-left">{`Home `}</div>
            <div className="absolute top-[4.56rem] left-[19.25rem] text-[1rem] font-medium text-white text-left">
              ratr/451
            </div>
            <img
              className="absolute top-[3.56rem] left-[9rem] w-[1.5rem] h-[1.5rem] overflow-hidden"
              alt=""
              src="https://cdn.discordapp.com/attachments/1148598201314725913/1164923947255603210/image.png?ex=6544faf8&is=653285f8&hm=2d3d1c6d8ff2f871cbd17234a8d870364949e4b509a1fbca190f0604799e30e0&"
            />
            <img
              className="absolute top-[7.19rem] left-[9rem] w-[1.5rem] h-[1.5rem] overflow-hidden"
              alt=""
              src="https://cdn.discordapp.com/attachments/1148598201314725913/1164925612432044102/image.png?ex=6544fc85&is=65328785&hm=5602bb9452606ad885424748e39e7a6f27f66b6323c58b3eba514be56a4366b6&"
            />
          </div>
          <div className="absolute top-[17.13rem] left-[4.25rem] w-[8.88rem] h-[1.06rem]">
            <img
              className="absolute h-[35.29%] w-[9.15%] top-[35.29%] right-[90.85%] bottom-[29.41%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector2.svg"
            />
            <div className="absolute top-[0rem] left-[1.38rem]">
              Trending Creators
            </div>
          </div>
          <div className="absolute top-[20.81rem] left-[4.25rem] w-[7.5rem] h-[1.06rem]">
            <img
              className="absolute h-[47.06%] w-[8.33%] top-[29.41%] right-[91.67%] bottom-[23.53%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector3.svg"
            />
            <div className="absolute top-[0rem] left-[1.31rem]">
              Trending Posts
            </div>
          </div>
          <div className="absolute top-[33.31rem] left-[2.13rem] rounded-6xs bg-white w-[14.5rem] h-[1.75rem] overflow-hidden text-gray-900">
            <div className="absolute top-[0.31rem] left-[0.88rem]">
              Complete one upvote
            </div>
            <img
              className="absolute top-[0.44rem] left-[12.63rem] w-[0.94rem] h-[0.94rem] overflow-hidden"
              alt=""
              src="https://cdn.discordapp.com/attachments/1148598201314725913/1164925497755578378/image.png?ex=6544fc69&is=65328769&hm=604df7f8e8881c14bfcc7df4656c3c72cebb51cbf5844c7407e7043ffd9d689e&"
            />
          </div>
          <div className="absolute top-[36.5rem] left-[2.13rem] rounded-6xs bg-white w-[14.5rem] h-[1.75rem] overflow-hidden text-gray-900">
            <div className="absolute top-[0.31rem] left-[0.88rem]">
              Complete 10 comments
            </div>
            <img
              className="absolute top-[0.44rem] left-[12.56rem] w-[0.94rem] h-[0.94rem] overflow-hidden"
              alt=""
              src="https://cdn.discordapp.com/attachments/1148598201314725913/1164925497755578378/image.png?ex=6544fc69&is=65328769&hm=604df7f8e8881c14bfcc7df4656c3c72cebb51cbf5844c7407e7043ffd9d689e&"
            />
          </div>
          {!currentAccount ? (
            <div className="absolute top-[2.69rem] left-[74.94rem] rounded-48xl bg-colours-blue-gray-900 box-border w-[12.19rem] h-[3.31rem] overflow-hidden flex flex-row items-center justify-center py-[1.13rem] px-[1.44rem] gap-[0.5rem] border-[1px] border-solid border-white">
              <div
                onClick={handleConnectWallet}
                className="relative font-medium"
              >
                Connect to wallet
              </div>
              <img
                className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
                alt=""
                src="/gridiconsdropdown1.svg"
              />
            </div>
          ) : (
            <div>
              <div className="absolute top-[2.69rem] left-[71.94rem]  bg-colours-blue-gray-900 box-border w-[3.19rem] h-13  flex flex-row items-center justify-center   border-[2px] border-solid border-white rounded-full">
                <img
                  src={imgLinks[Math.floor(Math.random() * imgLinks.length)]}
                  alt=""
                  className="h-12 bg-white rounded-full "
                />
              </div>
              <div className="w-[122px] h-[55px] px-[22px] py-[15px] rounded-[67px]  border-[2px] border-white justify-center items-center gap-2.5 inline-flex relative left-[75rem] top-[1.8rem]">
                <div
                  onClick={isNewUser}
                  className="w-[55px] text-white text-base font-semibold font-['Inter']"
                >
                  Logout
                </div>
              </div>
            </div>
          )}
        </div>
        <b className="absolute top-[20.13rem] left-[21.25rem] text-[1.5rem]">
          What unpopular opinion on India will have you like this?
        </b>
      </div>
   <PostComponent/>
    </div>
  );
};

export default Home;

// import React from "react";

// function MyComponent(props) {
//   const backgroundImageUrl =
//     "https://cdn.discordapp.com/attachments/1096324843877703713/1165074562845786173/image.png?ex=6545873d&is=6533123d&hm=465d2508cb930c14fba2ad343c6eb87a79714bea443fd401c9b80b4b2bac75e4&";

//   const containerStyle = {
//     backgroundImage: `url(${backgroundImageUrl})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     minHeight: "100vh",
//   };

//   return (
//     <div style={containerStyle}>
//       <div className="bg-white flex flex-col px-5 rounded-2xl">
//         <div className="bg-neutral-900 flex flex-col items-center justify-center min-h-screen">
//           <div className="bg-white flex flex-col px-5 rounded-2xl">
//             <div className="self-stretch flex flex-col">
//               <div className="text-black text-lg font-semibold text-center mt-8 mb-5">
//                 Select your Interests
//               </div>
//               <div className="flex w-full items-start gap-2.5 mt-7 max-md:justify-center">
//                 <button className="border border-black bg-white w-[81px] max-w-full px-5 py-2 rounded-3xl text-black text-sm font-medium">
//                   Sports
//                 </button>
//                 <button className="border border-black bg-white w-24 max-w-full px-5 py-2 rounded-3xl text-black text-sm font-medium">
//                   Politics
//                 </button>
//                 <button className="border border-black bg-white w-[77px] max-w-full px-5 py-2 rounded-3xl text-black text-sm font-medium">
//                   Arts
//                 </button>
//                 <button className="border border-black bg-white w-[110px] max-w-full px-5 py-2 rounded-3xl text-black text-sm font-medium">
//                   Drama
//                 </button>
//               </div>
//               <div className="flex w-full items-start gap-3 mt-4 max-md:justify-center">
//                 <button className="border border-black bg-white w-[88px] max-w-full pl-4 pr-4 py-2 rounded-3xl text-black text-sm font-medium">
//                   Web 3.0
//                 </button>
//                 <button className="border border-black bg-white w-[118px] max-w-full px-3 py-2 rounded-3xl text-black text-sm font-medium">
//                   Entertainment
//                 </button>
//                 <button className="border border-black bg-white w-[62px] max-w-full px-4 py-2 rounded-3xl text-black text-sm font-medium">
//                   Cars
//                 </button>
//                 <button className="border border-black bg-white w-28 max-w-full px-5 py-2 rounded-3xl text-black text-sm font-medium">
//                   Business
//                 </button>
//               </div>
//               <div className="flex w-full items-start gap-2 mt-3 max-md:justify-center">
//                 <button className="border border-black bg-white w-[99px] max-w-full px-3.5 py-2 rounded-3xl text-black text-sm font-medium">
//                   Hackathon
//                 </button>
//                 <button className="border border-black bg-white w-20 max-w-full pl-4 pr-3.5 py-2 rounded-3xl text-black text-sm font-medium">
//                   Startup
//                 </button>
//                 <button className="border border-black bg-white w-[108px] max-w-full px-4 py-2 rounded-3xl text-black text-sm font-medium">
//                   Technology
//                 </button>
//                 <button className="border border-black bg-white w-[77px] max-w-full px-4 py-2 rounded-3xl text-black text-sm font-medium">
//                   Games
//                 </button>
//               </div>
//               <div className="justify-center items-center flex mt-28 max-md:mt-10">
//                 <button className="border border-black bg-red-500 self-center w-[127px] max-w-full grow flex-col px-5 py-2.5 rounded-3xl text-white text-sm font-medium">
//                   Continue
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default MyComponent;

import React from "react";

function MyComponent() {
  const backgroundImageUrl =
    "https://cdn.discordapp.com/attachments/1096324843877703713/1165074562845786173/image.png?ex=6545873d&is=6533123d&hm=465d2508cb930c14fba2ad343c6eb87a79714bea443fd401c9b80b4b2bac75e4&";

  const containerStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
  };

  return (
    <div style={containerStyle}>
      <div className="bg-none flex flex-col px-5 rounded-2xl">
        <div className="bg-none flex flex-col items-center justify-center min-h-screen">
          <div className="bg-white flex flex-col px-5 rounded-2xl">
            <div className="self-stretch flex flex-col">
              <div className="text-black text-lg font-semibold text-center mt-8 mb-5">
                Select your Interests
              </div>
              <div className="flex w-full items-start gap-2.5 mt-7 max-md:justify-center">
                <button className="border border-black bg-white w-[81px] max-w-full px-5 py-2 rounded-3xl text-black text-sm font-medium">
                  Sports
                </button>
                <button className="border border-black bg-white w-24 max-w-full px-5 py-2 rounded-3xl text-black text-sm font-medium">
                  Politics
                </button>
                <button className="border border-black bg-white w-[77px] max-w-full px-5 py-2 rounded-3xl text-black text-sm font-medium">
                  Arts
                </button>
                <button className="border border-black bg-white w-[110px] max-w-full px-5 py-2 rounded-3xl text-black text-sm font-medium">
                  Drama
                </button>
              </div>
              <div className="flex w-full items-start gap-3 mt-4 max-md:justify-center">
                <button className="border border-black bg-white w-[88px] max-w-full pl-4 pr-4 py-2 rounded-3xl text-black text-sm font-medium">
                  Web 3.0
                </button>
                <button className="border border-black bg-white w-[118px] max-w-full px-3 py-2 rounded-3xl text-black text-sm font-medium">
                  Entertainment
                </button>
                <button className="border border-black bg-white w-[62px] max-w-full px-4 py-2 rounded-3xl text-black text-sm font-medium">
                  Cars
                </button>
                <button className="border border-black bg-white w-28 max-w-full px-5 py-2 rounded-3xl text-black text-sm font-medium">
                  Business
                </button>
              </div>
              <div className="flex w-full items-start gap-2 mt-3 max-md:justify-center">
                <button className="border border-black bg-white w-[99px] max-w-full px-3.5 py-2 rounded-3xl text-black text-sm font-medium">
                  Hackathon
                </button>
                <button className="border border-black bg-white w-20 max-w-full pl-4 pr-3.5 py-2 rounded-3xl text-black text-sm font-medium">
                  Startup
                </button>
                <button className="border border-black bg-white w-[108px] max-w-full px-4 py-2 rounded-3xl text-black text-sm font-medium">
                  Technology
                </button>
                <button className="border border-black bg-white w-[77px] max-w-full px-4 py-2 rounded-3xl text-black text-sm font-medium">
                  Games
                </button>
              </div>
              <div className="justify-center items-center flex mt-28 max-md:mt-10">
                <button className="border border-black bg-red-500 self-center w-[127px] max-w-full grow flex-col px-5 py-2.5 rounded-3xl text-white text-sm font-medium">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;

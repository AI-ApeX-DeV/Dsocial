import React from "react";

function Register() {
  const backgroundImageUrl =
    "https://cdn.discordapp.com/attachments/1096324843877703713/1165074562845786173/image.png?ex=6545873d&is=6533123d&hm=465d2508cb930c14fba2ad343c6eb87a79714bea443fd401c9b80b4b2bac75e4";

  const containerStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    opacity: 10,
    backgroundColor: "white", // Set the background color to white
  };

  return (
    <div
      style={containerStyle}
      className="bg-white flex flex-col items-center justify-center min-h-screen"
    >
      <div className="bg-white p-5 rounded-2xl max-w-md text-center">
        <div className="text-black text-lg font-semibold max-w-[434px] mb-4">
          Share your details and avail 50 Socoins for free
        </div>
        <div className="bg-violet-200 w-[283px] h-[38px] mx-auto mb-4 rounded-xl relative overflow-hidden">
          <input
            type="text"
            className="w-full h-full p-2 text-black font-bold bg-transparent outline-none"
            placeholder="Full Name"
          />
        </div>
        <div className="bg-violet-200 w-[283px] h-[38px] mx-auto mb-4 rounded-xl relative overflow-hidden">
          <input
            type="email"
            className="w-full h-full p-2 text-black font-bold bg-transparent outline-none"
            placeholder="Email"
          />
        </div>
        <div className="bg-violet-200 w-[283px] h-[38px] mx-auto mb-4 rounded-xl relative overflow-hidden">
          <input
            type="tel"
            className="w-full h-full p-2 text-black font-bold bg-transparent outline-none"
            placeholder="Phone Number"
          />
        </div>
        <div className="bg-violet-200 w-[283px] h-[38px] mx-auto mb-4 rounded-xl relative overflow-hidden">
          <input
            type="number"
            className="w-full h-full p-2 text-black font-bold bg-transparent outline-none"
            placeholder="Age"
          />
        </div>
        <button className="border border-[color:var(--gray-600,#4B5563)] bg-white w-[127px] self-center px-5 py-2.5 rounded-3xl">
          <div className="text-black text-sm font-medium self-center">
            Continue
          </div>
        </button>
      </div>
    </div>
  );
}

export default Register;

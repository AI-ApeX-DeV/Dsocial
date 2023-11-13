import React, { useEffect, useState } from "react";
import { ethers,utils } from 'ethers';
import { contractABI, contractAddress } from "../utils/constants";


export const Context = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const socoinContract = new ethers.Contract(
      contractAddress,
      contractABI,
      signer
    );
    console.log("ethereum",ethereum);
    console.log(contractABI,contractAddress);
     console.log("signer",signer);
    console.log("provider",provider);
    console.log("Contract",socoinContract);
    return socoinContract;
  };


  export const SocoinProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      } else {
        setCurrentAccount("");
        console.log("No account found");
      }
      console.log("Connected account: ", currentAccount);
 
    } catch (error) {
      console.log(error);
    }
  };

  const ConnectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentAccount(accounts[0]);
      console.log("Connected account: ", currentAccount);

      const contracts = getEthereumContract();
      const userData = await contracts.user_data(currentAccount);
      console.log("userData",userData);


    } catch (error) {
      console.log(error);
      
    }
  };

  const isNewUser = async () => {
    try {
      if (!ethereum) return alert("Please install Phantom wallet");

      const contracts = getEthereumContract();
      console.log("contract",contracts);
      
      if(currentAccount==""){
        console.log("no account found");
        alert("no account found");
      }
      const iNewUser = await contracts.user_data(currentAccount);
      console.log("isNewUser",iNewUser);
      return 1;
      // console.log("minContribution",minContributionNumber);
    } catch (error) {
      console.log("error in isnewuser");
      return 0;
    }
  }

  async function createUser(username){
    try {
      if (!ethereum) return alert("Please install Phantom wallet");

      const contracts = getEthereumContract();
      const createdUser = await contracts.createUser(username,1);
      console.log("createdUser",createdUser);
      // console.log("minContribution",minContributionNumber);
      alert("created");
    } catch (error) {
      console.log(error);
      console.log("error in create user");
    }
  }

  async function userPost(){
    try {
      if (!ethereum) return alert("Please install Phantom wallet");

      const contracts = getEthereumContract();
      // const userPost = await contracts.userPost(utils.getAddress(currentAccount,1));
      // console.log("userPost",userPost);
      // console.log("minContribution",minContributionNumber);
    } catch (error) {
      console.log(error);
    }
  }



  async function  createPost(_img,_postId,_description,_hashtag){
    try {
      if (!ethereum) return alert("Please install Phantom wallet");

      const contracts = getEthereumContract();
      const createdPost = await contracts.createPost(_img,_postId,_description,_hashtag);
      console.log("createdPost",createdPost);
      // console.log("minContribution",minContributionNumber);
    } catch (error) {
      console.log(error);
    }
  }

 async function likePost (_postId){
    try {
      if (!ethereum) return alert("Please install Phantom wallet");

      const contracts = getEthereumContract();
      const likedPost = await contracts.like(_postId);
      console.log("likedPost",likedPost);
      alert("liked");
      // console.log("minContribution",minContributionNumber);
    } catch (error) {
      console.log(error);
    }
  }


  async function getUserData(addr){
    try {
      if (!ethereum) return alert("Please install Phantom wallet");

      const contracts = getEthereumContract();
      let userData;
      if(currentAccount){  
         userData = await contracts.user_data(utils.getAddress(addr));
        
        console.log("userData",Number(userData.token));
      return userData;
      }
    
      // console.log("minContribution",minContributionNumber);
    } catch (error) {
      console.log(error);
    }
  }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // await ConnectWallet();
      
      


     
  //     } catch (error) {
  //       console.error("Error in fetchData:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  return (
    <Context.Provider
      value={{
        checkIfWalletIsConnected,
        ConnectWallet,
        currentAccount,
        isNewUser,
        createUser,
        createPost,
        likePost,
        getUserData,
        userPost
      }}
    >
      {children}
    </Context.Provider>
  );

    };
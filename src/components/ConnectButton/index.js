import React from 'react'
import {Button, Tag} from 'degen'
import {ethers} from 'ethers'
import { truncateAddress } from "../../utils/shortAddy";
import {HStack} from "@chakra-ui/react"


const ConnectButton = ({loginState, setLoginState, address, setAddress,signature, setSignature, provider, setProvider}) => {
    const loginMetaMask = async () => {
        //check if use has wallet
        setLoginState("Connecting to wallet...")
        //check if eth wallet is in browser
        if(!window.ethereum) {
          setLoginState("Bruh... You dont have Metamask -_- Please Install Metamask!")
          //stop execution of login function
          return;
        }
  
        //request current loggedin user in Metamask with ethers
        //provider is just metamask configuration 
        //(shows in window.ethereum object)
  
        //intialize provider
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(provider)
  
        //request accounts of current user
        await provider.send("eth_requestAccounts", []);
  
        //get signer with provider
        const signer = provider.getSigner();
  
        //get wallet address with signer
        const walletAddr = await signer.getAddress();
        setAddress(walletAddr)
  
        //send signature to backend and check whether the user actually signed the right message
        //proof that this user is the real user
        //has to be random string so they dont use replay attack
  
        const signature = await signer.signMessage("What's goood?")
        console.log("sig: ", signature)
        setSignature(signature)
        if (signature) {
          setLoginState("Connected")
          console.log("Connected to Metamask")
        }
  
  
      }
  
      const disconnect = async () => {
        setAddress(null)
        setSignature(null)
        setLoginState(null)
        //await provider.send("disconnect", []);
        setProvider(null)
        console.log("Disconected from Metamask")
      }
    return (
        <div>
            <HStack>
            <div>
                { loginState == "Connecting to wallet..." ? <Tag>{loginState}</Tag> : <Tag tone="green">{loginState}</Tag> }
            </div>

            <div>
                { signature ? <Tag tone="blue"> {address ? truncateAddress(address): ""} </Tag> : "" }
            </div>

            <div>
                { loginState == null ? ( 
                    
                <Button onClick={loginMetaMask}>Connect to Metamask</Button>

                ) : (

                <Button onClick={disconnect}>Disconnect</Button>
                
                )
                }
            </div>
            </HStack>
        </div>
    )
}

export default ConnectButton

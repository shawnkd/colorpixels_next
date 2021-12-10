import 'tailwindcss/tailwind.css'
import {Button} from "degen"
import { Input } from 'degen'
import Image from "next/image"
import ConnectButton from "../ConnectButton"
import {ethers} from 'ethers'
import { HStack, Box } from '@chakra-ui/react'



export default function Header({loginState, setLoginState, address, setAddress,signature, setSignature, provider, setProvider}) {
    return(
        <div className="m-5">
            {/* <div>
                <h1>ColorPixels</h1>
            </div> */}
            
            <div className="m-10">
                <Image src="/colorpixelslogo.png" alt="logo" width="245" height="24"/>
            </div>
            

            <div className="mr-80 mt-6 absolute top-0 right-0 h-64 w-64 ...">
            <HStack>
            <Box>
                {loginState === "Connected" ? <Button>Mint</Button>: null}
            </Box>
            <Box>
                <ConnectButton loginState={loginState} setLoginState={setLoginState} address={address} setAddress={setAddress} signature={signature} setSignature={setSignature} provider={provider} setProvider={setProvider} />
            </Box>
            </HStack>

            </div>
        </div>
    )
}

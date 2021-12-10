import 'tailwindcss/tailwind.css'
import {Button, IconUsersSolid} from "degen"
import { Input } from 'degen'
import Image from "next/image"
import { Card } from 'degen'
import { Stack, HStack, VStack } from '@chakra-ui/react'




export default function Feed() {
    let posts =[1,2,3,4,5]
    return(
        <div className="ml-20 relative h-32 w-32 ...">
        <VStack className="absolute left-0 top-0 h-16 w-16 ..." spacing="40">
            <Card padding="6" w="40px">
                <h1 className="w-50">Post</h1>
                <Button>Buy</Button>
            </Card>
            
            <Card padding="6">
                <h1>Post</h1>
                <Button>Buy</Button>
            </Card>
            <Card padding="6">
                <h1>Post</h1>
                <Button>Buy</Button>
            </Card>
            <Card padding="6">
                <h1>Post</h1>
                <Button>Buy</Button>
            </Card>
            <Card padding="6">
                <h1>Post</h1>
                <Button>Buy</Button>
            </Card>
            </VStack>
            
        </div>
    )
}
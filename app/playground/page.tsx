'use client'
import { auth } from '@/app/lib/firebase/firebaseConfig'
import { signOut } from 'firebase/auth'
import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import LogoutButton from '../components/logoutButton/logoutButton'
import { Box, Center, Image, Button } from '@chakra-ui/react'

const Playground = () => {
    const router = useRouter()
    const audioRef: any = useRef(null)
    const [changeView, setChangeView] = useState<boolean>(false)

    const handleLogout = async () => {
        await signOut(auth)
        router.push('/')
    }


    const handlePlay = () => {
        audioRef.current.play();
        setChangeView(true)
    }

    // useEffect(() => {
    //     const audio = audioRef.current;
    //     if (audio) {
    //         audio.play()
    //     }
    // }, []);

    return (
        <>
            {!changeView ? (
                <>
                    <Center h="100vh" w="100vw" position="relative" overflow="hidden">
                        <Box
                            position="absolute"
                            top="0"
                            left="0"
                            right="0"
                            bottom="0"
                            zIndex="-2"
                        // background="linear-gradient(red, red)"
                        />
                        <Button onClick={() => handlePlay()}>Click me?</Button>
                        {/* <Box className="flames" zIndex="0" /> */}
                        {/* <LogoutButton onLogout={handleLogout} /> */}
                    </Center>


                </>
            ) : (
                <>
                    <Center h="100vh" w="100vw" position="relative" overflow="hidden" >
                        <Box
                            position="absolute"
                            top="0"
                            left="0"
                            right="0"
                            bottom="0"
                            zIndex="-2"
                            background="linear-gradient(black, red)"
                        />
                        <Image
                            src="/dark-image.jpg"
                            alt="Dark Image"
                            maxH="92vh"
                            maxW="90vw"
                            w="800px"
                            zIndex="-1"
                        />
                        <Box className="flames" zIndex="0" />
                    </Center>
                    {/* <LogoutButton onLogout={handleLogout} /> */}
                    <Box position="absolute" top={0} zIndex={10}>
                        <Button onClick={handleLogout} >Take me back!</Button>
                    </Box>
                </>
            )}
            <Box className='index-4 opacity-0 absolute top-1'>
                <audio ref={audioRef} src="/audio/dark-music2.mp3" controls={true} />

            </Box>
        </>
    )
}

export default Playground
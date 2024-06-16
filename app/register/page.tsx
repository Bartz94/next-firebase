'use client'

import { Box, Button, Input, Link, Text, VStack, Heading, Spinner } from '@chakra-ui/react';
import { auth } from '../lib/firebase/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useRef, useState } from 'react';
import { useToast } from '@chakra-ui/react'
import { errorToastConfig, loadingToastConfig, successToastConfig } from '../lib/chakra/toastUtils';

export default function Register() {
    const toast = useToast()
    const toastIdRef: any = useRef()
    const [emailInput, setEmailInput] = useState<string | ''>('')
    const [passwordInput, setPasswordInput] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const [isRegistrationCompleted, setIsRegistrationCompleted] = useState<boolean>(false)

    const onRegister = () => {
        toastIdRef.current = toast(loadingToastConfig('Creating account...', ''))

        setLoading(true)

        createUserWithEmailAndPassword(auth, emailInput, passwordInput)
            .then((userCredential) => {
                const user = userCredential.user
                setLoading(false)
                setEmailInput('')
                setPasswordInput('')
                toast.update(toastIdRef.current, successToastConfig('Account created', 'You have successfully created an account'))
                setIsRegistrationCompleted(true)
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                console.log(errorCode, errorMessage)
                setLoading(false)
                toast.update(toastIdRef.current, errorToastConfig(`Can't create an account`, errorMessage))

            })
    }

    return (
        <>
            {isRegistrationCompleted ? (
                <Box
                    display="flex"
                    flexDirection={'column'}
                    gap={4}
                    alignItems="center"
                    justifyContent="center"
                    minHeight="100vh"
                >
                    <Box position="relative" bg="white" p={6} rounded="md" shadow="md" width="90%" maxWidth="md">
                        <Box
                            position="absolute"
                            top="-1.5rem"
                            left="50%"
                            transform="translateX(-50%)"
                            bg="white"
                            px={4}
                            py={1}
                            borderRadius="md"
                            boxShadow="md"
                        >
                            <Heading as="h2" size="lg">
                                Register
                            </Heading>
                        </Box>
                        <VStack spacing={4} align="stretch" mt={8}>
                            <Text className='text-center'>Registration is completed and your are already logged in. {` `}
                                <Link href="/playground" color="purple.500">Take me to the playground</Link>.
                            </Text>
                        </VStack>
                    </Box>
                    <Link href='/'>
                        <Button colorScheme='purple' variant='solid'>Go back</Button>
                    </Link>
                </Box>
            ) : (
                <Box
                    display="flex"
                    flexDirection={'column'}
                    gap={4}
                    alignItems="center"
                    justifyContent="center"
                    minHeight="100vh"
                >
                    <Box position="relative" bg="white" p={6} rounded="md" shadow="md" width="90%" maxWidth="md">
                        <Box
                            position="absolute"
                            top="-1.5rem"
                            left="50%"
                            transform="translateX(-50%)"
                            bg="white"
                            px={4}
                            py={1}
                            borderRadius="md"
                            boxShadow="md"
                        >
                            <Heading as="h2" size="lg">
                                Register
                            </Heading>
                        </Box>
                        <VStack spacing={4} align="stretch" mt={8}>
                            <Input value={emailInput} onChange={(e) => setEmailInput(e.target.value)} placeholder="Email" type="email" />
                            <Input value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} placeholder="Password" type="password" />
                            {loading ? (
                                <Box className='flex justify-center' w='100%'>
                                    <Spinner color='purple' />
                                </Box>
                            ) : (
                                <Button onClick={() => onRegister()} colorScheme="purple" size="md" width="100%">
                                    Register
                                </Button>
                            )}
                            <Box borderBottom="1px" borderColor="gray.200" my={4} />
                            <Text textAlign="center">
                                Got an account?{' '}
                                <Link href="/playground" color="purple.500">Log in here</Link>
                            </Text>
                        </VStack>
                    </Box>
                    <Link href='/'>
                        <Button colorScheme='purple' variant='solid'>Go back</Button>
                    </Link>
                </Box>
            )}
        </>
    );
}

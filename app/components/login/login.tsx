'use client'
import { Box, Button, Input, Link, Text, VStack, Heading, useToast, Spinner } from '@chakra-ui/react';
import { auth } from '../../lib/firebase/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRef, useState } from 'react';
import { errorToastConfig, loadingToastConfig, successToastConfig } from '@/app/lib/chakra/toastUtils';

export default function Login() {
    const toast = useToast()
    const toastIdRef: any = useRef()
    const [emailInput, setEmailInput] = useState<string | ''>('')
    const [passwordInput, setPasswordInput] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)

    const onLogin = () => {
        toastIdRef.current = toast(loadingToastConfig('Login...', ''))
        setLoading(true)

        signInWithEmailAndPassword(auth, emailInput, passwordInput)
            .then((userCredential) => {
                setLoading(false)
                setEmailInput('')
                setPasswordInput('')
                toast.update(toastIdRef.current, successToastConfig('Success', 'You have successfully log in'))
            })
            .catch((error) => {
                console.log(error)
                const errorCode = error.code
                const errorMessage = error.message
                console.log(errorCode, errorMessage)
                setLoading(false)
                toast.update(toastIdRef.current, errorToastConfig(`Error`, ` ${errorMessage}`))
            })
    }

    return (
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
                        Log In
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
                        <Button onClick={() => onLogin()} colorScheme="purple" size="md" width="100%">
                            Log In
                        </Button>
                    )}
                    <Box borderBottom="1px" borderColor="gray.200" my={4} />
                    <Text textAlign="center">
                        Don&apos;t have an account yet?{' '}
                        <Link href="/register" color="purple.500">Register here</Link>
                    </Text>
                </VStack>
            </Box>
            <Link href='/'>
                <Button colorScheme='purple' variant='solid'>Go back</Button>
            </Link>
        </Box>
    );
}

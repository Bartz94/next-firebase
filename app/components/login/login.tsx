'use client'
import { Box, Button, Input, Link, Text, VStack, Heading } from '@chakra-ui/react';
import { auth } from '../../lib/firebase/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';

export default function Login() {
    const [emailInput, setEmailInput] = useState<string | ''>('');
    const [passwordInput, setPasswordInput] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const onLogin = () => {

        setLoading(true);

        signInWithEmailAndPassword(auth, emailInput, passwordInput)
            .then((userCredential) => {
                setLoading(false);
                setEmailInput('')
                setPasswordInput('')
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
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
                    <Button onClick={() => onLogin()} colorScheme="purple" size="md" width="100%">
                        Log In
                    </Button>
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

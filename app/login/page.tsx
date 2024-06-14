// pages/login.js
import { Box, Button, Input, Link, Text, VStack, Heading } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function Login() {
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
                        Sign In
                    </Heading>
                </Box>
                <VStack spacing={4} align="stretch" mt={8}>
                    <Input placeholder="Email" type="email" />
                    <Input placeholder="Password" type="password" />
                    <Button colorScheme="purple" size="md" width="100%">
                        Sign In
                    </Button>
                    <Box borderBottom="1px" borderColor="gray.200" my={4} />
                    <Text textAlign="center">
                        Don&apos;t have an account yet?{' '}
                        <NextLink href="/register" passHref>
                            <Link color="purple.500">Sign up here</Link>
                        </NextLink>
                    </Text>
                </VStack>
            </Box>
            <Link href='/'>
                <Button colorScheme='purple' variant='solid'>Go back</Button>
            </Link>
        </Box>
    );
}

'use client'
import React from 'react'
import {
    Box,
    Image,
    Text,
    Badge,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
} from '@chakra-ui/react'
import pokemonTypeColors from '../utils/pokemonColors'
import { Tilt } from 'react-tilt'

interface PokemonCardProps {
    name: string
    imageUrl: string
    types: string[]
    hp: string
    attack: string
    defense: string
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, imageUrl, types, hp, attack, defense }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const primaryType = types[0]
    const bgColor = pokemonTypeColors[primaryType] || 'gray.200'

    return (
        <>
            {isOpen && (
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Modal Title</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Text> Save this pokemon?</Text>
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={onClose}>
                                Close
                            </Button>
                            <Button variant='ghost'>Add to my team</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            )}
            <Tilt className="tilt" options={{
                reverse: false,  // reverse the tilt direction
                max: 100,     // max tilt rotation (degrees)
                perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
                scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
                speed: 1000,   // Speed of the enter/exit transition
                transition: true,   // Set a transition on enter/exit.
                axis: null,   // What axis should be disabled. Can be X or Y.
                reset: true,    // If the tilt effect has to be reset on exit.
                easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
            }}>
                <Box
                    borderWidth="10px"
                    borderColor="#F3CE3E"
                    borderRadius="lg"
                    overflow="hidden"
                    p={4}
                    textAlign="center"
                    bg={`linear-gradient(to bottom, ${pokemonTypeColors[primaryType]}, #F2F2F2)`}
                    color="black"
                    maxW="xs"
                    cursor="pointer"
                    className="hover:shadow-pokemon-card transition duration-300 ease-in-out"
                >
                    <Box >
                        <Text fontSize="2xl" fontWeight="bold">
                            {name.charAt(0).toUpperCase() + name.slice(1)}
                        </Text>
                        <Box onClick={onOpen} className='transition duration-300 ease-in-out border-3 border-[#F3CE3E]'>
                            <Image src={imageUrl} alt={name} boxSize="200px" objectFit="cover" mx='auto' />
                        </Box>
                        <Badge

                            bg={bgColor}
                            border="1px solid white"
                            color="white"
                            borderRadius="full"
                            px={2}
                            py={1}
                        >
                            {types[0]}
                        </Badge>
                    </Box>

                    <Text fontWeight="medium" fontSize="lg" color="green">
                        {hp}  HP
                    </Text>
                    <Text fontWeight="medium" fontSize="lg" color="red">
                        {attack} ATTACK
                    </Text>
                    <Text fontWeight="medium" fontSize="lg" color="orange">
                        {defense} DEFENSE
                    </Text>

                </Box>
            </Tilt>
        </>
    );
};

export default PokemonCard;

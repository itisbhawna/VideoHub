import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerHeader, DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
    HStack,
    Center
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft, BiOutline } from 'react-icons/bi';

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Button
                pos={"fixed"}
                top={"4"}
                left={"4"}
                colorScheme='purple'
                p={"0"}
                w={"10"}
                h={"10"}
                zIndex={'overlay'}
                borderRadius={"full"}
                onClick={onOpen}
            >
                <BiMenuAltLeft size={'20'} />
            </Button>
            <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader textAlign={"center"} textColor={'purple'}>VIDEO HUB</DrawerHeader>
                    <DrawerBody>
                        <VStack>
                            <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                                <Link to={"/"}>Home</Link>
                            </Button>
                            <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                                <Link to={"/videos"}>Videos</Link>
                            </Button>
                            <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                                <Link to={"/videos?category=free"}>Free Videos</Link>
                            </Button>
                            <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                                <Link to={"/upload"}>Upload Videos</Link>
                            </Button>
                        </VStack>
                        <HStack pl={"10"} mt={"400"}>
                            <Button onClick={onClose} colorScheme={'purple'}>
                                <Link to={"/login"}>Log In</Link>
                            </Button>
                            <Button onClick={onClose} variant={'outline'} colorScheme={'purple'}>
                                <Link to={"/signup"}>Sign Up</Link>
                            </Button>
                        </HStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Header

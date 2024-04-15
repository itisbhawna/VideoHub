import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
    pos: "absolute",
    left: "35%",
    top: "50%",
    transfom: "translate(-50%, -50%)",
    textTransform: "uppercase",
    p: "2",
    size: "2xl",
}

const Home = () => {
    return (
        <Box>
            <MyCarousel />
            <Container minH={'100vh'} maxW={'container.xl'} p={'16'}>
                <Heading
                    textTransform={"uppercase"}
                    m={"auto"}
                    py={"2"}
                    w={"fit-content"}
                    borderBottom={"2px solid"}
                >
                    Services
                </Heading>
                <Stack
                    h={'full'}
                    p={'4'}
                    alignItems={'center'}
                    direction={['column', 'row']}
                >
                    <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />

                    <Text letterSpacing={"widest"} lineHeight={'190%'} p={['4', '16']} textAlign={'center'}>
                        ONE VIDEO WITH 5 PROJECTS Hello everyone, my name is Bhawna, the only programmer in the world with technology and you are watching React JS Tutorial. Intro To Video 02:18 Projects Demo 06:57 What & Why is React? 10:48 Installation & Folder Structure 18:40 React Basics 33:58 Module & Props 53:54 Routing in React 01:07:34 Project - 1 02:31:20 Project - 2 Chakra UI 04:01:30 React Basic Hooks 04:39:24 React Project - 3 Crypto App 06:39:55 Redux & Redux Toolkit Tutorial 07:06:19 Project - 4 React Cart 08:22:11 Project - 5  In 2023, it is the most practical web development course on YouTube. We will understand each concept theoretically as well as practically. After understanding the concepts, we will create projects and do fun challenges. So make sure to subscribe to my channel, So you can't miss any updates. Web Development Playlist
                    </Text>
                </Stack>
            </Container>
        </Box>
    )
}

const MyCarousel = () => (
    <Carousel
        autoPlay
        infiniteLoop
        interval={1000}
        showStatus={false}
        showArrows={false}
        showThumbs={false}
    >
        <Box w="full" h={'100vh'}>
            <Image src={img1} />
            <Heading
                bgColor={'blackAlpha.600'}
                color={'white'}
                {...headingOptions}
            >
                Watch Your Future
            </Heading>
        </Box>
        <Box w="full" h={'100vh'}>
            <Image src={img2} />
            <Heading
                bgColor={'whiteAlpha.900'}
                color={'black'}
                {...headingOptions}
            >
                Coming Future is Gaming
            </Heading>
        </Box>
        <Box w="full" h={'100vh'}>
            <Image src={img3} />
            <Heading
                bgColor={'whiteAlpha.600'}
                color={'black'}
                {...headingOptions}
            >
                Gaming on Console
            </Heading>
        </Box>
        <Box w="full" h={'100vh'}>
            <Image src={img4} />
            <Heading
                bgColor={'blackAlpha.600'}
                color={'white'}
                {...headingOptions}
            >
                Night Life is cool
            </Heading>
        </Box>
    </Carousel>
)

export default Home
import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from 'next/link';

import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


SwiperCore.use([Navigation, Pagination, Autoplay]);


interface SlidesProps {
    id: string;
    name: string;
    description: string;
    slideImage: string;
}

interface SlideProps {
    slides: SlidesProps[];
}

export default function Slider({ slides }: SlideProps){
    return (
        <Flex w="100%" h={["250px","450px"]} maxW={1240} mx="auto" mb="10">
            <Swiper slidesPerView={1} navigation pagination={{ clickable: true }} autoplay={{delay:3000}} style={{width: '100%', flex: '1'}}>
                {slides.map(slide => (
                    <SwiperSlide key={slide.id}>
                        <Flex
                            w="100%"
                            h={["250px","450px"]}
                            align="center"
                            justify="center"
                            direction="column"
                            bgImage={`url('${slide.slideImage}')`}
                            bgPosition="100%"
                            bgRepeat="no-repeat"
                            bgSize="cover"
                            textAlign="center"                
                        >
                            <Link href={`/continent/${slide.id}`} passHref>
                                <a>
                                    <Heading color="white" fontSize={["4xl","5xl"]} fontWeight="700" lineHeight="72px">{slide.name}</Heading>
                                    <Text color="white" fontSize={["xl","2xl"]} fontWeight="700" lineHeight="36px">{slide.description}</Text>
                                </a>
                            </Link>
                        </Flex>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Flex>
    );
}
import { Box, Flex, Heading, Icon, Image, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Text } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Fragment } from 'react';
import { RiInformationLine } from 'react-icons/ri';

import { Header } from  '../../components/Header';

import api from '../../services/api';

interface CountriesData {
    id: number;
    name: string;
    flag: string;
    capital: string;
    image: string;
}

interface ContinentData {
    slug: string;
    name: string;
    text: string;
    totalCountries: number;
    languages: number;
    cities: number;
    banner: string;
    countries: CountriesData[];
}
  
interface ContinentProps {
    continent: ContinentData;
}

export default function Continent({ continent }: ContinentProps) {
    return (
        <>
            <Header back />
            
            <Flex 
                w="100%"
                h={["150px","500px"]}
                px="36"
                pb="14"
                bgImage={`url(${continent.banner})`}
                bgPosition="center"
                bgRepeat="no-repeat"
                bgSize="cover"
                align="flex-end"
                justify={["center","left"]}
            >
                <Heading color="white" fontSize="4xl" fontWeight="600" textAlign={["center","left"]}>{continent.name}</Heading>
            </Flex>


            <Flex direction={["column","row"]} maxW={["343","1160"]} mt={["8", "20"]} gridGap={["6","10"]} justify="space-between" align="center" mx="auto">
                <Text color="text" fontSize={["sm","2xl"]} lineHeight="36px" fontWeight="400" textAlign="justify">
                    {continent.text}
                </Text>
                <Flex direction="row" gridGap={["0","5"]} textAlign={["left","center"]}>
                    <Box w={["28","40"]}>
                        <Heading color="highlight" fontWeight="600" fontSize={["3xl","5xl"]}>{continent.totalCountries}</Heading>
                        <Text color="text" fontWeight="600" fontSize={["sm","xl"]}>países</Text>
                    </Box>
                    <Box w={["28","40"]}>
                        <Heading color="highlight" fontWeight="600" fontSize={["3xl","5xl"]}>{continent.languages}</Heading>
                        <Text color="text" fontWeight="600" fontSize={["sm","xl"]}>línguas</Text>
                    </Box>
                    <Box w={["28","40"]}>
                        <Heading color="highlight" fontWeight="600" fontSize={["3xl","5xl"]}>{continent.cities}</Heading>
                        <Text color="text" fontWeight="600" fontSize={["sm","xl"]}>
                            cidades +100
                            <Popover>
                                <PopoverTrigger>
                                <span>
                                    <Icon cursor="pointer" as={RiInformationLine} ml="1" color="text" w={["10px","16px"]} h={["10px","16px"]}/>
                                </span>
                                </PopoverTrigger>
                                <PopoverContent color="highlight">
                                    <PopoverArrow />
                                    <PopoverCloseButton />
                                    <PopoverBody fontWeight="400" fontSize="lg" color="text">
                                        {continent.countries.map(countries => (
                                            <Fragment key={countries.name}>
                                                <span>{countries.name}<br /> </span>
                                            </Fragment>
                                        ))}
                                    </PopoverBody>
                                </PopoverContent>
                            </Popover>
                        </Text>
                    </Box>
                </Flex>
            </Flex>
            <Box maxW={["343","1160"]} mx="auto" my={["8", "20"]}>
                <Heading color="text" fontWeight="500" fontSize={["2xl","4xl"]} mb="10">Cidades +100</Heading>
            </Box>
            <Flex maxW={["343","1160"]} direction="row" flexWrap="wrap" mb="20" mx="auto" gridGap="10">
                {continent.countries && continent.countries.map(country => (
                    <Box w={["100%","64"]} key={country.name}>
                        <Image src={country.image} alt={country.name} w="100%" h="40" objectFit="cover" />
                        <Flex align="center" justify="space-between" bg="white" border="1px" px="6" py="5" borderColor="highlight" borderTop="0">
                            <Box>
                                <Heading fontSize="xl" fontWeight="500">{country.capital}</Heading>
                                <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">{country.name}</Text>
                            </Box>
                            <Image src={country.flag} w="30px" h="30px" borderRadius="50%" objectFit="cover" alt={country.capital} />
                        </Flex>
                    </Box>
                ))}     
            </Flex>
        </>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
      paths: [],
      fallback: 'blocking',
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { slug } = context.params;
  
    const response = await api.get(`/continents/${slug}`);
  
    const continent = response.data;
  
    return {
      props: {
        continent,
      },
      revalidate: 1,
    }
}
  
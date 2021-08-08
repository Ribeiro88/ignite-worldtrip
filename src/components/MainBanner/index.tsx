import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

export function MainBanner(){
    return (
        <Box bgImage="/background.jpg" bgRepeat="no-repeat" bgSize="cover" w="100%" h={["163","335"]}>
            <Flex justify="space-between" align="center" px={["4","140"]} py="5">
                <Box>
                    <Heading color="white" fontWeight="500" fontSize={["xl","4xl"]} lineHeight={["30px","54px"]} mb={["2","5"]}>5 Continentes,<br /> infinitas possibilidades.</Heading>
                    <Text color="subtext" fontWeight="400" fontSize={["sm","xl"]} lineHeight={["21px","30px"]} maxW={524}>Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
                </Box>
                <Box position="relative" top="66">
                    <Image display={["none","block"]} src="/airplane.svg" alt="Avião amarelo." />
                </Box>
            </Flex>
        </Box>
    );
}
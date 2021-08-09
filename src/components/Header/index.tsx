import { Flex, Image, Icon } from '@chakra-ui/react';
import Link from 'next/link';
import { RiArrowLeftSLine } from 'react-icons/ri';

interface BackProps {
    back?: boolean;
}

export function Header({ back }: BackProps){


    return (
        
        <Flex as="header" w="100%" h="100" px={["4","36"]} align="center" justify={back ? "space-between" : "center"} bg="header">
            {back && (
                <Link href="/">
                    <a>
                        <Icon as={RiArrowLeftSLine} fontSize={[20,40]} justifySelf="start"/>
                    </a>
                </Link>
            )}
            <Image src="/logo.svg" alt="logo" w={["81px","184px"]} mx="auto" />
        </Flex>
        
        
      
    );
}
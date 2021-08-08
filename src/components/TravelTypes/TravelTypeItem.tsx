import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface TravelItemProps {
    icon: string;
    name: string;

}

export default function TravelTypeItem({ icon, name }: TravelItemProps){
    const hideMobile = useBreakpointValue({
        base:false,
        sm:true
    });

    return (
        <Flex direction={["row","column"]} flexWrap={["wrap","nowrap"]} w={["50%","100%"]} _last={{ width: '100%'}} align="center" justify="center">
            {hideMobile ? <Image src={`/icons/${icon}.svg`} w="85" h="85" mb="6" alt={name} /> : <Text color="highlight" fontSize="4xl" mr="2">•</Text>}
            <Text color="text" fontWeight="600" fontSize="xl" lineHeight="36px">{name}</Text>
        </Flex>
    );
}
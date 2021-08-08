import { Flex } from '@chakra-ui/react';
import TravelTypeItem from './TravelTypeItem';

export function TravelTypes(){
    return (
        <Flex direction="row" flexWrap={["wrap","nowrap"]} align="center" justify="space-between" maxW={["100%","1160"]} py={["9","20"]} gridGap={["0","10"]} mx="auto">
            <TravelTypeItem icon="cocktail" name="vida noturna" />
            <TravelTypeItem icon="surf" name="praia" />
            <TravelTypeItem icon="building" name="moderno" />
            <TravelTypeItem icon="museum" name="clássico" />
            <TravelTypeItem icon="earth" name="e mais..." />
        </Flex>
    );
}
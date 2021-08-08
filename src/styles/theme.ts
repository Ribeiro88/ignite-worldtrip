import { extendTheme, Theme } from '@chakra-ui/react';

export const theme = extendTheme<Theme>({
    colors: {
        "header": "#FFFFFF",
        "white": "#F5F8FA",
        "text": "#47585B",
        "subtext": "#DADADA",
        "highlight": "#FFBA08",
        
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins',
        cards: 'Barlow'
    },
    styles: {
        global: {
            body: {
                backgroundColor: 'white',
                color: 'text'
            }
        }
    }
});
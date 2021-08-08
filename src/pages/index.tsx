import { Divider, Heading } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { MainBanner } from "../components/MainBanner";
import Slider from "../components/Slider";
import { TravelTypes } from "../components/TravelTypes";

const slides = [
  {
      "link": '',
      "name": 'Europa',
      "info": 'O continente mais antigo.',
      "image": "slide1"
  },
  {
    "link": '',
    "name": 'Oceania',
    "info": 'O continente mais antigo.',
    "image": "slide1"
  }
];

export default function Home() {
  return (
    <>
      <Header />
      <MainBanner />

      <TravelTypes />

      <Divider borderWidth="1px" borderColor="text" w="90px" mx="auto" />

      <Heading textAlign="center" fontWeight="500" fontSize={["xl","4xl"]} lineHeight={["30px", "54px"]} color="text" my={["5","12"]}>Vamos nessa?<br /> Então escolha seu continente</Heading>

      <Slider slides={slides} />
    </>
  )
}

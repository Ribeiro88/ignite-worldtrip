import { Divider, Heading } from "@chakra-ui/react";
import { GetStaticProps } from "next";

import { Header } from "../components/Header";
import { MainBanner } from "../components/MainBanner";
import Slider from "../components/Slider";
import { TravelTypes } from "../components/TravelTypes";
import api from "../services/api";

interface ContinentsData {
  id: string;
  name: string;
  description: string;
  slideImage: string;
}

interface HomeProps {
  continents: ContinentsData[];
}

export default function Home({ continents }: HomeProps) {
  return (
    <>
      <Header />
      <MainBanner />

      <TravelTypes />

      <Divider borderWidth="1px" borderColor="text" w="90px" mx="auto" />

      <Heading textAlign="center" fontWeight="500" fontSize={["xl","4xl"]} lineHeight={["30px", "54px"]} color="text" my={["5","12"]}>Vamos nessa?<br /> Então escolha seu continente</Heading>

      <Slider slides={continents}/>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const response = await api.get('/continents');

  const continents = response.data;
  
  return {
    props: {
      continents
    }
  }

}

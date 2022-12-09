import React, { useState } from "react";
import {
  Text,
  Box,
  Flex,
  HStack,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import JoinWaitList from "../modals/joinWaitList";

export default function Slider() {
   const { isOpen, onOpen, onClose } = useDisclosure();
   const [value, setValue] = useState <any>("")
  

  const slides = [
    {
      heading: "$25,000",
      evo: "Evaluation Target",
      evo_amnt: "$2,000",
      verify: "Verification Target",
      veri_amnt: "$1,000",
      dropdown: "Max. Drawdown",
      dropdown_amnt: "$2,500",
      profit: "Profit Share",
      profit_amnt: "75/25",
      trading: "Min. Trading Days*",
      trading_value: "10 Days",
      profit_days: "Min. Profit Days*",
      profit_value: "5 Days",
      old_price: "$220",
      price: "$170",
    },
    {
      heading: "$50,000",
      evo: "Evaluation Target",
      evo_amnt: "$4,000",
      verify: "Verification Target",
      veri_amnt: "$2,000",
      dropdown: "Max. Drawdown",
      dropdown_amnt: "$5,000",
      profit: "Profit Share",
      profit_amnt: "75/25",
      trading: "Min. Trading Days*",
      trading_value: "10 Days",
      profit_days: "Min. Profit Days*",
      profit_value: "5 Days",
      old_price: "$350",
      price: "$270",
    },
    {
      heading: "$100,000",
      evo: "Evaluation Target",
      evo_amnt: "$8,000",
      verify: "Verification Target",
      veri_amnt: "$4,000",
      dropdown: "Max. Drawdown",
      dropdown_amnt: "$10,000",
      profit: "Profit Share",
      profit_amnt: "75/25",
      trading: "Min. Trading Days*",
      trading_value: "10 Days",
      profit_days: "Min. Profit Days*",
      profit_value: "5 Days",
      old_price: "$650",
      price: "$470",
    },
    {
      heading: "$200,000",
      evo: "Evaluation Target",
      evo_amnt: "$16,000",
      verify: "Verification Target",
      veri_amnt: "$8,000",
      dropdown: "Max. Drawdown",
      dropdown_amnt: "$20,000",
      profit: "Profit Share",
      profit_amnt: "75/25",
      trading: "Min. Trading Days*",
      trading_value: "10 Days",
      profit_days: "Min. Profit Days*",
      profit_value: "5 Days",
      old_price: "$1000",
      price: "$850",
    },
  ];
 
  
 

  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };
  // const setSlide = (slide:any) => {
  //   setCurrentSlide(slide);
  // };
  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };

  return (
    <>
      <JoinWaitList isOpen={isOpen} onClose={onClose} value={value} />
      <Flex
        id="accountSelect"
        bg="brand.primary"
        p={10}
        alignItems="center"
        justifyContent="center"
        mt={7}
      >
        <Flex w="full" pos="relative" overflow="hidden">
          <Flex h="525px" w="full" {...carouselStyle}>
            {slides.map((slide, sid) => (
              <Box key={`slide-${sid}`} boxSize="full" flex="none">
                <Text
                  color="white"
                  fontSize="xs"
                  p="8px 12px"
                  pos="absolute"
                  top="0"
                >
                  {sid + 1} / {slidesCount}
                </Text>

                <VStack
                  gap={2}
                  p="8px 12px"
                  pos="absolute"
                  textAlign="center"
                  w="full"
                  mb="8"
                  color="white"
                >
                  <Text
                    fontSize={{ base: "larger", lg: "3xl" }}
                    fontWeight="extrabold"
                  >
                    {slide.heading}
                  </Text>
                  <Box>
                    <Text fontSize={{ base: "md", lg: "lg" }}>{slide.evo}</Text>
                    <Text fontSize={{ base: "md", lg: "lg" }} mt={1}>
                      {slide.evo_amnt}
                    </Text>
                  </Box>
                  <Box>
                    <Text fontSize={{ base: "md", lg: "lg" }}>
                      {slide.verify}
                    </Text>
                    <Text fontSize={{ base: "md", lg: "lg" }} mt={1}>
                      {slide.veri_amnt}
                    </Text>
                  </Box>
                  <Box>
                    <Text fontSize={{ base: "md", lg: "lg" }}>
                      {slide.dropdown}
                    </Text>
                    <Text fontSize={{ base: "md", lg: "lg" }} mt={1}>
                      {slide.dropdown_amnt}
                    </Text>
                  </Box>
                  <Box>
                    <Text fontSize={{ base: "md", lg: "lg" }}>
                      {slide.profit}
                    </Text>
                    <Text fontSize={{ base: "md", lg: "lg" }} mt={1}>
                      {slide.profit_amnt}
                    </Text>
                  </Box>
                  <Box>
                    <Text fontSize={{ base: "md", lg: "lg" }}>
                      {slide.trading}
                    </Text>
                    <Text fontSize={{ base: "md", lg: "lg" }} mt={1}>
                      {slide.trading_value}
                    </Text>
                  </Box>
                  <Box>
                    <Text fontSize={{ base: "md", lg: "lg" }}>
                      {slide.profit_days}
                    </Text>
                    <Text fontSize={{ base: "md", lg: "lg" }} mt={1}>
                      {slide.profit_value}
                    </Text>
                  </Box>
                  <Box
                    p={{ base: "5", lg: "5" }}
                    bg="white"
                    color="#000000"
                    cursor="pointer"
                    onClick={() => {
                      setValue(slide.heading);
                      onOpen();
                    }}
                  >
                    <HStack justifyContent="center">
                      <Text
                        as="del"
                        fontSize={{ base: "lg", lg: "lg" }}
                        fontWeight="bold"
                      >
                        {slide.old_price}
                      </Text>
                      <Text
                        fontSize={{ base: "lg", lg: "lg" }}
                        fontWeight="extrabold"
                      >
                        {slide.price}
                      </Text>
                    </HStack>
                    <Text
                      fontSize={{ base: "lg", lg: "2xl" }}
                      fontWeight="bold"
                    >
                      {" "}
                      JOIN HERE!
                    </Text>
                  </Box>
                </VStack>
              </Box>
            ))}
          </Flex>

          <Box display={{ base: "none", lg: "block" }}>
            <SlArrowLeft
              style={{
                cursor: "pointer",
                position: "absolute",
                top: "50%",
                left: "0",
                width: "auto",
                marginTop: "-22px",
                padding: "16px",
                color: "white",
                fontWeight: "bold",
                fontSize: "18px",
                transition: "0.6s ease",
                borderRadius: "0 3px 3px 0",
                userSelect: "none",
              }}
              size={80}
              onClick={prevSlide}
            />
          </Box>
          <Box display={{ base: "block", lg: "none" }}>
            <SlArrowLeft
              style={{
                cursor: "pointer",
                position: "absolute",
                top: "40%",
                left: "-25",

                width: "auto",
                marginTop: "-22px",
                padding: "16px",
                color: "white",
                fontWeight: "bold",
                fontSize: "18px",
                transition: "0.6s ease",
                borderRadius: "0 3px 3px 0",
                userSelect: "none",
              }}
              size={70}
              onClick={prevSlide}
            />
          </Box>
          <Box display={{ base: "none", lg: "block" }}>
            <SlArrowRight
              style={{
                cursor: "pointer",
                position: "absolute",
                top: "50%",
                right: "0",
                width: "auto",
                marginTop: "-22px",
                padding: "16px",
                color: "white",
                fontWeight: "bold",
                // fontSize: "18px",
                transition: "0.6s ease",
                borderRadius: "0 3px 3px 0",
                userSelect: "none",
              }}
              onClick={nextSlide}
              size={80}
            />
          </Box>
          <Box display={{ base: "block", lg: "none" }}>
            <SlArrowRight
              style={{
                cursor: "pointer",
                position: "absolute",
                top: "40%",
                right: "-25",
                width: "auto",
                marginTop: "-22px",
                padding: "16px",
                color: "white",
                fontWeight: "bold",
                // fontSize: "18px",
                transition: "0.6s ease",
                borderRadius: "0 3px 3px 0",
                userSelect: "none",
              }}
              onClick={nextSlide}
              size={70}
            />
          </Box>
          {/* <HStack justify="center" pos="absolute" bottom="-6px" w="full">
            {Array.from({ length: slidesCount }).map((_, slide) => (
              <Box
                key={`dots-${slide}`}
                cursor="pointer"
                boxSize={["7px", "15px"]}
                m="0 2px"
                bg={
                  currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"
                }
                rounded="50%"
                display="inline-block"
                transition="background-color 0.6s ease"
                _hover={{ bg: "blackAlpha.800" }}
                onClick={() => setSlide(slide)}
              ></Box>
            ))}
          </HStack> */}
        </Flex>
      </Flex>
      <Text
        mt={10}
        pb={10}
        color="white"
        px={{ base: "6%" }}
        display={{ base: "block", lg: "none" }}
      >
        *Minimum trading days is the minimum number of days in your evaluation
        and verification stages that you are required to execute a trade. <br />{" "}
        <br />
        *Minimum profit days is the minimum number of days in your evaluation
        and verification stages that you are required to close your trades in
        profit
      </Text>
    </>
  );
}

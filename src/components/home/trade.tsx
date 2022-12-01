import { Box, Heading, HStack, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react'

import Faq from './faq';

const Trade = () => {

  const accounts = [
    {
      name: "Platinum Tier",
      aoumnt: "$1,000,000",
      aoumnt1: "$1,500,000",
      aoumnt2: "$2,000,000",
      cup: "images/prize cup.png",
    },
    {
      name: "Gold Tier",
      aoumnt: "$100,000",
      aoumnt1: "$200,000",
      aoumnt2: "$400,000",
      arrow: "images/Double Up.png",
    },
    {
      name: "Silver Tier",
      aoumnt: "$25,000",
      aoumnt1: "$50,000",
      aoumnt2: "-------",
      arrow: "images/Double Up.png",
    },
  ];

  return (
    <Box>
      <VStack mt={{ base: "8", lg: "14" }} gap={{ base: "5", lg: "14" }}>
        <Heading textAlign={{ base: "center" }} fontSize={{ base: "larger" }}>
          Trade Your Way To Freedom
        </Heading>
        <Text
          fontSize={{ base: "0.8rem", md: "larger" }}
          textAlign="center"
          width={{ lg: "50%" }}
        >
          As a Fund'r Talent, you automatically become eligible for our Fast
          Track Scaling Program. <br />
          <br />
          On this program, your account is scaled by up-to 150% when you achieve
          a 10% profit on capital. Fund'r Talents are divided into three tiers
          based on the Amount Under Management (AUM)
        </Text>
        <Box display={{ base: "none", md: "block" }}>
          {accounts?.map((item, index: number) => (
            <SimpleGrid key={index} columns={4} spacing={10}>
              <Box>
                {item.name === "Gold Tier" || item.name === "Silver Tier" ? (
                  <Box>
                    <VStack>
                      <Image src={item.arrow} boxSize={10} />
                      <Text mt={10} fontSize="large" fontWeight="bold">
                        {item.name}
                      </Text>
                    </VStack>
                  </Box>
                ) : (
                  <Text
                    mt={10}
                    fontSize={{ base: "0.8rem", md: "larger" }}
                    fontWeight="bold"
                  >
                    {item.name}
                  </Text>
                )}
              </Box>
              <Box
                mt={5}
                p={{ base: "2", lg: "5" }}
                bg="linear-gradient(90deg, rgba(97, 101, 215, 0.31) 0%, rgba(69, 161, 245, 0.53) 100%)"
                boxShadow="0px 4px 10px rgba(0, 0, 0, 0.25)"
                borderRadius="2xl"
              >
                <Text
                  fontWeight="extrabold"
                  fontSize={{ base: "0.8rem", md: "md" }}
                >
                  {item.aoumnt}
                </Text>
              </Box>
              <Box
                mt={5}
                p={{ base: "2", lg: "5" }}
                bg="linear-gradient(90deg, rgba(97, 101, 215, 0.31) 0%, rgba(69, 161, 245, 0.53) 100%)"
                boxShadow="0px 4px 10px rgba(0, 0, 0, 0.25)"
                borderRadius="2xl"
              >
                <Text
                  fontWeight="extrabold"
                  fontSize={{ base: "0.8rem", md: "md" }}
                >
                  {item.aoumnt1}
                </Text>
              </Box>
              {item.name === "Platinum Tier" ? (
                <>
                  <Box
                    mt={5}
                    p={{ base: "2", lg: "5" }}
                    bg="linear-gradient(90deg, rgba(97, 101, 215, 0.31) 0%, rgba(69, 161, 245, 0.53) 100%)"
                    boxShadow="0px 4px 10px rgba(0, 0, 0, 0.25)"
                    borderRadius="2xl"
                  >
                    <Text
                      fontWeight="extrabold"
                      pos="relative"
                      fontSize={{ base: "0.8rem", md: "md" }}
                    >
                      {item.aoumnt2}
                    </Text>
                  </Box>
                  <Image
                    src={item.cup}
                    boxSize={{ base: "4", lg: "14" }}
                    mt={{ base: "5", lg: "null" }}
                    alt="img"
                    pos="absolute"
                    right={{ base: "0rem", lg: "19rem" }}
                  />
                </>
              ) : (
                <Box
                  mt={5}
                  p={{ base: "2", lg: "5" }}
                  bg="linear-gradient(90deg, rgba(97, 101, 215, 0.31) 0%, rgba(69, 161, 245, 0.53) 100%)"
                  boxShadow="0px 4px 10px rgba(0, 0, 0, 0.25)"
                  borderRadius="2xl"
                >
                  <Text
                    fontWeight="extrabold"
                    fontSize={{ base: "sm", md: "md" }}
                  >
                    {item.aoumnt2}
                  </Text>
                </Box>
              )}
              {/* {item.name === "Silver Tier" ? (
                <Box>
                  <Text
                    fontWeight="extrabold"
                    fontSize={{ base: "sm", md: "md" }}
                  >
                    {item.aoumnt2}
                  </Text>
                </Box>
              ) : (
                ""
              )} */}
            </SimpleGrid>
          ))}
        </Box>
        <Box display={{ base: "block", md: "none" }}>
          {accounts?.map((item, index: number) => (
            <VStack key={index}>
              {item.name === "Gold Tier" || item.name === "Silver Tier" ? (
                <VStack>
                  <Image src={item.arrow} boxSize={6} mt={3} />
                  <Text fontWeight="bold" fontSize="md">
                    {item.name}
                  </Text>
                </VStack>
              ) : (
                <HStack>
                  <Text fontWeight="bold" fontSize="md">
                    {item.name}
                  </Text>
                  <Image src={item.cup} boxSize={5} />
                </HStack>
              )}

              <HStack spacing={1}>
                <Box
                  p={4}
                  bg="linear-gradient(90deg, rgba(97, 101, 215, 0.31) 0%, rgba(69, 161, 245, 0.53) 100%)"
                  boxShadow="0px 4px 10px rgba(0, 0, 0, 0.25)"
                  borderRadius="2xl"
                  fontSize="0.8rem"
                >
                  {item.aoumnt}
                </Box>
                <Box
                  p={4}
                  bg="linear-gradient(90deg, rgba(97, 101, 215, 0.31) 0%, rgba(69, 161, 245, 0.53) 100%)"
                  boxShadow="0px 4px 10px rgba(0, 0, 0, 0.25)"
                  borderRadius="2xl"
                  fontSize="0.8rem"
                >
                  {item.aoumnt1}
                </Box>
                <Box
                  p={4}
                  bg="linear-gradient(90deg, rgba(97, 101, 215, 0.31) 0%, rgba(69, 161, 245, 0.53) 100%)"
                  boxShadow="0px 4px 10px rgba(0, 0, 0, 0.25)"
                  borderRadius="2xl"
                  fontSize="0.8rem"
                >
                  {item.aoumnt2}
                </Box>
              </HStack>
            </VStack>
          ))}
        </Box>
      </VStack>
      <Faq />
    </Box>
  );
}

export default Trade
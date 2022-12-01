import { Box, Flex, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import Slider from '../utils/carousel';
import Trade from './trade';


const SelectAccount = () => {
 
    return (
      <Box>
        <Box bg="#000000" id='selectAccount'>
          <Flex justifyContent="space-around" mt={20}>
            <SimpleGrid columns={[1, 1, 1, 2]} spacing={28}>
              <Box bg="#000000" pt={10} px={{ base: "", md: "20" }}>
                <VStack>
                  <Text
                    color="white"
                    fontSize={{ base: "2xl", md: "3xl" }}
                    fontWeight="extrabold"
                    textAlign="center"
                  >
                    Select Your <br/> Preferred Capital
                  </Text>
                </VStack>
                <HStack
                  spacing={{ base: "5", lg: "28" }}
                  mt={8}
                  justifyContent="space-around"
                >
                  <Box
                    bg="linear-gradient(90deg, rgba(97, 101, 215, 0.31) 0%, rgba(69, 161, 245, 0.53) 100%)"
                    pr={{ base: "3", lg: "8" }}
                    py={{ base: "3", lg: "6" }}
                    pl={{ base: "5", lg: "5" }}
                  >
                    <Text
                      fontSize={{ base: "large", md: "2xl" }}
                      fontWeight="extrabold"
                      color="#FFFFFF"
                    >
                      $25,000
                    </Text>
                  </Box>
                  <Box
                    bg="linear-gradient(90deg, rgba(97, 101, 215, 0.31) 0%, rgba(69, 161, 245, 0.53) 100%)"
                    pr={{ base: "3", lg: "8" }}
                    py={{ base: "3", lg: "6" }}
                    pl={{ base: "5", lg: "5" }}
                  >
                    <Text
                      fontSize={{ base: "larger", md: "2xl" }}
                      fontWeight="extrabold"
                      color="#FFFFFF"
                    >
                      $50,000
                    </Text>
                  </Box>
                </HStack>
                <HStack
                  spacing={{ base: "5", lg: "28" }}
                  mt={8}
                  justifyContent="space-around"
                >
                  <Box
                    bg="linear-gradient(90deg, rgba(97, 101, 215, 0.31) 0%, rgba(69, 161, 245, 0.53) 100%)"
                    p={{ base: "3", lg: "5" }}
                  >
                    <Text
                      fontSize={{ base: "large", md: "2xl" }}
                      fontWeight="extrabold"
                      color="#FFFFFF"
                    >
                      $100,000
                    </Text>
                  </Box>
                  <Box
                    bg="linear-gradient(90deg, rgba(97, 101, 215, 0.31) 0%, rgba(69, 161, 245, 0.53) 100%)"
                    p={{ base: "3", lg: "5" }}
                  >
                    <Text
                      fontSize={{ base: "large", md: "2xl" }}
                      fontWeight="extrabold"
                      color="#FFFFFF"
                    >
                      $200,000
                    </Text>
                  </Box>
                </HStack>
                <Text mt={10} color="white" px={{base:"6%"}} display={{base:"none", lg:"block"}}>
                  *Minimum trading days is the minimum number of  days in
                  your evaluation and verification stages 
                  that you are required to execute a trade. <br /> <br />
                  *Minimum profit days is the minimum number of 
                  days in your evaluation and verification stages 
                  that you are required to close your trades in profit
                </Text>
              </Box>
              <Box>
                <Slider />
              </Box>
            </SimpleGrid>
          </Flex>
        </Box>
        <Trade />
      </Box>
    );
}

export default SelectAccount
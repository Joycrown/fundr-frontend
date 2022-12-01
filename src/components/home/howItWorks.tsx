import { Box, Center, Flex, SimpleGrid,  Text, VStack } from "@chakra-ui/react"
import AccountFeatures from "./accountFeatures"
import { Link as Scroll } from "react-scroll";


const HowItWorks = () => {
  return (
    <Box>
      <Box bg="brand.primary" pb={10} width="100%" id="howItWorks">
        <Center>
          <Text
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="extrabold"
            mt={10}
          >
            How It Works
          </Text>
        </Center>
        <Flex
          justifyContent="space-around"
          mt={{ base: "5", md: "", lg: "24" }}
          px={{ base: "10%", lg: "10%" }}
        >
          <SimpleGrid
            columns={[1, 1, 1, 3]}
            spacing={{ base: "5", md: "10", lg: "14" }}
          >
            <Box
              mt={{ base: "10", md: "", lg: "24" }}
              bg="rgba(255, 255, 255, 0.7)"
              boxShadow="0px 4px 10px rgba(0, 0, 0, 0.25)"
              width="100%"
              p={{ base: "10", md: "6" }}
            >
              <VStack gap={{ base: "3", md: "5", lg: "10" }}>
                <Text
                  fontSize={{ base: "larger", md: "2xl" }}
                  fontWeight="extrabold"
                >
                  Evaluation
                </Text>
                <Text
                  textAlign="center"
                  fontSize={{ base: "large", md: "largegr" }}
                >
                  Purchase an account and achieve the target profit to qualify
                  for the verification phase
                </Text>
              </VStack>
            </Box>
            <Box
              bg="rgba(255, 255, 255, 0.7)"
              boxShadow="0px 4px 10px rgba(0, 0, 0, 0.25)"
              width="100%"
              p={{ base: "10", md: "6" }}
            >
              <VStack gap={{ base: "4", md: "5", lg: "10" }}>
                <Text
                  fontSize={{ base: "larger", md: "2xl" }}
                  fontWeight="extrabold"
                >
                  Verification
                </Text>
                <Text
                  textAlign="center"
                  fontSize={{ base: "large", md: "largegr" }}
                >
                  Verify your evaluation results, prove that your strategy is
                  reliable. Once you pass this phase you are qualified to be a
                  Fund'r Talent.
                </Text>
              </VStack>
            </Box>
            <Box
              mt={{ base: "null", lg: "24" }}
              bg="rgba(255, 255, 255, 0.7)"
              boxShadow="0px 4px 10px rgba(0, 0, 0, 0.25)"
              width="100%"
              p={{ base: "10", md: "6" }}
            >
              <VStack gap={{ base: "4", md: "5", lg: "10" }} pb={{ base: "5" }}>
                <Text
                  fontSize={{ base: "larger", md: "2xl" }}
                  fontWeight="extrabold"
                  // textAlign="center"
                >
                  Fundr Talent
                </Text>
                <Text
                  textAlign="center"
                  fontSize={{ base: "large", md: "largegr" }}
                >
                  Congratulations! You can now manage up to $2million in trading
                  capital. Join our community of Fund'r Talents and take the
                  next step towards achieving your full potential.
                </Text>
              </VStack>
            </Box>
          </SimpleGrid>
        </Flex>
        <Scroll
          activeClass="active"
          to="accountSelect"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <Center mt={{ base: "10", md: "10", lg: "24" }}>
            <Box
              cursor="pointer"
              borderRadius="md"
              color="white"
              bg="#000000FC"
              p={5}
              width={{ base: "60%", lg: "25%" }}
            >
              <Center>
                <Text
                  fontWeight="bold"
                  textAlign="center"
                  fontSize={{ base: "md", lg: "larger" }}
                >
                  JOIN WAITLIST
                </Text>
              </Center>
            </Box>
          </Center>
        </Scroll>
      </Box>
      <AccountFeatures />
    </Box>
  );
}

export default HowItWorks
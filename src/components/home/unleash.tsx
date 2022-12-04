import {
  Box,
  Heading,
  Image,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react'
import HowItWorks from './howItWorks';
import { Link as Scroll } from "react-scroll";


const Unleash = () => {

  const features = [
    {
      image: "/images/Vector.png",
      details: "Up to 75% Profit Split",
    },
    {
      image: "/images/Vector (1).png",
      details: "No Daily Drawdown",
    },
    {
      image: "/images/Vector (2).png",
      details: "Scale Up to $2M",
    },
  ];

  
  return (
    <Box>
      <Box
        bg="brand.primary"
        shadow="0px 4px 10px rgba(0, 0, 0, 0.25)"
        pt={5}
        h={{ base: "none", md: "none", lg: "auto" }}
      >
        <Box
          bgImage="url('/images/Group 14.png')"
          bgPosition="center"
          width="100%"
          overflowX="hidden"
          bgRepeat="no-repeat"
          bgSize={{ base: "cover", md: "cover" }}
        >
          <VStack spacing={10} pb={5}>
            <Box mt={{ base: "20", md: "20", lg: "36" }} id="landing">
              <Text
                fontSize={{ base: "4xl", md: "5xl", lg: "8xl" }}
                textAlign="center"
              >
                Unleash Your <br />
                <Box as="span" fontWeight="bold">
                  Full Potential
                </Box>
              </Text>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "lg", md: "2xl", lg: "4xl" }}
                fontWeight="bold"
                textAlign="center"
              >
                Because capital should be the least of your worries.
              </Text>
            </Box>

            <Scroll
              activeClass="active"
              to="accountSelect"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Box
                cursor="pointer"
                p={{ base: "5", md: "5", lg: "5" }}
                bgColor="#000000FC"
                color="white"
                borderRadius="2xl"
              >
                <Text
                  fontWeight="bold"
                  fontSize={{ base: "md", md: "lg", lg: "2xl" }}
                >
                  JOIN WAITLIST
                </Text>
              </Box>
            </Scroll>
          </VStack>
        </Box>
      </Box>
      <Box>
        <Stack
          direction={{ base: "column", md: "row" }}
          justifyContent="space-around"
          spacing={14}
          mt={{ base: "16", lg: "24" }}
        >
          {features?.map((item: any, index: number) => (
            <VStack key={index} gap={{ base: "2", lg: "5" }}>
              <Image boxSize={{ base: "16", lg: "28" }} src={item.image} />
              <Text fontSize={{ base: "larger", lg: "3xl" }} fontWeight="bold">
                {item.details}
              </Text>
            </VStack>
          ))}
        </Stack>
      </Box>
      <Box mt={{ base: "5rem", md: "10rem" }} id="about">
        <Stack
          direction={{ base: "column", md: "row" }}
          justifyContent="space-around"
          spacing={12}
        >
          <Heading
            fontWeight="extrabold"
            fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
            textAlign="center"
            maxWidth={{ base: "null", md: "36%" }}
            textShadow={{ base: "none", md: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            THE TRADER'S BEST FRIEND
          </Heading>
          <Box pb={10}>
            <Box
              fontSize={{ base: "md", md: "larger" }}
              textAlign={{ base: "center" }}
              color={
                "linear-gradient(180deg, rgba(0, 0, 0, 0.5) 99.99%, rgba(255, 255, 255, 0) 100%)"
              }
            >
              Fund'r is a proprietary trading firm that <br />
              identifies skilled traders and provides them <br />
              with the capital and support they need to <br />
              succeed in the trading industry.
              <br />
              <br />
              Our goal is to establish an ecosystem of <br /> successful traders
              across the globe. <p />
              <br />
              <br />
              With Fund'r, your capital limitations are finally <br />
              over. Receive up to $2 Million in funding and <br />
              step into the elite lifestyle.
            </Box>
          </Box>
        </Stack>
      </Box>
      <HowItWorks />
    </Box>
  );
}

export default Unleash
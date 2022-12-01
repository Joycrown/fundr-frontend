import { Box, HStack, Stack, Text } from '@chakra-ui/react'
import { FaDiscord, FaInstagram, FaLinkedin, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { Link as Scroll } from "react-scroll";

const Footer = () => {
  return (
    <Box>
      <Box bg="#000000" mt={10} color="rgba(255, 255, 255, 0.53);">
        <Box pt={10} px="15%">
          <Stack
            justifyContent="space-around"
            spacing={{ base: "10", lg: "50" }}
            direction={{ base: "column", md: "row" }}
          >
            <Box mt={5}>
              <Text fontWeight="bold" color="white">
                Get in touch
              </Text>
              <HStack spacing={2} mt={2}>
                <FaDiscord color="white" />
                <FaTelegramPlane color="white" />
                <FaInstagram color="white" />
                <FaTwitter color="white" />
                <FaLinkedin color="white" />
              </HStack>
              <Text mt={2}>Join Community</Text>
              <Text mt={2}>support@myfundr.co</Text>
            </Box>
            <Box>
              <Text fontWeight="bold" mt={5} color="white">
                Quick Links
              </Text>
              <Scroll
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Text cursor="pointer" mt={2}>
                  About Us
                </Text>
              </Scroll>
              <Scroll
                activeClass="active"
                to="howItWorks"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Text cursor="pointer" mt={2}>
                  How It Works
                </Text>
              </Scroll>
              <Scroll
                activeClass="active"
                to="FAQ"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Text cursor="pointer" mt={2}>
                  FAQ & Rules
                </Text>
              </Scroll>
              {/* <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Text cursor="pointer" mt={2}>
                  Terms & Conditions
                </Text>
              </Link> */}
            </Box>
            {/* <Box>
              <Text fontWeight="bold" mt={5} color="white">
                Trading
              </Text>
              <Text mt={2}>Partners</Text>
              <Text mt={2}>Fast Track</Text>
              <Text mt={2}>Leaderboard</Text>
            </Box> */}
          </Stack>
          <Box pl={{ lg: "20" }} py={10}>
            <Text
              display={{ base: "none", lg: "block" }}
              fontSize={{ base: "sm", lg: "md" }}
              color="rgba(255, 255, 255, 0.53)"
              mt={10}
            >
              Fund'r and the myfundr.co website is owned and operated by New
              Horizons <br /> Capital Ltd, with registration number 14343995 and
              having its registered office <br />
              at 128 City Rd, London, EC1V 2NX, United Kingdom. All rights
              reserved. <br />
              <br />
              All financial products traded on margin carry a high degree of
              risk. They are not <br />
              suited to all investors, please ensure that you fully understand
              the risks involved,
              <br /> and seek independent advice if necessary.
              <br /> New Horizons Capital itself does not carry out any
              regulated activities, the only <br />
              exclusive activities we carry is Prop Trading and Professional
              Training and <br />
              consequently is not required to be authorised by the regulatory
              authority.
              <br /> Purchases of packages should not be considered deposits.
              <br />
              All package fees are used for operation costs including, but not
              limited to, staff,
              <br /> technology and other business related expenses.
              <br /> The information on this site is not directed at residents
              in any country or
              <br /> jurisdiction where such distribution or use would be
              contrary to local laws or
              <br /> regulations. <br />
              <br />
              Fund'r for traders ❤️📈
            </Text>
            <Text
              display={{ base: "block", lg: "none" }}
              color="rgba(255, 255, 255, 0.53)"
              fontSize={{ base: "sm", lg: "md" }}
              mt={10}
            >
              Fund’r and the myfundr.co website is owned and operated by New
              Horizons Capital Ltd, with registration number 14343995 and having
              its registered office at 128 City Rd, London, EC1V 2NX, United
              Kingdom. All rights reserved.
              <br />
              <br />
              All financial products traded on margin carry a high degree of
              risk. They are not suited to all investors, please ensure that you
              fully understand the risks involved, and seek independent advice
              if necessary. New Horizons Capital itself does not carry out any
              regulated activities, the only exclusive activities we carry is
              Prop Trading and Professional Training and consequently is not
              required to be authorised by the regulatory authority. Purchases
              of packages should not be considered deposits. All package fees
              are used for operation costs including, but not limited to, staff,
              technology and other business related expenses. The information on
              this site is not directed at residents in any country or
              jurisdiction where such distribution or use would be contrary to
              local laws or regulations
              <br />
              <br />
              Fund'r for traders ❤️📈
            </Text>
          </Box>
          <Text py={10} textAlign="center" fontSize={{ base: "sm" }}>
            &#169; New Horizons Capital . 2022.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer
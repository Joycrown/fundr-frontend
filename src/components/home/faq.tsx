import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  GridItem,
  Link,
  Stack,
  Text,
  VStack
} from "@chakra-ui/react"
import { Link as Scroll } from "react-scroll";
import Footer from "./footer";


const Faq = () => {
  return (
    <Box id="FAQ">
      <Flex justifyContent="space-around" mt={20}>
        <Stack
          px={{ base: "10%", lg: "20%" }}
          justifyContent="space-around"
          // spacing={{ base: "10", lg: "36" }}
          direction={{ base: "column", lg: "row" }}
          gap={{ base: "4", lg: "32" }}
        >
          <GridItem>
            <VStack>
              <Text
                fontSize={{ base: "3xl", lg: "2xl" }}
                fontWeight="extrabold"
                textAlign="center"
              >
                Frequently Asked Questions
              </Text>
            </VStack>
          </GridItem>
          <GridItem>
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left" fontSize={{ base: "sm" }}>
                      What is Fund'r?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} fontSize={{ base: "sm" }}>
                  We are a proprietary trading firm based in the UK focused on
                  funding talented traders, globally. Our core mission is to
                  make prop trading accessible to all traders, irrespective of
                  their demographic, trading system or economic background. We
                  believe that as a trader, capital should be the least of your
                  worries, this motivates us to provide the fund, tech and
                  opportunity to succeed and advance your trading careers.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left" fontSize={{ base: "sm" }}>
                      Who can become a Fund'r Talent?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} fontSize={{ base: "sm" }}>
                  Anyone can become a Fund'r Talent, It doesn't matter if you
                  trade yourself, copy signals, use a robot or copytrade. As
                  long as your trading method works for you and is consistent,
                  you are on the right track to becomming a successful Fund'r
                  Talent.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left" fontSize={{ base: "sm" }}>
                      How does the funding work?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} fontSize={{ base: "sm" }}>
                  Step 1: Purchase an evaluation account; trade for a minimum of
                  10 days with at least 5 profitable days; achieve the
                  evaluation target without hitting the drawdown limit or
                  violating any of our rules. You will be upgraded to a
                  Verification account.
                  <br />
                  <br />
                  Step 2: Trade on your Verification account for a minimum of 10
                  days with at least 5 profitable days; achieve the verification
                  target without hitting the drawdown limit or violating any of
                  our rules. You become qualified to become a Fund'r Talent.
                  <br />
                  <br />
                  Step 3: Trade on your Fund'r Talent Account and withdraw your
                  profits or scale your account up to $2Million.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left" fontSize={{ base: "sm" }}>
                      What is the payment method?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} fontSize={{ base: "sm" }}>
                  We accept payments and process payouts via cryptocurrency,
                  specifically Bitcoin and Tether (USDT- Trc20).
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </GridItem>
        </Stack>
      </Flex>
      <Box px={{ base: "10%", lg: "25%" }} mt={10} pb={20}>
        <Stack
          justifyContent="space-around"
          spacing={{ base: "10", lg: "36" }}
          direction={{ base: "column", lg: "row" }}
        >
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
              bg="#000000"
              p={5}
              borderRadius="lg"
              width={{ base: "100%", lg: "100%" }}
            >
              <Text
                textAlign="center"
                textTransform="uppercase"
                fontSize={{ base: "sm", md: "md" }}
                fontWeight="bold"
                color="white"
              >
                Join waitlist
              </Text>
            </Box>
          </Scroll>
            <Link
              style={{ textDecoration: "none" }}
              href="/faq"
              cursor="pointer"
              bg="brand.primary"
              p={5}
              borderRadius="lg"
              width={{ base: "100%", lg: "40%" }}
            >
              <Text
                fontSize={{ base: "md", md: "md" }}
                textAlign="center"
                fontWeight="bold"
                color="white"
              >
                Read the FAQs & Rules
              </Text>
            </Link>
         
        </Stack>
      </Box>
      <Footer />
    </Box>
  );
}

export default Faq
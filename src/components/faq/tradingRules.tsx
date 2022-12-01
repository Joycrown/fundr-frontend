import {
  Box,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  VStack,
  Heading,
} from "@chakra-ui/react";

const TradingRules = () => {
  return (
    <Box>
      <VStack pb={24}>
        <Box pt={10}>
          <Heading fontSize={{ base: "", lg: "2xl" }}>Trading Rules</Heading>
        </Box>

        <Accordion allowToggle width={{ base: "90%", lg: "50%" }} bg="white">
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex="1"
                  textAlign="left"
                  fontSize={{ base: "sm", lg: "large" }}
                >
                  When can i trade?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={{ base: "sm", lg: "large" }}>
              Trades can be placed at anytime of the day. Overnight and over the
              weekend positions are allowed.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex="1"
                  textAlign="left"
                  fontSize={{ base: "sm", lg: "large" }}
                >
                  What assets can i trade?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={{ base: "sm", lg: "large" }}>
              All Forex pairs, Crypto currencies, Stocks, Indices, Gold, and
              Silver.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex="1"
                  textAlign="left"
                  fontSize={{ base: "sm", lg: "large" }}
                >
                  What are the commissions?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={{ base: "sm", lg: "large" }}>
              1. Forex pairs - $3.5 per lot <br /> <br />
              2. Metals - $7 per lot <br /> <br />
              3. Crypto - 0.5% <br /> <br />
              4. Indices - 0.0004% <br /> <br />
              5. Stocks - 0.1%
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex="1"
                  textAlign="left"
                  fontSize={{ base: "sm", lg: "large" }}
                >
                  What is the leverage on Fund'r MT5 accounts?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={{ base: "sm", lg: "large" }}>
              Raw spreads account with leverage of 1:200 on industry-standard
              MT5.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex="1"
                  textAlign="left"
                  fontSize={{ base: "sm", lg: "large" }}
                >
                  What if I achieve the profit target before the minimum
                  required trading days?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={{ base: "sm", lg: "large" }}>
              This only applies to the 100k and 200k account size only. You can
              reduce your lot size by up to 75% of the average lot size used on
              all of your challenge trades until now. You can’t use 0.01 lot
              sizes or any amount lower than one-fourth of the average lot size
              used till now on your challenge. You will also be expected to
              trade normally on the reduced lot size to not bypass the minimum
              day rule.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </VStack>
    </Box>
  );
};

export default TradingRules;

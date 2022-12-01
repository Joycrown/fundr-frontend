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
import React from "react";

const Kyc = () => {
  return (
    <Box>
      <VStack pb={24}>
        <Box pt={10}>
          <Heading fontSize={{ base: "", lg: "2xl" }}>KYC</Heading>
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
                  Why is KYC important?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={{ base: "sm", lg: "large" }}>
              Completing your KYC is an important requirement to becoming a
              Fund'r Talent. It helps us verify your identity and comply with
              the necessary regulations.
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
                  How do I complete KYC verification?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={{ base: "sm", lg: "large" }}>
              Your KYC can be completed at any point during your evaluation and
              verification phase. All you need to do is submit a copy of your
              valid Identity Document to support@myfundr.co . Once you are
              verified, you will be able to receive your Fund'r Talent trading
              account.
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
                  How many Fund'r accounts can i have?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={{ base: "sm", lg: "large" }}>
              You can only have one Fund'r account. Multiple accounts will be
              deactivated when discovered and payments made will be forfeited.
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
                  I've completed KYC verification, what's next?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={{ base: "sm", lg: "large" }}>
              Congratulations, you are now fully verified. You can become a
              Fund'r Talent, request Payouts and Scale your account up to
              $2Million.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </VStack>
    </Box>
  );
};

export default Kyc;

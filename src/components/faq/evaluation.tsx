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


const Evaluation = () => {
  return (
    <Box>
      <VStack pb={24}>
        <Box pt={10}>
          <Heading fontSize={{ base: "", lg: "2xl" }}>
            Evaluation & Verification
          </Heading>
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
                  How does Evaluation work?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={{ base: "sm", lg: "large" }}>
              Our evaluation phase is the first phase where your trading skill
              will be tested. At this phase you are required to achieve a
              minimum of 8% profit within 10-30 days, with at least 5 of those
              days being profitable. Pass the evaluation phase to upgrade to the
              verification phase.
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
                  How does Verification work?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={{ base: "sm", lg: "large" }}>
              Our verification phase is the phase where your evaluation results
              will be verified. At this phase you are required to achieve a
              minimum of 4% profit within 10-60 days, with at least 5 of those
              days being profitable. Pass the verification phase to become a
              Fund'r Talent.
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
                  What are the drawdown rules?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={{ base: "sm", lg: "large" }}>
              Unlike other prop firms, we do not believe in a daily drawdown
              limit. The Fund'r drawdown rule is designed to be simple and
              enable growth. There is only one rule: a static max drawdown limit
              of 10% which is based on the starting balance of the account. This
              rule is applied floating account equity. <br /> <br /> For
              example, if you have a $25,000 account, the max drawdown limit is
              $22,500 ($2,500 max loss). If you have made profit, the drawdown
              limit still remains the same, allowing you to build a drawdown
              buffer.
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
                  What happens if the max drawdown is breached?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={{ base: "sm", lg: "large" }}>
              If an account breaches the max drawdown limit of 10%, the trader
              will be disqualified and the account immediately deactivated. The
              trader will receive a notification of this action via email.
              Traders who have breached the max drawdown limit will receive a
              10% discount code for another account of their choice. .
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </VStack>
    </Box>
  );
};

export default Evaluation;

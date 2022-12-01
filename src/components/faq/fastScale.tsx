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

const FastScale = () => {
  return (
    <Box>
      <VStack pb={24}>
        <Box pt={10}>
          <Heading fontSize={{ base: "", lg: "2xl" }}>Fast Scale</Heading>
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
                  How does the Fast-Track Scaling Program work?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={{ base: "sm", lg: "large" }}>
              With the Fund'r Fast-Track Scaling program, Fund'r Talents can
              scale their accounts by up to 100% once a target profit of 10% is
              achieved. Accounts can be scaled to aa maximum of 2 million
              dollars ($2M).
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
                  How do i scale my account?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={{ base: "sm", lg: "large" }}>
              If you achieve a minimum of 10% (ten percent) profit on your
              capital (eg, profit of $2,500 on a $25k account) you can request
              to scale your account under our Fast-Track Program. NB: Profits
              used to scale, cannot be withdrawn. Once you request to scale, a
              new account with the upgraded capital will be provided within 48
              hours.
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
                  Can I withdraw profits and scale at the same time?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={{ base: "sm", lg: "large" }}>
              No, profits used to scale cannot be withdrawn.
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
                  What is a payout milestone?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={{ base: "sm", lg: "large" }}>
              The Fund'r payout milestone tracker is an algorithm that sums the
              total amount paid out to a Fund'r Talent. Traders that achieve
              these milestones are gived rewards ranging from Fund'r merchs, to
              all expense paid vacations.
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
                  What do the scaling tiers represent?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={{ base: "sm", lg: "large" }}>
              Each scaling tier sorts our traders into categories based on their
              individual Amount Under Management. Each tiers gives you access to
              amazing exclusive perks and priviledges that helps you improve
              your lifestyle.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </VStack>
    </Box>
  );
};

export default FastScale;

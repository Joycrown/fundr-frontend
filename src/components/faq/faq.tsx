import {  Box, Center, Heading, SimpleGrid, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from '@chakra-ui/react';

import Evaluation from './evaluation';
import FastScale from './fastScale';
import General from './general';
import Kyc from './kyc';
import TradingRules from './tradingRules';

const Faq = () => {
 
  return (
    <Box>
      <Box bg="brand.primary">
        <Heading
          textAlign="center"
          pt={22}
          fontSize={{ base: "large", md: "4xl" }}
        >
          Frequently Asked Questions
        </Heading>
        <Center>
          <Text
            mt={5}
            pb={5}
            textAlign="center"
            fontSize={{ base: "sm", md: "large" }}
            width={{ base: "", md: "50%" }}
          >
            Read through to get more details about the company, our programs,
            trading rules etc. For more information you can speak to us
            directly.
          </Text>
        </Center>
      </Box>
      <Box bg="#E5E5E5">
        <VStack px={{ base: "5%", lg: "10%" }} pt={10}>
          <Tabs variant="enclosed">
            <TabList>
              <SimpleGrid columns={[2, 2, 2, 5]} spacing={2}>
                <Tab>
                  <Box p={{ base: "3", lg: "4" }} bg="#ffffff">
                    <Text
                      textAlign="center"
                      fontWeight="bold"
                      fontSize={{ base: "sm", lg: "larger" }}
                    >
                      General
                    </Text>
                  </Box>
                </Tab>
                <Tab>
                  <Box p={{ base: "3", lg: "5" }} bg="#ffffff">
                    <Text
                      textAlign="center"
                      fontWeight="bold"
                      fontSize={{ base: "sm", lg: "larger" }}
                    >
                      KYC
                    </Text>
                  </Box>
                </Tab>
                <Tab>
                  <Box p={{ base: "3", lg: "5" }} bg="#ffffff">
                    <Text
                      textAlign="center"
                      fontWeight="bold"
                      fontSize={{ base: "sm", lg: "larger" }}
                    >
                      Evaluation & Verification
                    </Text>
                  </Box>
                </Tab>
                <Tab>
                  <Box p={{ base: "3", lg: "5" }} bg="#ffffff">
                    <Text
                      textAlign="center"
                      fontWeight="bold"
                      fontSize={{ base: "sm", lg: "larger" }}
                    >
                      Trading Rules❗
                    </Text>
                  </Box>
                </Tab>
                <Tab>
                  <Box p={{ base: "3", lg: "5" }} bg="#ffffff">
                    <Text
                      textAlign="center"
                      fontWeight="bold"
                      fontSize={{ base: "sm", lg: "larger" }}
                    >
                      Fast-Track Scaling ⚡
                    </Text>
                  </Box>
                </Tab>
              </SimpleGrid>
            </TabList>
            <TabPanels>
              <TabPanel>
                <General />
              </TabPanel>
              <TabPanel>
                <Kyc />
              </TabPanel>
              <TabPanel>
                <Evaluation />
              </TabPanel>
              <TabPanel>
                <FastScale />
              </TabPanel>
              <TabPanel>
                <TradingRules />
              </TabPanel>
            </TabPanels>
          </Tabs>
         
        </VStack>
      </Box>
    </Box>
  );
}

export default Faq; 
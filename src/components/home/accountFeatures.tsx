import React from "react";
import { Box,  SimpleGrid, Stack, Text } from "@chakra-ui/react";
import SelectAccount from "./selectAccount";

const AccountFeatures = () => {
  return (
    <Box>
      <Box width="100%">
        <Stack
          direction={{ base: "column", lg: "row" }}
          justifyContent={{ base: "center", lg: "space-around" }}
          spacing={{ base: "10" }}
          px={{ base: "10" }}
        >
          <Box width={{ base: "110%", lg: "45%" }}>
            <Text
              textAlign="center"
              display={{ base: "block", lg: "none" }}
              fontSize={{ base: "2xl", md: "xx-large" }}
              fontWeight="extrabold"
              mt={6}
            >
              Account Features
            </Text>
            <Box
              boxShadow="0px 4px 8px rgba(0, 0, 0, 0.25)"
              bg="#FFFFFF"
              p={5}
              mt={{ base: "5", lg: "16" }}
            >
              <SimpleGrid columns={2} spacing={{ base: "5", md: "10" }}>
                <Text fontWeight="bold" fontSize={{ base: "sm", md: "md" }}>
                  Leverage:
                </Text>
                <Text fontWeight="bold" fontSize={{ base: "sm", md: "md" }}>
                  1:200
                </Text>
                <Text fontWeight="bold" fontSize={{ base: "sm", md: "md" }}>
                  Min. Trading Days:
                </Text>
                <Text fontWeight="bold" fontSize={{ base: "sm", md: "md" }}>
                  10 Days
                </Text>
                <Text fontWeight="bold" fontSize={{ base: "sm", md: "md" }}>
                  Max Drawdown:
                </Text>
                <Text fontWeight="bold" fontSize={{ base: "sm", md: "md" }}>
                  10%
                </Text>
                <Text fontWeight="bold" fontSize={{ base: "sm", md: "md" }}>
                  Evaluation Target:
                </Text>
                <Text fontWeight="bold" fontSize={{ base: "sm", md: "md" }}>
                  8%, 30 days
                </Text>
                <Text fontWeight="bold" fontSize={{ base: "sm", md: "md" }}>
                  Verification Target:
                </Text>
                <Text fontWeight="bold" fontSize={{ base: "sm", md: "md" }}>
                  4%, 60 days
                </Text>
                <Text fontWeight="bold" fontSize={{ base: "sm", md: "md" }}>
                  Profit Split:
                </Text>
                <Text fontWeight="bold" fontSize={{ base: "sm", md: "md" }}>
                  Up to 75%
                </Text>
                <Text fontWeight="bold" fontSize={{ base: "sm", md: "md" }}>
                  Scaling Eligibility:
                </Text>
                <Text fontWeight="bold" fontSize={{ base: "sm", md: "md" }}>
                  10% Profit
                </Text>
                <Text fontWeight="bold" fontSize={{ base: "sm", md: "md" }}>
                  Withdrawal:
                </Text>
                <Text fontWeight="bold" fontSize={{ base: "sm", md: "md" }}>
                  BTC, USDT-TRC20
                </Text>
              </SimpleGrid>
            </Box>
          </Box>
          <Box width={{ base: "100%", lg: "40%" }}>
            <Box mt={{ lg: "28" }}>
              <Text
                display={{ base: "none", lg: "block" }}
                fontSize="xx-large"
                fontWeight="extrabold"
              >
                Account Features
              </Text>
              <Text fontSize={{ base: "md", md: "larger" }}>
                Our system has been designed with your best interest at the
                core, with Fund'r you can trade any asset (forex, crypto,
                stocks, indices, metals and commodities) with no restrictions.
                We also allow the use of Trade Copiers and Expert Advisers with
                little restrictions. You are encouraged to observe proper risk
                management at all times.
              </Text>
            </Box>
          </Box>
        </Stack>
      </Box>
      <SelectAccount />
    </Box>
  );
};

export default AccountFeatures;

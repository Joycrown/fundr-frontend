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
import React from 'react'

const General = () => {
  return (
    <Box>
      <VStack pb={24}>
        <Box pt={10}>
          <Heading fontSize={{ base: "", lg: "2xl" }}>General</Heading>
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
                  What is Fund'r?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={{ base: "sm", lg: "large" }}>
              We are a proprietary trading firm based in the UK focused on
              funding talented traders, globally. Our core mission is to make
              prop trading accessible to all traders, irrespective of their
              demographic, trading system or economic background. We believe
              that as a trader, capital should be the least of your worries,
              this motivates us to provide the fund, tech and opportunity to
              succeed and advance your trading careers.
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
                  Who can become a Fund'r Talent?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={{ base: "sm", lg: "large" }}>
              Anyone can become a Fund'r Talent, It doesn't matter if you trade
              yourself, copy signals, use a robot or copytrade. As long as your
              trading method works for you and is consistent, you are on the
              right track to becomming a successful Fund'r Talent.
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
                  How does the funding work?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={{ base: "sm", lg: "large" }}>
              Step 1: Purchase an evaluation account; trade for a minimum of 10
              days with at least 5 profitable days; achieve the evaluation
              target without hitting the drawdown limit or violating any of our
              rules. You will be upgraded to a Verification account.
              <br />
              <br />
              Step 2: Trade on your Verification account for a minimum of 10
              days with at least 5 profitable days; achieve the verification
              target without hitting the drawdown limit or violating any of our
              rules. You become qualified to become a Fund'r Talent.
              <br />
              <br />
              Step 3: Trade on your Fund'r Talent Account and withdraw your
              profits or scale your account up to $2Million.
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
                  What is the payment method?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={{ base: "sm", lg: "large" }}>
              We accept payments and process payouts via cryptocurrency,
              specifically Bitcoin and Tether (USDT- Trc20).
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
                  Which broker do you partner with?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={{ base: "sm", lg: "large" }}>
              Our evaluation, verification and Fund'r Talent accounts are
              supplied by TC Bridge.
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
                  Do you have a Discord community?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={{ base: "sm", lg: "large" }}>
              Yes, we have an open Discord community for every trader with a
              private channel for our community of Fund'r Talents. Join our
              Discord community [here] (https://discord.gg/tcmzYAk6vm).
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
                  What trading platform do you use?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={{ base: "sm", lg: "large" }}>
              All Fund'r accounts are Metatrader 5 compatible. Andriod users can
              download [here] IOS users can access the platform [here]
              (https://trade.mql5.com/trade).
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
                  When will I receive my credentials?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={{ base: "sm", lg: "large" }}>
              Account purchase is usually confirmed within 1 hour. After
              confirmation, your account details will be made available within
              48 hours of confirmation. Accounts purchased on weekends or public
              holidays will be confirmed the next working day. .
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
                  What is the profit split?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={{ base: "sm", lg: "large" }}>
              The profit split for Fund'r accounts is dependent on the account
              size. Accounts from $25k to $200k have a 75% profit split, while
              accounts from $400k to $2Million have a 60% profit split. .
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
                  How do i request a payout?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={{ base: "sm", lg: "large" }}>
              Payout requests can be made on the 13th and 27th of each month
              within a 36-hour window. When requesting, you submit the payout
              amount, the payout method and the receiving address then await
              confirmation. After confirmation, payouts are usually processed
              within 5-7 business days..
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
                  Do I need to withdraw my profits?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={{ base: "sm", lg: "large" }}>
              No, you can withdraw profits whenever you wish. We only take our
              profit split when you do. If you wish to keep profits in to help
              growth or to build a drawdown buffer, that is absolutely fine. You
              can also decide to use your profits to scale your account. .
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
                  Is the use of Robots and EAs allowed?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={{ base: "sm", lg: "large" }}>
              Yes, the use of automated trading is allowed, with the exception
              of Martingale-type robots..
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
                  Is copytrading allowed?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={{ base: "sm", lg: "large" }}>
              Yes, you can make use of signals or copy trades of profitable
              traders. NB: This method can be risky make sure you are aware of
              the risks involved before copying trades of others. .
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
                  What strategies are prohibited?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={{ base: "sm", lg: "large" }}>
              High Frequency Trading (Manual / EA) : multiple & very short-term
              trades (positions opened and closed under a minute, seconds or
              fractions of seconds) Martingale: multipliers of first opened
              position, same symbol and direction. Automated News-Based trading:
              bots with ability to read news items and take instant trading
              actions in response. Using these strategies will cause the
              deactivation of your account and voiding of profit withdrawals (if
              any). .
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
                  What is the Trader's Hub?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={{ base: "sm", lg: "large" }}>
              The Trader Hub is our state of the art trader dashboard offering
              intuitive account management, real time account analysis, custom
              trader objective metrics, real time global finance news updates
              and other technological perks. You can see it as your private
              office where you can manage your activities, request payouts and
              initiate scaling instantly with the click of a few buttons. .
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
                  Can I change my login details?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={{ base: "sm", lg: "large" }}>
              Your password can be changed but your email address cannot be
              changed.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </VStack>
    </Box>
  );
}

export default General
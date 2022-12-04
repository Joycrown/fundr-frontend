import React from 'react'
import {
  Box,
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  HStack,
  Image,
  Link,
  Text,
  useDisclosure,
  VStack
} from "@chakra-ui/react";
import { IoMenuOutline } from "react-icons/io5"
import { Link as Scroll } from "react-scroll";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const btnRef = React.useRef();

  return (
    <Box>
      <Box>
        <Box bg="brand.primary" w="100%" p={5}>
          <HStack justifyContent="space-between">
            <Link href='/'
              
            >
              <Image
                src="/images/Fund'r Logo.png"
                boxSize={{ base: "6", md: "10", lg: "10" }}
                width={{ base: "70%", md: "30%", lg: "100%" }}
              />
            </Link>
            <Box display={{ base: "block", lg: "none" }}>
              <HStack gap={2}>
                {/* <IoPerson size={20} /> */}
                <Box onClick={onOpen}>
                  <IoMenuOutline size={32} />
                </Box>
              </HStack>
              <Drawer
                size="xs"
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                // finalFocusRef={btnRef}
              >
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton />
                  <VStack
                    // pos="absolute"
                    // top={0}
                    // left={0}
                    // right={0}
                    flexDirection="column"
                    p={2}
                    pt={10}
                    pb={4}
                    m={2}
                    spacing={3}
                    rounded="sm"
                    shadow="sm"
                  >
                    <Scroll
                      activeClass="active"
                      to="howItWorks"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      <Button w="full" variant="ghost">
                        How It Works
                      </Button>
                    </Scroll>
                    <Scroll
                      activeClass="active"
                      to="FAQ"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      <Button w="full" variant="ghost">
                        FAQ
                      </Button>
                    </Scroll>
                    {/* <Scroll
                      activeClass="active"
                      to="FAQ"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      <Button w="full" variant="ghost">
                        Partners
                      </Button>
                    </Scroll>
                    <Button w="full" variant="ghost">
                      Leaderboard
                    </Button> */}
                  </VStack>
                </DrawerContent>
              </Drawer>
            </Box>
            <Box pl="10rem" display={{ base: "none", lg: "block" }}>
              <HStack spacing={10}>
                <Scroll
                  activeClass="active"
                  to="howItWorks"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <Text
                    cursor="pointer"
                    fontSize="large"
                    fontWeight="extrabold"
                  >
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
                  <Text
                    cursor="pointer"
                    fontSize="large"
                    fontWeight="extrabold"
                  >
                    FAQ
                  </Text>
                </Scroll>
                {/* <Scroll
                  activeClass="active"
                  to="howItWorks"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <Text
                    cursor="pointer"
                    fontSize="large"
                    fontWeight="extrabold"
                  >
                    Partners
                  </Text>
                </Scroll>
                <Text cursor="pointer" fontSize="large" fontWeight="extrabold">
                  Leaderboard
                </Text> */}
              </HStack>
            </Box>
            <Box pl="8rem" display={{ base: "none", lg: "block" }}>
              <Scroll
                activeClass="active"
                to="accountSelect"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Box p={5} border="1px" borderRadius="2xl" cursor="pointer">
                  <HStack spacing={5}>
                    {/* <IoPerson /> */}

                    <Text fontSize="large" fontWeight="extrabold">
                      Join Waitlist
                    </Text>
                  </HStack>
                </Box>
              </Scroll>
            </Box>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
}

export default Header
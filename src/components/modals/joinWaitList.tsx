import {
  Box,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react'
import React from 'react'

const JoinWaitList = ({ isOpen, onClose,value }: any) => {
  return (
    <Box>
      <Modal isOpen={isOpen} onClose={onClose} size={{ base: "xs", md: "md" }}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            mt={5}
            fontWeight="extrabold"
            fontSize={{ base: "2xl", md: "4xl" }}
            color="#6165D7B2"
          >
            Join Waitlist
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form
              action="https://link.us17.list-manage.com/subscribe/post?u=3d0c961e139280b56dff09d86&amp;id=ddbe36e928&amp;f_id=00114de0f0"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              target="_blank"
            >
              <Box pb={14}>
                <Text fontSize={{ base: "", md: "larger" }} mt={4}>
                  Be one of the first of our trading talents. You’ll be notified
                  when we launch.
                </Text>
                <Input
                  mt={8}
                  type="email"
                  name="EMAIL"
                  isRequired
                  variant="filled"
                  id="mce-EMAIL"
                  placeholder="Your email"
                />
                <Input
                  isReadOnly
                  mt={5}
                  isRequired
                  variant="filled"
                  type="text"
                  value={value}
                  name="MMERGE1"
                  id="mce-MMERGE1"
                />
                <Box
                  as="button"
                  type="submit"
                  id="join"
                  value="Subscribe"
                  name="subscribe"
                  bg="brand.primary"
                  color="#00000"
                  borderRadius="2xl"
                  mt={10}
                  width={{ base: "100%", md: "100%" }}
                  p={{ base: "4", md: "5", lg: "5" }}
                  fontWeight="bold"
                  fontSize="lg"
                >
                  JOIN
                </Box>
              </Box>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default JoinWaitList
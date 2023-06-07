import { useEffect } from "react";
import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Button,
  useDisclosure,
  Image,
  Center,
} from "@chakra-ui/react";
import welcome from "../../assets/art-love.svg";

export const Modal: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
      onOpen();
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem("hasVisited", "true");
    onClose();
  };

  return (
    <ChakraModal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Welcome aboard!</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Center>
            <Image boxSize="200px" py={5} src={welcome} />
          </Center>
          <Text>Thank you for visiting. Feel free to provide feedback.</Text>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </ChakraModal>
  );
};

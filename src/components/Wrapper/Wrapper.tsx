import { Box, Center, Container } from "@chakra-ui/react";
import { ReactNode } from "react";

type WrapperProps = {
  children: ReactNode;
};

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <Container>
      <Center>
        <Box
          minWidth="70em"
          boxShadow="xl"
          borderRadius="md"
          background="white"
          padding="3em"
          my={70}
        >
          {children}
        </Box>
      </Center>
    </Container>
  );
};

import { Box, Flex, Text } from "@chakra-ui/react";
import { Link, BrowserRouter } from "react-router-dom";

export const NavBar: React.FC = () => {
  return (
    <BrowserRouter basename="/">
      <Box borderBottom="1px" borderColor="gray.200" bg="white" px={4} py={4}>
        <Flex px={30} justifyContent="space-between" alignItems="center">
          <Link to="/">
            <Text fontSize="2xl" fontWeight="bold" color="blue.400">
              FinTrack
            </Text>
          </Link>
          <Flex>
            <Link to="/placeholder1">
              <Text fontSize="lg" mr={4} color="gray.500">
                About
              </Text>
            </Link>
            <Link to="/placeholder2">
              <Text fontSize="lg" mr={4} color="gray.500">
                Contact
              </Text>
            </Link>
          </Flex>
        </Flex>
      </Box>
    </BrowserRouter>
  );
};

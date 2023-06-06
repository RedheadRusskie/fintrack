import { Box, Flex, Text } from "@chakra-ui/react";

export const Footer: React.FC = () => {
  return (
    <Box bg="gray.200" py={10} px={8}>
      <Flex justifyContent="center">
        <Text fontSize="sm" color="gray.600">
          © {new Date().getFullYear()} FinTrack. No rights reserved.
        </Text>
      </Flex>
    </Box>
  );
};

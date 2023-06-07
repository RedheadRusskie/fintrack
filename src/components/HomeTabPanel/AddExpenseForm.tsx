import {
  Box,
  Center,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  SimpleGrid,
  Image,
  Select,
  Button,
  Text,
} from "@chakra-ui/react";
import gifts from "../../assets/art-gifts.svg";

export const AddExpenseForm: React.FC = () => {
  return (
    <SimpleGrid columns={2} spacing={10}>
      <Center>
        <Box>
          <Text fontWeight="bold" color="blue.400" fontSize="2xl">
            Add an expense
          </Text>
          <Image boxSize="20em" src={gifts} />
        </Box>
      </Center>
      <Box maxWidth="40em">
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input type="text" marginBottom="0.5em" />
          {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
          <FormLabel>Amount</FormLabel>
          <Input marginBottom="0.4em" type="number" />
          <FormLabel>Currency</FormLabel>
          <Select marginBottom="0.4em" placeholder="Select option">
            <option value="option1">CZK</option>
            <option value="option2">EUR</option>
          </Select>
          <FormLabel>Category</FormLabel>
          <Select marginBottom="0.4em" placeholder="Select option">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Button
            marginTop="1em"
            width="100%"
            fontWeight="bold"
            color="white"
            backgroundColor="blue.400"
          >
            Add
          </Button>
        </FormControl>
      </Box>
    </SimpleGrid>
  );
};

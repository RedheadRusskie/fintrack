import { useForm } from "react-hook-form";
import {
  Box,
  Center,
  FormLabel,
  Input,
  SimpleGrid,
  Image,
  Select,
  Button,
  Text,
  useToast,
} from "@chakra-ui/react";
import gifts from "../../assets/art-gifts.svg";
import { Expense, FormData } from "../../types";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import db from "../../../db/db";

export const AddExpenseForm: React.FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  const toast = useToast();
  const expensesCollection = collection(db, "Expenses");
  const categories = [
    "Transport",
    "Gifts",
    "Education",
    "Food",
    "Gaming",
    "Health",
    "Housing",
    "Online Subscriptions",
  ];

  const onSubmit = async (data: FormData) => {
    try {
      const dataToSubmit: Expense = { ...data, date: Timestamp.now() };
      await addDoc(expensesCollection, dataToSubmit);
      showToast("Expense added!", "success");
      reset();
    } catch (error) {
      showToast(String(error), "error");
    }
  };

  const showToast = (title: string, status: "success" | "error") => {
    toast({
      title,
      position: "top",
      status,
      isClosable: true,
    });
  };

  return (
    <SimpleGrid columns={2} spacing={10}>
      <Center>
        <Box>
          <Text fontWeight="bold" color="blue.400" fontSize="5xl">
            Add an expense
          </Text>
          <Image boxSize="20em" src={gifts} />
        </Box>
      </Center>
      <Box maxWidth="40em">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            marginBottom="0.5em"
            {...register("name", { required: true })}
          />
          {errors.name && <Text color="red.500">Name is required</Text>}
          <FormLabel>Amount</FormLabel>
          <Input
            type="number"
            marginBottom="0.4em"
            step="0.01"
            {...register("amount", { required: true, min: 0 })}
          />
          {errors.amount && <Text color="red.500">Amount is required</Text>}
          <FormLabel>Currency</FormLabel>
          <Select
            marginBottom="0.4em"
            placeholder="Select option"
            {...register("currency", { required: true })}
          >
            <option value="CZK">CZK</option>
          </Select>
          {errors.currency && <Text color="red.500">Currency is required</Text>}
          <FormLabel>Category</FormLabel>
          <Select
            marginBottom="0.4em"
            placeholder="Select option"
            {...register("category", { required: true })}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </Select>
          {errors.category && <Text color="red.500">Category is required</Text>}
          <Button
            marginTop="1em"
            width="100%"
            fontWeight="bold"
            color="white"
            backgroundColor="blue.400"
            type="submit"
          >
            Add
          </Button>
        </form>
      </Box>
    </SimpleGrid>
  );
};

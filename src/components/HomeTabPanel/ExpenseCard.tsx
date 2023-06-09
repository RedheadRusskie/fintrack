import {
  Box,
  Card,
  Center,
  Flex,
  IconButton,
  Text,
  Image,
  useToast,
} from "@chakra-ui/react";
import { Expense } from "../../types";
import { Timestamp } from "firebase/firestore";
import styles from "./ExpenseCard.module.scss";
import { DeleteIcon } from "@chakra-ui/icons";
import { collection, doc, deleteDoc } from "firebase/firestore";
import db from "../../../db/db";
import Travel from "../../assets/car.svg";
import Food from "../../assets/food.svg";
import Health from "../../assets/gym.svg";
import couple from "../../assets/couple.svg";
import { ExpenseCategories } from "../../enums";

type ExpenseCardProps = {
  expense: Expense;
};

export const ExpenseCard: React.FC<ExpenseCardProps> = ({ expense }) => {
  const toast = useToast();
  const getConvertedDate = (unixTime: Timestamp): string => {
    const unixTimeStamp = unixTime.seconds * 1000;
    return new Date(unixTimeStamp).toLocaleDateString(undefined, {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
  };

  const handleClick = async () => {
    try {
      const expenseRef = doc(collection(db, "Expenses"), expense.id);
      await deleteDoc(expenseRef);
      showToast("Expense deleted", "success");
    } catch (error) {
      showToast(String(error), "error");
    }
  };

  const getSourceByCategory = () => {
    switch (expense.category) {
      case ExpenseCategories.Food:
        return Food;
      case ExpenseCategories.Travel:
        return Travel;
      case ExpenseCategories.Health:
        return Health;

      default:
        return couple;
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
    <Card
      className={styles.card}
      minWidth="40em"
      padding="1em"
      margin="2em"
      boxShadow="xl"
      key={expense.id}
    >
      <Flex direction="row" alignItems="center">
        <Center>
          <Box
            borderRadius="full"
            padding="1em"
            backgroundColor="blue.100"
            margin="1em"
          >
            <Image boxSize="70px" src={getSourceByCategory()} />
          </Box>
        </Center>
        <Flex direction="column" flex="1" marginLeft="1em">
          <Text fontWeight="bold" color="blue.400" fontSize="2rem">
            {expense.name}
          </Text>
          <Text textTransform="uppercase" color="gray.500">
            {getConvertedDate(expense.date)}
          </Text>
          <Flex direction="row" alignItems="baseline">
            <Text color="green.400" fontSize="3rem" fontWeight="black">
              {expense.amount}
            </Text>
            <Text fontWeight="extrabold" color="green.600">
              {expense.currency}
            </Text>
          </Flex>
        </Flex>
        <IconButton
          borderRadius="full"
          onClick={handleClick}
          backgroundColor="red.400"
          width="2em"
          aria-label="Search database"
          icon={<DeleteIcon color="white" />}
        />
      </Flex>
    </Card>
  );
};

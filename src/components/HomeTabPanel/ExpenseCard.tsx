import { Card, Text } from "@chakra-ui/react";
import { Expense } from "../../types";
import { Timestamp } from "firebase/firestore";
import styles from "./ExpenseCard.module.scss";
import { DeleteIcon } from "@chakra-ui/icons";
import { collection, doc, deleteDoc } from "firebase/firestore";
import db from "../../../db/db";

type ExpenseCardProps = {
  expense: Expense;
};

export const ExpenseCard: React.FC<ExpenseCardProps> = ({ expense }) => {
  const getConvertedDate = (unixTime: Timestamp): string => {
    const unixTimeStamp = unixTime.seconds * 1000;
    return new Date(unixTimeStamp).toLocaleDateString(undefined, {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
  };

  const handleClick = async () => {
    const expenseRef = doc(collection(db, "Expenses"), expense.id);
    await deleteDoc(expenseRef);
  };

  return (
    <Card
      className={styles.card}
      minWidth="40em"
      padding="1em"
      margin="1em"
      key={expense.id}
    >
      <Text>{expense.name}</Text>
      <Text>{expense.amount}</Text>
      <Text>{getConvertedDate(expense.date)}</Text>
      <DeleteIcon onClick={handleClick} />
    </Card>
  );
};

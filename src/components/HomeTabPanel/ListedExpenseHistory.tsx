import { Box, Center, CircularProgress, Text } from "@chakra-ui/react";
import useGetExpenses from "../../hooks/useGetExpenses";
import { Expense } from "../../types";
import { ExpenseCard } from "./ExpenseCard";

export const ListedExpenseHistory: React.FC = () => {
  const { data: expenses, isLoading } = useGetExpenses();

  const getSortedExpenses = (expenses: Expense[]) =>
    [...expenses].sort((a, b) => b.date.seconds - a.date.seconds);

  return (
    <Center>
      <Box maxHeight="30em" overflow="auto" overflowY="auto">
        {expenses &&
          getSortedExpenses(expenses).map((expense: Expense) => {
            return <ExpenseCard key={expense.id} expense={expense} />;
          })}
        {isLoading && <CircularProgress isIndeterminate color="blue.400" />}
      </Box>
    </Center>
  );
};

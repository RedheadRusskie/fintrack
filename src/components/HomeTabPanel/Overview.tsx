import {
  Center,
  Box,
  SimpleGrid,
  GridItem,
  Text,
  Divider,
  CircularProgress,
  Card,
} from "@chakra-ui/react";
import useGetExpenses from "../../hooks/useGetExpenses";
import { Expense } from "../../types";
import { OverviewCard } from "./OverviewCard";

export const Overview: React.FC = () => {
  const { data: expenses, isLoading } = useGetExpenses();

  const getTotalDailyExpense = () => {
    if (expenses.length < 1 || isLoading) return;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const expensesForToday = expenses.filter((expense: Expense) => {
      const expenseDate = expense.date.toDate();
      expenseDate.setHours(0, 0, 0, 0);
      return expenseDate.getTime() === today.getTime();
    });

    return expensesForToday.reduce(
      (sum: number, expense: Expense) => sum + +expense.amount,
      0
    );
  };

  const getAverageExpense = () => {
    if (expenses.length < 1 || isLoading) return;

    const dailyExpenses: { [date: string]: number[] } = {};

    expenses.forEach((expense: Expense) => {
      const expenseDate = expense.date.toDate().toDateString();

      if (dailyExpenses[expenseDate])
        dailyExpenses[expenseDate].push(+expense.amount);
      else dailyExpenses[expenseDate] = [+expense.amount];
    });

    const averageDailyExpenses = Object.values(dailyExpenses).map(
      (expenses) => {
        const totalExpense = expenses.reduce((sum, amount) => sum + amount, 0);
        return totalExpense / expenses.length;
      }
    );

    const averageExpense =
      averageDailyExpenses.reduce((sum, expense) => sum + expense, 0) /
      averageDailyExpenses.length;

    return averageExpense.toFixed(2);
  };

  return (
    <Box>
      <Center>
        <SimpleGrid templateColumns="repeat(2, 1fr)" gap={4}>
          <GridItem>
            <OverviewCard
              title="Expenses today"
              value={getTotalDailyExpense()}
              isLoading={isLoading}
            />
          </GridItem>
          <GridItem>
            <OverviewCard
              title="Daily average"
              value={getAverageExpense()}
              isLoading={isLoading}
            />
          </GridItem>
          <GridItem>
            <Center>Test 3</Center>
          </GridItem>
        </SimpleGrid>
      </Center>
    </Box>
  );
};

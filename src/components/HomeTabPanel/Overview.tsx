import { Center, Box, SimpleGrid, GridItem, Text } from "@chakra-ui/react";
import useGetExpenses from "../../hooks/useGetExpenses";
import { Expense } from "../../types";

export const Overview: React.FC = () => {
  const { data: expenses, isLoading } = useGetExpenses();

  const getTotalDailyExpense = () => {
    if (expenses.length < 1 || isLoading) return 0;
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
    if (expenses.length < 1 || isLoading) return 0;

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
      <Box
        display="flex"
        alignItems="baseline"
        fontWeight="bold"
        fontSize="3xl"
      >
        <Text color="blue.400" marginRight="1rem">
          Your expenses for today:
        </Text>
        <Box display="flex" alignItems="flex-end">
          <Text color="green.400" marginRight="0.25rem" lineHeight="normal">
            {getTotalDailyExpense()}
          </Text>
          <Text
            fontWeight="extrabold"
            fontSize="xl"
            color="green.600"
            alignSelf="flex-end"
          >
            CZK
          </Text>
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems="baseline"
        fontWeight="bold"
        fontSize="3xl"
      >
        <Text color="blue.400" marginRight="1rem">
          Your average daily expense:
        </Text>
        <Box display="flex" alignItems="flex-end">
          <Text color="green.400" marginRight="0.25rem" lineHeight="normal">
            {getAverageExpense()}
          </Text>
          <Text
            fontWeight="extrabold"
            fontSize="xl"
            color="green.600"
            alignSelf="flex-end"
          >
            CZK
          </Text>
        </Box>
      </Box>

      <Center>
        <SimpleGrid templateColumns="repeat(2, 1fr)" gap={4}>
          <GridItem>
            <Center>Test 1</Center>
          </GridItem>
          <GridItem>
            <Center>Test 2</Center>
          </GridItem>
          <GridItem>
            <Center>Test 3</Center>
          </GridItem>
        </SimpleGrid>
      </Center>
    </Box>
  );
};

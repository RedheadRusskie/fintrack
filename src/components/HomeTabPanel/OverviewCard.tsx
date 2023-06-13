import {
  Box,
  Card,
  Center,
  CircularProgress,
  Divider,
  Text,
} from "@chakra-ui/react";
import { Expense } from "../../types";

type OverviewProps = {
  title: string;
  value: "totalToday" | "averageDaily";
  isLoading: boolean;
  expenses: Expense[];
};

export const OverviewCard: React.FC<OverviewProps> = ({
  title,
  value,
  isLoading,
  expenses,
}) => {
  const getTotalDailyExpense = (): number => {
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

  const getAverageExpense = (): number => {
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

    return Number(averageExpense.toFixed(2));
  };

  return (
    <Card border="1px" borderColor="gray.400" padding="2em" borderRadius="lg">
      <Text fontSize="2xl" color="gray.400" textTransform="uppercase">
        {title}
      </Text>
      <Divider />
      <Center padding="1em">
        {!isLoading && (
          <Box display="flex" alignItems="flex-end">
            <Text
              color="green.400"
              marginRight="0.25rem"
              lineHeight="normal"
              fontWeight="bold"
              fontSize="7xl"
            >
              {value === "averageDaily"
                ? getAverageExpense()
                : getTotalDailyExpense()}
            </Text>
            <Text
              fontWeight="extrabold"
              fontSize="2xl"
              color="green.600"
              alignSelf="flex-end"
            >
              CZK
            </Text>
          </Box>
        )}
        {isLoading && <CircularProgress isIndeterminate color="blue.400" />}
      </Center>
    </Card>
  );
};

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { ChartDataItem, Expense } from "../../types";
import { Box } from "@chakra-ui/react";

type ExpensesBarChartProps = {
  expenses: Expense[];
  isLoading: boolean;
};

export const ExpensesBarChart: React.FC<ExpensesBarChartProps> = ({
  expenses,
  isLoading,
}) => {
  const getChartData = (): ChartDataItem[] => {
    if (expenses.length === 0 || isLoading) return [];

    const groupedExpenses: Record<string, number> = {};

    expenses.forEach((expense: Expense) => {
      const date = expense.date.toDate().toLocaleDateString("en-GB");
      groupedExpenses[date] = (groupedExpenses[date] || 0) + +expense.amount;
    });

    return Object.entries(groupedExpenses).map(([date, amount]) => ({
      date,
      amount: amount as number,
    }));
  };

  return (
    <Box
      border="1px"
      borderColor="gray.400"
      padding="2em"
      borderRadius="lg"
      width="100%"
      display="flex"
      justifyContent="center"
    >
      {expenses && (
        <BarChart width={925} height={400} data={getChartData()}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="amount" fill="#4299e1" />
        </BarChart>
      )}
    </Box>
  );
};

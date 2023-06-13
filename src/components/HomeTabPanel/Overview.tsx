import { Center, Box, SimpleGrid, GridItem, Text } from "@chakra-ui/react";
import useGetExpenses from "../../hooks/useGetExpenses";
import { OverviewCard } from "./OverviewCard";
import { ExpensesBarChart } from "./ExpensesBarChart";

export const Overview: React.FC = () => {
  const { data: expenses, isLoading } = useGetExpenses();

  return (
    <Box>
      <Text fontWeight="bold" color="blue.400" fontSize="5xl">
        Overview
      </Text>
      <SimpleGrid columns={2} spacing={4}>
        <GridItem>
          <OverviewCard
            title="Expenses today"
            value="totalToday"
            isLoading={isLoading}
            expenses={expenses}
          />
        </GridItem>
        <GridItem>
          <OverviewCard
            title="Daily average"
            value="averageDaily"
            isLoading={isLoading}
            expenses={expenses}
          />
        </GridItem>
      </SimpleGrid>
      <Center>
        <Box mt={4}>
          <ExpensesBarChart expenses={expenses} isLoading={isLoading} />
        </Box>
      </Center>
    </Box>
  );
};

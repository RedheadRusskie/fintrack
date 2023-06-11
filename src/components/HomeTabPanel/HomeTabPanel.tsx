import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { AddExpenseForm } from "./AddExpenseForm";
import { ListedExpenseHistory } from "./ListedExpenseHistory";
import { Overview } from "./Overview";

export const HomeTabPanel: React.FC = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Overview</Tab>
        <Tab>Add Expense</Tab>
        <Tab>Expense List</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Overview />
        </TabPanel>
        <TabPanel>
          <AddExpenseForm />
        </TabPanel>
        <TabPanel>
          <ListedExpenseHistory />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

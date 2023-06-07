import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { AddExpenseForm } from "./AddExpenseForm";

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
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <AddExpenseForm />
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

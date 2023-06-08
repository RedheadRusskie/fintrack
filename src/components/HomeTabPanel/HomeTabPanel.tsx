import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { ListedExpenseHistoryTab } from "./ListedExpenseHistoryTab";

export const HomeTabPanel: React.FC = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
        <Tab>History</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <ListedExpenseHistoryTab />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

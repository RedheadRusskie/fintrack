import { Box } from "@chakra-ui/react";
import { Backdrop } from "../../components/Backdrop/Backdrop";
import { HomeTabPanel } from "../../components/HomeTabPanel/HomeTabPanel";
import { Modal } from "../../components/Modal/Modal";
import { Wrapper } from "../../components/Wrapper/Wrapper";
import useGetExpenses from "../../hooks/useGetExpenses";

export const Home: React.FC = () => {
  const { data: expenses, isLoading } = useGetExpenses();

  if (expenses) console.log(expenses);
  if (isLoading) console.log(isLoading);

  return (
    <Box>
      <Modal />
      <Backdrop>
        <Wrapper>
          <HomeTabPanel />
        </Wrapper>
      </Backdrop>
    </Box>
  );
};

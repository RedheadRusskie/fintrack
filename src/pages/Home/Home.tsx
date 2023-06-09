import { Box } from "@chakra-ui/react";
import { Backdrop } from "../../components/Backdrop/Backdrop";
import { HomeTabPanel } from "../../components/HomeTabPanel/HomeTabPanel";
import { Modal } from "../../components/Modal/Modal";
import { Wrapper } from "../../components/Wrapper/Wrapper";

export const Home: React.FC = () => {
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

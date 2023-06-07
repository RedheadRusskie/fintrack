import { Backdrop } from "../../components/Backdrop/Backdrop";
import { HomeTabPanel } from "../../components/HomeTabPanel/HomeTabPanel";
import { Modal } from "../../components/Modal/Modal";
import { Wrapper } from "../../components/Wrapper/Wrapper";

export const Home: React.FC = () => {
  return (
    <Backdrop>
      <Modal />
      <Wrapper>
        <HomeTabPanel />
      </Wrapper>
    </Backdrop>
  );
};

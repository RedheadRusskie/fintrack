import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

type BackdropProps = {
  children: ReactNode;
};

export const Backdrop: React.FC<BackdropProps> = ({ children }) => {
  return (
    <Box
      minHeight="100vh"
      width="100%"
      background="linear-gradient(38deg, rgba(0,83,108,1) 0%, rgba(92,92,201,1) 30%, rgba(0,212,255,1) 100%);"
    >
      {children}
    </Box>
  );
};

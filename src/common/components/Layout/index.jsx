/* eslint-disable react/prop-types */
import { Footer } from "../Footer";
import { StyledLayout } from "./styles";

export const Layout = ({ children }) => {
  return (
    <StyledLayout>
      {children}
      <Footer />
    </StyledLayout>
  );
};

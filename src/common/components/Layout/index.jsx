/* eslint-disable react/prop-types */
import { Footer } from "../Footer";
import { StyledLayout } from "./styles";

const Layout = ({ children }) => {
  return (
    <StyledLayout
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {children}
      <Footer />
    </StyledLayout>
  );
};

export { Layout };

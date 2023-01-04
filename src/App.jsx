import "./App.css";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";

 const StyledApp = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin: 0 auto;
 `;

const StyleFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  background-color: white;
  color: black;
  position: absolute;
  bottom: 0;
`;

function App() {
  return (
    <StyledApp>
      <h1>Content</h1>
      <h2>More Content</h2>
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    </StyledApp>
  );
}

export default App;

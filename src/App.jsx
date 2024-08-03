import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

//styled componets styling

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading type="h1">The wild Oasis</Heading>
        <Heading type="h2">The wild Oasis H2</Heading>
        <Heading as="h3">The wild Oasis H3</Heading>

        <Button onClick={() => alert("Cekirao si se!")}>Check in</Button>
        <Button onClick={() => alert("Odjavio si se!")}>Check out</Button>
        <Input type="number" placeholder="Number of Guests"></Input>
      </StyledApp>
    </>
  );
}

export default App;

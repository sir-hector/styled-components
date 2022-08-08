import "./App.css";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import logo from "./logo.svg";
import StyledButton, {
  FuncyButton,
  SubmitButton,
  AnimatedLogo,
  DarkButton
} from "./components/Button/Button";

const theme = {
  dark: {
    primary: '#000',
    text: '#fff'
  },
  light: {
    text: '#000',
    primary: '#fff'
  }
}

const GlobalStyle = createGlobalStyle`
  button {
    font-family: 'Roboto'
  }
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <AnimatedLogo src={logo}></AnimatedLogo>
        <StyledButton variant="outline" type="submit">
          Button
        </StyledButton>
        <div>
          <br></br>
        </div>
        <SubmitButton variant="outline" type="submit">
          Button
        </SubmitButton>
        <div>
          <br></br>
        </div>
        <StyledButton>Button</StyledButton>
        <div>
          <br></br>
        </div>
        <FuncyButton as="a">Fancy Button</FuncyButton>
        <br></br>
        <DarkButton>Dark </DarkButton>
      </div>
    </ThemeProvider>
  );
}

export default App;

import './App.css';
import StyledButton, {FuncyButton, SubmitButton} from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <StyledButton variant='outline' type='submit'>Button</StyledButton>
      <div>
        <br></br>
      </div>
      <SubmitButton variant='outline' type='submit'>Button</SubmitButton>
      <div>
        <br></br>
      </div>
      <StyledButton>Button</StyledButton>
      <div>
        <br></br>
      </div>
      <FuncyButton as = 'a'>Fancy Button</FuncyButton>
    </div>
  );
}

export default App;

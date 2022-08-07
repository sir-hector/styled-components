import './App.css';
import StyledButton from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <StyledButton variant='outline'>Button</StyledButton>
      <div>
        <br></br>
      </div>
      <StyledButton>Button</StyledButton>
    </div>
  );
}

export default App;

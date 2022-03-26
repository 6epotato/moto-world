import './App.css';
import Bikes from './Components/Bikes/Bikes';
import Header from './Components/Header/Header';
import Question from './Components/Question/Question';

function App() {
  return (
    <div className="App">
      <Header />
      <Bikes />
      <Question />
    </div>
  );
}

export default App;

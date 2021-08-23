import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import store from './redux/store';
import CakeContainer from './components/CakeContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
          <CakeContainer></CakeContainer>
        </Provider>
      </header>
    </div>
  );
}

export default App;

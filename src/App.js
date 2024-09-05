import './App.css';
import Header from './components/Header';
import Gender from './components/gender';
import Age from './components/age';
import WeightHeight from './components/heightWeight';
import CustomizedDialogs from "./components/dialogBox"
import AppContextWrapper from "./context/AppContext"
function App() {
  return (
    <div className="container">

      <div className='div1'>
        <AppContextWrapper >
          <Header />
          <Gender />
          <Age />
          <WeightHeight />
          <CustomizedDialogs />
        </AppContextWrapper>
      </div>
    </div>
  );
}

export default App;

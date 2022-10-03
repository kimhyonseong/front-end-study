import logo from './logo.svg';
import './App.css';
import Hello from "./component/Hello";
import {World} from "./component/World";
import {Welcome} from "./component/Welcome";
import styles from "./App.module.css";

function App() {
  const name = "Mike";
  const naver = {
      name:"네이버",
      url:"https://naver.com",
  };
  return (
    <div className="App">
        <Hello/>
        <World />
        <Welcome />
        <div className={styles.box}>
            App
        </div>
    </div>
  );
}

export default App;

import styles from "./App.module.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import './index.css'

function App() {

  return (

      <div className={styles.App}>
        <Navbar />
        <Hero />
      </div>

  )
}

export default App

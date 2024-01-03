import './App.css';

import { Header } from "./header/header.js";
import { Content } from "./content/content.js";
import { Footer } from "./footer/footer.js";




function App() {


  console.log(Number(localStorage.getItem("myValue")))
  const myFunction = () => {
    if(Number(localStorage.getItem("myValue")) === 0){
    localStorage.setItem("myValue", "1")
    
    } else if (Number(localStorage.getItem("myValue")) === 1){
    localStorage.setItem("myValue", "0")
    }



    window.location.reload();
  }

  return (
    <div className="App">

      <Header />
      <div className='hidden lg:block' style={{marginBottom: "100px", marginTop: "-145px", marginRight: "1200px", zIndex: "24343", position: "relative"}}>
       <button 
       onClick={myFunction}
       style={{ zIndex: "2434343"}}
      className='bg-white p-2'
      > 
      
      {Number(localStorage.getItem("myValue")) === 0 ? "AR" : "EN" } 
      </button>
      </div>
      <Content />

      <Footer />

    </div>
  );
}

export default App;

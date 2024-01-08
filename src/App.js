import './App.css';

import { Header } from "./header/header.js";
import { Content } from "./content/content.js";
import { Footer } from "./footer/footer.js";
import { ScrollProvider } from './ScrollContext';



function App() {




  return (
    <ScrollProvider >
      <div className='App'>

      <Header />

      <Content />
      </div>
      <Footer />

      </ScrollProvider>
  );
}

export default App;

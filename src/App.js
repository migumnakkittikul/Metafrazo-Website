import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import ProductDemo from './components/Product_Demo/Product_Demo';
import Product from './components/Product_Demo/Product.js';
import ProductVisual from './components/Product_Visual/Product_Visual';
import NavBar from './components/NavBar/NavBar';
import Footer from "./components/Footer/Footer.js"

function App() {

  // const [count, setCount] = useState(3);

  // function alertHelloWorld() {
  //   alert('Hello World!');
  // }


  return (
    <div className="App">
      <NavBar />
      <Header />
      <Product />
      <ProductVisual />
      <Footer />
      {/* <Comp1 />
      <Comp1 />
      <Comp1 /> */}
    </div>
  );
}

export default App;

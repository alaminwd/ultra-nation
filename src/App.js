import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './componets/Country/Country';
import Cart from './componets/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);
  const addCountry = (country) =>{  
    const newCart = [...cart, country];
    setCart(newCart)   
  }
  
 
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => {
        setCountries(data)
        // console.log(data);
        // const names = data.map(country => country.name.common)
        // console.log(names);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="App">
      <h2>Countries loaded: {countries.length}</h2>
      <h3>{cart.length}</h3>
      <Cart cart={cart}></Cart>
      {
        countries.map(country => <Country country={country} addCountry={addCountry}></Country>)
      }
      
    </div>
  );
}


export default App;

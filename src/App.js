import './App.css';
import Header from './containers/header';
import ProductListing from './containers/productListing';

function App() {

  
  return (
    <div className="App">
      <Header />
      <ProductListing />
      <div className='footer'>All rights reserverd ©️</div>

    </div>
  );
}

export default App;

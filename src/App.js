
import { Header } from './components/header';

import { Layout } from './components/Layout';

import { Cartprovider } from './providers/cartProvider';

import { Routes } from './Routes'

import './App.css';

function App() {
  return (
    <Cartprovider>
<Layout className="App" size='default'>
      <Header/> 
<Routes/>

</Layout>

</Cartprovider>
  );
}

export default App;

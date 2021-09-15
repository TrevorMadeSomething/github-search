
import Banner from './components/Banner';
import MyCard from './components/MyCard';
import Search from './components/Search';
import './styles/app.scss';
import { useState } from 'react';




function App() {

  const [searchedValue, setSearchedValue] = useState();
  const [noPerson, setNoPerson] = useState(false);


  return (
    <div className="body">
      <div className="container">
        <Banner />
        <Search setSearchedValue={setSearchedValue} noPerson={noPerson} />
        <MyCard searchedValue={searchedValue} setNoPerson={setNoPerson} />
      </div>
    </div>
  );
}

export default App;

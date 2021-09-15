
import Banner from './components/Banner';
import MyCard from './components/MyCard';
import Search from './components/Search';
import './styles/app.scss';


function App() {
  return (
    <div className="body">
      <div className="container">
        <Banner />
        <Search />
        <MyCard />
      </div>
    </div>
  );
}

export default App;

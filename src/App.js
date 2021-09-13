import {useEffect, useState} from 'react'
import axios from  'axios'
import './App.css';
import { TableCoins } from "./components/TableCoins";
import { Footer} from './components/Footer'
import Pagination from './components/Pagination';

function App() {

  const restApi = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=false"
  const [currentPage, setCurrentPage] = useState(1)
  const [coinsPerPage] = useState(10)
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const getData = async () => {
    setLoading(true)
    const rest = await axios.get(restApi);
    setLoading(false)
    setCoins(rest.data);
  }

  useEffect(() => {
    getData();
  }, [])

  const indexOfLastCoin = currentPage * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  const currentCoins = coins.slice(indexOfFirstCoin, indexOfLastCoin);

  const paginate = numberPage => setCurrentPage(numberPage);

  return (
    <div>
      <div className="container">
        <div className="row">
          <input type="text" placeholder="Search a Coin" className="form-control bg-dark text-light border-0 mt-4 text-center" onChange={e => setSearch(e.target.value)} />
          <TableCoins coins={currentCoins} totalCoins={coins} search={search} loading={loading}/>
          <Pagination coinsPerPage={coinsPerPage} totalCoins={coins.length} paginate={paginate}/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

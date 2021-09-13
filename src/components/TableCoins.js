import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import CoinRow from "./CoinRow";

export const TableCoins = ({coins, totalCoins, search, loading}) => {
    if(loading)
        return <h2 className="text-center mt-4">Loading...</h2>
    const titles = ["#", "Coin", "Price", "Price Changes", "24h Volumen"];
    const fil = (fil) => fil.name.toLowerCase().includes(search.toLowerCase()) || fil.symbol.toLowerCase().includes(search.toLowerCase());
    let newCoins = search ? totalCoins.filter(fil).slice(0, 10) : coins;
    return (
        <div className="container">
            <table className="table table-dark mt-4 table-hover">
                <thead>
                    <tr>
                        {titles.map((title, i) => (
                            <td key={i}>{title}</td>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {newCoins.map((coin, index) => (
                        <CoinRow coin={coin} key={index} index={index + 1}/>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
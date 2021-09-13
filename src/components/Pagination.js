import React from 'react'

const Pagination = ({ coinsPerPage, totalCoins, paginate}) => {
    const pageNumber = [];

    for (let index = 1; index < Math.ceil(totalCoins / coinsPerPage); index++) {
        pageNumber.push(index)
    }
    return (
        <div className="text-center">
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {
                        pageNumber.map(num => (
                            <li key={num} className="page-item">
                                <a onClick={() => paginate(num)} className="page-link bg-dark text-light" href="!#">{num}</a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Pagination

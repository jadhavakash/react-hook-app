import React from 'react'

export const Pagination = (postsPerPage,totalPosts,paginate) => {
    const pageNumbers = [];

    for(let i=1; i<=Math.ceil(totalPosts/postsPerPage); i++){
        pageNumbers.push(i);
    }
    return (
        // <nav>
        //     <ul className='pagination'>
        //         {pageNumbers.map(number => (
        //         <li key={number} className='page-item'>
        //             <a onClick={() => paginate(number)} href='!#' className='page-link'>
        //             {number}
        //             </a>
        //         </li>
        //         ))}
        //     </ul>
        // </nav>
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span class="sr-only">Previous</span>
                </a>
                </li>
                {pageNumbers.map(number =>(
                    <li className="page-item" key={number}>
                        <a href="" className="page-link">{number}</a>
                    </li>
                ))}
                {/* <li class="page-item"><a class="page-link" href="#">1</a></li> */}
                <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span class="sr-only">Next</span>
                </a>
                </li>
            </ul>
        </nav>
    )
}

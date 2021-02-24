import React from 'react';
import List from "../UI/List";
import LI from "../UI/List/Item";

const Pagination = ({classes, postsPerPage, totalPosts, paginate, currentPage}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    const positionTop = () => {
        window.scrollTo(0, 400);
    };

    const prevPage = () => {
        paginate(currentPage - 1);
        positionTop();
    };

    const nextPage = () => {
        paginate(currentPage + 1);
        positionTop();
    };

    return (
        <div className={`pagination-wrap ${classes}`}>
            <List classes={'pagination'}>
                <li className="prev">
                    <button className={currentPage === 1 ? 'disabled' : null} onClick={() => prevPage()}>
                        <i className="fa fa-long-arrow-left"/> Previous
                    </button>
                </li>
                {
                    pageNumbers.map(number => (
                        <LI key={number}>
                            <button onClick={() => {
                                paginate(number);
                                positionTop();
                            }}
                                    className={number === currentPage ? 'current' : null}>
                                {number}
                            </button>
                        </LI>
                    ))
                }
                <li className="next">
                    <button className={currentPage === pageNumbers.length ? 'disabled' : null}
                            onClick={() => nextPage()}>
                        Next <i className="fa fa-long-arrow-right"/>
                    </button>
                </li>
            </List>
        </div>
    );
};

export default Pagination;
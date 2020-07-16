import React from 'react';

const Search = () =>{

    return (

        <div className="search">

            <form className="search-form">
                <input className="search-bar"  type="text" placeholder="Search"/>
                <button className="search-button" type="submit">Go</button>
            </form>
        </div>


    );
};

export default Search;
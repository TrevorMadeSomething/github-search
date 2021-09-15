import React from 'react'
import "../styles/search.scss"

export default function Search() {
    return (
        <div className="search">
            <div className="left">
                <img src="/assets/icon-search.svg" alt="search-icon" />
                <input type="text" placeholder="Search Github username..." />
            </div>
            <button>Search</button>
        </div>
    )
}

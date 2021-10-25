import React, {useState} from 'react';

export function Search ({text}) {

    const handleSearch = (event) => {
        if(event.target.value.length >= 3){
            text(event.target.value);
        }
    }

    return (
        <form onChange={handleSearch}>
            <div className="input-group">
        <input type="text" className="form-control" id="search" placeholder="Search" />
      </div>
        </form>
    )
}
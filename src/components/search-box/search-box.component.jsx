import React from "react";
import './search-box.styles.css';

export const SearchBox = (props) => {
    const onSearchChange = (e) => {
        props.onSearchChange(e.target.value);
    }
    return(
        <div>
            <input 
                className="search"
                type="search" 
                placeholder={props.placeholder}
                onChange={onSearchChange}
            />
        </div>
    );
}
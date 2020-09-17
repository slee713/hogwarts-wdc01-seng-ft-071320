import React from 'react'

const Filter = (props) => {
    return(
        <div>
            <label>Filter By:  </label>
            <select onChange={(e) => props.filter(e.target.value)}>
                <option disabled selected value> -- select and option -- </option>
                <option value="greased">Greased</option>
                <option value="ungreased">Ungreased</option>
                <option value="all">All</option>
            </select>
            
        </div>
    )
}

export default Filter
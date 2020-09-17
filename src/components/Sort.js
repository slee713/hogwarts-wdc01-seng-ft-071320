import React from 'react'

const Sort = (props) => {
    return(
        <div>
            <p>Sort By: 
                <label>
                    <input type="radio" value="name" checked={props.sort==="name"} onChange={(e) => props.sortBy(e.target.value)}/> Name
                </label>
                <label>
                    <input type="radio" value="weight" checked={props.sort==="weight"} onChange={(e) => props.sortBy(e.target.value)}/> Weight
                </label>

            </p>
        </div>
    )
}

export default Sort
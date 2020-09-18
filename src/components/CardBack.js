import React from 'react'

class CardBack extends React.Component{
    render(){
        let pig = this.props.pig
        return(
            <div onClick={this.props.click}>
                <p>Name: {pig.name}</p>
                <p>Specialty: {pig.specialty}</p>
                <p>Weight: {pig.weight}</p>
                <p>Heighest Medal Achieved: {pig['highest medal achieved']}</p>
            </div>
    )
    }
}

export default CardBack
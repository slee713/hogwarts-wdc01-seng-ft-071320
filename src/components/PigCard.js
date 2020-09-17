import React , { Component } from 'react'

class PigCard extends Component {
    state = {
        status: false
    }
    
    handleClick = () => {
        let newStatus = !this.state.status
        this.setState({
            status: newStatus
        })
    }

    render(){
        let pig = this.props.pig
        let imageName = pig.name.toLowerCase().split(" ").join("_")
        let pigImage = require(`../hog-imgs/${imageName}.jpg`)
        return(
            <div onClick={this.handleClick} className ="ui eight wide column">
                <img src={pigImage} alt={""} />
                <p>{pig.name}</p>
                {this.state.status ? 
                    (<div>
                        <p>Specialty: {pig.specialty}</p>
                        <p>Weight: {pig.weight}</p>
                        <p>Heighest Medal Achieved: {pig['highest medal achieved']}</p>
                    </div>)
                : null}
            </div>
        )
    }
}

export default PigCard
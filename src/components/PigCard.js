import React , { Component } from 'react'
import CardFront from './CardFront'
import CardBack from './CardBack'
class PigCard extends Component {
    state = {
        status: true
    }
    
    handleClick = () => {
        let newStatus = !this.state.status
        this.setState({
            status: newStatus
        })
    }

    render(){
        
        return(
            <div  className ="ui eight wide column">
                {this.state.status ? <CardFront pig={this.props.pig} click={this.handleClick}/> : 
                <CardBack pig={this.props.pig} click={this.handleClick} />}
            </div>
        )
    }
}

export default PigCard
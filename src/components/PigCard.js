import React , { Component } from 'react'
import CardFront from './CardFront'
import CardBack from './CardBack'
class PigCard extends Component {
    

    render(){
        
        return(
            <div  className ="ui eight wide column">
                {this.props.pig.clicked ? <CardFront pig={this.props.pig} click={() =>this.props.clicked(this.props.pig)}/> : 
                <CardBack pig={this.props.pig} click={() => this.props.clicked(this.props.pig)} />}
            </div>
        )
    }
}

export default PigCard
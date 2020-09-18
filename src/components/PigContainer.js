import React from 'react'
import PigCard from './PigCard'

class PigContainer extends React.Component {
   
   

    render(){
        return(
            <div className="ui grid container">
                {this.props.pigs.map((pig, idx) => <PigCard pig={pig} key={idx} clicked={this.props.clicked} />)}
            </div>
        )
    }
}

export default PigContainer
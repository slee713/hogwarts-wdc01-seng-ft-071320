import React from 'react'
import PigCard from './PigCard'

class PigContainer extends React.Component {
   
   

    render(){
        return(
            <div className="ui grid container">
                {this.props.pigs.map(pig => <PigCard pig={pig} />)}
            </div>
        )
    }
}

export default PigContainer
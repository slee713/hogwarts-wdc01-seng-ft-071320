import React from 'react'

class CardFront extends React.Component {
    render(){
        let pig = this.props.pig
        let imageName = pig.name.toLowerCase().split(" ").join("_")
        let pigImage = require(`../hog-imgs/${imageName}.jpg`)
        return(
            <div>
                <img src={pigImage} alt={""} onClick={this.props.click} />
                <p>{pig.name}</p>
            </div>
        )
    }
}

export default CardFront
import React from 'react'

class GiftList extends React.Component {
    constructor() {
        super()

        this.state = {

        }
    }

    render() {
        console.log(this.props.ids)
        return <ul>
            {this.props.arrayOfGifs.map((gif, index) => <li key={this.props.ids[index]}><img src={gif} alt={gif}/></li>)}
        </ul>
    }

}

export default GiftList
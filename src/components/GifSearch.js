import React from 'react'

class GifSearch extends React.Component {

    constructor() {
        super()

        this.state = {
            userInput: ''
        }

    }

    handleChange = e => {
        console.log(e.target)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return <form onSubmit={e => {
                    this.setState({
                        userInput: ''
                    })
                    this.props.handleSubmit(e, this.state.userInput)
                }}>
            <input type='text' name='userInput' value={this.state.userInput} onChange={e => this.handleChange(e)}/>
            <input type='submit' value='submit' />
        </form>
    }

}

export default GifSearch
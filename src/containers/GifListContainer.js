import React from 'react'
import GiftList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GiftListContainer extends React.Component {
    constructor() {
        super()

        this.state = {
            arrayOfGifs: ['GIF 1', 'GIF 2', 'GIF 3'],
            userSearch: 'dolphin',
            ids: ['id 1', 'id 2', 'id 3']
        }
    }

   handleSubmit = (e, userSearch) => {
        e.preventDefault()
        console.log('updateState to:' + userSearch)
        this.setState({
            userSearch: userSearch
        }, () => this.fetchGIF())
   }

   componentDidMount() {
       this.fetchGIF()
   }

    fetchGIF = () => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.userSearch}&api_key=uhLMGdCTfkBkoTXl1Jh5E10JapnwKiEp&rating=g&limit=3`)
            .then(resp => resp.json())
            .then(gifs => {
                console.log(gifs)
                this.setState({
                    arrayOfGifs: gifs.data.map(gif => gif.images.original.url),
                    ids: gifs.data.map(gif => gif.id)
                })
            })
    }

    render() {
        return <div>
            <GifSearch handleSubmit={this.handleSubmit}/>
            <GiftList arrayOfGifs={this.state.arrayOfGifs} ids={this.state.ids}/>
        </div>
    }

}

export default GiftListContainer
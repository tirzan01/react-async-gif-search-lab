import React from 'react'

import NavBar from './NavBar'
import GiftListContainer from '../containers/GifListContainer'

// the App component should render out the GifListContainer component 
// fetch: https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=uhLMGdCTfkBkoTXl1Jh5E10JapnwKiEp&rating=g

const App = () => {
  return (
    <div>
        < NavBar color='black' title="Giphy Search" />
        <GiftListContainer />
    </div>
  )
}

export default App

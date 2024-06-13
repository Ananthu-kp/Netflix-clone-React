import './App.css'
import Banner from './components/Banner'
import NavBar from './components/NavBar'
import RowPost from './components/RowPost'

import {orginals, action, romance, horror, comedy, anime, malayalam, hindi} from './urls'

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Banner />

      <RowPost url={orginals} title='Netflix Originals' />
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={romance} title='Romance' isSmall />
      <RowPost url={horror} title='Horror' isSmall />
      <RowPost url={comedy} title='Comedy' isSmall />
      <RowPost url={anime} title='Anime' isSmall />
      <RowPost url={malayalam} title='Mollywood' isSmall />
      <RowPost url={hindi} title='Bollywood' isSmall />

    </div>
  )
}

export default App

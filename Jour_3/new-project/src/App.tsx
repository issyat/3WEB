import { Divider } from '@mui/material'
import './App.css'
import LevelOne from './components/LevelOne'
import LevelThree from './components/LevelThree'
import LevelTwo from './components/LevelTwo'

function App() {

  return (
    <>
      <LevelOne />
      <Divider sx={{margin:1}}/>
      <LevelTwo />
      <Divider sx={{margin:1}}/>
      <LevelThree />
    </>
  )
}

export default App

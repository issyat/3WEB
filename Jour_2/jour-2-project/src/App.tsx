import './App.css'
import JustifyContentCenter from './components/JustifyContentCenter'
import ReverseContentCenter from './components/ReverseContentCenter'

function App() {

  return (
    <>
      <header style={{ textAlign: 'center' }}>
        <h1>Css cheat sheet</h1>
      </header>
      <main>
        <section>
          <div id='container'>
            <div>
              <h1>Justify-Content: Space Between</h1>
              <div className='sub-container-one'>
                <div className='carre'></div>
                <div className='carre'></div>
                <div className='carre'></div>
              </div>
            </div>
            <div>
              <h1>Justify-Content-Center | Align Items : End</h1>
              <div className='sub-container-two'>
                <div className='carre'></div>
                <div className='carre'></div>
                <div className='carre'></div>
              </div>
            </div>
            <div>
              <h1>Flex-direction : Column , J-C: center, A-I: Center</h1>
              <div className='sub-container-three'>
                <div className='carre'></div>
                <div className='carre'></div>
                <div className='carre'></div>
              </div>
            </div>
          </div>
        </section>

        <hr />

        <section>
          <div id='grid-container'> 
            <div>
              
            </div>
          </div>
        </section>
      </main>

      <JustifyContentCenter />
      <ReverseContentCenter />
    </>
  )
}

export default App

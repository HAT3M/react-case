import Header from './components/Header'
import Footer from './components/Footer'
import Screens from './screens/Screens'


function App() {
  return (
    <div className='container'>
      <Header />
      <main className='main-wrapper'>
        <Screens />
        
      </main>
      <Footer />
    </div>
  )
}

export default App

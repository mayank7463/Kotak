import './App.css'
import Financial from './Compoents/Financial/Financial'
import Navbar from './Compoents/Navbar/Navbar'
import BusinessOverview from './Pages/BuisnessOverview/BuisnessOverview'
import CreatingValue from './Pages/CreatingValue/CreatingValue'
import MDmessage from './Pages/MDmessage/MDmessage'
import Strategy from './Pages/Strategy/Strategy'

function App() {

  return (
    <>
    <Navbar/>
    <div className='app'>
      
    {/* <MDmessage/> */}
    {/* <BusinessOverview/> */}
    {/* <Financial/> */}
    {/* <Strategy/> */}
    <CreatingValue/>
     </div>
    </>
  )
}

export default App

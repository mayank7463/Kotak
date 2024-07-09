import './App.css'
import Navbar from './Compoents/Navbar/Navbar'
import BusinessOverview from './Pages/BuisnessOverview/BuisnessOverview'
import MDmessage from './Pages/MDmessage/MDmessage'

function App() {

  return (
    <>
    <Navbar/>
    <div className='app'>
      
    {/* <MDmessage/> */}
    <BusinessOverview/>
     </div>
    </>
  )
}

export default App

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import MyLayout from './Layouts/MyLayout'
import FullModelPage from './Components/FullModelPage'
import Resume from './Components/Resume'
// import WhatsAppIcon from './Components/WhatsAppIcon'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route element={<MyLayout />} path='/'>
    <Route element={<Home />} path='/'/>
            <Route path="/model" element={<FullModelPage />} />
            <Route path="/resume" element={<Resume />} />
    </Route>
    </Routes>
    </BrowserRouter>
            {/* <WhatsAppIcon /> */}
    </>
  )
}

export default App

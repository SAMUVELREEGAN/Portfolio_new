import NavSec from '../Components/NavSec'
import { Outlet} from 'react-router-dom'
import Footer from '../Pages/Footer'

const MyLayout = () => {
  return (
    <div>
        <NavSec />
        <Outlet />
        <Footer />
    </div>
  )
}

export default MyLayout
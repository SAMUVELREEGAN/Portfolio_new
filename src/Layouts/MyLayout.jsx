import NavSec from '../Components/NavSec'
import { Outlet} from 'react-router-dom'

const MyLayout = () => {
  return (
    <div>
        <NavSec />
        <Outlet />
    </div>
  )
}

export default MyLayout
import Expansionbar from "../components/Expansionbar"
import InstanceList from "../components/InstanceList"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

const Instance = () => {
  return (
    <div>
        <Navbar/>
        <div className="flex">
        <Sidebar/>
        <Expansionbar/>
        <InstanceList/>
        </div>
    </div>
  )
}
export default Instance
import "./home.css"
import Topbar from "../../components/topbar/Topbar"
import Leftbar from "../../components/leftbar/Leftbar"
import Feeds from "../../components/feeds/Feeds"
import Rightbar from "../../components/rightbar/Rightbar"

function Home() {
  return (
    <>
      <Topbar/>
      <div className="homeContainer">
        <Leftbar/>
        <Feeds />
        <Rightbar />
      </div>
    </>
  
  )
}

export default Home
import Home from "../../Pages/Home"
import Contact from "../../Pages/Contact"
import Infos from "../../Pages/Infos"
// import Planning from "../../Pages/Planinng"
import GalleryActivity from "../../Pages/GalleryActivity"
import GalleryAnimals from "../../Pages/GalleryAnimals"

const Layout = () => {
    return(
        <div className="layout">
            <Home />
            <GalleryActivity/>
            <Infos />
            <GalleryAnimals/>
            <Contact/> 
            {/* <Planning/> */}
            
        </div>
    )
}

export default Layout
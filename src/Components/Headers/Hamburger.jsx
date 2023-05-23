import { useState } from "react"

const Hamburger = (props) =>{

    const [isOpen, setIsOpen] = useState(true);

    const open_close_menu = (e) =>{
        e.preventDefault();
        setIsOpen(!isOpen);
    }

    return (
        <div className="hamburger-menu" id={isOpen ? "open" : "close"} onClick={open_close_menu}>
            <div id="line-1"></div>
            <div id="line-2"></div>
            <div id="line-3"></div>
        </div>
    )
}

export default Hamburger;
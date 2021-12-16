import {useState, useEffect} from 'react'
import SearchProject from './SearchProject'

const navbarLinksData = [
    {ref:"#about", label:"About", activeStyle:false},
    {ref:"#projects", label:"Projects", activeStyle:false},
    {ref:"#contact", label:"Contact", activeStyle:false},
]

const NavbarHEIGHT = 50;

const NavBar = () => {
    const [navbarLinks, setNavbarLinks] = useState(navbarLinksData)
    const [offset, setOffset] = useState(false)

    useEffect(() => {
        // TODO When refreshing from Projects or Contact the style is wrong...
        // TODO to fix check the route and update the style according to the current route
        toggleActiveClass(0)
    }, [])
    
    useEffect(() => {
        window.onscroll = () => {
            // const navbar = document.querySelector("#navbar")
            // scrollFlag = window.scrollY > navbar.clientHeight
            setOffset(window.scrollY > NavbarHEIGHT)
        }
    }, [])

    const toggleActiveClass = (index) => {
        setNavbarLinks(navbarLinksData.map((navbarLink, _index) => 
        _index===index ? {...navbarLink, activeStyle:true} : navbarLink ))
    }

    return (
        <div className={`navbar navbar-transition ${offset ? "scrolled": ""}`}>
            <div className="nav-links">
                {navbarLinks?.map((navbarLink, _index) => (
                    <a 
                        key={_index}
                        className={`navbar-transition ${offset ? "scrolled": ""} nav-link ${navbarLink.activeStyle?"active":""}`} 
                        href={navbarLink.ref} 
                        onClick={() => toggleActiveClass(_index)}
                    >
                        {navbarLink.label}
                    </a>
                ))}
            </div>
            <SearchProject offset={offset} />
        </div>
    )
}

export default NavBar
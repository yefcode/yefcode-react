import {useState} from 'react'

const NavbarHEIGHT = 48;
let lastSearch = "";
let searchNavCounter = 0;

const SearchProject = ({offset}) => {
    const [searchText, setSearchText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault()
        if (!searchText) return
        
        if (lastSearch === searchText) {
            searchNavCounter++
        } else {
            lastSearch = searchText
            searchNavCounter = 0
        }

        let querySeveralElements = document.querySelectorAll("h1, h2, p, a, label")

        const elements = [...querySeveralElements].filter(element => {
            return element.textContent.toLowerCase().indexOf(searchText.toLowerCase()) >= 0
        });
    
        if (searchNavCounter >= elements.length) {
            searchNavCounter = 0
        }
    
        const element = elements[searchNavCounter]
    
        if (element?.getBoundingClientRect()) {
            window.scrollTo(0, element?.getBoundingClientRect().top + window.scrollY - NavbarHEIGHT) 
        }
    }
    return (
        <form className="search-form" onSubmit={onSubmit}>
            <input 
                className={`navbar-transition ${offset ? "scrolled": ""} nav-search` }
                type="text" 
                placeholder="Search Project..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
            <button type="submit" className="submit-search-button">
                <svg className={`navbar-transition ${offset ? "scrolled": ""} svg-search-icon`}>
                    <path
                        d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                </svg>
            </button>
        </form>
    )
}

export default SearchProject
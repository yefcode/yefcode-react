import { useState, useEffect } from 'react'
import Project from './Project'

const Projects = () => {
    const [repos, setRepos] = useState([])

    useEffect(() => {
        const getRepos = async () => {
            let reposFromServer = await fetchRepos()
            reposFromServer = reposFromServer.filter((repo) => repo && !repo.fork);
            setRepos(reposFromServer)
        }
        getRepos()
    }, [])

    const fetchRepos = async () => {
        const res = await fetch('https://api.github.com/users/yefcode/repos')
        const data = await res.json()
        return data
    }

    return (
        <section className="blobs">
            <div className="wave">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="shape-fill"
                    ></path>
                </svg>
            </div>
            <div className="section-content" id="projects">
                <h2 className="content-title">
                    Projects
                </h2>
                <ul className="repo-list">
                    {repos.map((repo, _index) => (
                        <Project key={_index} repo={repo} />                        
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Projects
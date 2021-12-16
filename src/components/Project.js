import GitHubButton from 'react-github-btn'

const Project = ({repo}) => {

    let desc = repo.description
    if (desc.length > 132) {
        desc = desc.substr(0, 132);
        desc = desc.substr(0, Math.min(desc.length, Math.max(desc.indexOf(" "), desc.indexOf(","), desc.indexOf("."))));
        if (desc.length <= 10) {
            desc = desc.substr(0, 132);
        }
        desc += "...";
    }
    return (
        <li id="repo-item" className="repo-list-item fade-in-bottom">
            <div className="repo-item-content">
                <a className="repo-title-name" href={repo.html_url}>{repo.name}</a>
                <p className="repo-description">
                    {desc}{repo.description && repo.description.length !== desc.length && <a className="repo-description-readmore" href={repo.html_url}>(see more)</a>}
                </p>
            </div>
            <div className="github_buttons">
                <GitHubButton
                href={`https://github.com/yefcode/${repo.name}/subscription`}
                data-icon="octicon-eye" data-size="large" 
                aria-label={`Watch yefcode/${repo.name} on GitHub`}>
                    Watch
                </GitHubButton>
                <GitHubButton 
                href={`https://github.com/yefcode/${repo.name}`} 
                data-icon="octicon-star" data-size="large" 
                aria-label={`Star yefcode/${repo.name} on GitHub`}>
                    Star
                </GitHubButton>
                <GitHubButton 
                href={`https://github.com/yefcode/${repo.name}/fork`} 
                data-icon="octicon-repo-forked" data-size="large" 
                aria-label={`Fork yefcode/${repo.name} on GitHub`}>
                    Fork
                </GitHubButton>
            </div>
        </li>
    )
}

export default Project
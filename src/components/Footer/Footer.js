import GitHubButton from 'react-github-btn'
import './Footer.scss'

const Footer = () => {
    const today = new Date();
	const year = today.getFullYear();
    return (
        <div className="footer-container">
            <footer className="section-content bottom-space">
                <GitHubButton href="https://github.com/yefcode" data-size="large"
                    aria-label="Follow @yefcode on GitHub">Follow @yefcode</GitHubButton>
                <small className="text-muted">YEFERSON MARIN :v</small>
                <small className="text-msuted" id="timestamp">{`© 2021 - ${year}`}</small>
            </footer>
        </div>
    )
}

export default Footer
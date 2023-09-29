import linkedinIcon from '../images/linkedin.jpg'
import githubIcon from '../images/008-github.png'

function Profesional() {
  return (
    <div>
         <a
            href="https://github.com/NurdPlay"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="GitHub" className="social-icon-about" />
          </a>
          <a
            href="https://www.linkedin.com/in/john-elliott-0a13a31b1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="social-icon-about"
            />
          </a>
    </div>
  )
}

export default Profesional

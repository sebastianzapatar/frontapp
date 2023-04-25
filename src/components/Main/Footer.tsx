import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"

export const Footer = () => {
  return (
    <footer className="bg-dark text-center text-lg-start">
            <div className="text-light text-center p-3">
                &copy; 2023 Clase Ingeniería Web  <FaInstagram/>  
                <FaLinkedin/><FaGithub/> 
            </div>
        </footer>
  )
}

import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <>
            <footer className="bg-[#1C1D21] text-white bottom-0 w-full flex flex-col items-center py-6 ">
                <img src="./assets/imgs/logo_washes.svg" alt="Logo" className="h-12 mb-4" />
                <div className="flex space-x-6 mb-4">
                    <a href="https://x.com/washescommunity" target="_blank" rel="noopener noreferrer" className="text-white">
                        <FaXTwitter size={24} />
                    </a>
                    <a href="https://www.instagram.com/washescommunity/" target="_blank" rel="noopener noreferrer" className="text-white">
                        <FaInstagram size={24} />
                    </a>
                    <a href="https://www.linkedin.com/company/washescommunity" target="_blank" rel="noopener noreferrer" className="text-white">
                        <FaLinkedin size={24} />
                    </a>
                    <a href="https://github.com/washescommunity/website" target="_blank" rel="noopener noreferrer" className="text-white">
                        <FaGithub size={24} />
                    </a>
                </div>
                <p>© 2025 WASHES. Todos os direitos reservados.</p>
            </footer>
        </>
    )
}

export default Footer;

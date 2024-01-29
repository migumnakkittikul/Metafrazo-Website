import './Footer.css';
import insta from "./insta.png"
import li from "./li.png"
import X from "./X.webp"
import fb from "./fb.png"

function Footer() {
    return (
        <footer class="footer">
            <div class="social-media">
                <a href="https://facebook.com" target="_blank">
                    <img src={fb} alt="Facebook"></img>
                </a>
                <a href="https://twitter.com" target="_blank">
                    <img src={X} alt="Twitter"></img>
                </a>
                <a href="https://instagram.com" target="_blank">
                    <img src={insta} alt="Instagram"></img>
                </a>
                <a href="https://linkedin.com" target="_blank">
                    <img src={li} alt="LinkedIn"></img>
                </a>
            </div>
            <p class="copy-right">© 2023 Metafrazo</p>
        </footer>
    )
}

export default Footer;
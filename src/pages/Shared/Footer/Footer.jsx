
import { Link } from "react-router-dom";
import logo from "../../../assets/images/TourVisor.png";
import fb from "../../../assets/images/facebook.png";
import insta from "../../../assets/images/insta.png";
import twitter from "../../../assets/images/twitter.png";

const Footer = () => {
    return (
        <div className="mt-10">
            <footer className="footer p-10 bg-base-200 text-base-content">
                <aside>
                    <div className="flex items-center gap-2">
                        <img src={logo} alt="" className="size-12 rounded-xl" />
                    </div>
                    <p>Providing reliable tech since 1992</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <Link to="/aboutUs" className="link link-hover">About Us</Link>
                    <Link to="/contactUs" className="link link-hover">Contact Us</Link>
                    <Link to="/community" className="link link-hover">Community</Link>
                    <Link to="/blogs" className="link link-hover">Blogs</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Office</h6>
                    <p>Porjoton Bhaban, West Agargaon,<br /> Sher-E Bangla Nagar ( Administrative Area),<br /> Dhaka-1207</p>
                    <p>Phone: +8801640310327</p>
                    <p>Email: info@tourvisor.org</p>
                </nav>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="flex gap-4">
                        <a href="https://www.facebook.com/abidshazid3/" target="_blank" rel="noopener noreferrer">
                            <img src={fb} alt="FaceBook" />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <img src={insta} alt="Instagram" />
                        </a>
                        <a href="https://x.com/AbidShazid" target="_blank" rel="noopener noreferrer">
                            <img src={twitter} alt="Twitter" />
                        </a>
                    </div>
                </nav>
            </footer>
            <footer className="footer footer-center p-10 bg-base-200 text-base-content border-t-2">
                <aside>
                    <p>Copyright © 2024 - All right reserved by TourVisor</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;
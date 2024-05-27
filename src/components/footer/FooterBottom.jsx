import { Nav } from 'react-bootstrap';
import { FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const FooterBottom = () => {
  return (
    <div className="d-flex flex-column align-items-center mt-4 pt-3 border-top border-secondary">
      <Nav className="mb-2">
        <Nav.Link href="#" className="text-white-50 mx-2">Legal</Nav.Link>
        <Nav.Link href="#" className="text-white-50 mx-2">Safety & Privacy Center</Nav.Link>
        <Nav.Link href="#" className="text-white-50 mx-2">Privacy Policy</Nav.Link>
        <Nav.Link href="#" className="text-white-50 mx-2">Cookies</Nav.Link>
        <Nav.Link href="#" className="text-white-50 mx-2">About Ads</Nav.Link>
        <Nav.Link href="#" className="text-white-50 mx-2">Accessibility</Nav.Link>
      </Nav>
      <div className="mb-2">
        <a href="https://www.instagram.com/z.a.i.d__k/?next=%2F" className="text-white-50 mx-2"><FaInstagram /></a>
        <a href="https://x.com/mZaidk_" className="text-white-50 mx-2"><FaTwitter /></a>
        <a href="https://www.linkedin.com/in/mohammad-zaid-khan-928793253/" className="text-white-50 mx-2"><FaLinkedinIn /></a>
      </div>
      <div className="text-white-50">
        &copy; 2024 Spotify MZK 
      </div>
    </div>
  );
};

export default FooterBottom;


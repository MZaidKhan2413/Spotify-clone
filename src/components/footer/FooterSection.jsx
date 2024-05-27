import { Nav } from 'react-bootstrap';

const FooterSection = ({ title, links }) => {
  return (
    <div className="col-md-3 mb-3">
      <h5>{title}</h5>
      <Nav className="flex-column">
        {links.map((link, index) => (
          <Nav.Link key={index} href={link.href} className="text-white-50">
            {link.text}
          </Nav.Link>
        ))}
      </Nav>
    </div>
  );
};

export default FooterSection;

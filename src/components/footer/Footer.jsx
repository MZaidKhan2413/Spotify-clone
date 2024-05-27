import FooterSection from './FooterSection';
import FooterBottom from './FooterBottom';
import '../../assets/css/Footer.css';

const Footer = () => {
  const companyLinks = [
    { text: 'About', href: '#' },
    { text: 'Jobs', href: '#' },
    { text: 'For the Record', href: '#' },
  ];

  const communitiesLinks = [
    { text: 'For Artists', href: '#' },
    { text: 'Developers', href: '#' },
    { text: 'Advertising', href: '#' },
    { text: 'Investors', href: '#' },
    { text: 'Vendors', href: '#' },
  ];

  const usefulLinks = [
    { text: 'Support', href: '#' },
    { text: 'Free Mobile App', href: '#' },
  ];

  const spotifyPlans = [
    { text: 'Premium Individual', href: '#' },
    { text: 'Premium Duo', href: '#' },
    { text: 'Premium Family', href: '#' },
    { text: 'Premium Student', href: '#' },
    { text: 'Spotify Free', href: '#' },
  ];

  return (
    <footer className="text-white pt-4">
      <div className="container">
        <div className="row">
          <FooterSection title="Company" links={companyLinks} />
          <FooterSection title="Communities" links={communitiesLinks} />
          <FooterSection title="Useful links" links={usefulLinks} />
          <FooterSection title="Spotify Plans" links={spotifyPlans} />
        </div>
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;

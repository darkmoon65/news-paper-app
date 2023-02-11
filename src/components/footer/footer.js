import './footer.css'
import Menu from '../menu/menu';

const Footer = () => {
  return (
    <footer style={{width: '100%'}}>
        <Menu></Menu>
        <p style={{paddingBottom: '15px'}}>© World News Inc. - 2023</p>
    </footer>
  );
};

export default Footer;
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="copy-right">
            <medium className='copy-color'> Jacob and Matt's Video Game Query Machine &copy;{new Date().getFullYear()}</medium> <b>| No Rights Reserved | Open-Source</b>
      </div>
      <nav>
        <li className = "footer-list"><a href="https://github.com/Jacob-Petersen-1" className = "footer-ref" target="_blank"><medium className = 'footer-color'>Jacob's GitHub</medium></a></li>
        <li className = "footer-list"><a href="https://github.com/matthew-pryor" className = "footer-ref" target="_blank"><medium className = 'footer-color'>Matt's GitHub</medium></a></li>
      </nav>
    </footer>
  );
};

export default Footer;
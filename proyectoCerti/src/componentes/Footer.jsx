
import { links2 } from "../data/data";
import { socialLinks2 } from "../data/data";
import { SectionIconsF } from "./SectionIconsF";
export const Footer = () => {
    return (
    <footer className="section footer">
      <ul className="footer-links">
        {links2.map((link) => {
                return (
                    <li key={link.id}>
            <a href={`#${link.link}`} className="footer-link"> 
            {link.link} </a>
          </li>
                );
            })}
      </ul>
      <ul className="footer-icons">
        {socialLinks2.map((social2) => {
            return (
              <SectionIconsF key={social2.id} social2={social2.link}></SectionIconsF>
            );
          })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
    );
};
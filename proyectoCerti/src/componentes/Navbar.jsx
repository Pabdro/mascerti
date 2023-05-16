import logo from '../images/logo.svg'
import SectionLinks from './SectionLinks';
import SectionIcons from './SectionIcons';
const NavBar = () => {
    return (
        <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <SectionLinks/>
        <SectionIcons/>
      </div>
    </nav>
    );
};
export default NavBar;
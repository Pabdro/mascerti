export const SectionIconsF = (props2) => {
    const { social2 } = props2;
    return (
      <li>
        <a href={`https://www.${social2}.com`} target="_blank" className="footer-icon">
          <i className={`fab fa-${social2}`}></i>
        </a>
      </li>
    );
  };
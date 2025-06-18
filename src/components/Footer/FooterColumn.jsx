const FooterColumn = ({ title, links }) => {
  return (
    <div className="footer-col">
      <h4>{title}</h4>
      <ul className="footer-links">
        {links.map((item, index) => (
          <li key={index}>
            <a href={item.href || "#"}>
              {item.icon && <span>{item.icon}</span>} {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;

import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const SyntaxLang = "javascript";

export const AssetsCode = () => {
  return (
    <>
      <SyntaxHighlighter language={SyntaxLang} style={a11yDark} showLineNumbers>
        {`import React from "react";

export const Assets = ({ props }) => {
      return (
          <>
              <a href= { assets_source } target="_blank">
                  <img 
                      width= { props }
                      height= { props }
                      src= { assets_directory }
                      alt= { assets_name }
                  />
              </a>
          </>
      );
};`}
      </SyntaxHighlighter>
    </>
  );
};

export const NavBarCode = () => {
  return (
    <SyntaxHighlighter language="javascript" style={a11yDark} showLineNumbers>
      {`import React from "react";

import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <div>
                <h1>Title</h1>
            </div>
            <ul>
                <li>
                    <NavLink to={ path }>Text</NavLink>
                </li>
                <li>
                    <NavLink to={ path }>Text</NavLink>
                </li>
                <li>
                    <NavLink to={ path }>Text</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;`}
    </SyntaxHighlighter>
  );
};

export const HeaderCode = () => {
  return (
    <SyntaxHighlighter language="javascript" style={a11yDark} showLineNumbers>
      {`import React from "react";

const Header = () => {
  return (
    <header>
      <h1>Title</h1>
      <p>Descriptions</p>
    </header>
  );
};

export default Header;`}
    </SyntaxHighlighter>
  );
};

export const FooterCode = () => {
  return (
    <SyntaxHighlighter language="javascript" style={a11yDark} showLineNumbers>
      {`import React from "react";

const Footer = () => {
  return (
    <footer>
      <p>Text</p>
    </footer>
  );
};

export default Footer;`}
    </SyntaxHighlighter>
  );
};

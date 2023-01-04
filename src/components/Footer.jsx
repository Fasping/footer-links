import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 1rem;

  &:hover {
    color: blue;
  }
`;

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledLink to="/acerca-de" title="About us">
        About us
      </StyledLink>
      <StyledLink to="/contacto" title="Contact">
        Contact
      </StyledLink>
      <StyledLink to="/politica-de-privacidad" title="App Privacy Policy">
        App Privacy Policy
      </StyledLink>
    </StyledFooter>
  );
};

export default Footer;

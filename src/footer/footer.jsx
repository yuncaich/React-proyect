import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Logo = styled.img`
  height: auto;
  width: 6rem; // Adjust the logo size as needed
  max-width: 100%;
  margin: 0 auto; // Center the logo horizontally
  display: block; // Make the logo a block element to allow for auto margins to work
`;

const FooterWrapper = styled.footer`
  background-color: #2C2C2C;
  color: white;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column; // Stack items vertically
  align-items: center; // Center items horizontally
  text-align: center; // Center text for all child elements
`;

const NavSection = styled.nav`
  margin: 1rem 0; // Add vertical space around the navigation

  a {
    margin: 0 0.5rem; // Spacing between navigation items
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #ccc; // Change color on hover
      text-decoration: underline;
    }
  }
`;

const SocialSection = styled.div`
  margin-bottom: 1rem; // Add space above the copyright section

  svg {
    margin: 0 0.5rem; // Spacing between icons
  }
`;

const CopyRightSection = styled.div`
  font-size: 0.875rem; // Small font size for copyright text
  color: #aaa; // Lighter text color
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Logo src="logo.png" alt="Logo" />
      <NavSection>
        <a href="/about">About</a>
        <a href="/terms">Terms</a>
        <a href="/privacy">Privacy</a>
        <a href="/career">Career</a>
        <a href="/contact">Contact us</a>
        <a href="/cookies">Cookies</a>
      </NavSection>
      <SocialSection>
        <FaFacebookF className="text-xl" />
        <FaInstagram className="text-xl" />
        <FaTwitter className="text-xl" />
        <FaLinkedinIn className="text-xl" />
      </SocialSection>
      <CopyRightSection>
        <p>Copyrights ©2023 Booking. Build by Webestica.</p>
      </CopyRightSection>
    </FooterWrapper>
  );
};

export default Footer;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import logo from '~/assets/logo.png';
import shopcar from '~/assets/shopcar.png';

import { Container, Content } from './styles';

function Header() {
  const [headerColor, setHeaderColor] = useState(true);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setHeaderColor(false);
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setHeaderColor(true);
      }
    };
    window.addEventListener('scroll', updateNavbarColor);
    return function cleanup() {
      window.removeEventListener('scroll', updateNavbarColor);
    };
  });

  function handleToggle() {
    const menuSection = document.querySelector('.menu-section');

    menuSection.classList.toggle('on', open);
    setOpen(!open);
  }

  return (
    <Container headerColor={headerColor}>
      <Content>
        <nav>
          <Link to="/" className="logo">
            <img src={logo} alt="twobrothers" />
          </Link>
          <div className="menu-section">
            <ul>
              <li>
                <a href="#home" onClick={() => handleToggle([])}>
                  INÍCIO
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => handleToggle([])}>
                  SOBRE
                </a>
              </li>
              <li>
                <a href="#services" onClick={() => handleToggle([])}>
                  SERVIÇOS
                </a>
              </li>
              <li>
                <a href="#contacts" onClick={() => handleToggle([])}>
                  CONTATOS
                </a>
              </li>
            </ul>
            <button className="menu" type="button" onClick={handleToggle}>
              <div className="icon-menu">
                <div className="one" />
                <div className="two" />
                <div className="three" />
              </div>
              <strong>MENU</strong>
            </button>
          </div>
        </nav>

        <aside>
          <a href="https://www.facebook.com/Two-Brothers-111881983785700/">
            <FaFacebookF size={16} />
          </a>
          <a href="https://www.instagram.com/">
            <FaInstagram size={18} />
          </a>
          <a href="https://api.whatsapp.com/send?phone=5567998408117">
            <FaWhatsapp size={18} />
          </a>
          <a href="https://www.shopcar.com.br/loja.php?loja=1616">
            <img src={shopcar} alt="shopcar" />
          </a>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;

import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Badge } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // sizes doesn't seem to be used anywhere in this component or descendants. remove?
  const [sizes, setSizes] = useState(Array.from({ length: 9 }, (x, i) => i + 8));

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" dark expand="sm" className="flex-shrink-0">
      <NavbarBrand tag={Link} to="/">
        <Badge color="success">codeprinter</Badge>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="https://github.com/jaredpetersen/codeprinter" target="_blank">
              <i className="fab fa-github-alt text-white" title="GitHub" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/heart">
              <i className="fas fa-heart text-danger" title="Heart" />
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

CustomNavbar.propTypes = {};

export default CustomNavbar;

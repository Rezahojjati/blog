import React from "react";
import Link from "next/link";
import classNames from "classnames";

import navStyles from "./navStyles.module.css";
import { Navbar as _Navbar, Nav, Container } from "react-bootstrap";
import { NavProps } from "../../models/models";
import SearchBar from "../Home/HomeComponents/SearchBar";
import SubscribeBar from "../Home/HomeComponents/SubscribeBar";
import LeftLinks from "../Home/HomeComponents/LeftLinks";
import BlogPostHeaderImage from "../Images/BlogPostHeaderImage";

export default function Navbar(props: NavProps) {
  return (
    <_Navbar
      className={navStyles.navMain}
      collapseOnSelect
      fixed="top"
      expand="lg"
      bg="light"
    >
      <_Navbar.Brand style={{ width: "70%" }}>
        <BlogPostHeaderImage />
      </_Navbar.Brand>
      <_Navbar.Toggle
        className="ml-auto"
        aria-controls="repsonsive-navbar-nav"
      />
      <_Navbar.Collapse
        className={navStyles.collapse}
        id="repsonsive-navbar-nav"
      >
        <Nav className="lg" navbarScroll>
          <div className={navStyles.navMainDiv}>
            <SearchBar />
            <SubscribeBar />
            <LeftLinks />
          </div>
        </Nav>
      </_Navbar.Collapse>
    </_Navbar>
  );
}

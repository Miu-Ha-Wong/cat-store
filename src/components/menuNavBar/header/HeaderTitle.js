import React from "react";
import styles from "./styles/HeaderTitle.module.css";
import { NavLink } from "react-router-dom";

const HeaderTitle = () => {
  return (
    <div className={styles.center}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? styles.active : styles.title)}
        end
      >
        Home
      </NavLink>
      <NavLink
        to="/catTrees"
        className={({ isActive }) => (isActive ? styles.active : styles.title)}
      >
        Cat Trees
      </NavLink>
      <NavLink
        to="/fountains"
        className={({ isActive }) => (isActive ? styles.active : styles.title)}
      >
        Fountains & Bowls
      </NavLink>
      <NavLink
        to="/apparel"
        className={({ isActive }) => (isActive ? styles.active : styles.title)}
      >
        Apparel
      </NavLink>
      <NavLink
        to="/toys"
        className={({ isActive }) => (isActive ? styles.active : styles.title)}
      >
        Toys
      </NavLink>
    </div>
  );
};

export default HeaderTitle;

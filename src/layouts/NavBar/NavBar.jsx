import React, { useEffect, useRef, useState } from 'react';

import Container from '../../components/shared/Container/Container';
import styles from './NavBar.module.css';
import { DOCUMENTS_ICON, HISTORY_ICON, MAIN_ICON, NEWS_ICON, POLLS_ICON, PROJECTS_ICON, VOTINGS_ICON } from '../../utils/constants';
import { Link, useMatch } from 'react-router-dom';
import classNames from 'classnames/bind';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

let cx = classNames.bind(styles);

const NavLink = ({children, to, imageUrl, className}) => {
  const match = useMatch(to);

  return (
    <Link
      to={to}
      className={
        cx('btn_nav', {'btn_nav_active': match}, className)
      }>
        {imageUrl && <img className={styles.btn_nav_image} src={imageUrl} />}
        <div>{children}</div>
    </Link>
  );
}

const NavBar = () => {
  const ref = useRef();
  const [showSideBar, setShowSideBar] = useState(false);

  const sideBarToggle = () => {
    setShowSideBar(!showSideBar);
  }

  useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (showSideBar && ref.current && !ref.current.contains(e.target)) {
        setShowSideBar(false)
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [showSideBar])

  return ( 
    <div className={styles.navbar}>
      <Container>
        <div className={styles.btn_group}>
        <NavLink className={"in-row"} to={'/'} imageUrl={MAIN_ICON}>главная</NavLink>
          <NavLink className={"in-row"} to={'/news'} imageUrl={NEWS_ICON}>новости</NavLink>
          <NavLink className={"in-row"} to={'/votings'} imageUrl={VOTINGS_ICON}>голосования</NavLink>
          <NavLink className={"in-row"} to={'/documents'} imageUrl={DOCUMENTS_ICON}>документы</NavLink>
          <NavLink className={"in-row"} to={'/projects'} imageUrl={PROJECTS_ICON}>проекты</NavLink>
          <NavLink className={"in-row"} to={'/history'} imageUrl={HISTORY_ICON}>история</NavLink>
        </div>
        {!showSideBar && 
          <Link to="#" className={styles.toggle} onClick={sideBarToggle}>
            <AiOutlineMenu />
          </Link> }
        {showSideBar && 
          <Link to="#" className={styles.toggle} onClick={sideBarToggle}>
            <AiOutlineClose />
          </Link> }
      </Container>
      <div ref={ref} className={cx('sidebar', {'active': showSideBar})} onClick={() => sideBarToggle()}>
      <NavLink className={"in-line"} to={'/'} imageUrl={MAIN_ICON}>главная</NavLink>
        <NavLink className={"in-line"} to={'/news'} imageUrl={NEWS_ICON}>новости</NavLink>
        <NavLink className={"in-line"} to={'/votings'} imageUrl={VOTINGS_ICON}>голосования</NavLink>
        <NavLink className={"in-line"} to={'/documents'} imageUrl={DOCUMENTS_ICON}>документы</NavLink>
        <NavLink className={"in-line"} to={'/projects'} imageUrl={PROJECTS_ICON}>проекты</NavLink>
        <NavLink className={"in-line"} to={'/history'} imageUrl={HISTORY_ICON}>история</NavLink>
      </div>
    </div>
  )
}

export default NavBar;
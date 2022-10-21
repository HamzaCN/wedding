import React from 'react';
import { BsGrid1X2Fill } from "react-icons/bs";
import { RiCloseCircleFill } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";
import './navbar.css';
import { BsCardChecklist } from "react-icons/bs";


function Navbar(props) {
    return (
        <header>
            <nav>
                <div className='logo'>
                   <a href='#'>Logo.</a>
                </div>
                <div className='toggle__menu'>
                <BsGrid1X2Fill />
                </div>
                <ul className="nav__list">
                    <div className="close__menu">
                        <RiCloseCircleFill />
                    </div>
                    <li className="nav__item">
                        <a href="#" className="nav__link dropdown__link">Planning Tools <RiArrowDropDownLine className='dropdown__icon' /></a>
                    </li>
                    <li className="nav__item">
                        <a href="#" className="nav__link dropdown__link">Venues <RiArrowDropDownLine className='dropdown__icon' /></a>
                    <div className='megamenu'>
                        <ul className='content'>
                            <li className='megamenu__item header__megamenu'>Check Vvendor by Area</li>
                            <li className='megamenu__item'>
                                <div className='menu-icon'>
                                    <BsCardChecklist />
                                </div>
                                <div className='megamenu__link'>
                                    <a href ='#'>Vendors By Category</a>
                                    <p>Get Full detailed venue ideas by us</p>
                                </div>
                            </li>
                            <li className='megamenu__item'>
                                <div className='menu-icon'>
                                <BsCardChecklist />
                                </div>
                                <div className='megamenu__link'>
                                    <a href ='#'>Vendors By Category</a>
                                    <p>Get Full detailed venue ideas by us</p>
                                </div>
                            </li>
                            <li className='megamenu__item'>
                                <div className='menu-icon'>
                                <BsCardChecklist />
                                </div>
                                <div className='megamenu__link'>
                                    <a href ='#'>Vendors By Category</a>
                                    <p>Get Full detailed venue ideas by us</p>
                                </div>
                            </li>
                            <li className='megamenu__item'>
                                <div className='menu-icon'>
                                <BsCardChecklist />
                                </div>
                                <div className='megamenu__link'>
                                    <a href ='#'>Vendors By Category</a>
                                    <p>Get Full detailed venue ideas by us</p>
                                </div>
                            </li>
                            <li className='megamenu__item'>
                                <div className='menu-icon'>
                                     <BsCardChecklist />
                                </div>
                                <div className='megamenu__link'>
                                    <a href ='#'>Vendors By Category</a>
                                    <p>Get Full detailed venue ideas by us</p>
                                </div>
                            </li>
                            <li className='megamenu__item'>
                                <div className='menu-icon'>
                                <BsCardChecklist />
                                </div>
                                <div className='megamenu__link'>
                                    <a href ='#'>Vendors By Category</a>
                                    <p>Get Full detailed venue ideas by us</p>
                                </div>
                            </li>
                        </ul>
                        <ul className='content'>
                            <li className='megamenu__item header__megamenu'>Check Vvendor by Area</li>
                            <li className='megamenu__item'>
                                <div className='menu-icon'>
                                <BsCardChecklist />
                                </div>
                                <div className='megamenu__link'>
                                    <a href ='#'>Vendors By Category</a>
                                    <p>Get Full detailed venue ideas by us</p>
                                </div>
                            </li>
                            <li className='megamenu__item'>
                                <div className='menu-icon'>
                                <BsCardChecklist />
                                </div>
                                <div className='megamenu__link'>
                                    <a href ='#'>Vendors By Category</a>
                                    <p>Get Full detailed venue ideas by us</p>
                                </div>
                            </li>
                            <li className='megamenu__item'>
                                <div className='menu-icon'>
                                <BsCardChecklist />
                                </div>
                                <div className='megamenu__link'>
                                    <a href ='#'>Vendors By Category</a>
                                    <p>Get Full detailed venue ideas by us</p>
                                </div>
                            </li>
                            <li className='megamenu__item'>
                                <div className='menu-icon'>
                                <BsCardChecklist />
                                </div>
                                <div className='megamenu__link'>
                                    <a href ='#'>Vendors By Category</a>
                                    <p>Get Full detailed venue ideas by us</p>
                                </div>
                            </li>
                            <li className='megamenu__item'>
                                <div className='menu-icon'>
                                <BsCardChecklist />
                                </div>
                                <div className='megamenu__link'>
                                    <a href ='#'>Vendors By Category</a>
                                    <p>Get Full detailed venue ideas by us</p>
                                </div>
                            </li>
                            <li className='megamenu__item'>
                                <div className='menu-icon'>
                                <BsCardChecklist />
                                </div>
                                <div className='megamenu__link'>
                                    <a href ='#'>Vendors By Category</a>
                                    <p>Get Full detailed venue ideas by us</p>
                                </div>
                            </li>
                        </ul>
                        <ul className='content'>
                            <li className='megamenu__item header__megamenu'>Check Vvendor by Area</li>
                            <li className='megamenu__item'>
                                <div className='menu-icon'>
                                <BsCardChecklist />
                                </div>
                                <div className='megamenu__link'>
                                    <a href ='#'>Vendors By Category</a>
                                    <p>Get Full detailed venue ideas by us</p>
                                </div>
                            </li>
                            <li className='megamenu__item'>
                                <div className='menu-icon'>
                                <BsCardChecklist />
                                </div>
                                <div className='megamenu__link'>
                                    <a href ='#'>Vendors By Category</a>
                                    <p>Get Full detailed venue ideas by us</p>
                                </div>
                            </li>
                            <li className='megamenu__item'>
                                <div className='menu-icon'>
                                <BsCardChecklist />
                                </div>
                                <div className='megamenu__link'>
                                    <a href ='#'>Vendors By Category</a>
                                    <p>Get Full detailed venue ideas by us</p>
                                </div>
                            </li>
                            <li className='megamenu__item'>
                                <div className='menu-icon'>
                                <BsCardChecklist />
                                </div>
                                <div className='megamenu__link'>
                                    <a href ='#'>Vendors By Category</a>
                                    <p>Get Full detailed venue ideas by us</p>
                                </div>
                            </li>
                            <li className='megamenu__item'>
                                <div className='menu-icon'>
                                <BsCardChecklist />
                                </div>
                                <div className='megamenu__link'>
                                    <a href ='#'>Vendors By Category</a>
                                    <p>Get Full detailed venue ideas by us</p>
                                </div>
                            </li>
                            <li className='megamenu__item'>
                                <div className='menu-icon'>
                                <BsCardChecklist />
                                </div>
                                <div className='megamenu__link'>
                                    <a href ='#'>Vendors By Category</a>
                                    <p>Get Full detailed venue ideas by us</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    
                    </li>
                    <li className="nav__item">
                        <a href="#" className="nav__link dropdown__link">Vendors <RiArrowDropDownLine className='dropdown__icon' /></a>
                    </li>
                    <li className="nav__item">
                        <a href="#" className="nav__link dropdown__link">Forums <RiArrowDropDownLine className='dropdown__icon' /></a>
                    </li>
                    <li className="nav__item">
                        <a href="#" className="nav__link dropdown__link">Dresses <RiArrowDropDownLine className='dropdown__icon' /></a>
                    </li>
                    <li className="nav__item">
                        <a href="#" className="nav__link dropdown__link">Ideas <RiArrowDropDownLine className='dropdown__icon' /></a>
                    </li>
                    <li className="nav__item">
                        <a href="#" className="nav__link dropdown__link">Registry <RiArrowDropDownLine className='dropdown__icon' /></a>
                    </li>
                    <li className="nav__item">
                        <a href="#" className="nav__link dropdown__link">Invitation <RiArrowDropDownLine className='dropdown__icon' /></a>
                    </li>
                    <li className="nav__item">
                        <a href="#" className="nav__link dropdown__link">Ideas <RiArrowDropDownLine className='dropdown__icon' /></a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
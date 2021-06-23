import 'nodelist-foreach-polyfill';

import menuBurger from './modules/menuBurger';
// import slider from './modules/slider';
import mouseparallax from './modules/mouseparallax';
import animateItem from './modules/animateItem';
import tabs from './modules/tabs';
import timer from './modules/timer';
import slider from './modules/slider';


window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    menuBurger('.menu', '.menu__item', '.hamburger');
    mouseparallax();
    animateItem();
    tabs();
    menuBurger('.info-header', '.info-header-tab', '.hamburger-info');
    timer();
    slider();

    
});
import 'nodelist-foreach-polyfill';

import menuBurger from './modules/menuBurger';
// import slider from './modules/slider';
import mouseparallax from './modules/mouseparallax';
import animateItem from './modules/animateItem';


window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    menuBurger();
    mouseparallax();
    animateItem();

    
});
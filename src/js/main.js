import 'nodelist-foreach-polyfill';

import menuBurger from './modules/menuBurger';
import tabs from './modules/tabs';
import timer from './modules/timer';
import slider from './modules/slider';
import calc from './modules/calc';
import form from './modules/form';
import mask from './modules/maskTelNumber';
import modals from './modules/popup';
import smoothScroll from './modules/smoothScroll';


window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    menuBurger('.menu', '.menu-link', '.hamburger', true);
    tabs();
    menuBurger('.info-header', '.info-header-tab', '.hamburger-info');
    timer();
    slider();
    calc();
    form();
    mask();
    modals();
    smoothScroll();

    
});
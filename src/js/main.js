import 'nodelist-foreach-polyfill';

import menuBurger from './modules/menuBurger';
import mouseparallax from './modules/mouseparallax';
import tabs from './modules/tabs';
import timer from './modules/timer';
import slider from './modules/slider';
import calc from './modules/calc';
import form from './modules/form';
import mask from './modules/maskTelNumber';
import modals from './modules/popup';


window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    menuBurger('.menu', '.menu__item', '.hamburger');
    mouseparallax();
    tabs();
    menuBurger('.info-header', '.info-header-tab', '.hamburger-info');
    timer();
    slider();
    calc();
    form();
    mask();
    modals();

    
});
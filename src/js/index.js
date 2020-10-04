// import $ from "jquery";
window.$ = window.jQuery = require('jquery');
// import popper from "popper.js";
import bootstrap from "bootstrap";
global.IScroll = require('iscroll');
import drawer from "jquery-drawer";
window.isotope = require("isotope-layout/dist/isotope.pkgd");

const flatpickr = require("flatpickr");
const mask = require("jquery-mask-plugin");

import baguetteBox from 'baguettebox.js';

import './module/slider.js';


import initSelect from './module/form/select';
import initStickers from './module/stickers';
import initSortingProduct from './module/sorting';
import initProductImage from './module/media/productImage';
import initCountDown from './module/countdown';
import initCheckAgree from './module/form/checkAgree';
import initDropdown from './module/form/dropdown';
import initModals from './module/modals/modals';
import initCollapse from './module/collapse';
import initUpload from './module/form/upload';
import initFlatpickr from './module/form/flatpickr';
import initMask from './module/form/mask';
import initValidRegistration from './module/form/validRegistration';
import initSocialTrigger from './module/form/socialTrigger';
import initCatalogs from './module/catalogs';
import initHelperLink from './module/helperLink';

$(document).ready(function() {
    $('.drawer').drawer();
    baguetteBox.run('.gallery');
    initSelect();
    initStickers();
    initSortingProduct();
    initProductImage();
    initCountDown();
    initCheckAgree();
    initDropdown();
    initModals();
    initCollapse();
    initUpload();
    initFlatpickr();
    initMask();
    initValidRegistration();
    initSocialTrigger();
    initCatalogs();
    initHelperLink();
});


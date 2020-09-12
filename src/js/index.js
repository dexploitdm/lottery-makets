// import $ from "jquery";
window.$ = window.jQuery = require('jquery');
import popper from "popper.js";
import bootstrap from "bootstrap";
global.IScroll = require('iscroll');
import drawer from "jquery-drawer";
window.isotope = require("isotope-layout/dist/isotope.pkgd");

import './module/form/select.js';
import './module/slider.js';
import './module/stickers.js';
import './module/sorting.js';
import './module/media/productImage';
import './module/countdown';
import './module/form/checkAgree';
import './module/modals/modalProduct';

$(document).ready(function() {
    $('.drawer').drawer();
});

$(document).ready(function() {
    $("#winForRepost").modal('show');
})


import $ from "jquery";

import popper from "popper.js";
import bootstrap from "bootstrap";


global.IScroll = require('iscroll');
import drawer from "jquery-drawer";

import './module/form/select.js';
import './module/slider.js';
import './module/stickers.js';


$(document).ready(function() {
    $('.drawer').drawer();
});



import $ from "jquery";

import popper from "popper.js";
import bootstrap from "bootstrap";
import './module/form/select.js';

global.IScroll = require('iscroll');
import drawer from "jquery-drawer";
$(document).ready(function() {
    $('.drawer').drawer();
});

console.log($('#sources'))


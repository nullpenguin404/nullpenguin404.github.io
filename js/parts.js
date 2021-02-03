'use strict';

const local = window.location.pathname;
const path = local.substring(0, local.lastIndexOf('/'));

console.log(path);

$(function () {
    $('header').load('/parts/header.html');
    $('footer').load('/parts/footer.html');
    $('aside').load('/parts/aside.html');
});
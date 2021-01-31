'use strict';

const local = window.location;
const path = local.origin + getDir(local);

console.log(path);

/**
 * Get current directory.
 *
 * @param {Location} place
 * @param {number} n
 * @return {string} 
 */
function getDir(place, n) {
    return place.pathname.replace(new RegExp("(?:\\\/+[^\\\/]*){0," + ((n || 0) + 1) + "}$"), "/");
}
"use strict";
exports.__esModule = true;
exports.validWalk = void 0;
exports.validWalk = function (walk) {
    var north = walk.filter(function (item) { return item === "n"; }).length;
    var south = walk.filter(function (item) { return item === "s"; }).length;
    var east = walk.filter(function (item) { return item === "e"; }).length;
    var west = walk.filter(function (item) { return item === "w"; }).length;
    return walk.length === 10 && north === south && east === west;
};

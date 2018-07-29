'use strict';

/**
 * Export an object of names for possible use as the site title.
 */

const titles = {
    'available': [
        'Fight The Zog',
        'Zog The Fight',
        'Fighting the zog so you don\'t have to!',
        'A fight to the zog',
        'Zog Fights Dot Com',
        '1,000 Zog-sized Fights',
        '1,000 Fight-sized Zogs',
    ],
    'considering': [
        'Fight her right in the zog!',
    ]
}

function randomPick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function randomTitle(useRiskyTitles = false) {
    let titleList = titles.available;

    if (useRiskyTitles) {
        for (el of titles.considering) {
            titleList.push(el);
        }
    }

    return randomPick(titleList);
}

module.exports = randomTitle;

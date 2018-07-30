'use strict';

/**
 * Export an object of names for possible use as the site title.
 */

const titles = {
    'available': [
        'Fight The Zog',
        'Zog The Fight',
        'Fighting The Zog So You Don\'t Have To!',
        'A Fight To The Zog',
        'Zog Fights Dot Com',
        'Zight The Frog',
        '1,000 Zog-sized Fights',
        '1,000 Fight-sized Zogs',
    ],
    'considering': [
        'Fight Her Right In The Zog!',
    ]
}

function randomPick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function randomTitle(useRiskyTitles = false) {
    let titleList = titles.available;

    if (useRiskyTitles) {
        for (let el of titles.considering) {
            titleList.push(el);
        }
    }

    return randomPick(titleList);
}

module.exports = randomTitle;

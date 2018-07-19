function changeTheme() {
    const body = document.getElementsByTagName('body');

    if (document.querySelector('.clicked') == null) {
        console.log('no clicked class. adding it.');
        document.querySelector('body').classList.remove('clicked');
    } else {
        console.log('clicked class found. removing it');
        document.querySelector('body').classList.add('clicked');
    }
}

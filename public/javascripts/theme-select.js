/**
 * This is groundwork for what will later be an ability to use CSS
 * animations to change the look of the app.
 */
function changeTheme() {
    const body = document.getElementsByTagName('body');

    if (document.querySelector('.clicked') == null) {
        console.log('no clicked class. adding it.');
        document.querySelector('body').classList.add('clicked');
    } else {
        console.log('clicked class found. removing it');
        document.querySelector('body').classList.remove('clicked');
    }
}

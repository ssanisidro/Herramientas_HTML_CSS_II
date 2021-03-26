/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+(function () {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
})();

let menu_mobile = document.getElementById("header__hamburger-menu");

menu_mobile.addEventListener('click', function () {
  const header = document.getElementsByClassName('header')
  header[0].classList.toggle("pushed");
  const main_content = document.getElementsByClassName('main-content')
  main_content[0].classList.toggle('main-pushed');
  const bar = document.getElementsByClassName('bar');
  bar[0].classList.toggle("animate");
}, false);
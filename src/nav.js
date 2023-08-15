//Mobile navbar dropdown
document.getElementsByClassName('navDropdown')[0].onclick = function() {
    document.getElementsByClassName('navBar')[0].classList.toggle('hide');
};
//Bring mobile navbar up on page load
document.addEventListener("DOMContentLoaded", function() {
    document.getElementsByClassName('navBar')[0].classList.toggle('hide');
});
//Insert footer content into pages
document.getElementsByClassName("footerContainer")[0].innerHTML = `
<footer>
<div class="links">
<h3> Site Map </h3>
    <a href="/src/index/index.html"><p>Home</p></a>
    <a href="/src/about/about.html"><p>About</p></a>
    <a href="/src/contact/contact.html"><p>Contact</p></a>
    <a href="/src/hobbies/hobbies.html"><p>Hobbies</p></a>
    <a href="/src/game/game.html"><p>Top Secret</p></a>
</div>
<div class="copyright">
<img src="/public/xorn.jpg" alt="image of awesome wizard casting spell">
<p>Awesome wizard casting spell, <br />image not by me just thought it looks cool</p> <br  />
<p>© 2022 Bailey Long</p>
</div>
</footer>
`
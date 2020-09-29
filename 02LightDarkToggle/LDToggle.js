const chgBtn = document.getElementById('checkbox');

chgBtn.addEventListener('click', colorHdlr);

function colorHdlr() {
    document.body.classList.toggle('dark');
}
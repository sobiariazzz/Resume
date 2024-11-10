var hide = document.getElementById('toggle.skills');
var showButton = document.getElementById('skills');
hide.addEventListener('click', function () {
    if (showButton.style.display === 'none') {
        showButton.style.display = 'block';
    }
    else {
        showButton.style.display = 'none';
    }
});

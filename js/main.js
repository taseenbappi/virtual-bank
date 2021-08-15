document.getElementById('submitBtn').addEventListener('click', function () {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (email == 'taseen@gmail.com' && password == 'secret') {
        window.location.href = 'banking.html';
    }
    else {
        alert('Please enter your correct email & password');

    }

});
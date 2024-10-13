function login() {
    const username = document.getElementById('username').value;

    fetch('/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: username })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = '/profile'; // Redirect to profile page
        } else {
            alert(data.message);
        }
    })
    .catch(error => console.error('Error:', error));
}

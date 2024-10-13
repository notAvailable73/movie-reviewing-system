document.addEventListener('DOMContentLoaded', () => {
    loadUserProfile();
});

async function loadUserProfile() {
    const response = await fetch(`/users/profile`);
    const profileData = await response.json();
    
    displayList('favorite-list', profileData.favorites);
    displayList('watched-list', profileData.watched);
    displayList('wishlist-list', profileData.wishlist);
}

function displayList(elementId, items) {
    const list = document.getElementById(elementId);
    list.innerHTML = ''; // Clear existing list

    items.forEach(movieId => {
        const listItem = document.createElement('li');
        listItem.textContent = `Movie ID: ${movieId}`; // Replace with actual movie title if needed
        list.appendChild(listItem);
    });
}

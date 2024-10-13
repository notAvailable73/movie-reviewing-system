document.addEventListener('DOMContentLoaded', () => {
    const movieId = "YOUR_MOVIE_ID"; // Replace with dynamic movie ID
    const addFavoriteBtn = document.getElementById('add-favorite');
    const markWatchedBtn = document.getElementById('mark-watched');
    const addWishlistBtn = document.getElementById('add-wishlist');

    addFavoriteBtn.addEventListener('click', () => {
        updateUserList('/users/favorites', movieId);
    });

    markWatchedBtn.addEventListener('click', () => {
        updateUserList('/users/watched', movieId);
    });

    addWishlistBtn.addEventListener('click', () => {
        updateUserList('/users/wishlist', movieId);
    });
});

async function updateUserList(url, movieId) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ movieId })
    });

    if (response.ok) {
        alert(await response.text());
    } else {
        alert('Error updating list');
    }
}

window.onload = function () {
    const dialog = document.getElementById("MyModule");
    const agreeButton = document.getElementById("agreeButton");
    const confirmCheckbox = document.getElementById("confirmCheckbox");

    if (!dialog.showModal) {
        dialogPolyfill.registerDialog(dialog);
    }

    dialog.showModal();

    agreeButton.addEventListener("click", function(event) {
        if (!confirmCheckbox.checked) {
            event.preventDefault(); 
            alert("Пожалуйста, подтвердите, что вы прочитали информацию.");
        }
    });
};

window.onload = function () {
    setTimeout(() => {
        const dialog = document.getElementById("MyModule");
        if (dialog) dialog.showModal();
    }, 100);
};


document.addEventListener('DOMContentLoaded', function() {
    fetch('fetch.php')
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                console.error('Error:', data.error);
                return;
            }
            const postsContainer = document.getElementById('posts-container');
            data.forEach(post => {
                const postElement = document.createElement('div');
                postElement.className = 'col';
                postElement.innerHTML = `
                    <div class="card shadow-sm">
                        <img src="${post.preview_picture}" class="bd-placeholder-img card-img-top" width="100%" height="225" alt="${post.title}">
                        <div class="card-body">
                            <p class="card-text">${post.title}</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <button type="button" class="btn-outline-secondary read_btn">
                                    <a class="text-decoration-none read" href="${post.link}">Read</a>
                                </button>
                                <small class="text-body-secondary">? mins</small>
                            </div>
                        </div>
                    </div>
                `;
                postsContainer.appendChild(postElement);
            });
        })
        .catch(error => console.error('Error fetching posts:', error));
});
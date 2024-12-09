document.addEventListener('DOMContentLoaded', () => {
    const uploadButton = document.querySelector('.right-header-upload');
    if (uploadButton) {
        uploadButton.addEventListener('click', () => {
            const uploadForm = document.querySelector('#uploadForm');
            uploadForm.style.display = uploadForm.style.display === 'none' ? 'block' : 'none';
        });
    }
});
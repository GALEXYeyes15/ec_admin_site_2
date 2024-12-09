document.querySelector('#uploadForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const fileInput = document.querySelector('#fileInput');
    const file = fileInput.files[0];

    if (file) {
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('http://localhost:3000/upload', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();
            console.log(result.message);
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    } else {
        console.log('No file selected');
    }
});
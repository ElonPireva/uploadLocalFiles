const input = document.getElementById('input');

input.addEventListener('change', (e) => {
    console.log(e.target.files);
    for(let i = 0; i < e.target.files.length; i++){
        if(e.target.files[i].type.startsWith('image')){
            const img = document.createElement('img');
            const reader = new FileReader();
            reader.readAsDataURL(e.target.files[i]);
            reader.addEventListener('load', (e) => {
                img.src = e.target.result;
                document.querySelector('.output').appendChild(img);
            });
        }
        else {
            input.style.display = 'none';
            document.querySelector('.output').innerHTML = 'Please make sure that u are using an image format.';
            setTimeout(refreshBrowser,3500);
        }
    };
});

function refreshBrowser(){
    window.location.reload();
}
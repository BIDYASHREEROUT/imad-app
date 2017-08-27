console.log('Loaded!');

var element = document.getElementbyId('main-text');

element.innerHTML = 'New Value';

var img = document.getElementbyId('img');
img.onclick = function() {
    img.style.marginLeft = '100px'; 
} ;
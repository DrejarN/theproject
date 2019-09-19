//Vår JS kod    

document.getElementById('button1').addEventListener('click', function(){
    document.querySelector('.darker').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.darker').style.display = 'none';

});

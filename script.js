//Vår JS kod    

document.getElementById('button').addEventListener('click', function(){
    document.querySelector('.darker').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.darker').style.display = 'none';

});
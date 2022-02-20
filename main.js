const btn = document.querySelector('button');
const item = document.querySelector('.item.item1');

const showItem = function(){
    item.classList.toggle('show');
    if(item.classList.contains('show')){
        btn.textContent = "w górę";
    }else{
        btn.textContent = "W dół";
    }
}
btn.addEventListener('click', showItem);
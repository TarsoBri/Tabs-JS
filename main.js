const btnContainer = document.querySelector('.btn-container');
const btns = document.querySelectorAll('.tab-btn');
const content = document.querySelectorAll('.content');

btnContainer.addEventListener('click', function(e){
    var id = e.target.dataset.id;
    
    btns.forEach(function(btn){
        btn.classList.remove('active');
        e.target.classList.add('active');
    });
    
    content.forEach(function(tab){
        tab.classList.remove('active');
        if(id === tab.getAttribute('id')){
            tab.classList.add('active');
        }
    });
});





// @tarso_bri
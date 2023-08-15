const btn = document.querySelector('.menu-btn').addEventListener('click', runEvent);

function runEvent(e){
    document.querySelector('.menu').classList.toggle('d-none');
    document.querySelector('.triangle').classList.toggle('d-none')
}
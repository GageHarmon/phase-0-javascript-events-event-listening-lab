const input = document.getElementById('button');

function addingEventListener(){
    alert('Click Me!')
    input.addEventListener('click', addingEventListener, true);
}
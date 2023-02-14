document.getElementById('text-color').addEventListener('click', function(){
    const inputColorValue = document.getElementById('text-color').value;
    textAreaField().style.color = inputColorValue;
    document.getElementById('ab').style.color = inputColorValue;
})

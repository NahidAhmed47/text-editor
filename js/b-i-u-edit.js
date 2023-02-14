// bold text
document.getElementById('bold-text').addEventListener('click', function(){
        textAreaField().style.fontWeight = 'bold';
})
document.getElementById('italic-text').addEventListener('click', function(){
    textAreaField().style.fontStyle = 'italic';
})
document.getElementById('underline-text').addEventListener('click', function(){
    textAreaField().style.textDecoration = 'underline';
})
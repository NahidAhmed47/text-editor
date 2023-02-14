// bold text
document.getElementById('bold-text').addEventListener('click', function(){
    const contentFieldText = document.getElementById('text-area');
    contentFieldText.style.fontWeight = 'bold';
})
document.getElementById('italic-text').addEventListener('click', function(){
    const contentFieldText = document.getElementById('text-area');
    contentFieldText.style.fontStyle = 'italic';
})
document.getElementById('underline-text').addEventListener('click', function(){
    const contentFieldText = document.getElementById('text-area');
    contentFieldText.style.textDecoration = 'underline';
})
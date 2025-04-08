

const colors = ['#FF5753', '#33FF57', '#3357FF', '#F8A623', '#8E44AD', '#3498DB', '#E74C3C'];
document.getElementById('colorButton').addEventListener('click', function() {
    const section = document.getElementById('allsection');
    
    
    const randomIndex = Math.floor(Math.random() * colors.length);
    

    section.style.backgroundColor = colors[randomIndex];
});


document.getElementById('Clear-btn').addEventListener('click',function(){
    document.getElementById('section').innerHTML = '';
})


document.getElementById('discover-section').addEventListener('click',function(){
    window.location.href = "main.html";
})
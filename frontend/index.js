document.addEventListener('DOMContentLoaded', function()
{
    alert("welcome to Bimsy portfolio") 
})
const paragragh = document.getElementById('myparagragraph');
const button = document.getElementById('mybutton')
button.addEventListener('cick', function(){
    paragragh.textContent = "this is the new content fron javasript"
})




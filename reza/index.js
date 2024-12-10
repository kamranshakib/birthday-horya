const group = document.getElementById('group');


var i = 0;
setInterval(function(){
    console.log('hello')
    i++;
   
    group.setAttribute('src','test'+i+'.png')
},2000)


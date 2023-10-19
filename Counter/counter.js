let val='';
let count = Number(document.getElementById('count').innerHTML)
function changeCount(){
    if (val==='Decrease'){
        count = count - 1;
        document.getElementById('count').innerHTML = `${count}`;
        
    }
    else if (val==='Increase'){
        count = count + 1;
        document.getElementById('count').innerHTML = `${count}`;
        
    }
    else{
        count = 0;
        document.getElementById('count').innerHTML = `${count}`;
    }

    if (count>0){
        document.getElementById('count').style.color = 'green';
    }
    else if (count<0){
        document.getElementById('count').style.color = 'red';
    }
    
}
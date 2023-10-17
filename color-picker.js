
function pickAColor(){
    let arr = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    let color = '#';
    
    for (let i=0;i<6;i++){
        randomNo = Math.floor(Math.random() * (arr.length-1-0+1)) + 0;
        color += arr[randomNo];
    }
    return color;
}
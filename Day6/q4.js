myColor = ["Red", "Green", "White", "Black"];

let st=""
myColor.forEach((color,index)=>{
    if(index===myColor.length-1)
    st+=color
    else
    st+=color+"+"

})
console.log(st)
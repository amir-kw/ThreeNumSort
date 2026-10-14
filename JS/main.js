let x =+prompt("enter a number")
let y =+prompt("enter a number")
let z =+prompt("enter a number")
if(x>y){
    if(x>z){
        document.write(`The ${x} is the biggest number`)
    }else{
        document.write(`The ${z} is the biggest number`)
    }
}else{
    if(y>z){
        document.write(`The ${y} is the biggest number`)
    }else{
       document.write(`The ${z} is the biggest number`)
    }
}
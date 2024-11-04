let a =120
let b = 30
function sumofnumbers(){
    let result = a-b
    console.log(result)
}
sumofnumbers()

function sumofnumbers(num1,num2){
    let result = num1*num2
    console.log(result)
}
sumofnumbers(6,5)
function sumofnumbers(num1,num2,num3,num4){
    let result = num1+num2+num3+num4
    console.log(result)

}
sumofnumbers(10,5,10,5,)



function allvalues(num1,num2){
    console.log(num1+num2)
}
allvalues(50,30)

function calculate(opt,num1,num2){
    if(opt == "add"){
        console.log("add",num1+num2)
    }else if(opt == "mul"){
        console.log("mul",num1*num2)
    }
}

calculate("add",10,5)
calculate("mut",4,5)

let j = 0
while(j<=5){
    console.log("while",j)
    j++
}

let k = 0
while(k<9){
    console.log("while",k)
    k++

}




function sumofvalue(num1,num2,num3){
    console.log(num1*num2/num3)
}
sumofvalue(5,4,4)

let H = 0
while(H<=5){
    console.log("while",H)
    H++
}


let K = 1
while("K<8"){
    console.log("while",K)
    K++
}

let O = 1
do{
    console.log(O)
    O++
}while(O<=5)

let arr = [1,2,3,4]
console.log(arr)

arr.push(5,6,7,8,9)
console.log(arr)

arr.pop()
console.log(arr)

arr.unshift(-1,0)
console.log(arr)
arr.shift()
console.log(arr)

arr.splice(6,3,6)
console.log(arr)

arr.slice(1,-5)
console.log(arr)
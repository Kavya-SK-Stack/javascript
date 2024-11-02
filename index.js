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

let a = 10
let b = 50
function allvalues(){
    console.log(a+b)
}
allvalues()

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


// Mike Li Zhuangxin
function myFunction(){
    var x =document.getElementById("myText1").value//Get value of x
    var y =document.getElementById("myText2").value//Get value of y
    if(isNaN(x)|isNaN(y)){//judge whether the input quantity is a number?
    document.getElementById("demo").innerHTML = "type in number"
    }
    else{
        w=Number(x)+Number(y)
        document.getElementById("demo").innerHTML = "x+y= " +w
    }
}
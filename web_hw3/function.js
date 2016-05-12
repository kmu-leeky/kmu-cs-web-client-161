//Question 1
function hello(){
    document.write("hello homework3");
}
hello();

//Question 2
function stringToInt(input){
    return parseInt(input);
}


//Question 3
function maskNumber(input){
    var mask_number = input.substr(0,input.length-4);
    return mask_number+"****";
    
    
}


//Question 4
function getAverage(input){
    var sum=0;
    for (i=0; i < input.length; i++){
        sum += input[i];
    }
    var avg = (sum/input.length);
    return avg;
}



//Question 5
function isMultipleSeven(input){
    if(input%7==0){
        return true;
    }
    else{
        return false;
    }
}
;

//Question 6
function operation(operate,a, b){
    var operate;
    if(operate=="add"){
        return a+b;
        
    }
    if(operate=="substract"){
        return a-b;
    }
    if(operate=="multiply"){
        return a*b;
    }
    if(operate=="divide"){
        return a/b;
    }
      
}




//Question 7
function triangleMtn(input){
    var x="";
    for(i=0;i<input;i++){
        console.log(x+="*");
    }
     
}








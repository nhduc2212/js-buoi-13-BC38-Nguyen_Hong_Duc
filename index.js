// ======First exercise=====
// -----3-blocks diagram-----
// Input: 1-day-salary(100.000); number-of-working-day(user-Input)
// Output: total-salary
// Process: total-salary=1-day-salary*number-of-working-day
// --------------------------
function ex1(){
var Salary= document.getElementById("ex1-Salary").value*1;
var dateOfWorking = document.getElementById("ex1-Numberofworkingday").value*1;
var totalSalary;
totalSalary = Salary*dateOfWorking;
document.getElementById("ex1-result").innerHTML="Tiền lương của nhân viên này là: " + totalSalary + " VND";
}
// --------------------------

// ======Second exercise=====
// -----3-blocks diagram-----
// Input: number a, number b, number c, number d, number e; (user-Input)
// Output: average
// Process: average = (number a + number b + number c + number d + number e)/5
// --------------------------
function ex2(){
var ave;
var a = document.getElementById("ex2-number1").value*1;
var b = document.getElementById("ex2-number2").value*1;
var c = document.getElementById("ex2-number3").value*1;
var d = document.getElementById("ex2-number4").value*1;
var e = document.getElementById("ex2-number5").value*1;
ave = (a + b + c + d + e)/5;
document.getElementById("ex2-result").innerHTML="Trung bình của 5 số " + a + " "+ b + " "+ c + " "+ d + " "+ e + " là: " + ave}
// --------------------------

// ======Third exercise=====
// -----3-blocks diagram-----
// Input: Usd exchange rate (23.500); amount of USD (user-Input)
// Output: input USD exchanged to VND
// Process: input USD exchanged to VND = amount of USD * Usd exchange rate;
// --------------------------
function ex3(){
var usdExrate=23500*1;
var convertedDollar;
let money=document.getElementById("ex3-dollar").value*1;
convertedDollar = usdExrate*money;
document.getElementById("ex3-result").innerHTML="Số tiền USD được quy đổi thành " + convertedDollar + "VNĐ"}
// --------------------------

// ======Fourth exercise=====
// -----3-blocks diagram-----
// Input: Width of the rectangle, length of the rectangle
// Output: perimeter, area of the rectangle
// Process: 
    // perimeter of the rectangle = (Width of the rectangle + length of the rectangle) * 2
    // area of the rectangle = Width of the rectangle * length of the rectangle
// --------------------------
function ex4(){
var Width=document.getElementById("ex4-width").value*1;
var length=document.getElementById("ex4-length").value*1;
var perimeter;
var area;
perimeter=(Width+length)*2;
area=Width*length;
document.getElementById("ex4-result").innerHTML="Chu vi của hình chữ nhật là "+ perimeter + " cm" +"," + " Diện tích của hình chữ nhật là: " + area + " cm2";}
// --------------------------

// ======Fifth exercise=====
// -----3-blocks diagram-----
// Input: number a (user-Input, 2-digit)
// Output: Digit sum of number a
// Process: 
    // First digit of a = a/10;
    // Second digit of a = a%10;
    // Digit sum of number a = First digit of a + Second digit of a;
// --------------------------
function ex5(){
let numberA=document.getElementById("ex5-number").value*1;
var sumDigit;
var firstDigit;
var secondDigit;
firstDigit=Math.floor(numberA/10);
secondDigit=numberA%10;
sumDigit=firstDigit+secondDigit;
document.getElementById("ex5-result").innerHTML= "Tổng 2 ký số của " + numberA+ " là: "+sumDigit}
// --------------------------


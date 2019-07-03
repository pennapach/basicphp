//คำสั้งป๊อบอับ
//alert("Hello JavaScript");
//คำสั่งแสดงข้อความบนหน้าเว็บ
document.write("hello form JavaScript<br>");
//การสร้งตัวแปรใน Javascript
var name = "John carter";
var age = 14;
var status = "single";
document.write(name);
//การแสดงผลตัวแปรผ่าน console
console.log("age = "+age);
console.log("status="+status);
//คำสั่งคอมเฟิรืม ของ จาวาสคริป
var conf=confirm("Do you want to delete Item?");
console.log("conf="+conf);
if(conf){
    console.log("Delete success");
}else{
    console.log("You cancel this");
    
}
//condition operator
var permiss = (age >= 18)?"Allow":"Not allow";
console.log(permiss);
//condition if ... elesif.... else...
/*var your_age=prompt("Enter your promtp")
if (your_age >= 18 && your_age <= 29){
    console.log("Young");
    }else if (your_age>=30 && your_age <= 59){
        console.log("Ault");
    }else if(your_age >= 60){
        console.log("Old");
         }else{
               console.log("Not define");
           }
*/
//Switch... case
var color=prompt("Choose color\n type 1=red\n type2 = green\n type 3 = blue");
console.log(color);
switch(color){
    case "1":
    document.body.style.backgroundColor = "red";
    break;
    case "2":
        document.body.style.backgroundColor= "green";
    break;
    case "3":
        document.body.style.backgroundColor = "blue";
    break;
    default:
        document.body.style.backgroundColor = "white";
    break;
        
}
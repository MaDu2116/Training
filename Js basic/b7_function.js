//Ví dụ về 1 function check số chẵn lẻ
function check_number(number) {
    if (number % 2 == 0) {
        console.log("This is a even number!")
    } else {
        console.log("This is a odd number!")
    }
}
check_number(8);

//Cách gán giá trị mặc định cho tham số
function showMessage(message) {
    return message = message || "Have not message!";

}
console.log(showMessage());
console.log("This is a message!");


//Cách tạo hàm mũi tên (arrow function)
var check_number2 = (number) => {
    if (number % 2 == 0) {
        return "This is a even number!"
    } else {
        return "This is a odd number!";
    }
};
console.log("-------------");
console.log(check_number2(5));

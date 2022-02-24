
if (true) {
    let username = "Nguyen Duy Manh1";;
    console.log(username);
}
//Lỗi vì khai báo let chỉ sử dụng được trong block scope
//console.log(username);

const user = "manh";
console.log(user);

// Biến const không thể thay đổi. Do đó chỗ này sẽ lỗi
user = "manh2";
console.log(user);
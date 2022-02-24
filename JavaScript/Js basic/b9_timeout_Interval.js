// Interval: Quãng thời gian


var current = new Date();
console.log("Begin: " + current.getSeconds());

var action = setTimeout(() => {
    current = new Date();
    console.log("End: " + current.getSeconds());
    //Nếu thực hiện clear timeout ở đây thì log được hiển thị 1 lần
    // clearTimeout(action);
}, 3000);

//Xóa timeout: Như này thì log bên trong setTimeout sẽ ko hiển thị
clearTimeout(action);


// 
var actionInterval = setInterval(() => {
    current = new Date();
    console.log(current);
    // clearInterval(actionInterval);
}, 3000);
clearInterval(actionInterval);


// Timeout và Interval khác nhau ở chỗ :
// khi ko clear timeout/ clear Interval thì setTimeout chạy 1 lần còn setInterver chạy mãi mãi


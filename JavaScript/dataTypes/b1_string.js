// String object    -> Trả về kiểu object        
var message = new String("chào mừng bạn đến với freetuts.net");
console.log( message);
// String function  -> Trả về kiểu string
var message = String("chào mừng bạn đến với freetuts.net");
console.log( message);


// Trước khi chuyển đổi
var number = 12;
console.log(typeof number);

// Sau khi chuyển đổi
number = number.toString();
console.log(typeof number);



var str = "Please locate where 'locate' occurs!";
// indexOf và serch tác dụng như nhau
var pos = str.search("locate");
var index = str.indexOf("locate");
console.log(pos);
console.log(index);

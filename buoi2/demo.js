/*
Bài toán if else như sau:
Đứng vai trò là người tuyển dụng học sinh tại trường cấp 3 thì trường phân loại tuyển học sinh như sau:
- Điểm học sinh: 8-10 => "Học sinh loại Giỏi"
- Điểm học sinh: 6.5 - 8 => "Học sinh loại Khá"
- Điểm học sinh: 5 - 6.5 => "Học sinh loại Trung Bình"
- Điểm học sinh: 0 -> 5 => "Học sinh loại Kém"
Xây dựng trương trình kiểm tra đầu vào học sinh và in ra kết quả tương tự. Sử dụng if - else if - else
*/
/*
let diem = Number(prompt("Mời học sinh nhập vào số điểm"));
console.log("Diem:", diem);

if (diem >=8){
    alert(" Hoc sinh gioi")
}
else if (diem < 8 && diem >= 6.5){
    alert("Hoc sinh kha")
}
else if (diem <6.5 && diem >=5){
    alert("Hoc sinh trung binh")
}
else {
    alert("Hoc sinh yeu")
}
*/

/*
// ||
alert( true || true );   // true tuong dong
alert( false || true );  // true bat tuong dong
alert( true || false );  // true
alert( false || false ); // false


// &&
alert( true && true );   // true tuong dong
alert( false && true );  // false bat tuong dong
alert( true && false );  // false
alert( false && false ); // false
*/

console.log("** vidu1")
let animals = ["Cho","Meo","Ech"]

// push chuc nang la day len nha
animals.push("Cavoi")

console.log("Đọc mảng animals :", animals)

//update
animals[0] = "chuot"
console.log("Đọc mảng animals :", animals)

// animals ["Chuot", "Meo","Ech"]
animals.splice(1,2)
console.log("Xoá phần tử:", animals)

let people = {
    name: "Thay Tan",
    age: 25,
    sex: "Male",
    cccd:"12311213",
    address: "ho chi minh city",
    job: "Developer",
    hobbies: "Coding"
}
console.log(people);

people.age = 22
console.log("cap nhap so tuoi",people)

delete people.job
console.log(people)

let hedieuhanh = ["Windowns", "Android", "Linux"]

hedieuhanh.push("BigC")
console.log(hedieuhanh)

// while , do while , for
// push, splice, update , delete
// object, array
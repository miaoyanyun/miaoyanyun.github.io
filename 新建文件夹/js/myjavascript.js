//这是单行注释
/*
*这是多行块级注释
*哈哈哈哈function box()
{
	alert("123");
}
alert(typeof new Object());
var box = { //创建一个对象
'name' : '李炎恢', //键值对
'age' : 28,
'height' : 178
};
with (box) { //省略了box 对象名
var n = name;
var a = age;
var h = height;
}
alert(box["name"]);function box(num1, num2) {
return num1 * num2;
}
var num = box(10, 5); //函数得到的返回值赋给变量
alert(num);
*/
//var box=100;//声明并初始化变量box
//box="maxine";//隐式类型转换，耗资源，不建议
//alert( typeof box);//以弹窗的方式输出box的的类型(string)
//var box=true;

//alert(parseInt(null.toString()));
//alert(null.toString());

var box = ['李炎恢', 28, '盐城',12,23]; //当前数组
var box2 = box.slice(1,3); //box.slice(1,3)，2-4 之间的元素
alert(box2); //28，盐城
alert(box); //当

//���ǵ���ע��
/*
*���Ƕ��п鼶ע��
*��������function box()
{
	alert("123");
}
alert(typeof new Object());
var box = { //����һ������
'name' : '���׻�', //��ֵ��
'age' : 28,
'height' : 178
};
with (box) { //ʡ����box ������
var n = name;
var a = age;
var h = height;
}
alert(box["name"]);function box(num1, num2) {
return num1 * num2;
}
var num = box(10, 5); //�����õ��ķ���ֵ��������
alert(num);
*/
//var box=100;//��������ʼ������box
//box="maxine";//��ʽ����ת��������Դ��������
//alert( typeof box);//�Ե����ķ�ʽ���box�ĵ�����(string)
//var box=true;

//alert(parseInt(null.toString()));
//alert(null.toString());

var box = ['���׻�', 28, '�γ�',12,23]; //��ǰ����
var box2 = box.slice(1,3); //box.slice(1,3)��2-4 ֮���Ԫ��
alert(box2); //28���γ�
alert(box); //��

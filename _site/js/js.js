$(document).ready(function() {

	// ��������������һ�������е��º��յ�����
	var monthNames = [ "һ��", "����", "����", "����", "����", "����", "����", "����", "����", "ʮ��", "ʮһ��", "ʮ����" ]; 
	var dayNames= ["������","����һ","���ڶ�","������","������","������","������"]

	// ����һ������newDate����
	var newDate = new Date();
	// ��ȡ��ǰ�����ڴ����ڶ���
	newDate.setDate(newDate.getDate());
	//��������ӣ����ڣ��º���
	$('#Date').html(newDate.getFullYear() + " " + monthNames[newDate.getMonth()] + ' ' + newDate.getDate() + ' ' + dayNames[newDate.getDay()]);

	setInterval( function() {
		// ����һ�����󣬲���ȡnewDate�����ڷ����ߵĵ�ǰʱ�����
		var seconds = new Date().getSeconds();
		//���ǰ������ֵ
		$("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);
	},1000);
	
	setInterval( function() {
		// ����һ�����󣬲���ȡnewDate�����ڷ����ߵĵ�ǰʱ��ķ���
		var minutes = new Date().getMinutes();
		// ���ǰ����ķ���ֵ
		$("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
    },1000);
	
	setInterval( function() {
		// ����һ�����󣬲���ȡnewDate�����ڷ����ߵĵ�ǰʱ���Сʱ
		var hours = new Date().getHours();
		// ���ǰ�����Сʱֵ
		$("#hours").html(( hours < 10 ? "0" : "" ) + hours);
    }, 1000);
	
}); 
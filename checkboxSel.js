$(function(){

	//购物车全选
	$('.allselect').click(function(){
		$(".uniqueInput").prop("checked",$(this).prop("checked"));
		//同步所有的全选按钮
		$('.allselect').prop("checked",$(this).prop("checked"));

	});

	//若在全选状态下，单个商品取消选中状态，则恢复全选按钮未选中状态
	$('.uniqueInput').click(function(){
		if(!$(this).prop('checked')){
			$('.allselect').prop("checked",$(this).prop("checked"));
		}
		//若在非全选状态下，单个商品依次选中要更新全选按钮状态
		if($('.uniqueInput').length == $('input.uniqueInput:checked').length){
			$('.allselect').prop("checked",true);
		}
	});

	
	//获取选中的checkbox的id
	$('#obtain').click(function(){
		//记录选中的id
		var getArray = [];

		$('.uniqueInput').each(function(){
			if($(this).prop('checked')){
				getArray.push($(this).attr('data-id'));
			}
		});

		console.log(getArray);
	});


});
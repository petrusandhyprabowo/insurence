$(document).ready(function(){

	var param = {'baseurl': '../html/content/', 'suffix': 'dashboard', 'type': 'html'};

	function ajaxGetHtml(param){
		var responseGet;
		$.ajax({
			method: 'GET',
			async: false,
			url: param.baseurl + param.suffix + '.' + param.type,
			success: function(response){
				responseGet =  response;
			},
			error: function(){
				alert('error')
			}
		});
		return responseGet;
	}

	$('.main-content').html(ajaxGetHtml(param));
	$('#smallmodal').modal('hide');
	$('body').removeClass('modal-open');
	$('.modal-backdrop').remove();

	$('.w3-button').on('click', function(){
		param['suffix'] = $(this).attr('data-html');
		$('.main-content').html(ajaxGetHtml(param));
	})
});
$(document).ready(function(){

	var param = {'url': '../html/content/contoh.html'};

	function ajaxGetHtml(param){
		var responseGet;
		$.ajax({
			method: 'GET',
			async: false,
			url: param.url,
			success: function(response){
				responseGet =  response;
			},
			error: function(){
				alert('error')
			}
		});
		return responseGet;
	}

	htmlScript = ajaxGetHtml(param);

	$('.main-content').html(htmlScript);
});
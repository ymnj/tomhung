$(document).ready( function(){

	$('html').addClass('js');


	//Show Project information 

	var projDesc = {

		navClick: function(){
			$('.project-name').on( 'click', this.show );
		},

		
		boxClick: function(){
			$('.project-img-container').on( 'click', this.show);
		},

		show: function(){
		var projId = '#' + $(this).data('project');

			if( $(projId).find('.button').length == 0 ){

				//create button
				$('<span></span>', {class: 'button'} ).appendTo(projId);
				$('<button></button>', { 
					class: 'closeBttn',
					text: 'Close'
				}).appendTo( $(projId).children('.button'));
			} 

			$(projId).slideToggle( 500 );
			projDesc.close();
			
		},

		close: function(){
			$('.closeBttn').on('click', function(){
				$(this).closest('.project-description').slideUp();
			})
		}



	}


	projDesc.navClick();
	projDesc.boxClick();



	//Photo Set Display AJAX

	function sendPhotoAJAX (){
		var photoSet = $(this).data('photo-set');
		
		$("#photo-content").hide().load('data/'+ photoSet + '.html').fadeIn(1000);
	}


	$('.photosetBttn').on('click', sendPhotoAJAX);


});

(function($) {
	$('.ya-tooltip').tooltip();
	// fix accordion heading state
	$('.accordion-heading').each(function(){
		var $this = $(this), $body = $this.siblings('.accordion-body');
		if (!$body.hasClass('in')){
			$this.find('.accordion-toggle').addClass('collapsed');
		}
	});
	
	// twice click
	$(document).on('click.twice', '.open [data-toggle="dropdown"]', function(e){
		var $this = $(this), href = $this.attr('href');
		e.preventDefault();
		window.location.href = href;
		return false;
	});
	
    $('#cpanel').collapse();
	
    $('#cpanel-reset').on('click', function(e) {

    	if (document.cookie && document.cookie != '') {
    		var split = document.cookie.split(';');
    		for (var i = 0; i < split.length; i++) {
    			var name_value = split[i].split("=");
    			name_value[0] = name_value[0].replace(/^ /, '');
    			
    			if (name_value[0].indexOf(cpanel_name)===0) {
    				$.cookie(name_value[0], 1, { path: '/', expires: -1 });
    			}
    		}
    	}
    	
    	location.reload();
    });
    
	$('#cpanel-form').on('submit', function(e){
		var $this = $(this), data = $this.data(), values = $this.serializeArray();
		
		var checkbox = $this.find('input:checkbox');
		$.each(checkbox, function() {
			
			if( !$(this).is(':checked') ) {
				name = $(this).attr('name');
				name = name.replace(/([^\[]*)\[(.*)\]/g, '$1_$2');
				
				$.cookie( name , 0, { path: '/', expires: 7 });
			} 
			
		})
		
		$.each(values, function(){
			var $nvp = this;
			var name = $nvp.name;
			var value = $nvp.value;
			
			if ( !(name.indexOf(cpanel_name + '[')===0) ) return ;
			
			//console.log('name: ' + name + ' -> value: ' +value);
			name = name.replace(/([^\[]*)\[(.*)\]/g, '$1_$2');
			
			$.cookie( name , value, { path: '/', expires: 7 });
			 
		});
		
		location.reload();
		
		return false;
		
	});
	
	$('a[href="#cpanel-form"]').on( 'click', function(e) {
		var parent = $('#cpanel-form'), right = parent.css('right'), width = parent.width();
		
		if ( parseFloat(right) < -10 ) {
			parent.animate({
				right: '0px',
			}, "slow");
		} else {
			parent.animate({
				right: '-' + width ,
			}, "slow");
		}
		
		if ( $(this).hasClass('active') ) {
			$(this).removeClass('active');
		} else $(this).addClass('active');
		
		e.preventDefault();
	});
	

}(jQuery));
	
	
	
	
	
jQuery(document).ready(function($){

  //Desktop breakpoin
  var MqL = 767;

  //move nav element position according to window width on load
  moveNavigation();

  //move navigation on resize
  $(window).on('resize', function(){
    (!window.requestAnimationFrame) ? setTimeout(moveNavigation, 300) : window.requestAnimationFrame(moveNavigation);
  });

  function checkWindowWidth() {
    //check window width (scrollbar included)
    var e = window,
            a = 'inner';
        if (!('innerWidth' in window )) {
            a = 'client';
            e = document.documentElement || document.body;
        }
        console.log(e[ a+'Width' ]);
        if ( e[ a+'Width' ] > MqL ) {
      return true;
    } else {
      return false;
    }
  }

  function moveNavigation(){
		var navigation = $('.nav-side-menu');
  		var desktop = checkWindowWidth();
        if ( desktop ) {
    			navigation.detach();
    			navigation.appendTo('#navDesktop');
    		} else {
    			navigation.detach();
    			navigation.insertBefore('.logo');
    		}
	}

});

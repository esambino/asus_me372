$(function() {

	//slideshow
    $('#slide1').cycle({
    after: function(el, next_el) {
        $(next_el).addClass('animate');
    },
    before: function(el) {
        $(el).removeClass('animate');
    },
        fx:     'fade',		slideResize:  false,
		fit:           1,
		containerResize: false,
	    next:   '#sliderNavBeauty .next', 
        prev:   '#sliderNavBeauty .prev' ,
        speed:  '300',
        timeout: 0,
        pager:  '#sliderNavBeauty ul',
        pagerAnchorBuilder: function(idx, slide) {
          return '<li><a href="#"><span>'+ slide.title +'</span></a></li>' ;
        }
    });

	//slideshow
    $('#slide2').cycle({
    after: function(el, next_el) {
        $(next_el).addClass('animate');
	
	if ($('#sonicMaster.animate')[0]) {
     $('.sound').addClass('bg2');
	}
	else {
     $('.sound').removeClass('bg2');
	}

    },
    before: function(el) {
        $(el).removeClass('animate');
    },

        fx:     'fade',		slideResize:  false,
		fit:           1,
		cleartype: true,
      cleartypeNoBg: true,
		containerResize: false,
	    next:   '#sliderNavSound .next', 
        prev:   '#sliderNavSound .prev' ,
        speed:  '300',
        timeout: 0,
        pager:  '#sliderNavSound ul',
        pagerAnchorBuilder: function(idx, slide) {
          return '<li><a href="#"><span>'+ slide.title +'</span></a></li>' ;
        }
    });

	//slideshow
    $('#slide3').cycle({
    after: function(el, next_el) {
        $(next_el).addClass('animate');
			if ($('#multiTouch.animate,#touch.animate')[0]) {
     $('#sliderNavTouch').addClass('dark');
	}
	else {
     $('#sliderNavTouch').removeClass('dark');
	}
    },
    before: function(el) {
        $(el).removeClass('animate');
    },
        fx:     'fade',		slideResize:  false,
		fit:           1,
		containerResize: false,
	    next:   '#sliderNavTouch .next', 
        prev:   '#sliderNavTouch .prev' ,
        speed:  '300',
        timeout: 0,
        pager:  '#sliderNavTouch ul',
        pagerAnchorBuilder: function(idx, slide) {
          return '<li><a href="#"><span>'+ slide.title +'</span></a></li>' ;
        }
    });	

	//slideshow
    $('#slide4').cycle({
    after: function(el, next_el) {
        $(next_el).addClass('animate');
    },
    before: function(el) {
        $(el).removeClass('animate');
    },
        fx:     'fade',		slideResize:  false,
		fit:           1,
		containerResize: false,
	    next:   '#sliderNavUbiquity .next', 
        prev:   '#sliderNavUbiquity .prev' ,
        speed:  '300',
        timeout: 0,
        pager:  '#sliderNavUbiquity ul',
        pagerAnchorBuilder: function(idx, slide) {
          return '<li><a href="#"><span>'+ slide.title +'</span></a></li>' ;
        }
    });	

	//slideshow
    $('#slide5').cycle({
    after: function(el, next_el) {
        $(next_el).addClass('animate');
    },
    before: function(el) {
        $(el).removeClass('animate');
    },
        fx:     'fade',		slideResize:  false,
		fit:           1,
		containerResize: false,
	    next:   '#sliderNavApplication .next', 
        prev:   '#sliderNavApplication .prev' ,
        speed:  '300',
        timeout: 0,
        pager:  '#sliderNavApplication ul',
        pagerAnchorBuilder: function(idx, slide) {
          return '<li><a href="#"><span></span>'+ slide.title +'</a></li>' ;
        }
    });	

	//slideshow
    $('#slide6').cycle({
    after: function(el, next_el) {
        $(next_el).addClass('animate');
    },
    before: function(el) {
        $(el).removeClass('animate');
    },
        fx:     'fade',		slideResize:  false,
		fit:           1,
		containerResize: false,
	    next:   '#sliderNavAccessory .next', 
        prev:   '#sliderNavAccessory .prev' ,
        speed:  '300',
        timeout: 0,
        pager:  '#sliderNavAccessory ul',
        pagerAnchorBuilder: function(idx, slide) {
          return '<li><a href="#"><span>'+ slide.title +'</span></a></li>' ;
        }
    });	
	//3D reel
	var $size = 173,
    $images = new Array();
    function padLeft(str, length, sign){
        var $str = new String(str);
        
        if ($str.length >= length) {
            return $str;
        } else {
            return padLeft(sign + $str, length, sign);
        }
	}

    for ($i = 0; $i <= $size; $i++) {
         $images.push(padLeft($i, 3, 0) + '.png');
    }
    
    for ($i in $images) {
     $('#result').append($images[$i] + '<br>');   
    }

$('#index .open_reel').click(function(){
	$("#reel").fadeIn();
	$('#reel_image').reel({
path:    'websites/global/products/S5VNCPd9PVjUHw41/img/common/reel/ME372_131025_comp_00',
images:  $images
}); 
	return false;
});

$('#reel .close_reel').click(function(){
	$("#reel").fadeOut();
	return false;
});
	
	
});
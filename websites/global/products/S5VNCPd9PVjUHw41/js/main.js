   

$(function () {
    getHostName = function () {
        var m = $(location).attr('href').match(/^http:\/\/[^/]+/);
        return m ? m[0] : null;
    };
    hostName = getHostName() + "/websites/global/products/S5VNCPd9PVjUHw41/";
    //console.log = function(){};

    var a = $("#loaded .gotop:first").clone().show();
    //$(".page .center,.banner").not("#index .center,#beauty .center,#sound .center,#touch .center,#response .center,#cloud .center,#buy .center").each(function (i, d) {
    //    var aclone = $(a).clone();
    //    $(aclone).click(function () {
    //        TweenMax.to(window, .5, { scrollTo: { y: 0, ease: Sine.easeOut } });
    //    });
    //    $(this).append(aclone);
    //});
    $(".video a").colorbox({ iframe: true, innerWidth: 640, innerHeight: 480, transition:"fade" });
    $("#special-sectionOverview #wrap").width($(window).width() <= 960 ? 960 : $(window).width());
    $("#special-sectionOverview #wrap").css("left", $(window).width() <= 960 ? 0 : ($(window).width() - 960) / -2 );


    $("#main-menu li a").bind('touchend click', function () {
        var idx = $(this).parent().index();
        $("html,body").animate({
            scrollTop : $(".page").eq(idx).offset().top - 30
        },450);
    });

 
    $(".page nav li a").bind('touchend click', function () {
        var o = $(this);

        var activeIndex = o.parent().index();
        var target = o.parents(".page").find(".content").eq(activeIndex).addClass("active");
        target.siblings().removeClass("active");

        var delay = 1;
        
        if (target.parents(".page").hasClass('ubiquity')) {
            if (target.attr('id') === 'battery' || target.attr('id') === 'thickness' ){
                //o.parents(".page").find(".background").removeClass("silence");
                switch(target.attr('id')){
                    case 'battery':
                        $(".motion").addClass("battery").removeClass("thickness");
                        break;
                    case 'thickness':
                        $(".motion").removeClass("battery").addClass("thickness");
                        break;
                }
            } else if (o.parents(".page").find(".background").hasClass("battery")) {
                //o.parents(".page").find(".background").addClass("silence");
                //o.parents(".page").find(".background").removeClass("battery");
            }
        }


            triggerContentActive(target);


        o.parent().addClass("active").siblings().removeClass("active");
        o.parents(".page").find("figure.bg").eq(activeIndex).addClass("active").siblings().removeClass("active");
        o.parents(".page").find(".wide").css("left", activeIndex * -100 + "%");
        //if (!o.parent().next().length)
        //    o.parents("nav").find(".tabarrow.next").hide();
        //else
        //    o.parents("nav").find(".tabarrow.next").show();
        //if (!o.parent().prev().length)
        //    o.parents("nav").find(".tabarrow.prev").hide();
        //else
        //    o.parents("nav").find(".tabarrow.prev").show();
    });
 


    $(window).keydown(function (e) {
        return e.keyCode !== 9
    });

    var scrollCurrent = $(window).scrollTop();
    $(window).scroll(function () {
        if ($(window).scrollTop() > $("#wrap").offset().top - 30) {
            $("nav#menu").addClass('fixed');
            $("#special-sectionOverview nav#menu").css("padding-top", ($(window).height() - 300) / 2 - 30 + "px")
            $("#special-sectionOverview nav#menu.fixed").css("padding-top", ($(window).height() - 300) / 2 + "px");
        } else {
            $("nav#menu").removeClass('fixed');
        }
        var scrollDown = scrollCurrent < $(window).scrollTop();
        scrollCurrent = $(window).scrollTop();
        var idx = 0;
        if (scrollDown) {
            $($(".page").get().reverse()).each(function (i, d) {
                if (scrollCurrent + $(window).height() > $(d).offset().top + $(window).height() * 0.7) {
                    if ($(d).hasClass('on'))
                        return false;
                    $(d).addClass('on').siblings().removeClass('on');
                    $("#main-menu li").eq($(d).index()).addClass('on').siblings().removeClass("on");
                    idx = $(d).index();
                    var content = ($('.active', d).length > 0 ? $('.content.active', d) : $('.content', d).first());
                    //triggerContentActive(content);
                    return false;
                }
            });
        } else {
            $(".page").each(function (i, d) {
                if (scrollCurrent + $(window).height() < $(d).offset().top + $(window).height() * 1) {
                    if ($(d).hasClass('on'))
                        return false;
                    $(d).addClass('on').siblings().removeClass('on');
                    $("#main-menu li").eq($(d).index()).addClass('on').siblings().removeClass("on");
                    idx = $(d).index();
                    var content = ($('.active', d).length > 0 ? $('.content.active', d) : $('.content', d).first());
                    //triggerContentActive(content);
                    return false;
                }
            });

        }
    });
    $(window).resize(function () {
        $("#special-sectionOverview #wrap").width($(window).width() <= 960 ? 960 : $(window).width());
        $("#special-sectionOverview #wrap").css("left", $(window).width() <= 960 ? 0 : ($(window).width() - 960) / -2);
        $("#special-sectionOverview nav#menu").css("padding-top", ($(window).height() - 300) / 2 - 30 + "px")
        $("#special-sectionOverview nav#menu.fixed").css("padding-top", ($(window).height() - 300) / 2 + "px");
    });





});

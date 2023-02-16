$(function(){
    var charts = $('.charts');
    var chart = $('.chart');
    var chartOST = chart.offset().top - 700;
    // var executed = false;
    // console.log(executed);


    $(window).scroll(function(){
        var currentSCT = $(this).scrollTop();
        if(currentSCT >= chartOST){
            if(!charts.hasClass('active')){
                animateChart();
                charts.addClass('active');
            }
            console.log(executed);
        }
    });

    function animateChart(){
        chart.each(function(){
            var item = $(this);
            var title = item.find('h2');
            var targetNum = title.attr('data-num');
            var circle = item.find('circle');
            
            $({rate:0}).animate({rate : targetNum},
                {
                    duration:1500,
                    progress:function(){
                        var now = this.rate;
                        var amount = 630 - (630*now/100);
                        console.log(now);
                        title.text(Math.floor(now));
                        circle.css({strokeDashoffset:amount})
                    }
            });
        }); // chart each
    }
});
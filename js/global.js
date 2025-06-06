/* global.js - theme by: brian a. bauska (grandpa) */
$( function() {
  // add background image - countdown to her 21st birthday 8/14/2025 approx 7am.
  $.backstretch('images/and the gay night life.jpg');
  // date of birth: 8/14/2004.
  var endDate = "Aug 14, 2025 06:59:59";
  $('.countdown.simple').countdown({ date: endDate });
  $('.countdown.styled').countdown({
    date: endDate,
    render: function(data) {
      $(this.el).html("<div>" + this.leadingZeros(data.days, 2) + " <span>days</span></div><div>" 
        + this.leadingZeros(data.hours, 2) + " <span>hrs</span></div><div>" 
        + this.leadingZeros(data.min, 2) + " <span>min</span></div><div>" 
        + this.leadingZeros(data.sec, 2) + " <span>sec</span></div>");
    }
  });
  $('.countdown.callback').countdown({
    date: +(new Date) + 10000,
    render: function(data) {
      $(this.el).text(this.leadingZeros(data.sec, 2) + " sec");
    },
    onEnd: function() {
            $(this.el).addClass('ended');
    }
  }).on("click", function() {
    $(this).removeClass('ended').data('countdown').update(+(new Date) + 10000).start();
  });
});

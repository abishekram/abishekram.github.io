$(document).foundation();
$(".pricing-table").hover(
  function () {
    $(this).addClass('pulse');
  },
  function () {
    $(this).removeClass('pulse');
  }
  );

//   var typed = new Typed('.rolling_skill', {
//   strings: ["HTML , CSS ,JS","Java Frameworks "],
//   typeSpeed: 30
// });

var namedType = new Typed( '.developer_anim span strong',{strings: [" a software developer" ," Abishek ram "],typeSpeed: 30});

function insertChart (chart, color){
    chart.easyPieChart({
        scaleColor: false,
        lineWidth: 7,
        lineCap: 'round',
        barColor: color,
        size: 150,
        animate: 2500
      });
}
$(function() {
    $('.chart').each(function(){
        insertChart($(this), $(this).data('color'))
    })

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            $('.chart').each(function(){
                $(this).data('easyPieChart').update($(this).data('percent'));
              })
            return;
          }
          $('.chart').each(function(){
            $(this).data('easyPieChart').update(0);
          })
        });
      });

      observer.observe(document.querySelector('.skills_round'));




    // $('.chart').data('easyPieChart').update(parcent)
});
document.addEventListener("DOMContentLoaded", function(event) {
    let hr = document.querySelector('#sc');
    const deg = 6;
    setInterval(()=>{
        let day = new Date();
        let ss = day.getSeconds() * deg;
        hr.style.transform = `rotateZ(${(ss)}deg)`;
    })
});
$(function () {
    $(".hero_content .description span").typed({
      strings:["Anastasiya Shkutnik", "Web Designer", "UX/UI Designer", "Junior Specialist"],
      typeSpeed: 70,
      backSpeed: 20,
      backDelay: 1500,
      showCursor: true,
      loop: true
    });
});
ScrollOut({
    targets:".transitApper, .opacityTrans"
})
document.addEventListener('DOMContentLoaded', () => {
  const PROJECT_BTN = document.querySelectorAll('.portfolio_content .project .btn_see_more');
  [ ...PROJECT_BTN].forEach(btn => {
    btn.addEventListener('click', () => {
      const HREF = btn.getAttribute('href')
      window.open(HREF,'_blank');
    })
  })
  document.querySelector('.portfolio .btn_group .btn_behance').addEventListener('click', () => {
    const HREF = 'https://www.behance.net/anastasiyashkutnik';
    window.open(HREF,'_blank');
  })
})

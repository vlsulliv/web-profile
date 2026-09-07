(function(){
  var sections = Array.prototype.slice.call(document.querySelectorAll('main section'));
  var railLinks = Array.prototype.slice.call(document.querySelectorAll('#rail-list a'));
  var topLinks = Array.prototype.slice.call(document.querySelectorAll('#topnav-list a'));

  function setActive(id){
    railLinks.concat(topLinks).forEach(function(a){
      a.classList.toggle('active', a.dataset.target === id);
    });
  }

  if('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          setActive(entry.target.id);
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    sections.forEach(function(s){ io.observe(s); });
  }

  // Draw-in animation for the well-log trace on first load
  var path = document.getElementById('wellLog');
  if(path && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    var len = path.getTotalLength();
    path.style.strokeDasharray = len;
    path.style.strokeDashoffset = len;
    path.getBoundingClientRect(); // force reflow
    path.style.transition = 'stroke-dashoffset 2.1s cubic-bezier(.4,0,.2,1) .2s';
    requestAnimationFrame(function(){
      path.style.strokeDashoffset = '0';
    });
  }
})();
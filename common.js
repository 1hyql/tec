const menuToggle=document.getElementById('menuToggle'),menu=document.getElementById('menu'),closeMenuBtn=document.getElementById('closeMenu'),menuOverlay=document.getElementById('menuOverlay');
function openMenu(){menu.classList.add('active');menuOverlay.classList.add('active');menuToggle.classList.add('active');document.body.style.overflow='hidden';}
function closeMenuFn(){menu.classList.remove('active');menuOverlay.classList.remove('active');menuToggle.classList.remove('active');document.body.style.overflow='';}
if(menuToggle)menuToggle.addEventListener('click',()=>{menu.classList.contains('active')?closeMenuFn():openMenu();});
if(closeMenuBtn)closeMenuBtn.addEventListener('click',closeMenuFn);
if(menuOverlay)menuOverlay.addEventListener('click',closeMenuFn);
const topNav=document.getElementById('topNav');
if(topNav)window.addEventListener('scroll',()=>{window.scrollY>50?topNav.classList.add('scrolled'):topNav.classList.remove('scrolled');});
document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener('click',function(e){const t=this.getAttribute('href');if(t==='#')return;const el=document.querySelector(t);if(el){e.preventDefault();const h=topNav?topNav.offsetHeight:60;window.scrollTo({top:el.offsetTop-h-20,behavior:'smooth'});closeMenuFn();}});});
const btt=document.getElementById('backToTop');
if(btt){window.addEventListener('scroll',()=>{window.scrollY>400?btt.classList.add('visible'):btt.classList.remove('visible');});btt.addEventListener('click',()=>{window.scrollTo({top:0,behavior:'smooth'});});}
const obs=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('animate-in');obs.unobserve(e.target);}});},{threshold:0.1,rootMargin:'0px 0px -50px 0px'});
document.querySelectorAll('.card,.feature-card,.download-card,.article-card-large,.announcement-item,.link-card,.faq-item,.stat-card,.timeline-item,.guide-card,.search-result-card').forEach(el=>{el.style.opacity='0';obs.observe(el);});

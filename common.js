const themeToggle=document.getElementById('themeToggle'),menuToggle=document.getElementById('menuToggle'),menu=document.getElementById('menu'),closeMenuBtn=document.getElementById('closeMenu'),menuOverlay=document.getElementById('menuOverlay');
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
const obs=new IntersectionObserver((es)=>{es.forEach((e,i)=>{if(e.isIntersecting){e.target.style.opacity='1';if(i%3===0){e.target.classList.add('animate-in');}else if(i%3===1){e.target.classList.add('animate-left');}else{e.target.classList.add('animate-right');}obs.unobserve(e.target);}});},{threshold:0.1,rootMargin:'0px 0px -50px 0px'});
document.querySelectorAll('.card,.feature-card,.download-card,.article-card-large,.announcement-item,.link-card,.faq-item,.stat-card,.timeline-item,.guide-card,.search-result-card').forEach((el,i)=>{el.style.opacity='0';el.style.transitionDelay=(i*0.1)+'s';obs.observe(el);});
const sectionObs=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('animate-slide-up');sectionObs.unobserve(e.target);}});},{threshold:0.05,rootMargin:'0px 0px -100px 0px'});
document.querySelectorAll('.intro,.section-header,.bilibili-video,.quick-links,.official-resources').forEach(el=>{el.style.opacity='0';sectionObs.observe(el);});
document.addEventListener('DOMContentLoaded',()=>{document.body.classList.add('page-loaded');});
window.addEventListener('scroll',()=>{const parallax=document.querySelectorAll('.parallax');parallax.forEach(el=>{const speed=el.dataset.speed||0.5;el.style.transform=`translateY(${window.scrollY*speed}px)`;});});
let mouseX=0,mouseY=0;
document.addEventListener('mousemove',(e)=>{mouseX=(e.clientX-window.innerWidth/2);mouseY=(e.clientY-window.innerHeight/2);document.querySelectorAll('.mouse-follow').forEach(el=>{const speed=el.dataset.speed||0.02;el.style.transform=`translate(${mouseX*speed}px,${mouseY*speed}px)`;});});
function getTheme(){const saved=localStorage.getItem('termux-theme');if(saved)return saved;return window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}
function setTheme(theme){document.documentElement.setAttribute('data-theme',theme);localStorage.setItem('termux-theme',theme);if(themeToggle){themeToggle.textContent=theme==='dark'?'☀️':'🌙';}}
function toggleTheme(){const current=getTheme();const newTheme=current==='dark'?'light':'dark';setTheme(newTheme);}
setTheme(getTheme());
if(themeToggle)themeToggle.addEventListener('click',toggleTheme);

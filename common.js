// 延迟在 DOMContentLoaded 时初始化与页面可能重复的 DOM 事件，避免与页面内脚本声明冲突
document.addEventListener('DOMContentLoaded', function() {
	var menuToggle = document.getElementById('menuToggle');
	var menu = document.getElementById('menu');
	var closeMenuBtn = document.getElementById('closeMenu');
	var menuOverlay = document.getElementById('menuOverlay');

	function openMenu(){ menu && menu.classList.add('active'); if(menuOverlay) menuOverlay.classList.add('active'); if(menuToggle) menuToggle.classList.add('active'); document.body.style.overflow='hidden'; }
	function closeMenuFn(){ menu && menu.classList.remove('active'); if(menuOverlay) menuOverlay.classList.remove('active'); if(menuToggle) menuToggle.classList.remove('active'); document.body.style.overflow=''; }

	if(menuToggle) menuToggle.addEventListener('click', function(){ menu && menu.classList.contains('active') ? closeMenuFn() : openMenu(); });
	if(closeMenuBtn) closeMenuBtn.addEventListener('click', closeMenuFn);
	if(menuOverlay) menuOverlay.addEventListener('click', closeMenuFn);

	var topNav = document.getElementById('topNav');
	if(topNav) window.addEventListener('scroll', function(){ window.scrollY>50 ? topNav.classList.add('scrolled') : topNav.classList.remove('scrolled'); });

	document.querySelectorAll('a[href^="#"]').forEach(function(a){ a.addEventListener('click', function(e){ var t = this.getAttribute('href'); if(t === '#') return; var el = document.querySelector(t); if(el){ e.preventDefault(); var h = topNav ? topNav.offsetHeight : 60; window.scrollTo({ top: el.offsetTop - h - 20, behavior: 'smooth' }); closeMenuFn(); } }); });

	var btt = document.getElementById('backToTop');
	if(btt){ window.addEventListener('scroll', function(){ window.scrollY > 400 ? btt.classList.add('visible') : btt.classList.remove('visible'); }); btt.addEventListener('click', function(){ window.scrollTo({ top:0, behavior:'smooth' }); }); }

	var obs = new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('animate-in'); obs.unobserve(e.target); } }); }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
	document.querySelectorAll('.card,.feature-card,.download-card,.article-card-large,.announcement-item,.link-card,.faq-item,.stat-card,.timeline-item,.guide-card,.search-result-card').forEach(function(el){ el.style.opacity = '0'; obs.observe(el); });
});

// 公共：git 命令复制与悬停滚动逻辑
function setupGitCopy(root) {
	// If called as an event listener, the first arg may be an Event object.
	if (!root || (typeof root === 'object' && typeof root.type === 'string')) root = document;
	if (typeof root.querySelectorAll !== 'function') root = document;
	root.querySelectorAll('.git-command').forEach(function(el){
		if (el.dataset.gitBound) return; el.dataset.gitBound = '1';
		var btn = el.querySelector('.copy-btn');
		var cmd = el.dataset.cmd || (el.textContent || '').trim();
		if (btn) {
			btn.addEventListener('click', function(e){
				e.stopPropagation();
				if (navigator.clipboard && navigator.clipboard.writeText) {
					navigator.clipboard.writeText(cmd).then(function(){
						var old = btn.textContent; btn.textContent = '已复制';
						setTimeout(function(){ btn.textContent = old; }, 1400);
					}).catch(function(){ fallbackCopy(cmd, btn); });
				} else { fallbackCopy(cmd, btn); }
			});
		}
		// 不再触发自动滚动：保留水平滚动条，允许用户手动滚动
	});
}

function fallbackCopy(text, btn) {
	var ta = document.createElement('textarea'); ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0'; document.body.appendChild(ta);
	ta.select();
	try { document.execCommand('copy'); if (btn) btn.textContent = '已复制'; }
	catch (e) { alert('复制失败，请手动复制命令'); }
	ta.remove();
	setTimeout(function(){ if (btn) btn.textContent = '复制'; }, 1400);
}

window.setupGitCopy = setupGitCopy;
window.fallbackCopy = fallbackCopy;

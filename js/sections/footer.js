/**
 * Section Controller: FOOTER & COOKIE NOTICE
 */
export function initFooter() {
  initCookieBanner();
}

/**
 * Quản lý hiển thị Cookie & Privacy Notice Banner
 */
function initCookieBanner() {
  const banner = document.getElementById('cookiePrivacyBanner');
  const btnAccept = document.getElementById('btnAcceptCookieNotice');
  if (!banner) return;

  let acknowledged = false;
  try {
    acknowledged = localStorage.getItem('print3d_cookie_ack') === '1';
  } catch (e) {}

  if (!acknowledged) {
    banner.style.display = 'block';
  }

  if (btnAccept) {
    btnAccept.addEventListener('click', () => {
      banner.style.opacity = '0';
      banner.style.transform = 'translateY(15px)';
      banner.style.transition = 'all 0.3s ease';
      setTimeout(() => {
        banner.style.display = 'none';
      }, 300);
      try {
        localStorage.setItem('print3d_cookie_ack', '1');
      } catch (e) {}
    });
  }
}


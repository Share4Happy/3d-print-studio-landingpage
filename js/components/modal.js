/**
 * Modal Component Controller
 */
export function initModal() {
  const openButtons = document.querySelectorAll('.open-modal-btn');
  const modals = document.querySelectorAll('.modal');

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute('data-target') || 'quote-modal';
      const targetModal = document.getElementById(targetId);
      if (targetModal) {
        // Close any other open modal before opening target
        modals.forEach(m => {
          if (m !== targetModal && m.classList.contains('is-active')) {
            m.classList.remove('is-active');
            m.setAttribute('aria-hidden', 'true');
          }
        });
        targetModal.classList.add('is-active');
        targetModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target.dataset.close === 'true' || e.target.hasAttribute('data-close') || e.target.closest('[data-close]')) {
        closeModal(modal);
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modals.forEach(modal => {
        if (modal.classList.contains('is-active')) {
          closeModal(modal);
        }
      });
    }
  });
}

function closeModal(modal) {
  modal.classList.remove('is-active');
  modal.setAttribute('aria-hidden', 'true');
  const hasOtherActive = Array.from(document.querySelectorAll('.modal')).some(m => m.classList.contains('is-active'));
  if (!hasOtherActive) {
    document.body.style.overflow = '';
  }
}

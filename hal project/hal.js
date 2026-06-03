/* ============================================================
   GRAND LUX HOTEL — main.js
   ============================================================ */

/* ---------- Nav toggle ---------- */
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

/* ---------- Smooth scroll helper ---------- */
function scrollToSection(id) {
  document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  // close mobile menu if open
  document.getElementById('navLinks').classList.remove('open');
}

/* ---------- Nav background on scroll ---------- */
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  nav.style.background = window.scrollY > 60
    ? 'rgba(15,12,26,0.99)'
    : 'rgba(15,12,26,0.96)';
});

/* ---------- Modal data ---------- */
const modalData = {
  modal1: {
    img: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Стандартный номер № 101',
    price: 'от 4 500 ₸ / ночь',
    desc: 'Комфортный номер площадью 18 м² с современным дизайном, кроватью с ортопедическим матрасом и всеми удобствами. Идеально подходит для деловых поездок и коротких визитов. Окна выходят на городской пейзаж.',
    feats: ['18 м²','Wi-Fi 1 Гбит','Smart TV 55"','Мини-бар','Сейф','Климат-контроль']
  },
  modal2: {
    img: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Делюкс Дабл № 205',
    price: 'от 8 900 ₸ / ночь',
    desc: 'Просторный номер 28 м² с роскошной кроватью king-size (180×200 см), мраморной ванной с отдельным душем. Балкон с видом на центр города. Завтрак включён. Персональные халаты и тапочки.',
    feats: ['28 м²','King Bed','Мраморная ванна','Балкон','Завтрак','Халаты']
  },
  modal3: {
    img: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Джуниор Сюит № 312',
    price: 'от 14 500 ₸ / ночь',
    desc: 'Апартаменты площадью 42 м² с отдельной гостиной, дизайнерской мебелью и ванной с джакузи. Кофе-машина Nespresso, персональный набор люксовой косметики. Доступ в велнес-зону включён.',
    feats: ['42 м²','Джакузи','Гостиная','Nespresso','Завтрак','Велнес']
  },
  modal4: {
    img: 'https://images.pexels.com/photos/2029698/pexels-photo-2029698.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Семейный Люкс № 415',
    price: 'от 18 000 ₸ / ночь',
    desc: 'Идеальное пространство для семей — 55 м², две изолированные спальни, просторная гостиная, кухня и детская зона с игрушками. Бесплатное размещение детей до 12 лет. Детское меню в ресторане.',
    feats: ['55 м²','2 спальни','Детская зона','Кухня','Дети до 12 бесплатно','Завтрак']
  },
  modal5: {
    img: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Пентхаус № 501',
    price: 'от 45 000 ₸ / ночь',
    desc: 'Двухуровневый пентхаус 90 м² с частной террасой, плунжерным бассейном и панорамным видом 360°. Личный дворецкий, вечерний коктейль, трансфер на премиум авто включён.',
    feats: ['90 м²','Терраса','Бассейн','Дворецкий','Трансфер','Всё включено']
  },
  modal6: {
    img: 'https://images.pexels.com/photos/3659683/pexels-photo-3659683.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Президентский Люкс № 220',
    price: 'от 80 000 ₸ / ночь',
    desc: 'Вершина роскоши — 120 м². Частная столовая на 10 гостей, спа-зона с хамамом, библиотека, рабочий кабинет, консьерж-служба 24/7. Для тех, кто привык только к лучшему.',
    feats: ['120 м²','Спа-зона','Хамам','Столовая','Консьерж 24/7','VIP сервис']
  }
};

/* ---------- Open modal ---------- */
function openModal(id) {
  const data = modalData[id];
  if (!data) return;

  const overlay = document.getElementById('modalOverlay');
  overlay.dataset.modalId = id;

  overlay.querySelector('.modal-img').src = data.img;
  overlay.querySelector('.modal-img').alt = data.title;
  overlay.querySelector('.modal-title').textContent = data.title;
  overlay.querySelector('.modal-price').textContent = data.price;
  overlay.querySelector('.modal-desc').textContent = data.desc;

  const featsEl = overlay.querySelector('.modal-feats');
  featsEl.innerHTML = data.feats.map(f => `<span class="feat">${f}</span>`).join('');

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

/* ---------- Close modal ---------- */
function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

/* Click outside closes modal */
document.getElementById('modalOverlay').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

/* ---------- Modal → booking ---------- */
function closeAndBook() {
  closeModal();
  setTimeout(() => scrollToSection('#contact'), 120);
}

/* ---------- Toast helper ---------- */
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3200);
}

/* ---------- Booking form ---------- */
function submitBooking() {
  const checkin  = document.getElementById('checkin').value;
  const checkout = document.getElementById('checkout').value;
  const name     = document.getElementById('guestName').value.trim();
  const phone    = document.getElementById('guestPhone').value.trim();

  if (!checkin || !checkout) {
    showToast('⚠️ Пожалуйста, выберите даты заезда и выезда');
    return;
  }
  if (!name) {
    showToast('⚠️ Введите ваше имя');
    return;
  }

  showToast('✦ Бронирование принято! Менеджер свяжется с вами в течение 15 минут');
}

/* ---------- Min dates ---------- */
(function() {
  const today = new Date().toISOString().split('T')[0];
  const ci = document.getElementById('checkin');
  const co = document.getElementById('checkout');
  ci.min = today;
  co.min = today;
  ci.addEventListener('change', function() {
    co.min = this.value;
    if (co.value && co.value < this.value) co.value = this.value;
  });
})();
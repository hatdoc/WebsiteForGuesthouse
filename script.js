const translations = {
    en: {
        "nav.logo": "Cheongchun",
        "nav.about": "About",
        "nav.rooms": "Rooms",
        "nav.amenities": "Amenities",
        "nav.contact": "Location",
        "hero.title": "Cheongchun Guesthouse",
        "hero.subtitle": "Your peaceful retreat by the ancient royal tombs of Gyeongju.",
        "hero.cta": "Explore",
        "about.title": "A Blend of History & Comfort",
        "about.p1": "Nestled just steps away from the bustling Hwangnidan-gil and overlooking the serene Daereungwon Tomb Complex, Cheongchun Guesthouse offers an unforgettable Gyeongju experience.",
        "about.p2": "Our guesthouse was famously featured in the movie \"Gyeongju\", capturing the timeless essence and romantic tranquility of this historic city.",
        "about.stat1.val": "10 min",
        "about.stat1.label": "Walk to Hwangnidan-gil",
        "about.stat2.val": "Tomb View",
        "about.stat2.label": "Daereungwon Complex",
        "rooms.title": "Cozy Accommodations",
        "rooms.subtitle": "Affordable and comfortable rooms catering to couples, families, and friends.",
        "rooms.card.title": "Standard / Tomb View Rooms",
        "rooms.card.price": "From ₩50,000 / night (2 guests)",
        "rooms.feat1": "Accommodates 2 to 6 guests",
        "rooms.feat2": "Clean white bedding",
        "rooms.feat3": "Full-length mirror",
        "rooms.feat4": "Air conditioning & heating",
        "rooms.book": "Book Now",
        "amenities.title": "Included Services",
        "amenities.subtitle": "Everything you need for a comfortable stay.",
        "amenities.bf.title": "Complimentary Breakfast",
        "amenities.bf.desc": "Enjoy famous Gyeongju Chalboribbang (barley bread), fresh salad, and coffee from 8:30 to 9:40 AM.",
        "amenities.list1.title": "Free Parking",
        "amenities.list1.desc": "Convenient on-site parking available.",
        "amenities.list2.title": "Free WiFi",
        "amenities.list2.desc": "High-speed internet in all areas.",
        "amenities.list3.title": "Baggage Storage",
        "amenities.list3.desc": "Leave your bags and explore freely.",
        "amenities.list4.title": "24h Front Desk",
        "amenities.list4.desc": "Always here to assist you.",
        "contact.title": "Get in Touch",
        "contact.address": "31, Taejong-ro 727beon-gil, Gyeongju-si, Gyeongsangbuk-do",
        "contact.time": "Check-in 16:00 | Check-out 11:00",
        "contact.map": "Map View: Near Hwangnidan-gil & Daereungwon"
    },
    kr: {
        "nav.logo": "청춘호스텔",
        "nav.about": "소개",
        "nav.rooms": "객실",
        "nav.amenities": "편의시설",
        "nav.contact": "오시는 길",
        "hero.title": "청춘호스텔",
        "hero.subtitle": "대릉원의 고요함과 황리단길의 활기가 만나는 곳",
        "hero.cta": "둘러보기",
        "about.title": "역사와 편안함의 조화",
        "about.p1": "경주 황리단길에서 도보 10분 거리에 위치하며, 대릉원 왕릉뷰를 자랑하는 청춘호스텔은 잊지 못할 경주 여행을 선사합니다.",
        "about.p2": "영화 '경주'에서 신민아의 집으로 등장했던 곳으로, 고즈넉하고 낭만적인 분위기를 그대로 간직하고 있습니다.",
        "about.stat1.val": "10분",
        "about.stat1.label": "황리단길 도보",
        "about.stat2.val": "왕릉뷰",
        "about.stat2.label": "대릉원 인접",
        "rooms.title": "아늑한 객실",
        "rooms.subtitle": "가성비 좋은 객실로 커플, 가족 여행객 모두에게 안성맞춤입니다.",
        "rooms.card.title": "스탠다드 / 왕릉뷰 객실",
        "rooms.card.price": "1박 ₩50,000 부터 (2인 기준)",
        "rooms.feat1": "2인 ~ 최대 6인 수용",
        "rooms.feat2": "청결하고 쾌적한 화이트 침구",
        "rooms.feat3": "전신 거울 완비",
        "rooms.feat4": "냉난방 시스템 완비",
        "rooms.book": "예약하기",
        "amenities.title": "무료 서비스",
        "amenities.subtitle": "편안한 숙박을 위한 모든 것이 준비되어 있습니다.",
        "amenities.bf.title": "무료 조식 제공",
        "amenities.bf.desc": "오전 8:30 - 9:40, 신선한 샐러드와 커피, 그리고 경주 찰보리빵을 즐겨보세요.",
        "amenities.list1.title": "무료 주차",
        "amenities.list1.desc": "편리한 전용 주차 공간 제공",
        "amenities.list2.title": "무료 WiFi",
        "amenities.list2.desc": "전 객실 초고속 인터넷",
        "amenities.list3.title": "짐 보관 서비스",
        "amenities.list3.desc": "입퇴실 전후 짐 보관 가능",
        "amenities.list4.title": "24시간 프론트",
        "amenities.list4.desc": "언제든 필요한 도움을 드립니다.",
        "contact.title": "오시는 길",
        "contact.address": "경북 경주시 태종로 727번길 31",
        "contact.time": "입실 16:00 | 퇴실 11:00",
        "contact.map": "지도: 황리단길 및 대릉원 근처"
    }
};

let currentLang = 'en';

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll Effects (Navbar visibility and background)
const navbar = document.querySelector('.navbar');

// Remove forced hidden class after small delay to avoid flash
setTimeout(() => {
    navbar.classList.remove('hidden-on-load');
}, 100);

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const mobileBtn = document.querySelector('.mobile-menu-btn');
const mobileNav = document.querySelector('.mobile-nav');

mobileBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
});

mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Make animations only play once
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-up, .fade-in, .slide-in-left, .slide-in-right').forEach(el => {
    observer.observe(el);
});

// Language Toggle Logic
const langBtn = document.getElementById('lang-toggle');
const translatableElements = document.querySelectorAll('[data-i18n]');

function updateLanguage(targetLang) {
    currentLang = targetLang;
    
    // Update body class for font tracking
    if(currentLang === 'kr') {
        document.body.classList.add('kr-mode');
    } else {
        document.body.classList.remove('kr-mode');
    }

    // Determine target button label (show opposite lang)
    langBtn.textContent = currentLang === 'en' ? 'KR' : 'EN';
    
    // Smooth transition out
    translatableElements.forEach(el => {
        el.style.opacity = '0';
    });

    setTimeout(() => {
        translatableElements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[currentLang][key]) {
                el.textContent = translations[currentLang][key];
            }
            el.style.transition = 'opacity 0.3s ease';
            el.style.opacity = '1';
        });
    }, 300);
}

langBtn.addEventListener('click', () => {
    const newLang = currentLang === 'en' ? 'kr' : 'en';
    updateLanguage(newLang);
});

// Trigger initial animations for items in viewport on load
setTimeout(() => {
    document.querySelectorAll('.fade-up, .fade-in, .slide-in-left, .slide-in-right').forEach(el => {
        const rect = el.getBoundingClientRect();
        if(rect.top < window.innerHeight) {
            el.classList.add('visible');
        }
    });
}, 100);

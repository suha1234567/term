document.getElementById('menu-icon').addEventListener('click', function() {
    var navLinks = document.getElementById('nav-links');
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
    }
});

// 부드러운 스크롤 애니메이션 추가
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // 모바일에서 메뉴 클릭 시 닫히도록 설정
        var navLinks = document.getElementById('nav-links');
        if (window.innerWidth <= 768) {
            navLinks.style.display = 'none';
        }
    });
});

// Horizontal Drag Gallery
const galleryWrapper = document.querySelector('.gallery-wrapper');
let isDown = false;
let startX;
let scrollLeft;

galleryWrapper.addEventListener('mousedown', (e) => {
    isDown = true;
    galleryWrapper.classList.add('active');
    startX = e.pageX - galleryWrapper.offsetLeft;
    scrollLeft = galleryWrapper.scrollLeft;
});

galleryWrapper.addEventListener('mouseleave', () => {
    isDown = false;
    galleryWrapper.classList.remove('active');
});

galleryWrapper.addEventListener('mouseup', () => {
    isDown = false;
    galleryWrapper.classList.remove('active');
});

galleryWrapper.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - galleryWrapper.offsetLeft;
    const walk = (x - startX) * 2; // scroll-fast
    galleryWrapper.scrollLeft = scrollLeft - walk;
});

// Touch events for mobile dragging
galleryWrapper.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - galleryWrapper.offsetLeft;
    scrollLeft = galleryWrapper.scrollLeft;
});

galleryWrapper.addEventListener('touchend', () => {
    isDown = false;
});

galleryWrapper.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - galleryWrapper.offsetLeft;
    const walk = (x - startX) * 2;
    galleryWrapper.scrollLeft = scrollLeft - walk;
});

// Bottom Navbar Active State on Scroll
const sections = document.querySelectorAll('header, section, footer');
const navItems = document.querySelectorAll('.nav-item');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Add an offset to trigger earlier
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').includes(current) && current) {
            item.classList.add('active');
        }
    });
});


// Direct Chat Links
const waLinks = document.querySelectorAll('.floating-btn.whatsapp, .direct-chat');
waLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        // Replace with actual catering business WhatsApp number
        const phoneNumber = '1234567890'; 
        const message = encodeURIComponent('Hi Royal Feast Catering, I would like to inquire about your services.');
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    });
});

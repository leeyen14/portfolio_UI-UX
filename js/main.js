document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Lấy path hiện tại (ví dụ: 'index.html#projects')
    const currentPath = window.location.hash;

    // Highlight tab tương ứng khi trang load
    
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });
    
    // Load projects dynamically
    const projectsGrid = document.querySelector('.projects-grid');
    if (projectsGrid) {
        const projects = [
            {
                title: "Healthcare App",
                description: "Redesigned the appointment booking experience for a healthcare startup",
                tags: ["UI Design", "UX Research", "Mobile"],
                image: "assets/project1.jpg",
                link: "case-study.html"
            },
            {
                title: "E-commerce Platform",
                description: "Improved checkout flow resulting in 25% higher conversion rates",
                tags: ["Web Design", "User Testing", "Prototyping"],
                image: "assets/project2.jpg",
                link: "case-study.html"
            },
            {
                title: "Learning Language with AI",
                description: "Complex data visualization for financial analytics platform",
                tags: ["Dashboard", "Data Viz", "Figma"],
                image: "imgages/logo_learning.png",
                link: "case-study.html"
            }
        ];
        
        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            
            projectCard.innerHTML = `
                <img src="${project.image}" alt="${project.title}" class="project-img">
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                    </div>
                    <a href="${project.link}" class="btn btn-primary">View Case Study</a>
                </div>
            `;
            
            projectsGrid.appendChild(projectCard);
        });
    }
    
    // Load skills dynamically
    const skillsGrid = document.querySelector('.skills-grid');
    if (skillsGrid) {
        const skills = [
            { name: "UI Design", icon: "fas fa-pen-fancy" },
            { name: "UX Research", icon: "fas fa-search" },
            { name: "Figma", icon: "fab fa-figma" },
            { name: "Prototyping", icon: "fas fa-mobile-alt" },
            { name: "Data Analysis", icon: "fas fa-chart-line" },
            { name: "User Testing", icon: "fas fa-users" }
        ];
        
        skills.forEach(skill => {
            const skillItem = document.createElement('div');
            skillItem.className = 'skill-item';
            
            skillItem.innerHTML = `
                <i class="${skill.icon} skill-icon"></i>
                <span>${skill.name}</span>
            `;
            
            skillsGrid.appendChild(skillItem);
        });
    }
    
    // Form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            console.log('Form submitted:', { name, email, message });
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset form
            contactForm.reset();
        });
    }
});

// Hàm highlight tab chính xác
function highlightActiveTab() {
    // Lấy section hiện tại khi scroll
    const sections = document.querySelectorAll('section');
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 100) {
            currentSection = section.getAttribute('id');
        }
    });

    // Highlight tab tương ứng
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href').replace('#', '');
        if (href === currentSection) {
            link.classList.add('active');
        }
    });
}

// Chạy khi trang load
document.addEventListener('DOMContentLoaded', () => {
    // Highlight tab đầu tiên (Home) khi load trang
    document.querySelector('.nav-links a').classList.add('active');
    
    // Click vào tab
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Xóa active khỏi tất cả các tab
            document.querySelectorAll('.nav-links a').forEach(item => {
                item.classList.remove('active');
            });
            
            // Thêm active vào tab được click
            link.classList.add('active');
            
            // Scroll đến section
            const targetId = link.getAttribute('href');
            if (targetId !== '#') {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

// Chạy khi scroll
window.addEventListener('scroll', highlightActiveTab);
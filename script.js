document.addEventListener('DOMContentLoaded', function() {
    const submenuToggles = document.querySelectorAll('.submenu-toggle');
    const infoIcon = document.querySelector('.info-icon');
    const tooltip = document.querySelector('.tooltip');
    const teamInfoBtn = document.getElementById('teamInfoBtn');
    const teamInfoSection = document.getElementById('team-info');
    const heroSection = document.querySelector('.hero');
    const nextGamesBtn = document.querySelector('.btn-secondary');
    const upcomingGamesSection = document.getElementById('upcoming-games');
    const statuteSection = document.getElementById('club-statute');
    const mayorRosterSection = document.getElementById('mayor-roster');
    const academyRosterSection = document.getElementById('academy-roster');
    
    // Check if device is mobile for better UI handling
    const isMobile = window.innerWidth <= 480;
    
    // Add responsive class to body if mobile
    if (isMobile) {
        document.body.classList.add('mobile-view');
    }

    // Add resize listener to handle orientation changes
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 480) {
            document.body.classList.add('mobile-view');
        } else {
            document.body.classList.remove('mobile-view');
        }
    });

    // Add click handlers for the header options
    const headerOptions = document.querySelectorAll('.header-option');
    headerOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Check which option was clicked based on text content
            const optionText = this.textContent.trim().split(' ')[0];
            
            if (optionText === 'Mayor') {
                heroSection.style.display = 'none';
                teamInfoSection.style.display = 'none';
                upcomingGamesSection.style.display = 'none';
                statuteSection.style.display = 'none';
                mayorRosterSection.style.display = 'block';
                academyRosterSection.style.display = 'none';
                addBackButton(mayorRosterSection);
            } else if (optionText === 'Academy') {
                heroSection.style.display = 'none';
                teamInfoSection.style.display = 'none';
                upcomingGamesSection.style.display = 'none';
                statuteSection.style.display = 'none';
                mayorRosterSection.style.display = 'none';
                academyRosterSection.style.display = 'block';
                addBackButton(academyRosterSection);
            }
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
    
    // Toggle submenus - keeping this functionality for other menus
    submenuToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const menuItem = this.closest('.menu-item');
            const submenu = menuItem.querySelector('.submenu');

            this.classList.toggle('active');
            submenu.classList.toggle('active');
        });
    });

    // Info tooltip functionality
    if (infoIcon && tooltip) {
        infoIcon.addEventListener('mouseenter', function(e) {
            const rect = infoIcon.getBoundingClientRect();
            tooltip.style.top = rect.bottom + 10 + 'px';
            tooltip.style.left = rect.left - (tooltip.offsetWidth / 2) + (infoIcon.offsetWidth / 2) + 'px';
            tooltip.style.display = 'block';
        });

        infoIcon.addEventListener('mouseleave', function() {
            tooltip.style.display = 'none';
        });

        // For mobile
        infoIcon.addEventListener('touchstart', function(e) {
            e.preventDefault();
            const rect = infoIcon.getBoundingClientRect();
            tooltip.style.top = rect.bottom + 10 + 'px';
            tooltip.style.left = rect.left - (tooltip.offsetWidth / 2) + (infoIcon.offsetWidth / 2) + 'px';
            tooltip.style.display = 'block';

            setTimeout(() => {
                tooltip.style.display = 'none';
            }, 2000);
        });
    }

    // Add click handler for all statute links, including in the footer
    const statuteLinks = document.querySelectorAll('[data-section="statute"]');

    // Add click event for all statute links
    if (statuteLinks.length > 0) {
        statuteLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                heroSection.style.display = 'none';
                teamInfoSection.style.display = 'none';
                upcomingGamesSection.style.display = 'none';
                statuteSection.style.display = 'block';
                mayorRosterSection.style.display = 'none';
                academyRosterSection.style.display = 'none';

                // Add back button if not exists
                if (!document.querySelector('.back-button')) {
                    const backBtn = document.createElement('button');
                    backBtn.classList.add('back-button');
                    backBtn.innerHTML = isMobile ? '<i class="fas fa-arrow-left"></i>' : '<i class="fas fa-arrow-left"></i> Voltar';
                    statuteSection.prepend(backBtn);

                    backBtn.addEventListener('click', function() {
                        statuteSection.style.display = 'none';
                        heroSection.style.display = 'flex';
                    });
                }

                // Scroll to top
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });
    }

    // Additional click handlers for footer quick links
    const footerLinks = document.querySelectorAll('.footer-link');
    footerLinks.forEach(link => {
        if (!link.hasAttribute('data-section')) { // Skip links that already have handlers
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#team-info') {
                    e.preventDefault();
                    heroSection.style.display = 'none';
                    teamInfoSection.style.display = 'block';
                    upcomingGamesSection.style.display = 'none';
                    statuteSection.style.display = 'none';
                    mayorRosterSection.style.display = 'none';
                    academyRosterSection.style.display = 'none';
                    addBackButton(teamInfoSection);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                } else if (href === '#upcoming-games') {
                    e.preventDefault();
                    heroSection.style.display = 'none';
                    teamInfoSection.style.display = 'none';
                    upcomingGamesSection.style.display = 'block';
                    statuteSection.style.display = 'none';
                    mayorRosterSection.style.display = 'none';
                    academyRosterSection.style.display = 'none';
                    addBackButton(upcomingGamesSection);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                } else if (href === '#mayor-roster') {
                    e.preventDefault();
                    heroSection.style.display = 'none';
                    teamInfoSection.style.display = 'none';
                    upcomingGamesSection.style.display = 'none';
                    statuteSection.style.display = 'none';
                    mayorRosterSection.style.display = 'block';
                    academyRosterSection.style.display = 'none';
                    addBackButton(mayorRosterSection);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                } else if (href === '#academy-roster') {
                    e.preventDefault();
                    heroSection.style.display = 'none';
                    teamInfoSection.style.display = 'none';
                    upcomingGamesSection.style.display = 'none';
                    statuteSection.style.display = 'none';
                    mayorRosterSection.style.display = 'none';
                    academyRosterSection.style.display = 'block';
                    addBackButton(academyRosterSection);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });
        }
    });

    function addBackButton(section) {
        // Add back button if not exists
        if (!document.querySelector('.back-button')) {
            const backBtn = document.createElement('button');
            backBtn.classList.add('back-button');
            backBtn.innerHTML = isMobile ? '<i class="fas fa-arrow-left"></i>' : '<i class="fas fa-arrow-left"></i> Voltar';
            section.prepend(backBtn);

            backBtn.addEventListener('click', function() {
                teamInfoSection.style.display = 'none';
                upcomingGamesSection.style.display = 'none';
                statuteSection.style.display = 'none';
                mayorRosterSection.style.display = 'none';
                academyRosterSection.style.display = 'none';
                heroSection.style.display = 'flex';
            });
        }
    }

    // Statute section accordions
    const statuteItems = document.querySelectorAll('.statute-item');
    if (statuteItems.length > 0) {
        statuteItems.forEach(item => {
            const header = item.querySelector('.statute-header');
            const content = item.querySelector('.statute-content');

            header.addEventListener('click', function() {
                // Toggle active class
                item.classList.toggle('active');

                // Animate content height
                if (item.classList.contains('active')) {
                    content.style.maxHeight = content.scrollHeight + 'px';
                } else {
                    content.style.maxHeight = '0px';
                }

                // Close other items
                statuteItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                        otherItem.querySelector('.statute-content').style.maxHeight = '0px';
                    }
                });
            });
        });

        // Open first item by default
        statuteItems[0].classList.add('active');
        statuteItems[0].querySelector('.statute-content').style.maxHeight = 
            statuteItems[0].querySelector('.statute-content').scrollHeight + 'px';
    }

    // Search functionality for statute
    const statuteSearch = document.getElementById('statute-search');
    if (statuteSearch) {
        statuteSearch.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();

            statuteItems.forEach(item => {
                const title = item.querySelector('.statute-title').textContent.toLowerCase();
                const content = item.querySelector('.statute-content').textContent.toLowerCase();

                if (title.includes(searchTerm) || content.includes(searchTerm)) {
                    item.style.display = 'block';
                    // Highlight matches
                    if (searchTerm.length > 2) {
                        highlightMatches(item, searchTerm);
                    } else {
                        removeHighlights(item);
                    }
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }

    function highlightMatches(element, term) {
        removeHighlights(element);

        const textNodes = getTextNodes(element);
        textNodes.forEach(node => {
            const text = node.nodeValue;
            const lowerText = text.toLowerCase();
            let index = lowerText.indexOf(term);

            if (index >= 0) {
                const span = document.createElement('span');
                span.className = 'highlight';

                const before = document.createTextNode(text.substring(0, index));
                const match = document.createTextNode(text.substring(index, index + term.length));
                const after = document.createTextNode(text.substring(index + term.length));

                const matchSpan = document.createElement('span');
                matchSpan.className = 'highlight';
                matchSpan.appendChild(match);

                const fragment = document.createDocumentFragment();
                fragment.appendChild(before);
                fragment.appendChild(matchSpan);
                fragment.appendChild(after);

                node.parentNode.replaceChild(fragment, node);
            }
        });
    }

    function removeHighlights(element) {
        const highlights = element.querySelectorAll('.highlight');
        highlights.forEach(highlight => {
            const parent = highlight.parentNode;
            while (highlight.firstChild) {
                parent.insertBefore(highlight.firstChild, highlight);
            }
            parent.removeChild(highlight);
        });
    }

    function getTextNodes(node) {
        const textNodes = [];

        function getTextNodesRecursive(node) {
            if (node.nodeType === 3) {
                textNodes.push(node);
            } else {
                for (let i = 0, len = node.childNodes.length; i < len; i++) {
                    getTextNodesRecursive(node.childNodes[i]);
                }
            }
        }

        getTextNodesRecursive(node);
        return textNodes;
    }

    // Update stat animation for founding date
    function animateStats() {
        // Don't animate founding date (it's a date string)
        const statsElements = {
            championships: { el: document.getElementById('championships'), target: 0 },
            players: { el: document.getElementById('players'), target: 20 }
        };

        for (const stat in statsElements) {
            const { el, target } = statsElements[stat];
            if (!el) continue;

            let current = 0;
            const increment = Math.max(1, Math.ceil(target / 50));
            const timer = setInterval(() => {
                current += increment;
                if (current > target) {
                    current = target;
                    clearInterval(timer);
                }
                el.textContent = current;
            }, 50);
        }
    }

    // Trigger animations when elements are in viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('hero-stats')) {
                    animateStats();
                }
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    observer.observe(document.querySelector('.hero-stats'));

    // Create floating effect on hero stats
    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach((item, index) => {
        const delay = index * 0.2;
        item.style.animation = `float 4s ease-in-out ${delay}s infinite`;
    });

    // Add custom animation style
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
        }
    `;
    document.head.appendChild(style);

    // Fix button functionality
    teamInfoBtn.addEventListener('click', function(e) {
        e.preventDefault();
        heroSection.style.display = 'none';
        teamInfoSection.style.display = 'block';
        upcomingGamesSection.style.display = 'none';
        statuteSection.style.display = 'none';
        mayorRosterSection.style.display = 'none';
        academyRosterSection.style.display = 'none';
        addBackButton(teamInfoSection);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    nextGamesBtn.addEventListener('click', function(e) {
        e.preventDefault();
        heroSection.style.display = 'none';
        teamInfoSection.style.display = 'none';
        upcomingGamesSection.style.display = 'block';
        statuteSection.style.display = 'none';
        mayorRosterSection.style.display = 'none';
        academyRosterSection.style.display = 'none';
        addBackButton(upcomingGamesSection);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Add functionality for player cards
    const playerCards = document.querySelectorAll('.player-card');
    if (playerCards.length > 0) {
        playerCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.classList.add('active');
            });
            card.addEventListener('mouseleave', function() {
                this.classList.remove('active');
            });
        });
    }

    // Add animation for academy stat bars
    const academyStatBars = document.querySelectorAll('.academy-stat-fill');
    if (academyStatBars.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.width = entry.target.style.getPropertyValue('--w');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        academyStatBars.forEach(bar => {
            observer.observe(bar);
        });
    }

    // Add functionality for academy player cards
    const academyPlayerCards = document.querySelectorAll('.academy-player-card');
    if (academyPlayerCards.length > 0) {
        academyPlayerCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.classList.add('active');
            });
            card.addEventListener('mouseleave', function() {
                this.classList.remove('active');
            });
        });
    }
});
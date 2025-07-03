document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const navbar = document.querySelector('.navbar');
    const menuBtn = document.querySelector('.menu-btn');
    const closeBtn = document.querySelector('.close-btn');
    const navLinks = document.querySelectorAll('.nav-links a');
    const overlay = document.querySelector('.overlay');

    // Function to toggle menu
    function toggleMenu(show) {
        navbar.classList.toggle('active', show);
        document.body.classList.toggle('menu-open', show);
    }

    // Event Listeners
    menuBtn.addEventListener('click', () => {
        toggleMenu(true);
    });

    closeBtn.addEventListener('click', () => {
        toggleMenu(false);
    });

    // Close menu when clicking overlay
    overlay.addEventListener('click', () => {
        toggleMenu(false);
    });

    // Close menu when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            toggleMenu(false);
        });
    });

    // Close menu when pressing Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && navbar.classList.contains('active')) {
            toggleMenu(false);
        }
    });

    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (window.innerWidth > 768 && navbar.classList.contains('active')) {
                toggleMenu(false);
            }
        }, 250);
    });
});


document.addEventListener("DOMContentLoaded", function() {
    // Mission Statement functionality
    const missionButton = document.getElementById("mission");
    const missionText = document.getElementById("missionText");

    if (missionButton && missionText) {
        // Initially hide the mission text
        missionText.style.display = "none";
        missionButton.textContent = "Show Mission Statement";

        missionButton.addEventListener("click", function() {
            if (missionText.style.display === "none") {
                // Show the text
                missionText.style.display = "block";
                missionText.innerHTML = "To drive sustainable development across Rwanda and the broader African continent by launching a youth-led enterprise that connects young people to employment opportunities through an innovative digital platform, with full implementation targeted within five to six years.";
                missionButton.textContent = "Hide Mission Statement";
            } else {
                // Hide the text
                missionText.style.display = "none";
                missionButton.textContent = "Show Mission Statement";
            }
        });
    }

    // Skills and Achievements functionality
    const skillAchievements = {
        'html-css': [
            'Created responsive layouts using flexbox and grid',
            'Implemented custom CSS animations',
            'Built semantic HTML structures',
            'Developed cross-browser compatible styles'
        ],
        'responsive': [
            'Developed mobile-first designs',
            'Implemented breakpoints for various devices',
            'Created fluid layouts using relative units',
            'Optimized images for different screen sizes'
        ],
        'github': [
            'Managed multiple project branches',
            'Collaborated with team members using pull requests',
            'Resolved merge conflicts',
            'Maintained clean commit history'
        ],
        'javascript': [
            'Built interactive web applications',
            'Implemented DOM manipulation',
            'Created custom event handlers',
            'Worked with APIs and async operations'
        ],
        'python': [
            'Developed automation scripts',
            'Created data analysis tools',
            'Built web scrapers',
            'Implemented algorithms and data structures'
        ],
        'linux': [
            'Managed server configurations',
            'Wrote shell scripts',
            'Performed system administration tasks',
            'Configured development environments'
        ],
        'database': [
            'Designed database schemas',
            'Optimized SQL queries',
            'Managed database backups and recovery'
        ]
    };

    const skillElements = document.querySelectorAll('.skill');
    // Remove the dot in the getElementById
    const achievementsContainer = document.getElementById('achievements');
    const closeButton = document.getElementById('skillsButton');

    // Check if elements exist before adding event listeners
    if (skillElements && achievementsContainer && closeButton) {
        // Initially hide the close button
        closeButton.style.display = 'none';

        skillElements.forEach(skill => {
            skill.addEventListener('click', () => {
                const skillType = skill.getAttribute('data-skill');
                const achievements = skillAchievements[skillType];

                if (achievements) {
                    // Create achievements HTML
                    const achievementsHTML = `
                        <h3>${skill.textContent} Achievements</h3>
                        <ul>
                            ${achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                        </ul>
                    `;

                    // Show achievements
                    achievementsContainer.innerHTML = achievementsHTML;
                    achievementsContainer.classList.add('active');
                    closeButton.style.display = 'block';
                }
            });
        });

        // Add close button functionality
        closeButton.addEventListener('click', () => {
            achievementsContainer.innerHTML = '';
            achievementsContainer.classList.remove('active');
            closeButton.style.display = 'none';
        });
    }
});


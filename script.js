// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Set hero background image using a placeholder
    const hero = document.querySelector('.hero');
    hero.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://i.pinimg.com/736x/12/5c/dc/125cdc2956b17148bd75278def821605.jpg')";

    // Recipe data
    const recipes = {
        'nyama-choma': {
            title: 'Nyama Choma (Kenyan Grilled Meat)',
            ingredients: [
                '1 kg goat meat or beef, cut into chunks',
                '2 tbsp vegetable oil',
                '1 tbsp salt',
                '1 tsp black pepper',
                '2 tsp paprika',
                '2 cloves garlic, minced',
                '1 tbsp lemon juice'
            ],
            instructions: [
                'Clean the meat thoroughly and pat dry.',
                'In a bowl, mix oil, salt, pepper, paprika, garlic, and lemon juice.',
                'Rub the marinade all over the meat and let it marinate for at least 2 hours (overnight is better).',
                'Preheat your grill or oven to medium-high heat.',
                'Grill the meat, turning occasionally, until well done (about 20-30 minutes depending on size).',
                'Serve hot with kachumbari salad (diced tomatoes, onions, cilantro, and lemon juice).',
                'Enjoy with ugali or chapati!'
            ]
        },
        'sukuma-wiki': {
            title: 'Sukuma Wiki (Kenyan Collard Greens)',
            ingredients: [
                '1 bunch collard greens or kale, washed and chopped',
                '2 tbsp vegetable oil',
                '1 onion, finely chopped',
                '2 tomatoes, diced',
                '1 tsp cumin',
                'Salt and pepper to taste',
                '1 tsp coriander powder',
                '1 chili pepper (optional)'
            ],
            instructions: [
                'Heat oil in a large pan over medium heat.',
                'Add onions and cook until translucent (about 3-4 minutes).',
                'Add tomatoes, cumin, salt, pepper, and coriander. Cook until tomatoes soften.',
                'Add the chopped collard greens and stir well to coat with the spice mixture.',
                'Cover and cook for about 5-7 minutes, stirring occasionally.',
                'If using, add chili pepper for extra heat.',
                'Serve hot with ugali or chapati.'
            ]
        },
        'chapati': {
            title: 'Kenyan Chapati',
            ingredients: [
                '3 cups all-purpose flour',
                '1 tsp salt',
                '1 cup warm water',
                '3 tbsp vegetable oil (plus extra for cooking)',
                '1 tbsp sugar (optional)'
            ],
            instructions: [
                'In a large bowl, mix flour, salt, and sugar (if using).',
                'Add oil and mix with your hands until the mixture resembles breadcrumbs.',
                'Gradually add warm water while kneading to form a soft, non-sticky dough.',
                'Cover with a damp cloth and let rest for 30 minutes.',
                'Divide the dough into 8-10 equal portions and shape into balls.',
                'Roll each ball into a thin circle (about 8 inches in diameter).',
                'Heat a frying pan over medium heat and add a little oil.',
                'Cook each chapati for about 1-2 minutes on each side until golden brown spots appear.',
                'Serve hot with your favorite Kenyan stew or curry.'
            ]
        },
        'Githeri': {
            title: 'Githeri',
            ingredients: [
                '400 g boiled maize',
                '600 g boiled beans',
                '2 medium sized tomatoes, pureed',
                '1 large onion',
                '3 cloves garlic - finely minced',
                '2 ginger - finely minced',
                'Half red pepper bell',
                '1 tbs vegetable oil',
                '1 TBS salt'
            ],
            instructions: [
                'Heat your sufuria on a medium heat and then add the vegetable oil followed by the onions and cook them until they just turn translucent.',
                'Add the ginger and garlic and cook for about a minute and then add the curry powder, which will cook for a minute to cook off the raw taste and aroma.',
                'Add pureed tomatoes and beef chilli cube, stir, cover and reduce heat to a low simmer. Cook for about 5minutes or until the mixture reduces and thickens.',
                'Add carrots and spring onions then simmer for a minute before adding the maize and beans.',
                'Add salt and freshly cracked pepper to taste.',
                'Cover and simmer for about 10 minutes for the sauce to thicken and all the flavors to come together.',
                'Finally, add the dhania and red hoho and simmer for just a minute. Turn off the heat and serve.'
            ]
        }
    };

    // Modal functionality
    const modal = document.getElementById('recipe-modal');
    const modalContent = document.getElementById('modal-content');
    const closeBtn = document.querySelector('.close-btn');
    const viewRecipeBtns = document.querySelectorAll('.btn-view-recipe');

    // Open modal with recipe content
    viewRecipeBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const recipeName = this.getAttribute('data-recipe');
            const recipe = recipes[recipeName];

            if (recipe) {
                let content = `
                    <h2>${recipe.title}</h2>
                    <h3>Ingredients:</h3>
                    <ul>
                        ${recipe.ingredients.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                    <h3>Instructions:</h3>
                    <ol>
                        ${recipe.instructions.map(step => `<li>${step}</li>`).join('')}
                    </ol>
                `;

                modalContent.innerHTML = content;
                modal.style.display = 'block';
            }
        });
    });

    // Close modal
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close modal if clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Smooth scrolling for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });


    // Newsletter form submission
    const newsletterForm = document.getElementById('newsletter-form');

    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;

        // Normally this would send data to a server
        alert(`Thank you! Your email (${email}) has been added to our newsletter.`);
        this.reset();
    });

    // Simulate loading recipe images
    document.querySelectorAll('.recipe-image').forEach((img, index) => {
        // Use placeholder images with different colors
        const colors = ['e56b1f', '2e6e32', 'f9c74f', 'a0c15a', 'e2b887'];
        img.style.backgroundImage = `url('/api/placeholder/400/300')`;
    });

    // Learn more button functionality
    const learnMoreBtn = document.getElementById('learn-more-btn');
    const moreInfo = document.getElementById('more-info');

    learnMoreBtn.addEventListener('click', () => {
        if (moreInfo.style.display === 'none' || moreInfo.style.display === '') {
            moreInfo.style.display = 'block';
            learnMoreBtn.textContent = 'Show Less';
        } else {
            moreInfo.style.display = 'none';
            learnMoreBtn.textContent = 'Learn More';
        }
    });
});

// Read more button functinality
document.addEventListener('DOMContentLoaded', () => {
    const readMoreButtons = document.querySelectorAll('.read-more-btn');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const content = button.previousElementSibling; // Select the sibling .read-more-content
            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'block';
                button.textContent = 'Show Less';
            } else {
                content.style.display = 'none';
                button.textContent = 'Read More';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const nav = document.querySelector('nav');

    hamburgerMenu.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent event from bubbling up
        nav.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburgerMenu.contains(e.target) && !nav.contains(e.target)) {
            nav.classList.remove('active');
        }
    });

    // Close menu when clicking a nav link
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        darkModeToggle.textContent = '☀️';
    }

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            darkModeToggle.textContent = '☀️';
        } else {
            localStorage.setItem('darkMode', 'disabled');
            darkModeToggle.textContent = '🌙';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Create style switcher
    const createStyleSwitcher = () => {
        // Create style switcher container
        const styleSwitch = document.createElement('div');
        styleSwitch.className = 'style-switcher';
        
        // Add title
        const title = document.createElement('p');
        title.textContent = 'Choose a Style:';
        styleSwitch.appendChild(title);
        
        // Add style options
        const styles = [
            { name: 'Original', id: 'original-style' },
            { name: 'Cyberpunk', id: 'cyberpunk-style' },
            { name: 'Minimalist', id: 'minimalist-style' },
            { name: 'Retro Tech', id: 'retro-tech-style' }
        ];
        
        styles.forEach(style => {
            const button = document.createElement('button');
            button.textContent = style.name;
            button.dataset.style = style.id;
            
            // Set active class on current style
            if (localStorage.getItem('BitFlix Reviews-style') === style.id || 
                (!localStorage.getItem('BitFlix Reviews-style') && style.id === 'original-style')) {
                button.classList.add('active');
            }
            
            button.addEventListener('click', () => {
                // Update buttons
                document.querySelectorAll('.style-switcher button').forEach(btn => {
                    btn.classList.remove('active');
                });
                button.classList.add('active');
                
                // Change stylesheet
                changeStyle(style.id);
                
                // Save preference to localStorage
                localStorage.setItem('BitFlix Reviews-style', style.id);
            });
            
            styleSwitch.appendChild(button);
        });
        
        // Add to document
        document.body.appendChild(styleSwitch);
        
        // Apply saved style or default
        const savedStyle = localStorage.getItem('BitFlix Reviews-style') || 'original-style';
        changeStyle(savedStyle);
    };
    
    // Function to change style
    const changeStyle = (styleId) => {
        // Remove current style if exists
        const currentStyle = document.getElementById('current-style');
        if (currentStyle) {
            currentStyle.remove();
        }
        
        // Skip if original style selected (already in head)
        if (styleId === 'original-style') {
            return;
        }
        
        // Add new stylesheet
        const newStyle = document.createElement('link');
        newStyle.id = 'current-style';
        newStyle.rel = 'stylesheet';
        newStyle.href = styleId + '.css';
        document.head.appendChild(newStyle);
    };
    
    // Initialize style switcher
    createStyleSwitcher();
    
    // Add style for the switcher itself
    const switcherStyle = document.createElement('style');
    switcherStyle.textContent = `
        .style-switcher {
            position: fixed;
            top: 100px;
            right: 20px;
            background: rgba(0, 0, 0, 0.8);
            padding: 15px;
            border-radius: 5px;
            z-index: 1000;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            color: white;
        }
        .style-switcher p {
            margin-bottom: 10px;
            font-weight: bold;
        }
        .style-switcher button {
            display: block;
            width: 100%;
            padding: 8px 12px;
            margin-bottom: 5px;
            background: #333;
            color: white;
            border: none;
            border-radius: 3px;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .style-switcher button:hover {
            background: #555;
        }
        .style-switcher button.active {
            background: #4361ee;
        }
    `;
    document.head.appendChild(switcherStyle);
});
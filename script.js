    const gameData = {
      "Devil Fruit": [
        { name: "Gum-Gum Fruit", character: "Luffy", power: 10, rarity: "Legendary" },
        { name: "Tremor-Tremor Fruit", character: "Whitebeard", power: 10, rarity: "Legendary" },
        { name: "Dark-Dark Fruit", character: "Blackbeard", power: 9, rarity: "Legendary" },
        { name: "Magma-Magma Fruit", character: "Akainu", power: 9, rarity: "Legendary" },
        { name: "Light-Light Fruit", character: "Kizaru", power: 9, rarity: "Legendary" },
        { name: "Ice-Ice Fruit", character: "Aokiji", power: 7, rarity: "Epic" },
        { name: "Phoenix Fruit", character: "Marco", power: 8, rarity: "Epic" },
        { name: "Fire-Fire Fruit", character: "Ace", power: 6, rarity: "Epic" },
        { name: "Thunder-Thunder Fruit", character: "Enel", power: 7, rarity: "Epic" },
        { name: "Sand-Sand Fruit", character: "Crocodile", power: 5, rarity: "Rare" },
        { name: "Smoke-Smoke Fruit", character: "Smoker", power: 4, rarity: "Rare" },
        { name: "Chop-Chop Fruit", character: "Buggy", power: 2, rarity: "Common" },
        { name: "Slip-Slip Fruit", character: "Alvida", power: 1, rarity: "Common" },
        { name: "No Devil Fruit", character: "Human", power: 0, rarity: "Common" }
      ],
      "Haki": [
        
        { name: "Shanks' Haki", character: "Shanks", power: 10, rarity: "Legendary" },
        { name: "Luffy's Haki", character: "Luffy", power: 9, rarity: "Epic" },
        { name: "Katakuri's Haki", character: "Katakuri", power: 8, rarity: "Epic" },
        { name: "Rayleigh's Haki", character: "Rayleigh", power: 9, rarity: "Epic" },
        { name: "Sanji's Haki", character: "Sanji", power: 6, rarity: "Rare" },
        { name: "Zoro's Haki", character: "Zoro", power: 6, rarity: "Rare" },
        { name: "Coby's Haki", character: "Coby", power: 4, rarity: "Rare" },
        { name: "Tashigi's Haki", character: "Tashigi", power: 3, rarity: "Common" },
        { name: "Helmeppo's Haki", character: "Helmeppo", power: 2, rarity: "Common" },
        { name: "No Haki", character: "Regular Human", power: 0, rarity: "Common" }
      ],
      "Race": [
        { name: "Lunarian", character: "King", power: 10, rarity: "Legendary" },
        { name: "Ancient Giant", character: "Oars", power: 9, rarity: "Legendary" },
        { name: "Giant", character: "Dorry", power: 8, rarity: "Epic" },
        { name: "Fishman", character: "Jinbe", power: 7, rarity: "Epic" },
        { name: "Mink", character: "Nekomamushi", power: 6, rarity: "Rare" },
        { name: "Cyborg", character: "Franky", power: 5, rarity: "Rare" },
        { name: "Long-arm", character: "Apoo", power: 4, rarity: "Rare" },
        { name: "Dwarf", character: "Leo", power: 3, rarity: "Common" },
        { name: "Human", character: "Regular Person", power: 2, rarity: "Common" }
      ],
      "IQ": [
        { name: "Vegapunk's IQ", character: "Vegapunk", power: 10, rarity: "Legendary" },
        { name: "Sengoku's IQ", character: "Sengoku", power: 8, rarity: "Epic" },
        { name: "Robin's IQ", character: "Robin", power: 8, rarity: "Epic" },
        { name: "Mihawk's IQ", character: "Mihawk", power: 7, rarity: "Rare" },
        { name: "Usopp's IQ", character: "Usopp", power: 5, rarity: "Rare" },
        { name: "Nami's IQ", character: "Nami", power: 5, rarity: "Rare" },
        { name: "Chopper's IQ", character: "Chopper", power: 4, rarity: "Common" },
        { name: "Luffy's IQ", character: "Luffy", power: 1, rarity: "Common" },
        { name: "Zoro's IQ", character: "Zoro", power: 1, rarity: "Common" },
        { name: "kid's IQ", character: "kid", power: 1, rarity: "Common" }
      ],
      "Body": [
        {name: "IMU's Body",character:"IMU",power:10,rarity:"Legendary"},
        { name: "Kaido's Body", character: "Kaido", power: 10, rarity: "Legendary" },
        { name: "Big Mom's Body", character: "Big Mom", power: 8, rarity: "Legendary" },
        { name: "Whitebeard's Body", character: "Whitebeard", power: 9, rarity: "Epic" },
        { name: "Zoro's Body", character: "Zoro", power: 7, rarity: "Epic" },
        { name: "Sanji's Body", character: "Sanji", power: 8, rarity: "Rare" },
        { name: "Luffy's Body", character: "Luffy", power: 8, rarity: "Rare" },
        { name: "Law's Body", character: "Law", power: 4, rarity: "Rare" },
        { name: "Coby's Body", character: "Coby", power: 3, rarity: "Common" },
        { name: "Usopp's Body", character: "Usopp", power: 2, rarity: "Common" },
        { name: "Buggy's Body", character: "Buggy", power: 1, rarity: "Common" }
      ]
    };

    const ranks = [
      {name: "God Level",minPower:46, description:"Power of the JoyBoy"},
      { name: "Pirate King", minPower: 42, description: "The ultimate ruler of the seas! You've achieved what only Gol D. Roger accomplished!" },
      { name: "Yonko", minPower: 38, description: "One of the four emperors ruling the New World! Your power rivals the greatest pirates!" },
      { name: "Admiral", minPower: 32, description: "The strongest force of the Navy! Your justice burns bright across the seas!" },
      { name: "Warlord", minPower: 26, description: "A government-sanctioned pirate with incredible power! You balance between law and freedom!" },
      { name: "Supernova", minPower: 20, description: "A rising star in the pirate world! The Grand Line trembles at your potential!" },
      { name: "Captain", minPower: 14, description: "A respectable pirate captain with your own crew! Adventure awaits!" },
      { name: "Pirate", minPower: 8, description: "A decent pirate making waves in the East Blue! Keep growing stronger!" },
      { name: "Marine", minPower: 4, description: "A capable marine serving justice! Protect the innocent!" },
      { name: "Civilian", minPower: 0, description: "An ordinary person living in the One Piece world. Maybe it's time to set sail?" }
    ];

    let categories = ["Devil Fruit", "Haki", "Race", "IQ", "Body"];
    let selectedChoices = {};
    let currentOptions = [];
    const optionsContainer = document.getElementById('optionsContainer');
    const finalResult = document.getElementById('finalResult');

    // Character emojis for fallback
    const characterEmojis = {
      "Luffy": "👑", "Whitebeard": "⚔️", "Blackbeard": "🌑", "Akainu": "🌋",
      "Kizaru": "⚡", "Aokiji": "❄️", "Marco": "🔥", "Ace": "🔥", "Enel": "⚡",
      "Crocodile": "🏜️", "Smoker": "💨", "Buggy": "🤡", "Alvida": "💄",
      "Shanks": "👑", "Katakuri": "🍩", "Rayleigh": "⚔️", "Sanji": "🍳",
      "Zoro": "⚔️", "Coby": "🔵", "Tashigi": "⚔️", "Helmeppo": "🔵",
      "Saint Charlos": "👑", "Oars": "🗿", "King": "👑", "Jinbe": "🐟",
      "Nekomamushi": "🐱", "Dorry": "🗿", "Franky": "🤖", "Apoo": "🎵",
      "Leo": "🧚", "Vegapunk": "🧠", "Sengoku": "🔵", "Robin": "📚",
      "Mihawk": "⚔️", "Usopp": "🎯", "Nami": "🗺️", "Chopper": "🦌",
      "Kid": "🧲", "Kaido": "🐉", "Big Mom": "👸", "Law": "💊",
      "Human": "👤", "Regular Human": "👤", "Regular Person": "👤","IMU":"🧑‍⚖️"
    };

    // Generate weighted random option
    function getUniformRandomOption(category, excludeOptions = []) {
      const items = gameData[category].filter(item => 
        !excludeOptions.some(excluded => excluded.name === item.name)
      );
      if (items.length === 0) return null;
      const randomIndex = Math.floor(Math.random() * items.length);
      return items[randomIndex];
    }

    // Generate options based on current state
    function generateOptions() {
      const availableCategories = categories.filter(cat => !selectedChoices[cat]);
      const numOptions = availableCategories.length;
      const options = [];
      const shuffledCategories = [...availableCategories].sort(() => Math.random() - 0.5);
      for (let i = 0; i < numOptions; i++) {
        const category = shuffledCategories[i];
        const option = getUniformRandomOption(category);
        if (option) {
          options.push({ ...option, category });
        }
      }
      currentOptions = options;
      renderOptions();
    }

    // Render options
    function renderOptions() {
      optionsContainer.innerHTML = '';
      
      currentOptions.forEach((option, index) => {
        const optionCard = document.createElement('div');
        optionCard.className = 'option-card';
        
        const emoji = characterEmojis[option.character] || '❓';
        
        optionCard.innerHTML = `
          <div class="option-category">${option.category}</div>
          <div class="option-placeholder">${emoji}</div>
          <div class="option-name">${option.name}</div>
          <div class="option-character">From: ${option.character}</div>
        `;
        
        optionCard.addEventListener('click', () => selectOption(index, option.category, option, optionCard));
        optionsContainer.appendChild(optionCard);
      });
    }

    // Render selected choices
    function renderSelectedChoices() {
      const selectedChoicesDiv = document.getElementById('selectedChoices');
      selectedChoicesDiv.innerHTML = '';
      
      categories.forEach(category => {
        const filled = selectedChoices[category];
        const displayName = filled ? filled.name : '???';
        const emoji = filled ? (characterEmojis[filled.character] || '❓') : '❓';
        
        selectedChoicesDiv.innerHTML += `
          <div class="choice-display${filled ? ' filled' : ''}">
            <div class="choice-category">${category}</div>
            ${filled ? 
              `<div class="choice-placeholder">${emoji}</div>` : 
              `<div class="choice-placeholder">❓</div>`
            }
            <div class="choice-value">${displayName}</div>
          </div>
        `;
      });
    }

    // Select an option
    function selectOption(index, category, option, cardElem) {
      selectedChoices[category] = option;
      renderSelectedChoices();
      
      cardElem.classList.add('selected');
      
      setTimeout(() => {
        if (Object.keys(selectedChoices).length >= categories.length) {
          setTimeout(() => {
            calculateFinalRank();
          }, 500);
        } else {
          generateOptions();
        }
      }, 600);
    }

    // Calculate final rank
    function calculateFinalRank() {
      const totalPower = Object.values(selectedChoices).reduce((sum, choice) => sum + choice.power, 0);
      let rank = ranks[ranks.length - 1];
      
      for (let i = 0; i < ranks.length; i++) {
        if (totalPower >= ranks[i].minPower) {
          rank = ranks[i];
          break;
        }
      }

      optionsContainer.style.display = 'none';
      
      document.getElementById('rankTitle').textContent = rank.name;
      document.getElementById('rankTitle').className = `rank-title rank-${ranks.indexOf(rank)}`;
      document.getElementById('rankDescription').textContent = rank.description;
      
      finalResult.classList.add('show');
    }

    // Reset game
    function resetGame() {
      selectedChoices = {};
      renderSelectedChoices();
      finalResult.classList.remove('show');
      optionsContainer.style.display = 'flex';
      generateOptions();
    }

    // Initialize game
    renderSelectedChoices();

    generateOptions();

const CONSTELLATIONS = {
    'Ursa Major': {
        stars: [
            { x: 300, y: 150, size: 4.0, brightness: 1.0, name: 'Dubhe', info: 'Альфа Большой Медведицы, оранжевый гигант' },
            { x: 280, y: 180, size: 3.8, brightness: 1.0, name: 'Merak', info: 'Бета Большой Медведицы, бело-голубая звезда' },
            { x: 320, y: 200, size: 3.8, brightness: 1.0, name: 'Phecda', info: 'Гамма Большой Медведицы, белая звезда' },
            { x: 350, y: 210, size: 3.8, brightness: 1.0, name: 'Megrez', info: 'Дельта Большой Медведицы, белая звезда' },
            { x: 390, y: 220, size: 4.0, brightness: 1.0, name: 'Alioth', info: 'Эпсилон Большой Медведицы, самая яркая звезда созвездия' },
            { x: 430, y: 230, size: 3.8, brightness: 1.0, name: 'Mizar', info: 'Дзета Большой Медведицы, двойная звезда' },
            { x: 470, y: 240, size: 3.8, brightness: 1.0, name: 'Alkaid', info: 'Эта Большой Медведицы, бело-голубая звезда' }
        ],
        lines: [[0,1], [1,2], [2,3], [3,4], [4,5], [5,6]],
        info: 'Большая Медведица - одно из самых узнаваемых созвездий северного неба'
    },
    'Cassiopeia': {
        stars: [
            { x: 800, y: 100, size: 3.5, brightness: 1.0, name: 'Segin', info: 'Эпсилон Кассиопеи, бело-голубая звезда' },
            { x: 840, y: 120, size: 3.8, brightness: 1.0, name: 'Ruchbah', info: 'Дельта Кассиопеи, двойная звезда' },
            { x: 880, y: 100, size: 3.8, brightness: 1.0, name: 'Gamma Cas', info: 'Гамма Кассиопеи, переменная звезда' },
            { x: 920, y: 120, size: 4.0, brightness: 1.0, name: 'Schedar', info: 'Альфа Кассиопеи, оранжевый гигант' },
            { x: 960, y: 100, size: 3.8, brightness: 1.0, name: 'Caph', info: 'Бета Кассиопеи, желто-белая звезда' }
        ],
        lines: [[0,1], [1,2], [2,3], [3,4]],
        info: 'Кассиопея - созвездие в форме буквы W или M, названо в честь царицы из греческой мифологии'
    },
    'Orion': {
        stars: [
            { x: 150, y: 500, size: 4.5, brightness: 1.0, name: 'Betelgeuse', info: 'Альфа Ориона, красный сверхгигант' },
            { x: 130, y: 540, size: 3.8, brightness: 1.0, name: 'Bellatrix', info: 'Гамма Ориона, бело-голубой гигант' },
            { x: 170, y: 580, size: 3.8, brightness: 1.0, name: 'Alnitak', info: 'Дзета Ориона, тройная звезда' },
            { x: 190, y: 580, size: 3.8, brightness: 1.0, name: 'Alnilam', info: 'Эпсилон Ориона, голубой сверхгигант' },
            { x: 210, y: 580, size: 3.8, brightness: 1.0, name: 'Mintaka', info: 'Дельта Ориона, множественная звездная система' },
            { x: 230, y: 620, size: 4.5, brightness: 1.0, name: 'Rigel', info: 'Бета Ориона, бело-голубой сверхгигант' },
            { x: 190, y: 620, size: 3.5, brightness: 1.0, name: 'Saiph', info: 'Каппа Ориона, голубой сверхгигант' }
        ],
        lines: [[0,1], [1,5], [0,2], [2,3], [3,4], [4,5], [5,6], [6,2]],
        info: 'Орион - одно из самых заметных созвездий, названо в честь охотника из греческой мифологии'
    },
    'Canis Major': {
        stars: [
            { x: 800, y: 500, size: 4.8, brightness: 1.0, name: 'Sirius', info: 'Альфа Большого Пса, ярчайшая звезда ночного неба' },
            { x: 840, y: 520, size: 3.5, brightness: 1.0, name: 'Mirzam', info: 'Бета Большого Пса, бело-голубая звезда' },
            { x: 880, y: 540, size: 3.5, brightness: 1.0, name: 'Wezen', info: 'Дельта Большого Пса, желтый сверхгигант' },
            { x: 920, y: 560, size: 3.5, brightness: 1.0, name: 'Aludra', info: 'Эта Большого Пса, голубой сверхгигант' }
        ],
        lines: [[0,1], [1,2], [2,3]],
        info: 'Большой Пёс - созвездие, содержащее Сириус - ярчайшую звезду ночного неба'
    },
    'Centaurus': {
        stars: [
            { x: 500, y: 300, size: 4.0, brightness: 1.0, name: 'Alpha Cen', info: 'Альфа Центавра, ближайшая к Солнцу звездная система' },
            { x: 540, y: 320, size: 3.8, brightness: 1.0, name: 'Beta Cen', info: 'Бета Центавра, тройная звездная система' },
            { x: 580, y: 340, size: 3.5, brightness: 1.0, name: 'Gamma Cen', info: 'Гамма Центавра, двойная звезда' },
            { x: 620, y: 360, size: 3.5, brightness: 1.0, name: 'Delta Cen', info: 'Дельта Центавра, двойная звезда' }
        ],
        lines: [[0,1], [1,2], [2,3]],
        info: 'Центавр - большое созвездие южного неба, содержит ближайшую к Солнцу звезду'
    },
    'Carina': {
        stars: [
            { x: 500, y: 600, size: 4.5, brightness: 1.0, name: 'Canopus', info: 'Альфа Киля, вторая по яркости звезда ночного неба' },
            { x: 540, y: 620, size: 3.8, brightness: 1.0, name: 'Miaplacidus', info: 'Бета Киля, бело-голубая звезда' },
            { x: 580, y: 640, size: 3.5, brightness: 1.0, name: 'Avior', info: 'Эпсилон Киля, двойная звезда' }
        ],
        lines: [[0,1], [1,2]],
        info: 'Киль - часть бывшего созвездия Корабль Арго, содержит Канопус'
    },
    'Lyra': {
        stars: [
            { x: 100, y: 300, size: 4.5, brightness: 1.0, name: 'Vega', info: 'Альфа Лиры, одна из ярчайших звёзд неба' },
            { x: 120, y: 330, size: 3.5, brightness: 1.0, name: 'Sheliak', info: 'Бета Лиры, затменная переменная звезда' },
            { x: 140, y: 360, size: 3.5, brightness: 1.0, name: 'Sulafat', info: 'Гамма Лиры, бело-голубой гигант' },
            { x: 80, y: 330, size: 3.5, brightness: 1.0, name: 'Delta Lyrae', info: 'Дельта Лиры, двойная звезда' }
        ],
        lines: [[0,1], [1,2], [0,3], [3,1]],
        info: 'Лира - небольшое созвездие, содержащее яркую звезду Вега'
    },
    'Cygnus': {
        stars: [
            { x: 900, y: 300, size: 4.5, brightness: 1.0, name: 'Deneb', info: 'Альфа Лебедя, один из ярчайших сверхгигантов' },
            { x: 880, y: 340, size: 3.8, brightness: 1.0, name: 'Sadr', info: 'Гамма Лебедя, желтый сверхгигант' },
            { x: 860, y: 380, size: 3.8, brightness: 1.0, name: 'Albireo', info: 'Бета Лебедя, красивая двойная звезда' },
            { x: 840, y: 340, size: 3.5, brightness: 1.0, name: 'Delta Cyg', info: 'Дельта Лебедя, двойная звезда' },
            { x: 920, y: 340, size: 3.5, brightness: 1.0, name: 'Epsilon Cyg', info: 'Эпсилон Лебедя, оранжевый гигант' }
        ],
        lines: [[0,1], [1,2], [1,3], [1,4]],
        info: 'Лебедь - созвездие в форме креста, часто называемое Северным Крестом'
    },
    'Scorpius': {
        stars: [
            { x: 300, y: 400, size: 4.5, brightness: 1.0, name: 'Antares', info: 'Альфа Скорпиона, красный сверхгигант' },
            { x: 320, y: 420, size: 3.8, brightness: 1.0, name: 'Graffias', info: 'Бета Скорпиона, двойная звезда' },
            { x: 340, y: 440, size: 3.8, brightness: 1.0, name: 'Dschubba', info: 'Дельта Скорпиона, яркая переменная звезда' },
            { x: 360, y: 460, size: 3.8, brightness: 1.0, name: 'Shaula', info: 'Лямбда Скорпиона, бело-голубая звезда' }
        ],
        lines: [[0,1], [1,2], [2,3]],
        info: 'Скорпион - одно из самых древних созвездий, содержит яркую красную звезду Антарес'
    },
    'Perseus': {
        stars: [
            { x: 700, y: 200, size: 4.0, brightness: 1.0, name: 'Mirfak', info: 'Альфа Персея, желтый сверхгигант' },
            { x: 680, y: 240, size: 3.8, brightness: 1.0, name: 'Algol', info: 'Бета Персея, знаменитая затменная переменная звезда' },
            { x: 720, y: 240, size: 3.5, brightness: 1.0, name: 'Gamma Per', info: 'Гамма Персея, двойная звезда' },
            { x: 740, y: 280, size: 3.5, brightness: 1.0, name: 'Delta Per', info: 'Дельта Персея, бело-голубая звезда' }
        ],
        lines: [[0,1], [0,2], [2,3]],
        info: 'Персей - созвездие северного полушария, названо в честь героя греческой мифологии'
    },
    'Taurus': {
        stars: [
            { x: 300, y: 200, size: 4.5, brightness: 1.0, name: 'Aldebaran', info: 'Альфа Тельца, оранжевый гигант' },
            { x: 340, y: 220, size: 3.8, brightness: 1.0, name: 'Elnath', info: 'Бета Тельца, бело-голубая звезда' },
            { x: 320, y: 240, size: 3.8, brightness: 1.0, name: 'Gamma Tau', info: 'Гамма Тельца, гигантская звезда' },
            { x: 360, y: 240, size: 3.5, brightness: 1.0, name: 'Delta Tau', info: 'Дельта Тельца, оранжевый гигант' }
        ],
        lines: [[0,1], [0,2], [0,3]],
        info: 'Телец - зодиакальное созвездие, содержит яркую звезду Альдебаран и рассеянное скопление Плеяды'
    },
    'Draco': {
        stars: [
            { x: 550, y: 100, size: 3.8, brightness: 1.0, name: 'Gamma Dra', info: 'Гамма Дракона, яркая красная звезда' },
            { x: 580, y: 120, size: 3.5, brightness: 1.0, name: 'Beta Dra', info: 'Бета Дракона, желтый гигант' },
            { x: 600, y: 150, size: 3.8, brightness: 1.0, name: 'Xi Dra', info: 'Кси Дракона, двойная звезда' },
            { x: 620, y: 180, size: 3.5, brightness: 1.0, name: 'Nu Dra', info: 'Ню Дракона, двойная звезда' },
            { x: 590, y: 200, size: 4.0, brightness: 1.0, name: 'Alpha Dra', info: 'Альфа Дракона, Тубан' }
        ],
        lines: [[0,1], [1,2], [2,3], [3,4]],
        info: 'Дракон - большое извивающееся созвездие вокруг Полярной звезды'
    },
    'Hercules': {
        stars: [
            { x: 700, y: 150, size: 4.0, brightness: 1.0, name: 'Rasalgethi', info: 'Альфа Геркулеса, красный гигант' },
            { x: 730, y: 180, size: 3.8, brightness: 1.0, name: 'Kornephoros', info: 'Бета Геркулеса, желтый гигант' },
            { x: 750, y: 220, size: 3.5, brightness: 1.0, name: 'Gamma Her', info: 'Гамма Геркулеса, белая звезда' },
            { x: 720, y: 250, size: 3.5, brightness: 1.0, name: 'Delta Her', info: 'Дельта Геркулеса, двойная звезда' },
            { x: 680, y: 230, size: 3.5, brightness: 1.0, name: 'Epsilon Her', info: 'Эпсилон Геркулеса, оранжевый гигант' }
        ],
        lines: [[0,1], [1,2], [2,3], [3,4], [4,1]],
        info: 'Геркулес - большое созвездие северного полушария'
    },
    'Auriga': {
        stars: [
            { x: 200, y: 180, size: 4.5, brightness: 1.0, name: 'Capella', info: 'Альфа Возничего, яркая желтая звезда' },
            { x: 230, y: 200, size: 3.8, brightness: 1.0, name: 'Menkalinan', info: 'Бета Возничего, двойная звезда' },
            { x: 180, y: 220, size: 3.8, brightness: 1.0, name: 'Theta Aur', info: 'Тета Возничего, бело-голубая звезда' },
            { x: 220, y: 240, size: 3.5, brightness: 1.0, name: 'Iota Aur', info: 'Йота Возничего, двойная звезда' }
        ],
        lines: [[0,1], [1,2], [2,3], [3,0]],
        info: 'Возничий - созвездие северного полушария, содержащее яркую звезду Капелла'
    },
    'Leo': {
        stars: [
            { x: 400, y: 300, size: 4.5, brightness: 1.0, name: 'Regulus', info: 'Альфа Льва, бело-голубая звезда первой величины' },
            { x: 440, y: 280, size: 3.8, brightness: 1.0, name: 'Denebola', info: 'Бета Льва, бело-голубая звезда' },
            { x: 380, y: 320, size: 3.8, brightness: 1.0, name: 'Algieba', info: 'Гамма Льва, двойная звезда' },
            { x: 360, y: 340, size: 3.8, brightness: 1.0, name: 'Zosma', info: 'Дельта Льва, бело-голубая звезда' },
            { x: 420, y: 330, size: 3.8, brightness: 1.0, name: 'Chertan', info: 'Тета Льва, желтая звезда' }
        ],
        lines: [[0,1], [0,2], [2,3], [2,4]],
        info: 'Лев - одно из самых заметных созвездий весеннего неба'
    },
    'Gemini': {
        stars: [
            { x: 150, y: 400, size: 4.2, brightness: 1.0, name: 'Castor', info: 'Альфа Близнецов, система из шести звезд' },
            { x: 170, y: 420, size: 4.2, brightness: 1.0, name: 'Pollux', info: 'Бета Близнецов, оранжевый гигант' },
            { x: 190, y: 440, size: 3.8, brightness: 1.0, name: 'Alhena', info: 'Гамма Близнецов, бело-голубая звезда' },
            { x: 130, y: 440, size: 3.8, brightness: 1.0, name: 'Wasat', info: 'Дельта Близнецов, двойная звезда' },
            { x: 150, y: 460, size: 3.8, brightness: 1.0, name: 'Mebsuta', info: 'Эпсилон Близнецов, желтый сверхгигант' }
        ],
        lines: [[0,1], [1,2], [1,3], [3,4]],
        info: 'Близнецы - зодиакальное созвездие, названное в честь братьев Кастора и Поллукса'
    },
    'Bootes': {
        stars: [
            { x: 650, y: 300, size: 4.5, brightness: 1.0, name: 'Arcturus', info: 'Альфа Волопаса, ярчайшая звезда северного неба' },
            { x: 670, y: 280, size: 3.8, brightness: 1.0, name: 'Nekkar', info: 'Бета Волопаса, желтый гигант' },
            { x: 690, y: 320, size: 3.8, brightness: 1.0, name: 'Seginus', info: 'Гамма Волопаса, белая звезда' },
            { x: 630, y: 340, size: 3.8, brightness: 1.0, name: 'Izar', info: 'Эпсилон Волопаса, двойная звезда' },
            { x: 650, y: 360, size: 3.8, brightness: 1.0, name: 'Muphrid', info: 'Эта Волопаса, желтый субгигант' }
        ],
        lines: [[0,1], [1,2], [2,3], [3,4], [4,0]],
        info: 'Волопас - большое созвездие северного неба, содержащее Арктур'
    },
    'Corona Borealis': {
        stars: [
            { x: 850, y: 180, size: 4.2, brightness: 1.0, name: 'Alphecca', info: 'Альфа Северной Короны, бело-голубая звезда' },
            { x: 870, y: 190, size: 3.8, brightness: 1.0, name: 'Nusakan', info: 'Бета Северной Короны, двойная звезда' },
            { x: 890, y: 185, size: 3.8, brightness: 1.0, name: 'Gamma CrB', info: 'Гамма Северной Короны, оранжевый гигант' },
            { x: 910, y: 175, size: 3.8, brightness: 1.0, name: 'Delta CrB', info: 'Дельта Северной Короны, белая звезда' },
            { x: 830, y: 175, size: 3.8, brightness: 1.0, name: 'Theta CrB', info: 'Тета Северной Короны, двойная звезда' }
        ],
        lines: [[0,1], [1,2], [2,3], [4,0]],
        info: 'Северная Корона - небольшое созвездие в форме полукруга или короны'
    },
    'Aquila': {
        stars: [
            { x: 750, y: 550, size: 4.2, brightness: 1.0, name: 'Altair', info: 'Альфа Орла, яркая белая звезда' },
            { x: 780, y: 570, size: 3.8, brightness: 1.0, name: 'Tarazed', info: 'Гамма Орла, оранжевый сверхгигант' },
            { x: 810, y: 590, size: 3.8, brightness: 1.0, name: 'Alshain', info: 'Бета Орла, жёлтая звезда' },
            { x: 720, y: 570, size: 3.8, brightness: 1.0, name: 'Delta Aql', info: 'Дельта Орла, белая звезда' },
            { x: 840, y: 570, size: 3.8, brightness: 1.0, name: 'Epsilon Aql', info: 'Эпсилон Орла, двойная звезда' }
        ],
        lines: [[0,1], [0,2], [0,3], [0,4]],
        info: 'Орёл - созвездие, содержащее яркую звезду Альтаир'
    },
    'Lyra': {
        stars: [
            { x: 880, y: 280, size: 4.5, brightness: 1.0, name: 'Vega', info: 'Альфа Лиры, ярчайшая звезда летнего неба' },
            { x: 900, y: 300, size: 3.8, brightness: 1.0, name: 'Sheliak', info: 'Бета Лиры, затменная переменная звезда' },
            { x: 920, y: 320, size: 3.8, brightness: 1.0, name: 'Sulafat', info: 'Гамма Лиры, бело-голубой гигант' },
            { x: 860, y: 300, size: 3.8, brightness: 1.0, name: 'Delta Lyr', info: 'Дельта Лиры, двойная звезда' },
            { x: 900, y: 260, size: 3.8, brightness: 1.0, name: 'Epsilon Lyr', info: 'Эпсилон Лиры, четверная звезда' }
        ],
        lines: [[0,1], [1,2], [0,3], [0,4]],
        info: 'Лира - маленькое, но заметное созвездие с яркой звездой Вега'
    }
};

class StarMap {
    constructor() {
        this.canvas = document.getElementById('sky-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.stars = new Map();
        this.selectedStar = null;
        this.selectedConstellation = null;
        this.initializeAsync();
    }

    async initializeAsync() {
        try {
            this.resizeCanvas();
            window.addEventListener('resize', () => this.resizeCanvas());
            this.canvas.addEventListener('click', (e) => this.handleClick(e));
            
            // Create background stars
            this.createBackgroundStars(3000);
            
            // Create main constellation stars
            this.createConstellations();
            
            // Start animation
            this.animate();
        } catch (error) {
            console.error('Initialization error:', error);
        }
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createBackgroundStars(count) {
        for (let i = 0; i < count; i++) {
            const x = Math.random() * this.canvas.width;
            const y = Math.random() * this.canvas.height;
            
            // More evenly distributed stars across the sky
            const size = Math.random() * 1.2 + 0.8; // Reduced size range
            const brightness = Math.random() * 0.4 + 0.2; // Reduced brightness range
            
            this.stars.set(`bg_star_${i}`, {
                x, y, size, brightness,
                type: 'background'
            });
        }
    }

    createConstellations() {
        for (const [name, constellation] of Object.entries(CONSTELLATIONS)) {
            constellation.stars.forEach(star => {
                this.stars.set(`${name}_${star.name}`, {
                    ...star,
                    constellation: name,
                    type: 'constellation'
                });
            });
        }
    }

    render() {
        // Pure black background
        this.ctx.fillStyle = '#000000';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw constellation lines first
        if (this.selectedConstellation) {
            this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)'; // Even more reduced line opacity
            this.ctx.lineWidth = 1;
            this.drawConstellationLines(this.selectedConstellation);
        }

        // Draw background stars
        for (const [id, star] of this.stars.entries()) {
            if (star.type === 'background') {
                const colorVariation = Math.random();
                let starColor;
                if (colorVariation < 0.7) {
                    starColor = 'rgba(255, 255, 255, ' + star.brightness * 0.5 + ')';
                } else if (colorVariation < 0.8) {
                    starColor = 'rgba(255, 220, 180, ' + star.brightness * 0.5 + ')';
                } else if (colorVariation < 0.9) {
                    starColor = 'rgba(200, 220, 255, ' + star.brightness * 0.5 + ')';
                } else {
                    starColor = 'rgba(255, 180, 180, ' + star.brightness * 0.5 + ')';
                }
                this.drawStar(star.x, star.y, star.size * 0.4, star.brightness * 0.6, starColor);
            }
        }

        // Draw constellation stars with further reduced brightness
        for (const [id, star] of this.stars.entries()) {
            if (star.type === 'constellation') {
                this.drawStar(star.x, star.y, star.size * 1.0, 0.6, 'rgba(255, 255, 255, 0.6)');
            }
        }
    }

    drawStar(x, y, size, brightness, color) {
        // Reset any previous canvas settings
        this.ctx.shadowBlur = 0;
        this.ctx.shadowColor = 'transparent';

        // Outermost soft glow
        const gradient1 = this.ctx.createRadialGradient(x, y, 0, x, y, size * 4); // Reduced glow radius
        gradient1.addColorStop(0, color || `rgba(255, 255, 255, ${brightness * 0.1})`); // Reduced glow intensity
        gradient1.addColorStop(1, 'rgba(255, 255, 255, 0)');
        this.ctx.fillStyle = gradient1;
        this.ctx.beginPath();
        this.ctx.arc(x, y, size * 4, 0, Math.PI * 2);
        this.ctx.fill();

        // Middle glow layer
        const gradient2 = this.ctx.createRadialGradient(x, y, 0, x, y, size * 1.5); // Reduced middle glow
        gradient2.addColorStop(0, color || `rgba(255, 255, 255, ${brightness * 0.3})`); // Reduced intensity
        gradient2.addColorStop(1, 'rgba(255, 255, 255, 0)');
        this.ctx.fillStyle = gradient2;
        this.ctx.beginPath();
        this.ctx.arc(x, y, size * 1.5, 0, Math.PI * 2);
        this.ctx.fill();

        // Core of the star
        const gradient3 = this.ctx.createRadialGradient(x, y, 0, x, y, size);
        gradient3.addColorStop(0, color || `rgba(255, 255, 255, ${brightness})`);
        gradient3.addColorStop(1, color || `rgba(255, 255, 255, ${brightness * 0.3})`);
        this.ctx.fillStyle = gradient3;
        this.ctx.beginPath();
        this.ctx.arc(x, y, size, 0, Math.PI * 2);
        this.ctx.fill();
    }

    drawConstellationLines(constellation) {
        if (!CONSTELLATIONS[constellation]) return;
        
        const stars = CONSTELLATIONS[constellation].stars;
        const lines = CONSTELLATIONS[constellation].lines;
        
        // Сначала рисуем внешнее свечение линий
        this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        this.ctx.lineWidth = 2;
        
        lines.forEach(([startIdx, endIdx]) => {
            const start = stars[startIdx];
            const end = stars[endIdx];
            
            this.ctx.beginPath();
            this.ctx.moveTo(start.x, start.y);
            this.ctx.lineTo(end.x, end.y);
            this.ctx.stroke();
        });

        // Затем рисуем основные линии
        this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
        this.ctx.lineWidth = 1;
        
        lines.forEach(([startIdx, endIdx]) => {
            const start = stars[startIdx];
            const end = stars[endIdx];
            
            this.ctx.beginPath();
            this.ctx.moveTo(start.x, start.y);
            this.ctx.lineTo(end.x, end.y);
            this.ctx.stroke();
        });
    }

    showInfoPanel(star) {
        const infoPanel = document.getElementById('info-panel');
        if (!infoPanel) return;

        const constellation = CONSTELLATIONS[star.constellation];
        
        infoPanel.innerHTML = `
            <h3>${star.name}</h3>
            <p><strong>Созвездие:</strong> ${star.constellation}</p>
            <p><strong>Информация о звезде:</strong> ${star.info}</p>
            <p><strong>О созвездии:</strong> ${constellation.info}</p>
        `;
        
        infoPanel.style.display = 'block';
        infoPanel.style.left = `${star.x + 20}px`;
        infoPanel.style.top = `${star.y + 20}px`;
    }

    closeInfoPanel() {
        const infoPanel = document.getElementById('info-panel');
        if (infoPanel) {
            infoPanel.style.display = 'none';
        }
    }

    handleClick(event) {
        const rect = this.canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        
        // Find clicked star
        let clickedStar = null;
        for (const [id, star] of this.stars.entries()) {
            if (star.type === 'constellation') {
                const distance = Math.sqrt(
                    Math.pow(x - star.x, 2) + Math.pow(y - star.y, 2)
                );
                if (distance < star.size * 3) {
                    clickedStar = star;
                    break;
                }
            }
        }
        
        if (clickedStar) {
            this.selectedStar = clickedStar;
            this.selectedConstellation = clickedStar.constellation;
            this.showInfoPanel(clickedStar);
        } else {
            this.selectedStar = null;
            this.selectedConstellation = null;
            this.closeInfoPanel();
        }
    }

    animate() {
        this.render();
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize the star map when the page loads
window.addEventListener('load', () => {
    const starMap = new StarMap();
    starMap.createBackgroundStars(3000); // Increased number of background stars
});
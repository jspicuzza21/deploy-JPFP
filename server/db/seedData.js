const startingTeams = [
    {teamName: 'Justice League', logo: 'https://cdn3.iconfinder.com/data/icons/geek-3/24/Justice_League_dc_comic_logo_movie-512.png'},
    {teamName: 'Avengers', logo: 'https://i.pinimg.com/originals/26/59/7e/26597e05271f828af9a5d581812354e5.png'},
    {teamName: 'X-Men', logo: 'https://starlightrunner.com/wp-content/uploads/2019/09/x-men-logo.png'},
    {teamName: 'Fantastic Four', logo: 'https://i.ya-webdesign.com/images/fantastic-4-logo-png-1.png'},
    {teamName: 'Guardians of the Galaxy', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Guardians_of_the_Galaxy-Logo.png'},
    {teamName: 'The Defenders', logo: 'https://pngimage.net/wp-content/uploads/2018/06/the-defenders-logo-png.png'}
];
const startingHeroes=[
    {
        alias: 'Batman',
        name: 'Bruce Wayne',
        powerLevel: 75,
        team: 'Justice League'
    },
    {
        alias: 'Superman',
        name: 'Clark Kent',
        powerLevel: 97,
        team: 'Justice League'
    },
    {
        alias: 'Flash',
        name: 'Barry Allen',
        powerLevel: 65,
        team: 'Justice League'
    },
    {
        alias: 'Wonder-Woman',
        name: 'Diana',
        powerLevel: 91,
        team: 'Justice League'
    },
    {
        alias: 'Aqua Man',
        name: 'Arthur Curry',
        powerLevel: 86,
        team: 'Justice League'
    },
    {
        alias: 'Cyborg',
        name: 'Victor Stone',
        powerLevel: 70,
        team: 'Justice League'
    },
    {
        alias: 'Iron Man',
        name: 'Tony Stark',
        powerLevel: 78,
        team: 'Avengers'
    },
    {
        alias: 'Captain America',
        name: 'Steve Rogers',
        powerLevel: 80,
        team: 'Avengers'
    },
    {
        alias: 'Spider-Man',
        name: 'Peter Parker',
        powerLevel: 85,
        team: 'Avengers'
    },
    {
        alias: 'Ant-Man',
        name: 'Scott Lang',
        powerLevel: 70,
        team: 'Avengers'
    },
    {
        alias: 'Hulk',
        name: 'Bruce Banner',
        powerLevel: 94,
        team: 'Avengers'
    },
    {
        alias: 'Thor',
        powerLevel: 95,
        team: 'Avengers'
    },
    {
        alias: 'Hawk-Eye',
        name: 'Clint',
        powerLevel: 60,
        team: 'Avengers'
    },
    {
        alias: 'Black Window',
        name: 'Natasha Romanov',
        powerLevel: 60,
        team: 'Avengers'
    },
    {
        alias:'Wolverine',
        name:'Logan',
        powerLevel: 81,
        team: 'X-Men'
    },
    {
        alias:'Cyclops',
        name:'Scott Summers',
        powerLevel: 88,
        team: 'X-Men'
    },
    {
        alias:'Storm',
        name:'Ororo Munrow',
        powerLevel: 82,
        team: 'X-Men'
    },
    {
        alias:'DeadPool',
        name:'Wade Wilson',
        powerLevel: 78,
        team: 'X-Men'
    },
    {
        alias:'Nightcrawler',
        powerLevel: 84,
        team: 'X-Men'
    },
    {
        alias:'Beast',
        powerLevel: 76,
        team: 'X-Men'
    },
    {
        alias:'Magneto',
        name:'Max',
        powerLevel: 92,
        team: 'X-Men'
    },
    {
        alias:'Mystique',
        name:'Raven',
        powerLevel: 55,
        team: 'X-Men'
    },
    {
        alias:'Thing',
        name:'Ben Grim',
        powerLevel: 93,
        team: 'Fantastic Four'
    },
    {
        alias:'Mr. Fantastic',
        name:'Reed Richards',
        powerLevel: 60,
        team: 'Fantastic Four'
    },
    {
        alias:'Invisible Woman',
        name:'Susan Storm',
        powerLevel: 75,
        team: 'Fantastic Four'
    },
    {
        alias:'Human Torch',
        name:'Johnny Storm',
        powerLevel: 73,
        team: 'Fantastic Four'
    },
    {
        alias:'Starlord',
        name:'Peter Quill',
        powerLevel: 76,
        team: 'Guardians of the Galaxy'
    },
    {
        alias:'Drax The Destroyer',
        powerLevel: 68,
        team: 'Guardians of the Galaxy'
    },
    {
        alias:'Gamora',
        powerLevel: 70,
        team: 'Guardians of the Galaxy'
    },
    {
        alias:'Rocket Racoon',
        powerLevel: 68,
        team: 'Guardians of the Galaxy'
    },
    {
        alias:'Groot',
        powerLevel: 78,
        team: 'Guardians of the Galaxy'
    },
    {
        alias:'Jessica Jones',
        powerLevel: 78,
        team: 'The Defenders'
    },
    {
        alias:'Luke Cage',
        powerLevel: 80,
        team: 'The Defenders'
    },
    {
        alias:'Daredevil',
        name:'Matt Murdok',
        powerLevel: 69,
        team: 'The Defenders'
    },
    {
        alias:'Iron Fist',
        name:'Danny Rand',
        powerLevel: 71,
        team: 'The Defenders'
    },
]

module.exports={
    startingTeams, 
    startingHeroes
}
const Products = [
    {
        name: 'PS5',
        description: 'La consola más potente de Sony al día de la fecha',
        price: 290000,
        stock: true,
        image: 'https://as.com/meristation/imagenes/2020/11/06/reportajes/1604654372_894608_1604656126_noticia_normal.jpg',
        games: ['God of War Origin']
    },
    {
        name: 'PS4',
        description: 'La consola anterior de Sony',
        price: 140000,
        stock: true,
        image: 'https://live.mrf.io/statics/i/ps/www.muycomputer.com/wp-content/uploads/2019/07/PS4-PS5.jpg'
    },
    {
        name: 'PS3',
        description: 'La consola anterior de Sony',
        price: 70000,
        stock: false,
        image: 'https://live.mrf.io/statics/i/ps/www.muycomputer.com/wp-content/uploads/2019/07/PS4-PS5.jpg',
        joystick: true,
        games: ['Uncharted 3']
    },

    {
        name: 'PS2',
        description: 'La consola anterior de Sony',
        price: 30000,
        stock: false,
    },
    {
        name: 'XBOX Series X',
        description: 'La consola más potente de Microsoft al día de la fecha',
        price: 279000,
        stock: true,
        image: 'https://www.atajo.com.ar/images/0000000RRT-0000234357RRT-00002-Consola-Xbox-Series-X-01.jpg',
        games: ['Halo Infinite'],
        joystick: true,

    },
    {
        name: 'XBOX One',
        description: 'La consola anterior de Microsoft',
        price: 115000,
        stock: false,
        image: 'https://i.blogs.es/a7dc9c/fc7174d71089999f6a7e15c1d16/1366_2000.png'
    },
    {
        name: 'XBOX 360',
        description: 'La consola de Microsoft que compite con la PS3',
        price: 60000,
        stock: true,
        image: 'https://http2.mlstatic.com/D_NQ_NP_686099-MLA32731207921_112019-O.webp',
    }
];

const game = {
    name: 'PS3',
    description: 'La consola anterior de Sony',
    price: 70000,
    stock: false,
    image: 'https://live.mrf.io/statics/i/ps/www.muycomputer.com/wp-content/uploads/2019/07/PS4-PS5.jpg',
    joystick: true,
    games: 'Uncharted 3 ps'
};

const objectKeys = Object.entries(game)
console.log(objectKeys)

objectKeys.forEach((el) => {
    const [ key, value ] = el;
    console.log(`Prop=${key} --- Value=${value}`);
});

const [ key, value ] = ['name', 'PS5 Pro Max'];
console.log(`destructuración`, key);
// const elemento = ['name', 'PS5 Pro Max'];
// const key = elemento[0];
// const value = elemento[1];

// for(let i = 0; i < objectKeys.length; i++) {
//     // console.log(objectKeys[i]);
//     const propName = objectKeys[i][0];
//     const propValue = objectKeys[i][1];

//     console.log(`Prop=${propName} --- Value=${propValue}`)

// }

// For In
// for(let prop in game) {
//     console.log(`prop=${prop} - value=${game[prop]}`)
// }


// console.log(objectKeys)

// Quedan referenciados
const gameCopy = game;

// Shallow copy
const gameCopySpread = { ...game };

// Object assign
const gameCopyAssign = Object.assign({ });


gameCopy.price = 1000000;
gameCopy['price'] = 2;


game.image = undefined
delete game.image



console.table(game);

// games = {
//     godOfWar: {
//         name: 'Nombre'
//     },
//     LastOfUs: {
//         name: 'LastOfUs'
//     }
// }



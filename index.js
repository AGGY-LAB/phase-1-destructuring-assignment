const farmAnimals = 'cow horse sheep pig chicken';

let [moo,neigh,baa,oink,cluck] = farmAnimals.split(' ')
let [bessie, ,dolly, babe,  little] = farmAnimals.split(' ')

let [blackAndWhite, ,black,pink,] = farmAnimals.split(' ')
// console.log(dolly)


const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let [red, orange, yellow,green,blue,indigo,violet]=colors
let [r, o, y,g,b,i,v]=colors
let[, , ,,,indg,]= colors

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};
let {muppetName,color,song,job,partner} = muppet

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

let {song2, song4}= nestedMuppet.album.theMuppetMovie
let{nestedJob,nestedPartner} = nestedMuppet

console.log(nestedJob)




// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
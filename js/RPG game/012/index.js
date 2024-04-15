
console.log(`-------------------1--------------------`);

const dayOfWeek = 3;

switch (dayOfWeek) {
   case 1:
      specialQuest();
      break;
   case 2:
   case 3:
   case 4:
   case 5:
   case 6:
   default:
      console.log(`Sorry no special quest`);
      break;
   case 7:
      specialQuest();
      break;
}

console.log(`-------------------2--------------------`);

const themeColor = `Light`;

switch (themeColor) {
   case `Light`:
   default:
   console.log(`Set to light theme`);
      break;

   case `Dark`:
   console.log(`Set to dark theme`);
   break;
}

console.log(`-------------------3--------------------`);

const questStatus = `unread`;

switch (questStatus) {
   case `new`:
   case 'unread':
   case 'un open':
         console.log(`You have new quests awaiting`);
      break;
   case 'completed':
   default:
      console.log(`No more new quests`);   
      break;
}

console.log(`-------------------4--------------------`);

const playerLevel = `Advance`;

switch (playerLevel) {
   case `Beginner`:
      console.log(`You are ${playerLevel}`);
      break;
   case `Intermediate`:
      console.log(`You are ${playerLevel}`);
   break;
   case `Advance`:
      console.log(`You are ${playerLevel}`);
   break;
   case `Expert`:
      console.log(`You are ${playerLevel}`);
   break;
   case `Master`:
      console.log(`You are ${playerLevel}`);
   break;
}

console.log(`-------------------5--------------------`);

let inventoryItem = null;

inventoryItem = `Sword`;

switch (inventoryItem) {
   case `Potion`:
      console.log(`You chose ${inventoryItem}`);
      break;
   case `Sword`:
      console.log(`You chose ${inventoryItem}`);
      break;
   case `Shield`:
      console.log(`You chose ${inventoryItem}`);
      break;
}

console.log(`-------------------6--------------------`);

const playerScore = 60;
const playerLife = false;

if (!playerLife) {

   switch (true) {
      case playerScore >= 90:
           console.log(`Legend`);
          break;
         
      case playerScore >= 70:
            console.log(`Champion`);
         break;
   
      case playerScore < 70:
            console.log(`Rookie`);
        break;
   }
}

console.log(`-------------------7--------------------`);

let questMonth = 7;

switch (questMonth) {
   case 1:
      questMonth = "ice kingdom adventure";
      console.log(`The quest is "${questMonth}" -- ${typeof questMonth}`);
      break;
   case 2:
      questMonth = "Valentines day special";
      console.log(`The quest is "${questMonth}" -- ${typeof questMonth}`);
      break;
   case 3:
      questMonth = "Spring blossom hunt";
      console.log(`The quest is "${questMonth}" -- ${typeof questMonth}`);
      break;
   case 4:
      questMonth = "Easter egg hunt";
      console.log(`The quest is "${questMonth}" -- ${typeof questMonth}`);
      break;
   case 5:
      questMonth = "Flower festival celebration";
      console.log(`The quest is "${questMonth}" -- ${typeof questMonth}`);
      break;
   case 6:
      questMonth = "Summer solstice quest";
      console.log(`The quest is "${questMonth}" -- ${typeof questMonth}`);
      break;
   case 7:
      questMonth = "Beach party bonanza";
      console.log(`The quest is "${questMonth}" -- ${typeof questMonth}`);
      break;
   case 8:
      questMonth = "Under water expedition";
      console.log(`The quest is "${questMonth}" -- ${typeof questMonth}`);
      break;
   case 9:
      questMonth = "Harvest festival quest";
      console.log(`The quest is "${questMonth}" -- ${typeof questMonth}`);
      break;
   case 10:
      questMonth = "Hunted mansion mystery";
      console.log(`The quest is "${questMonth}" -- ${typeof questMonth}`);
      break;
   case 11:
      questMonth = "Turkey trot adventure";
      console.log(`The quest is "${questMonth}" -- ${typeof questMonth}`);
      break;
   case 12:
      questMonth = "Frosty festivities";
      console.log(`The quest is "${questMonth}" -- ${typeof questMonth}`);
      break;
   default:
      console.log(`Invalid`);
   break;
}

console.log(`-------------------8--------------------`);

const playerInput = 99;

switch (true) {

   case typeof playerInput == "string":
      console.log(`string`);
      break;
   case  typeof playerInput == "number":
      console.log(`Number`);
      break;
   case  typeof playerInput == "boolean":
      console.log(`Boolean`);
      break;
   default:
      console.log(`Invalid`);
      break;
}

console.log(`-------------------9--------------------`);

const updateMonth = 7;

switch (updateMonth) {
   case 1:
   case 2:
   case 3:
       console.log(`Q1`);
   break;

   case 4:
   case 5:
   case 6:
      console.log(`Q2`);
   break;

   case 7:
   case 8:
   case 9:
      console.log(`Q3`);
   break;

   case 10:
   case 11:
   case 12:
      console.log(`Q4`);
   break;

   default:
      console.log(`Invalid`);
   break;
}



const destinationName = 'Famous Israel';
console.log(destinationName.search('famous') > -1 || destinationName.search('top destination') > -1 ? 'This is destination is a hot spot' : 'This is destination is not a hot spot');
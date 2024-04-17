console.log(`--------------------1---------------------\n`);

const experiencePoints1 = [100, 150, 75];  
let experiencePointsSum = 0;

for (let i = 0; i < experiencePoints1.length; i++) { 

   experiencePointsSum += experiencePoints1[i];
}

console.log(`The sum is: ${experiencePointsSum}`);


console.log(`--------------------2---------------------\n`);

const questTitles2 = ['Quest 1','Quest 2','Quest 3',];
const questTitleName = `Quest 2`;
console.log(questTitles2.indexOf(questTitleName));

console.log(`--------------------3---------------------\n`);

const enemyHealths3 = [80, 120, 65];
for (let i = 0; i < enemyHealths3.length; i++) {

   if (enemyHealths3[i] > 100 ) {
      console.log(`Index ${enemyHealths3.indexOf(enemyHealths3[i])} with health ${enemyHealths3[i]}`);
   }
}

console.log(`--------------------4---------------------\n`);

const questRewards4 = [50, 100, 75];

for (let i = 0; i < questRewards4.length; i++) {
   questRewards4[i] = questRewards4[i] + 20;
}
console.log(questRewards4);


console.log(`--------------------5---------------------\n`);

const questRewards5 = [50, 100, 75, 100];
const counterArray = [0, 0 ,0, 0];

for (let i = 0; i < questRewards5.length; i++) {

   for (let j = i+1; j < questRewards5.length; j++) {
      if(questRewards5[i] === questRewards5[j])
      {
         counterArray[i] += 1;
      }
   }
}
for (let i = 0; i < questRewards5.length; i++) {
   console.log(`Quest reward ${questRewards5[i]} repeats ${counterArray[i]} times`);
}

console.log(`--------------------6---------------------\n`);

const questChallenges6 = [120, 150, 75];
const ChallengeLimit = 100;

for (let i = 0; i < questChallenges6.length; i++) {
   if (questChallenges6[i] >= 100) {
      console.log(`Quest ${i+1} pass`);
   }   
   else{
      console.log(`Quest ${i+1} no pass`);
   }
}


console.log(`--------------------7---------------------\n`);

const questRewards7 = [50, 100, 75, 150];
let maxReward = 0 , maxRewardIndex = null;

for (let i = 0; i < questRewards7.length; i++) {

   if (questRewards7[i] > maxReward ) {
      maxReward = questRewards7[i];
      maxRewardIndex = i;
   }
}
console.log(`The max reward is ${maxReward} located in index ${maxRewardIndex}`);


console.log(`--------------------8---------------------\n`);

const enemyPowers8 = [50, 80, 65, 90];
const enemyHealths8 = [80, 120, 60, 100];
const enemyTotal = enemyPowers8.concat(enemyHealths8);
let sumTotal = 0;

for (let i = 0; i < enemyTotal.length; i++) {

   sumTotal += enemyTotal[i];
}
console.log(sumTotal);

console.log(`--------------------9---------------------\n`);

const questExperienceMatrix9 = [
  [100, 200],
  [150, 175],
  [120, 250],
];

let matrixSum = 0;

for (let i = 0; i < questExperienceMatrix9.length; i++) {

   for (let j = 0; j < questExperienceMatrix9[0].length; j++) {

      matrixSum += questExperienceMatrix9[i][j];
   }
}
console.log(`The sum is:`, matrixSum);

console.log(`--------------------10---------------------\n`);

const questExperienceMatrix10 = [
  [100, 200],
  [150, 175],
  [120, 250],
];
const highNumberArray = [];
highNumberArray.length = questExperienceMatrix10.length;

for (let i = 0; i < questExperienceMatrix10.length; i++) {

   let high = 0;
   for (let j = 0; j < questExperienceMatrix10[0].length; j++) {
      
      if (questExperienceMatrix10[i][j] > high)  {
         high = questExperienceMatrix10[i][j];
         highNumberArray[i] = high;
      }
   }
}
for (let i = 0; i < highNumberArray.length; i++) {
   console.log(`Highest ${i+1} = ${highNumberArray[i]}`);
}



console.log(`--------------------11---------------------\n`);

const questDifficultyMatrix11 = [
  [5, 7],
  [8, 6],
  [9, 7],
];

const minDifficulty = 7;
const difficultyArray = [];
difficultyArray.length = questDifficultyMatrix11.length;

for (let i = 0; i < questDifficultyMatrix11.length; i++) {

      difficultyArray[i] = 0;

      for (let j = 0; j < questDifficultyMatrix11[0].length; j++) {
         
         if (questDifficultyMatrix11[i][j] >= minDifficulty) {
            difficultyArray[i]++;
         }
      }
}

for (let i = 0; i < difficultyArray.length; i++) {

   console.log(`Category ${i+1} there are ${difficultyArray[i]} passing quests`);
}


console.log(`--------------------12---------------------\n`);

const questRewardsMatrix12 = [
  [50, 200],
  [300, 175],
  [120, 500],
];
const rewordSumArray = [];
const minReward = 250;
rewordSumArray.length = questRewardsMatrix12.length;


for (let i = 0; i < questRewardsMatrix12.length; i++) {

   rewordSumArray[i] = 0;

   for (let j = 0; j < questRewardsMatrix12[0].length; j++) {

      rewordSumArray[i] += questRewardsMatrix12[i][j]; 
   }
}
for (let i = 0; i < rewordSumArray.length; i++) {
   if(rewordSumArray[i] > minReward){
      console.log(`In category ${i+1} the reward is ${rewordSumArray[i]}`);
   }
}

console.log(`--------------------13---------------------\n`);
const enemyHealthMatrix13 = [
  [80, 120],
  [60, 90],
  [200, 150],
];
const avgHealthArray = [];
avgHealthArray.length = enemyHealthMatrix13.length;

for (let i = 0; i < enemyHealthMatrix13.length; i++) {
   
   let amount = 0;
   for (let j = 0; j < enemyHealthMatrix13[j].length; j++) {
       amount += enemyHealthMatrix13[i][j];
   }
   avgHealthArray[i] = amount / enemyHealthMatrix13[0].length;
}

for (let i = 0; i < avgHealthArray.length; i++) {
   console.log(`The average health of ${i+1} is ${avgHealthArray[i]}`);   
}

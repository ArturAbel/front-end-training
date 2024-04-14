console.log(`------------------1--------------------`);
const currentDate = new Date();
const utcString = currentDate.toUTCString();

console.log(`${utcString} `);

console.log(`------------------2--------------------`);
const year = currentDate.getFullYear();

console.log(`${year}`);

console.log(`------------------3--------------------`);
const month = currentDate.getMonth() + 1;

console.log(`${month}`);

console.log(`------------------4--------------------`);
const today = currentDate.toDateString();

console.log(`${today} `);

console.log(`------------------5--------------------`);
const day = currentDate.getDay() + 1;

console.log(`${day} `);

console.log(`------------------6--------------------`);
const nowTime = currentDate.toTimeString();

console.log(`${nowTime} `);

console.log(`------------------7--------------------`);
function daysInMonth(year, month)
{
   return new Date(year, month, 0).getDate();
}
console.log( daysInMonth(year, month));

console.log(`------------------8--------------------`);
const date = currentDate.getDate();
const tomorrowsDate = date + 1;

console.log(`${tomorrowsDate} `);

console.log(`------------------9--------------------`);
const anHour = 60;
const totalMinutes = 90;
const hours = Math.floor(totalMinutes/anHour);
const minutesLeft = totalMinutes % anHour;

console.log(`${totalMinutes} minutes are ${hours} hours and ${minutesLeft} minutes.`);
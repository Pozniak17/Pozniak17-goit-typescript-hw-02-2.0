/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(day: Day): boolean {
  if (day === Day.Saturday || day === Day.Sunday) {
    return true;
  } else {
    return false;
  }
}

console.log(isWeekend(Day.Sunday));

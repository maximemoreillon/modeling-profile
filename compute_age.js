function calculateAge(birthday) { // birthday is a date
   var ageDifMs = Date.now() - birthday;
   var ageDate = new Date(ageDifMs); // miliseconds from epoch
   return Math.abs(ageDate.getUTCFullYear() - 1970);
 }

const birthday = new Date('1989-12-11')
const age = calculateAge(birthday)

const target = document.getElementById('age')
target.innerHTML = age

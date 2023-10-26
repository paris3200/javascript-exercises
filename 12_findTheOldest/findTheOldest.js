const findTheOldest = function(people) {
    const ordered = people.sort(function (firstPerson, secondPerson) {
      if (!("yearOfDeath" in firstPerson)){
        firstPerson.yearOfDeath = new Date().getFullYear();
      };
      if (!("yearOfDeath" in secondPerson)){
        secondPerson.yearOfDeath = new Date().getFullYear();
      };
      firstPersonAge = firstPerson.yearOfDeath - firstPerson.yearOfBirth;
      secondPersonAge = secondPerson.yearOfDeath - secondPerson.yearOfBirth;
        
        if (firstPersonAge > secondPersonAge) {
          return -1;
        } else {
          return 1;
        };
      });

    return ordered[0]

};

// Do not edit below this line
module.exports = findTheOldest;

"use strict";

function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  return arr1.every((item, index) => item === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
  const usersInGender = users.filter((user) => user.gender === gender);

  if (usersInGender.length === 0) {
    return 0;
  }

  const usersAges = usersInGender.map((user) => user.age);
  const agesSum = usersAges.reduce((sum, age) => sum + age, 0);

  return agesSum / usersAges.length;
}

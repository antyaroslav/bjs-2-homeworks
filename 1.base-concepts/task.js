"use strict";

function solveEquation(a, b, c) {
  const discriminant = b ** 2 - 4 * a * c;

  if (discriminant < 0) {
    return [];
  }

  if (discriminant === 0) {
    return [-b / (2 * a)];
  }

  const firstRoot = (-b + Math.sqrt(discriminant)) / (2 * a);
  const secondRoot = (-b - Math.sqrt(discriminant)) / (2 * a);

  return [firstRoot, secondRoot];
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const creditBody = amount - contribution;

  if (creditBody <= 0) {
    return 0;
  }

  const monthlyPercent = percent / 100 / 12;

  if (monthlyPercent === 0) {
    return creditBody;
  }

  const monthlyPayment = creditBody * (
    monthlyPercent + (
      monthlyPercent / ((1 + monthlyPercent) ** countMonths - 1)
    )
  );
  const totalPayment = monthlyPayment * countMonths;

  return Math.round(totalPayment * 100) / 100;
}

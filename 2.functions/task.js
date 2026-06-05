"use strict";

function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] < min) {
      min = arr[i];
    }

    if (arr[i] > max) {
      max = arr[i];
    }

    sum += arr[i];
  }

  const avg = Math.round((sum / arr.length) * 100) / 100;

  return { min, max, avg };
}

function summElementsWorker(...arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }

  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  const params = getArrayParams(...arr);

  return params.max - params.min;
}

function differenceEvenOddWorker(...arr) {
  let evenSum = 0;
  let oddSum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] % 2 === 0) {
      evenSum += arr[i];
    } else {
      oddSum += arr[i];
    }
  }

  return evenSum - oddSum;
}

function averageEvenElementsWorker(...arr) {
  let evenSum = 0;
  let evenCount = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] % 2 === 0) {
      evenSum += arr[i];
      evenCount += 1;
    }
  }

  if (evenCount === 0) {
    return 0;
  }

  return evenSum / evenCount;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i += 1) {
    const workerResult = func(...arrOfArr[i]);

    if (workerResult > maxWorkerResult) {
      maxWorkerResult = workerResult;
    }
  }

  if (maxWorkerResult === -Infinity) {
    return 0;
  }

  return maxWorkerResult;
}

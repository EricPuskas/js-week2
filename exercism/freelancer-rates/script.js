const WORKING_HOURS_PER_DAY = 8;
const BILLABLE_DAYS = 22;

/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
const dayRate = (ratePerHour) => {
  return WORKING_HOURS_PER_DAY * ratePerHour;
};

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
const daysInBudget = (budget, ratePerHour) => {
  return Math.floor(budget / dayRate(ratePerHour));
};

/**
 * Applies a discount to the value
 *
 * @param {number} value
 * @param {number} percentage for example 20% written as 0.2
 * @returns {number} the discounted value
 */
const applyDiscount = (value, percentage) =>
  Math.ceil(value * (1 - percentage));

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
const priceWithMonthlyDiscount = (ratePerHour, numDays, discount) => {
  const totalFullMonths = Math.floor(numDays / BILLABLE_DAYS);
  const leftoverDays = numDays % BILLABLE_DAYS;

  const totalFullMonthsPrice =
    BILLABLE_DAYS * dayRate(ratePerHour) * totalFullMonths;
  const leftoverDaysPrice = leftoverDays * dayRate(ratePerHour);

  return Math.ceil(
    applyDiscount(totalFullMonthsPrice, discount) + leftoverDaysPrice
  );
};

/**
 * The fast attack is available when the knight is sleeping
 *
 * @param {boolean} knightIsAwake
 *
 * @return {boolean} Whether or not you can execute a fast attack.
 */
const canExecuteFastAttack = (knightIsAwake) => {
  return !knightIsAwake;
};

/**
 * A useful spy captures information, which they can't do if everyone's asleep.
 *
 * @param {boolean} knightIsAwake
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 *
 * @returns {boolean} Whether or not you can spy on someone.
 */
const canSpy = (knightIsAwake, archerIsAwake, prisonerIsAwake) => {
  return knightIsAwake || archerIsAwake || prisonerIsAwake;
};

/**
 * You'll get caught by the archer if you signal while they're awake.
 *
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 *
 * @returns {boolean} Whether or not you can send a signal to the prisoner.
 */
const canSignalPrisoner = (archerIsAwake, prisonerIsAwake) => {
  return !archerIsAwake && prisonerIsAwake;
};

/**
 * The final stage in the plan: freeing Annalyn's best friend.
 *
 * @param {boolean} knightIsAwake  | false
 * @param {boolean} archerIsAwake false | false
 * @param {boolean} prisonerIsAwake  false | true
 * @param {boolean} petDogIsPresent true | false
 *
 * @returns {boolean} Whether or not you can free Annalyn's friend.
 */
const canFreePrisoner = (
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent
) => {
  if (petDogIsPresent) {
    return !archerIsAwake;
  } else {
    return prisonerIsAwake && !archerIsAwake && !knightIsAwake;
  }
};

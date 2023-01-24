export function changeMin(newNumber) {
  return {
    type: 'NUM_MIN_CHANGED',
    payload: newNumber
  }
}

export function changeMax(newNumber) {
  return {
    type: 'NUM_MAX_CHANGED',
    payload: newNumber
  }
}

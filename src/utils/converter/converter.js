export const firstToSecond = (value, course) => {
  return Number((value / course).toFixed(2))
}

export const secondToFirst = (value, course) => {
  return Number((value * course).toFixed(2))
}

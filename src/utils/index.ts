import * as Color from 'color'

function lighten(hexColor: string) {
  return Color(hexColor)
    .lighten(0.5)
    .hex()
}
function darken(hexColor: string) {
  return Color(hexColor)
    .darken(0.5)
    .hex()
}

function optionsMerge(...targets: any[]): object {
  if (targets.length === 0) {
    return {}
  }
  if (targets.length === 1) {
    return targets[0]
  }
  const merged = targets[0]
  for (const key in targets[1]) {
    if (key in merged) {
      if (Object.prototype.toString.call(merged[key]) === '[object Object]') {
        merged[key] = optionsMerge(merged[key], targets[1][key])
      } else {
        merged[key] = targets[1][key]
      }
    } else {
      merged[key] = targets[1][key]
    }
  }
  return optionsMerge(merged, ...targets.slice(2))
}

export default {
  lighten,
  darken,
  optionsMerge,
}
export { lighten, darken, optionsMerge }

import { cloneDeep } from 'lodash'
import * as Color from 'color'

function lighten(hexColor: string) {
  return Color(hexColor)
    .lighten(0.5)
    .hex()
}
function darken(hexColor: string) {
  return Color(hexColor)
    .darken(0.3)
    .hex()
}

function optionsMerge(...targets: any[]): object {
  if (targets.length === 0) {
    return {}
  }
  if (targets.length === 1) {
    return targets[0]
  }
  const merged = cloneDeep(targets[0])
  const target = cloneDeep(targets[1])
  for (const key in target) {
    if (key in merged) {
      if (Object.prototype.toString.call(merged[key]) === '[object Object]') {
        merged[key] = optionsMerge(merged[key], target[key])
      } else {
        merged[key] = target[key]
      }
    } else {
      merged[key] = target[key]
    }
  }
  return optionsMerge(merged, ...targets.slice(2))
}

function isNull(arg: any) {
  return null === arg
}

function isUndefined(arg: any) {
  return undefined === arg
}

function isEmptyStr(arg: any) {
  return '' === arg
}

function isNothing(arg: any) {
  return isNull(arg) || isUndefined(arg) || isEmptyStr(arg)
}

export {
  lighten,
  darken,
  optionsMerge,
  isNull,
  isUndefined,
  isEmptyStr,
  isNothing,
}

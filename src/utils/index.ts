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
export default {
  lighten,
  darken,
}
export { lighten, darken }

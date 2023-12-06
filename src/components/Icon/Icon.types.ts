
const ICON_NAME = [
  'calendar',
  'check',
  'chevron',
  'close',
  'eyeClosed',
  'eyeOpened',
  'logout',
  'minus',
  'plus',
  'question',
  'thumbsDown',
  'thumbsUp',
  'upload',
  'user'
] as const
type IconNames = typeof ICON_NAME
export type IconName = IconNames[number]
export const iconNames: IconNames = ICON_NAME

const ICON_SIZE = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl'
] as const
type IconSizes = typeof ICON_SIZE
export type IconSize = IconSizes[number]
export const iconSizes: IconSizes = ICON_SIZE

const ICON_COLOR = [
  'red',
  'green',
  'blue',
  'yellow',
  'brown',
  'pink',
  'grey',
  'black',
  'white'
] as const
type IconColors = typeof ICON_COLOR
export type IconColor = IconColors[number]
export const iconColors: IconColors = ICON_COLOR

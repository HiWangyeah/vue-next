// using literal strings instead of numbers so that it's easier to inspect
// debugger events

// 操作类型定义:使用字符串而不是数字,因为 debugger 的时候更清晰
export const enum TrackOpTypes {
  GET = 'get',
  HAS = 'has',
  ITERATE = 'iterate'
}

export const enum TriggerOpTypes {
  SET = 'set',
  ADD = 'add',
  DELETE = 'delete',
  CLEAR = 'clear'
}

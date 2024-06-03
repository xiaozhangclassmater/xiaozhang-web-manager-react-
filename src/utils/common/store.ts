export const getStateData = (state: any, moduleName: string, propName?: string)=>
  state[moduleName][propName || ''] ? state[moduleName][propName || ''] : state[moduleName]

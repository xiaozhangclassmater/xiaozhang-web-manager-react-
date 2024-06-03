export function throttle (fn: () => void, delay: number) {
  let lastTime = 0
  return function (...args: any[]) {
    const now = Date.now()
    if (now - lastTime >= delay){
      fn.apply(this, args)
      lastTime = now
    }
  }
}
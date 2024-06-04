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
interface optionsType {
  message: string,
  confirm: () => void
}
function alterinfo(options:optionsType) {
  alert(options.message)
}

//支持 中英文的alertInfo
export  function _alterinfo (
  options:optionsType,
  LanguageEnvironment: 'zh' | 'en'
) {
  const defauultOption = {
    message: '温馨提示',
    confirm: () => {}
  }
  const assignOption = Object.assign(defauultOption, options)
  const enMap = {
    '温馨提示': 'WARN TIP',
    '取消': 'cancel'
  }
  const zhMap = {
    '温馨提示': '温馨提示',
    '取消': '取消'
  }
  const content = LanguageEnvironment === 'zh' ? zhMap[assignOption.message] : enMap[assignOption.message]
  console.log('content', content);
  alterinfo({
    ...defauultOption,
    message: content
  })
}
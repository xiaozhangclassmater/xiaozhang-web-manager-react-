import * as xlsxInstance from 'xlsx'
// export function throttle (fn: () => void, delay: number) {
//   let lastTime = 0
//   return  (...args: any[]) => {
//     const now = Date.now()
//     if (now - lastTime >= delay){
//       fn.apply(this, args)
//       lastTime = now
//     }
//   }
// }
// interface optionsType {
//   message: string,
//   confirm: () => void
// }
// function alterinfo(options:optionsType) {
//   alert(options.message)
// }

// //支持 中英文的alertInfo
// export  function _alterinfo (
//   options:optionsType,
//   LanguageEnvironment: 'zh' | 'en'
// ) {
//   const defauultOption = {
//     message: '温馨提示',
//     confirm: () => {}
//   }
//   const assignOption = Object.assign(defauultOption, options)
//   const enMap = {
//     '温馨提示': 'WARN TIP',
//     '取消': 'cancel'
//   }
//   const zhMap = {
//     '温馨提示': '温馨提示',
//     '取消': '取消'
//   }
//   const content = LanguageEnvironment === 'zh' ? zhMap[assignOption.message] : enMap[assignOption.message]
//   console.log('content', content);
//   alterinfo({
//     ...defauultOption,
//     message: content
//   })
// }

/**
 * 
 * @param data 数据对象
 * @param createFileName 文件名称
 * @returns 无法返回值，错误时返回 异常错误
 * @description 调用此函数，你只需要传入数据对象，即可导出 excel
 */
export function exportExcel<T = object>(data: Array<T>, createFileName: string) {
  const { utils, writeFile } = xlsxInstance
  try {
    //create workbook and append worksheet 创建工作浦 添加到工作页中
    const workBookIns = utils.book_new()
    const workSheetIns = utils.json_to_sheet(data)
    utils.book_append_sheet(workBookIns, workSheetIns, 'Data')
    const fileName = /\.xlsx$/.test(createFileName) ? createFileName : `${createFileName}.xlsx`
    writeFile(workBookIns, fileName || 'data.xlsx')
  } catch (error) {
    return error
  }
}
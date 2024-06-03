// import React, { memo, useCallback, useEffect, useRef } from 'react'
// import { throttle } from '../../utils/common/frameWork'

// const VirtuelList = memo(() => {
//   const curContainerHeight = useRef<number>()
//   const containerRef = useRef<HTMLElement>()
//   const dataListRef = useRef()
//   const curViewNum = useRef(0)
//   const itemHeight = 50
//    // 滚动容器高度改变后执行的函数
//   const changeHeight = useCallback(throttle(() => {
//     // 容器高度，通过操作dom元素获取高度是因为它不一定是个定值
//     curContainerHeight.current = containerRef.current?.offsetHeight
//     // 列表最大数量，考虑到列表中顶部和底部可能都会出现没有展现完的item
//     curViewNum.current = Math.ceil(curContainerHeight.current! / itemHeight) + 1
//   }, 500), [])
//   // 得到要渲染数据的起始索引和结束索引
//   const getIndex = () => {
//     // 设置缓冲区域的数据量
//     const aboveCount = 5
//     const belowCount = 5
//     // 结果数组，里面包含了起始索引和结束索引
//     const resObj = {
//       startIndex: 0,
//       endIndex: 0,
//     }
//     const scrollTop = containerRef.current?.scrollTop || 0
//     const dataList = dataListRef.current! as []
//     const len = dataList.length
//     // 设置上层缓冲区，如果索引值大于缓冲区域，那么就需要减小startIndex的值用于设置顶层缓冲区
//     const startIndex = binarySearch(scrollTop)
//     if (startIndex <= aboveCount) {
//       resObj.startIndex = 0
//     } else {
//       resObj.startIndex = startIndex - aboveCount
//     }
//     /**
//        * 缓冲数据中第一个bottom大于滚动高度加上可视区域高度的元素就是可视区域最后一个元素
//        * 如果没有找到的话就说明当前滚动的幅度过大，缓存中没有数据的bottom大于我们的目标值，所以搜索不到对应的索引，我们只能拿缓存数据中的最后一个元素补充上
//        */
//     const endIndex = binarySearch(scrollTop + curContainerHeight.current!) || len - 1
//     // 增大endIndex的索引值用于为滚动区域下方设置一段缓冲区，避免快速滚动所导致的白屏问题
//     resObj.endIndex = endIndex + belowCount
//     return resObj
//   }

//   // 由于我们的缓存数据，本身就是有顺序的，所以获取开始索引的方法可以考虑通过二分查找的方式来降低检索次数：
//   const binarySearch = (value) => {
//     const list = dataListRef.current
//     let start = 0;
//     let end = list.length - 1;
//     let tempIndex = null;
//     while (start <= end) {
//       let midIndex = parseInt((start + end) / 2);
//       let midValue = list[midIndex].bottom;
//       if (midValue === value) {
//         // 说明当前滚动区域加上可视区域刚好是一个结点的边界，那么我们可以以其下一个结点作为末尾元素
//         return midIndex + 1;
//       } else if (midValue < value) {
//         // 由于当前值与目标值还有一定的差距，所以我们需要增加start值以让下次中点的落点更靠后
//         start = midIndex + 1;
//       } else if (midValue > value) {
//         // 因为我们的目的并不是找到第一个满足条件的值，而是要找到满足条件的最小索引值
//         if (tempIndex === null || tempIndex > midIndex) {
//           tempIndex = midIndex;
//         }
//         // 由于我们要继续找更小的索引，所以需要让end-1以缩小范围，让下次中点的落点更靠前
//         end--
//       }
//     }
//     return tempIndex;
//   }

//   const boxScroll = () => {
    
//   }
//   useEffect(() => {
//     // 组件第一次挂载需要初始化容器的高度以及最大容纳值
//     changeHeight()
//     // 因为我们的可视窗口和浏览器大小有关系，所以我们需要监听浏览器大小的变化
//     // 当浏览器大小改变之后需要重新执行changeHeight函数计算当前可视窗口对应的最大容纳量是多少
//     window.addEventListener('resize', changeHeight)
//     return () => {
//       window.removeEventListener('resize', changeHeight)
//     }
//   }, [changeHeight])


//   return (
//     // 虚拟列表DOM结构
//     <div className='container'>
//       // 监听滚动事件的盒子，该高度继承了父元素的高度
//       <div className='scroll-box' ref={containerRef} onScroll={boxScroll}>
//         // 该盒子的高度一定会超过父元素，要不实现不了滚动的效果，而且还要动态的改变它的padding值用于控制滚动条的状态
//         <div style={topBlankFill.current}>
//           {
//           showList.map(item => <div className='item' key={item.commentId || (Math.random() + item.comments)}>{item.content}</div>)
//           }
//         </div>
//       </div>
//     </div>
// >
//   )
// })

// export default VirtuelList
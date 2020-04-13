import React, {useState, useEffect, createContext, useContext, useReducer} from 'react'

let ThemeContext = createContext({
  dark: {
    color: '#fff',
    background: '#000'
  },
  white: {
    color: '#000',
    background: '#f'
  }
})
let style = {
  width: '120px',
  height: '36px',
  borderRadius: '5px'
}

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { num: state.num + 1 };
    case 'DECREMENT':
      return { num: state.num - 1 };
    default:
      return state;
  }
}

let Counter = props => {
  // useReducer는 첫 번째 인자로 리듀서, 두 번째 인자로 초기값을 전달합니다.
  const [num, setNum] = useState(0)
  const [state, dispatch] = useReducer(reducer, {num: 0})
  let theme = useContext(ThemeContext)

  let styleDark = {
    ...style,
    color: theme.dark.color,
    background: theme.dark.background
  }
  let styleWhite = {
    ...style,
    color: theme.white.color,
    background: theme.white.background
  }
  useEffect(() => {
    console.log('counter component rerender')
    // console.log(num)
    let intervalId = setInterval(() => {
      console.log('[CALLED] setInterval')
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  let onIncreament = (e) => {
    // setSum(num + 1)
    dispatch({type: 'INCREMENT'})
  }
  let onDecreament = (e) => {
    // setSum(num - 1)
    dispatch({type: 'DECREMENT'})
  }

  return (
    <div>
        <h2>훅스 기반 카운터 입니다.</h2>
        <p>현재 카운트 된 수{state.num}  </p>
        <button onClick={onIncreament} style={styleDark}>증가</button>
        <button onClick={onDecreament} style={styleWhite}>감소</button>
    </div>
  )
}

export default Counter
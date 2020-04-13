import React, {useState, useMemo, useCallback} from 'react'

const getAverage = numbers => {
  console.log('calculation')
  if (!numbers.length) return 0;
  let sum = numbers.reduce((a, b) => a + b)
  return sum / numbers.length
}

let Average = props => {
  let [numbers, setNumbers] = useState([])
  let [num, setNum] = useState('')

  let onChange = useCallback(e => {
    setNum(parseInt(e.target.value))
  }, [])

  let onInsert = useCallback(e => {
    console.log(num)
    const addedNumber = numbers.concat(parseInt(num));
    setNumbers(addedNumber)
    setNum('')
  }, [num, numbers])

  const avg = useMemo(() => getAverage(numbers), [numbers]);

  return (
    <div>
      <input value={num} onChange={onChange} />
      <button onClick={onInsert} >등록</button>

      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
      <div>
        <b>평균 값:</b> {avg}
      </div>

    </div>
  )
}

export default Average
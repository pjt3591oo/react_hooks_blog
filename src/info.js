import React, {useState, useEffect} from 'react'

let useText = () => {
  const [name, setName] = useState('')

  const onChange = (e) => {
    setName(e.target.value)
  }

  return [name, onChange]
}

let Info = props => {
  const [name, onNameChange] = useText('')
  const [nickName, onNickNameChange] = useText('')

  useEffect(() => {
    console.log(`상태 name 업데이트로 rerender :${name}`)
  }, [name])

  return (
    <div>
      <h2>여러 input을 가진 입력폼</h2>
      <label>이름 입력</label>
      <input onChange={onNameChange} />
      <label>닉네임 입력</label>
      <input onChange={onNickNameChange}></input>

      <h2>입력된 데이터</h2>
      <p>이름: {name}, 닉네임: {nickName}</p>
    </div>
  )
}

export default Info
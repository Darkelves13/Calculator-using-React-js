import { useState } from 'react'
import './App.css'

function App() { 
  const [value, setValue] = useState('')

  function handleSubmitButton(val){
    setValue(value + val)
  }

  function handleClear(){
    setValue('')
  }

  function handleDelete(){
    setValue(value.slice(0, -1))
  }

  function handleSubmit(e){
    e.preventDefault()
    try{
      const resultValue = eval(value)
      setValue(resultValue.toString())
    } catch {
      setValue('Failure!!')
    }
  }

  return (
      <div className="container">
        <div className="calculator">
          <form action="" onSubmit={handleSubmit}>
            <Display value={value}/>
            <InputKeys 
              onSubmitButton={handleSubmitButton}
              onSubmitClear={handleClear}
              onSubmitDelete={handleDelete}
            />
          </form>
        </div>
      </div>
  )
}

function Display({ value }){
  return(
    <div className='display'>
      <input type="text" value={value} readOnly/>
    </div>
  )
}

function InputKeys({ onSubmitButton, onSubmitClear, onSubmitDelete }){
  return(
    <>
      <div>
        <input type="button" value='AC' onClick={onSubmitClear}/>
        <input type="button" value='DE' onClick={onSubmitDelete}/>
        <input type="button" value='.' onClick={() => onSubmitButton('.')}/>
        <input type="button" value='/' onClick={() => onSubmitButton('/')}/>
      </div>

      <div>
        <input type="button" value='7' onClick={() => onSubmitButton('7')}/>
        <input type="button" value='8' onClick={() => onSubmitButton('8')}/>
        <input type="button" value='9' onClick={() => onSubmitButton('9')}/>
        <input type="button" value='*' onClick={() => onSubmitButton('*')}/>
      </div>

      <div>
        <input type="button" value='4' onClick={() => onSubmitButton('4')}/>
        <input type="button" value='5' onClick={() => onSubmitButton('5')}/>
        <input type="button" value='6' onClick={() => onSubmitButton('6')}/>
        <input type="button" value='+' onClick={() => onSubmitButton('+')}/>
      </div>

      <div>
        <input type="button" value='1' onClick={() => onSubmitButton('1')}/>
        <input type="button" value='2' onClick={() => onSubmitButton('2')}/>
        <input type="button" value='3' onClick={() => onSubmitButton('3')}/>
        <input type="button" value='-' onClick={() => onSubmitButton('-')}/>
      </div>

      <div>
        <input type="button" value='00' onClick={() => onSubmitButton('00')}/>
        <input type="button" value='0' onClick={() => onSubmitButton('0')}/>
        <input type="submit" value='=' className='equal'/>
      </div>
    </>
  )
}

export default App
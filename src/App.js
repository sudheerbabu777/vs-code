import {useState} from 'react'
import './App.css'

const App = () => {
  const [input,setInput] = useState('')
  const [password,setPassword] = useState('')
  

  const onChangeInput = (e) => {
    setInput(e.target.value)
        

  } 
  const onChanePassword = (e) => {
    setPassword(e.target.value)
  }

  const onSubitButton = (e) => {
    e.preventDefault()
  }


  return(
  <div className='app-container'>
    <span></span>
    <span></span>
    <span></span>
    <form class="from" onSubmit={onSubitButton}>
    <h1>Nxt Wave</h1>
    <div className="container">
      <label htmlFor="login">Login Id</label>
    <input type='text' placeholder="LoginId" id='login' value={input} onChange={onChangeInput}/>
    </div>
    <div className="container">
      <label htmlFor="password">Password</label>
    <input type='password' placeholder="Password" id='password' value={password} onChange={onChanePassword}/>
    </div>
    <div>
      <button type="submit" className='btn'>Login</button>
    </div>
    </form>
  </div>
)
}

export default App;

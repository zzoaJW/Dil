import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0)

  const navigate = useNavigate()

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <h1>main page</h1>
        }/>
        <Route path='/drink-info' element={
          <h1>어떤 술인지 정보</h1>
        }/>
        <Route path='/drink-similar' element={
          <div>
            <h1>비슷한 술 추천</h1>
            <button onClick={() => navigate('/') }>메인으로</button>
          </div>
        }/>
        <Route path='/drink-food' element={
          <div>
            <h1>안주 추천</h1>
            <button onClick={() => navigate('/drink-info') }>술 정보 보기</button>
          </div>
        }/>
      </Routes>
    </div>
  )
}

export default App


import { Suspense } from 'react'
import './App.css'
import Countrys from './Component/countrys/countrys'


const countriesPromiss = fetch('https://openapi.programming-hero.com/api/all')
.then (res => res.json())

function App() {
  

  return (
    <>
     <Suspense fallback={<h2>Loding .....</h2>}>
       <Countrys countriesPromiss={countriesPromiss} ></Countrys>
     </Suspense>
    </>
  )
}

export default App

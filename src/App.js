import './App.css'
import { Greeting } from './Greeting';
import { Counter } from './Counter'


function App() {
  const title = 'Привет, мир!'
  
  return (
    <div className="App">
      <Greeting name="Вася"  />
      <Greeting name="Гоша"  />
      <Counter />
    </div>
  )
}



export default App

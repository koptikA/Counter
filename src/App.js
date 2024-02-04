import './App.css'
import { Greeting } from './Greeting';
import { Counter } from './Counter';
import { HighlightText } from './HighlightText'


function App() {
  const title = 'Привет, мир!'
  
  return (
    <div className="App">
      <Greeting name="Вася"  />
      <Greeting name="Гоша"  />
      <Counter />
      <HighlightText color="red">
        <p>This text should be red</p>
      </HighlightText>
      
    </div>
  )
}



export default App

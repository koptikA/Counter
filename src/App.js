import './App.css'
import { Greeting } from './components/Greeting/Greeting'

import { Counter } from './components/Counter/Counter'
import { HighlightText } from './components/HighlightText/HighlightText'


function App() {
  const title = 'Привет, мир!'

  return (
    <div className="App">
      <Greeting name="Вася" />
      <Greeting name="Гоша" />      
     
      <Counter />      
      
      <HighlightText color="red">
        <p>This text should be red</p>
      </HighlightText>
    </div>
  )
}

export default App

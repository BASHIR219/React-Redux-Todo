
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  
  return (
    <>
      <h1 className="text-4xl text-white font-bold">Redux toolkit base Todo Implementation</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App

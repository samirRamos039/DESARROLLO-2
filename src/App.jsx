import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import TaskList from "./TaskList"
import Navegacion from './component/navegacion/Navegacion'


function App() {
  return (
    <Router>
      <Navegacion/>
    </Router>
  )
}

export default App
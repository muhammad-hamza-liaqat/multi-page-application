import './App.css'
import { BrowserRouter as Router } from "react-router-dom"
import MyAppRoutes from './routes/route'

function App() {

  return (
    <>
      <Router>
        <MyAppRoutes />
      </Router>
    </>
  )
}

export default App

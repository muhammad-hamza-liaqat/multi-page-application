// import './App.css'
import { BrowserRouter as Router } from "react-router-dom"
import MyAppRoutes from "./routes/myAppRoutes"
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

// import './App.css'
import { BrowserRouter as Router } from "react-router-dom"
import MyAppRoutes from "./routes/myAppRoutes"
import { CounterProvider } from "./providers/counterProvider"
function App() {

  return (
    <>
      <CounterProvider>
        <Router>
          <MyAppRoutes />
        </Router>
      </CounterProvider>
    </>
  )
}

export default App

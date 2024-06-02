import { BrowserRouter ,Routes,Route } from "react-router-dom"
import { lazy } from "react"

const Home = lazy(() => import('./pages/Home')); // import Home component lazily
const Login = lazy(() => import('./pages/Login')); // import Login component lazily
const Chat = lazy(() => import('./pages/Chat')); // import Chat component lazily
const Groups = lazy(() => import('./pages/Groups')); // import Group component lazily

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/chat/:chatId" element={<Chat />} />
      <Route path="/group" element={<Groups />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
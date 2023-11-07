
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import MainPage from './pages/main/MainPage'
import Profile from './pages/profile/Profile'
import Layout from './layouts/Layout'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<MainPage />} />
      <Route path="profile" element={<Profile />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home';
import Carrinho from './pages/carrinho';
import Pagamento from './pages/pagamento';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/carrinho",
    element: <Carrinho/>,
  },
  {
    path: "/pagamento",
    element: <Pagamento/>,
  },
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App

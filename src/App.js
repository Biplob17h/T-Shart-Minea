import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path :'/',
      element : <Main></Main>,
      children : [
        {
          path : '/',
          element : <Home></Home>,
          loader : async () =>{
            return fetch('tshart.json')
          }
        },
        {
          path : '/orders',
          element : <Orders></Orders>
        },
        {
          path : '/about',
          element : <About></About>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

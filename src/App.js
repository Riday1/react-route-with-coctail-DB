import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main';
import Home from './components/Home';
import Coctails from './components/Coctails';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        { path: '/home', element: <Home></Home> },
        {
          path: '/coctails',
          element: <Coctails></Coctails>,
          loader: async () => {
            return fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
          }
        },
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

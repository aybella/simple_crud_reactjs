
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PersonAdd from './components/PersonAdd';
import PersonEdit from './components/PersonEdit';
import PersonList from './components/PersonList';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PersonList />,
    },
    {
      path: "/add",
      element: <PersonAdd />,
    },
    {
      path: `/edit/:id`,
      element: <PersonEdit />,
    },
  ]);
  return (
    <div className="App">
  
  
    <RouterProvider router={router} />
 

    </div>
  );
}

export default App;

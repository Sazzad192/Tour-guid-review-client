import { RouterProvider } from 'react-router-dom';
import './App.css';
import route from './Route/Route';

function App() {
  return (
    <div data-theme="aqua">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;

import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import Login from './components/Login';
import Browse from './components/Browse';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Error from './components/Error';



const App = () => {

  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
      path:"/browse",
      element:<Browse/>
    },
    {
      path:"/error",
      element:<Error/>
    }
  ]);


  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  )
}

export default App;
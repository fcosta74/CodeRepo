import { GlobalStyles } from './GlobalStyles'
import { ListRepo } from './components/ListRepo'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.min.css'

function App() {
  

  return (
    <>
      <ListRepo/>
      <GlobalStyles/>
      <ToastContainer/>
    </>
    
  )
}

export default App

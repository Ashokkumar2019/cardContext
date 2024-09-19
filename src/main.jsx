import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Cardprovider} from './context/Cart'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cardprovider>
   <App/>
    </Cardprovider>
    
  </StrictMode>,
)

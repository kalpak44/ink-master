import {StrictMode} from 'react'
import '@fontsource/permanent-marker';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/600.css';
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </StrictMode>
)

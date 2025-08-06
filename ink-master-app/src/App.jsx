import {Route, Routes} from "react-router-dom";
import {FullWidthLayout} from "./layouts/PageFullLayout.jsx";
import {HomePage} from "./pages/HomePage.jsx";

function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<FullWidthLayout><HomePage/></FullWidthLayout>}/>
                <Route path="/constructor" element={<FullWidthLayout><HomePage/></FullWidthLayout>}/>
                <Route path="/card" element={<FullWidthLayout><HomePage/></FullWidthLayout>}/>
            </Routes>
        </>
    )
}

export default App

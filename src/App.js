import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactUs from "./Components/ContactUs";
import PetsWeHave from "./Components/PetsWeHave";
import Portal from "./Components/Portal";
import AdoptGive from "./Pages/AdoptGive";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portal />} >
          <Route path="/" element={<HomePage />} />
          <Route path="/petswehave" element={<PetsWeHave />} />
          <Route path="/adoptgive/:type" element={<AdoptGive />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

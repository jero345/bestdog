import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./views/Home";
import Services from "./views/Services";
import FrequentlyAskedQuestions from "./views/FrequentlyAskedQuestions";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
         <Route path="frequentlyaskedquestions" element={<FrequentlyAskedQuestions />} />

      </Route>
    </Routes>
  );
}

export default App;

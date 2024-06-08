import { Routes, Route } from "react-router-dom";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<FeedbackForm />} />
      <Route path="/FeedbackForm" element={<FeedbackForm />} />
    </Routes>
    </>
  )
}

export default App
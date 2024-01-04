import { useState } from "react";
import Header from "./components/Header";
import MainSection from "./pages/MainSection";

function App() {
  const [showCartCard, setShowCartCard] = useState(false);
  return (
    <div>
      <Header showCartCard={showCartCard} setShowCartCard={setShowCartCard} />
      <MainSection
        showCartCard={showCartCard}
        setShowCartCard={setShowCartCard}
      />
    </div>
  );
}

export default App;

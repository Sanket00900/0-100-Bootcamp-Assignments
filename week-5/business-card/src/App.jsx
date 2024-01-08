import "./App.css";
import BusinessCard from "./components/BusinessCard";
import BusinessCardGallery from "./components/BusinessCardGallery";
import data from "./sampleData.json";

function App() {
  return <BusinessCardGallery key={data.id} data={data} />;
}

export default App;

import "./App.css";
import Carousel from "./캐러셀/carousel";

const images = [
  { name: "골든햄스터 2.jpg", description: "description1" },
  { name: "꽃 2.jpeg", description: "description2" },
  { name: "새.jpg", description: "description3" },
];
function App() {
  return <Carousel images={images} />;
}
export default App;

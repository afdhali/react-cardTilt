// import "./App.css";
import bg from "./assets/bg.jpg";
import Card from "./components/Card";

function App() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-slate-950 to-slate-800">
      <Card image={bg} title="Card Image Tilt" description="Some Description" />
    </div>
  );
}

export default App;

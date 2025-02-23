import Todo from "./todo";
import BackgroundAnimation from "./BackgroundAnimation"; // Import the animation
import "./App.css";
import "./theme.css"; // Theme styles

function App() {

  

  return (
    <>
      <BackgroundAnimation /> {/* ✅ Add animated background */}
      <div className="container">
        <Todo />
       
      </div>
    </>
  );
}

export default App;

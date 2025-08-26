import "tailwindcss";
import "./App.css";
export default function App() {
  return (
    <>
      <div className="containr">
        <ul className="lista">
          <li text-3xl font-bold underline>
            item 1
          </li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
        </ul>
      </div>
    </>
  );
}

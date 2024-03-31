import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";

const arr = ["Core", "Fundamental", "Promising"];

// OUTPUTING DYNAMIC VALUES
function test(num) {
  return Math.floor(Math.random() * (num + 1));
}

export default function Header() {
  const description = arr[test(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

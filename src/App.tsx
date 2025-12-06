import ListGroup from "./components/ListGroup";
import Alerts from "./components/Alerts";
import Button from "./components/Button";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Berlin"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div className="App">
      <Alerts>
        <span>Alert message</span>
      </Alerts>
      <Button>Click me</Button>
    </div>
  );
}
export default App;

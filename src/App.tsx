import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Berlin"];
  return (
    <div className="App">
      <ListGroup items={items} heading="Ipsum" />
    </div>
  );
}
export default App;

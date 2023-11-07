import "./App.css";
import DataTable from "./components/DataTable";
import Form from "./components/Form";

function App() {
  return (
    <main className="custom-flex container mt-5">
      <section className="mx-2 w-100" >
        <h1>Clients</h1>
        <DataTable />
      </section>
      <section className="mx-2 mob-width" >
        <h1>Create Clients</h1>
        <Form />
      </section>
    </main>
  );
}

export default App;

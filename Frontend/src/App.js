import { useState } from "react";
import "./App.css";
import DataTable from "./components/DataTable";
import Form from "./components/Form";

function App() {
  const [formData, setFormData] = useState({});

  return (
    <main className="custom-flex container mt-5">
      <section className="mx-2 w-100">
        <h1>Clients</h1>
        <DataTable setFormData={setFormData} />
      </section>
      <section className="mx-2 mob-width">
        <h1>Create Clients</h1>
        <Form formData={formData} setFormData={setFormData} />
      </section>
    </main>
  );
}

export default App;

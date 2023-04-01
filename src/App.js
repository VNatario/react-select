import { useState } from "react";
import Select from "react-select";

const options = [
  { flavor: "Chocolate", id: 1 },
  { flavor: "Morango", id: 2 },
  { flavor: "Creme", id: 3 },
];

function App() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    flavor: "",
  });

  console.log(form);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const response = {
      ...form,
      flavor: [form.flavor.id],
    };
    console.log("FINAL: ", response);
  }
  return (
    <div className="App">
      <h1>MULTIPLE SELECT ASYNC</h1>

      <h2>Simple Select</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="BABADI"
          name="firstName"
          placeholder="Digite seu nome"
          onChange={handleChange}
          value={form.firstName}
        />
        <br />
        <input
          type="text"
          name="lastName"
          placeholder="Digite seu sobrenome"
          onChange={handleChange}
          value={form.lastName}
        />

        <Select
          placeholder="Selecione um sabor"
          //opçoes para ser selecionandas
          options={options}
          //componente so label e value
          //alterando label para name
          getOptionLabel={(option) => option.flavor}
          //alterando value para id
          getOptionValue={(option) => option.id}
          //cada alteração chama on change
          value={form.flavor}
          onChange={(e) => setForm({ ...form, flavor: e })}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

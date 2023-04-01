import { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const options = [
  { flavor: "Chocolate", id: 1 },
  { flavor: "Morango", id: 2 },
  { flavor: "Creme", id: 3 },
  { flavor: "Menta", id: 4 },
];

export default function MultipleSelect() {
  const [form, setForm] = useState({
    name: "",
    //definindo valor default no select
    sabores: [{ flavor: "Abacaxi", id: 5 }],
  });
  console.log(form);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const response = {
      ...form,
      sabores: form.sabores.map((sabor) => sabor.id),
    };

    console.log("FINAL >>: ", response);
  }

  return (
    <>
      <h1>Select Multiplo</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />

        <Select
          placeholder="Escolha varios sabores..."
          options={options}
          getOptionLabel={(option) => option.flavor}
          getOptionValue={(option) => option.id}
          //habilitando escolha multipla
          isMulti
          //add animação
          components={animatedComponents}
          //não fechar o menu apos selecionar uma opção
          closeMenuOnSelect={false}
          onChange={(e) => {
            setForm({ ...form, sabores: e });
          }}
          //Valores padrões
          value={form.sabores}
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

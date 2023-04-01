import { useState } from "react";
import AsyncSelect from "react-select/async";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const options = [
  { name: "cão", id: 20 },
  { name: "cachorro", id: 21 },
  { name: "vira-lata", id: 22 },
  { name: "doguinho", id: 23 },
  { name: "Rick Sanchez", id: 1 },
];

export default function MultiSelectAsync() {
  const [form, setForm] = useState({
    users: [
      { name: "Bananinha", id: 1 },
      { name: "Xupita", id: 2 },
    ],
  });
  console.log(form.users);

  async function callApi(value) {
    const data = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${value}`
    );
    const res = await data.json();
    const response = await res.results.map((user) => {
      return {
        name: user.name,
        id: user.id,
      };
    });

    return response;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const response = {
      ...form,
      users: form.users.map((user) => user.id),
    };

    console.log(response);
  }

  return (
    <>
      <h1>ASYNC MULTISELECT</h1>

      <form onSubmit={handleSubmit}>
        <AsyncSelect
          isMulti
          isDisabled={false}
          components={animatedComponents}
          placeholder="Selecione os personagens..."
          value={form.users}
          getOptionLabel={(option) => option.name}
          getOptionValue={(option) => option.id}
          onChange={(data) => setForm({ ...form, users: data })}
          defaultOptions={options}
          cacheOptions
          loadOptions={callApi}
        />

        <button type="submit">ENVIAR</button>
      </form>
    </>
  );
}

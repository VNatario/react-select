import { useState } from "react";
import AsyncSelect from "react-select/async";

const options = [
  { name: "Chocolate", id: 1 },
  { name: "Morango", id: 2 },
  { name: "Creme", id: 3 },
];

export default function AsyncSelectSimple() {
  const [form, setForm] = useState({
    name: "",
    flavors: { name: "Abacaxi", id: 69 },
  });
  console.log(form.flavors);

  async function callApi(value) {
    // const data = await fetch(`https://jsonplaceholder.typicode.com/users`);
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

    const final = await response.filter((i) =>
      i.name.toLowerCase().includes(value.toLowerCase())
    );

    return final;
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const response = {
      ...form,
      flavors: [form.flavors.id],
    };

    console.log(response);
  }

  return (
    <>
      <h1>Async Select</h1>

      <form onSubmit={handleSubmit}>
        <AsyncSelect
          value={form.flavors}
          placeholder="Digite um nome..."
          //salva os dados da api em cache
          cacheOptions
          //função que returna uma prommessa que são os dados da api
          loadOptions={callApi}
          //essa função é disparada quando o usuario começa a digitar
          //   onInputChange
          onChange={(data) => setForm({ ...form, flavors: data })}
          //Quando definido como true, os resultados para loadOptions serão carregados automaticamente
          defaultOptions={options}
          getOptionLabel={(option) => option.name}
          getOptionValue={(option) => option.id}
          //desabilitando o select
          isDisable={false}
        />

        <input
          type="text"
          name="name"
          value={form.value}
          onChange={handleChange}
        />
        <button type="submit">SUBMIT</button>
      </form>
    </>
  );
}

import { useNavigate } from "react-router-dom";
import { useState } from "react"; // Pra pegar o estado do input

const SearchForm = () => {
  const navigate = useNavigate(); // O hook useNavigate sendo executado
  const [query, setQuery] = useState(); // A busca - Manipular o estado e utilizado o valor dele pra pegar a busca.

  const handleSubmit = (e) => {
    e.preventDefault(); // Pra não recarregar a página quando clicar em submit

    navigate('/search?query=' + query)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={(e) => setQuery(e.target.value)} />
      <input type="submit" value="Buscar" />
    </form>
  )
}

export default SearchForm
import { Search } from "lucide-react"

interface Props {
  handleSearch: () => void;
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

export const FormSearch = ({handleSearch, searchTerm, setSearchTerm}: Props) => {
  return (
    <form onSubmit={handleSearch} className="flex justify-between border border-slate-200 rounded-md p-1 bg-slate-50 focus-within:ring-2 focus-within:ring-green-500 transition-all">
      <input
        type="text"
        placeholder="Buscar artículos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="bg-transparent outline-none border-none text-slate-700 placeholder-slate-400 text-sm w-40 lg:w-56 px-2"
      />
      <button
        type="submit"
        className="p-1 text-slate-400 hover:text-slate-500"
        aria-label="Iniciar búsqueda"
      >
        <Search size={20} />
      </button>
    </form>
  )
}
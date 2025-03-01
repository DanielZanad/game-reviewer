import { useState } from "react";
import { Menu, Search } from "lucide-react";

export default function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="w-full p-4 bg-gray-900 text-white flex justify-between items-center">
      {/* Logo */}
      <div className="text-xl font-bold">Meu Site</div>

      {/* Links e Input (Desktop) */}
      <div className="hidden md:flex gap-4 items-center">
        <nav className="flex gap-4">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            Sobre
          </a>
          <a href="#" className="hover:underline">
            Contato
          </a>
        </nav>
        <input
          type="text"
          placeholder="Buscar..."
          className="px-2 py-1 rounded bg-gray-800 border border-gray-700 focus:outline-none"
        />
      </div>

      {/* Botões no Mobile */}
      <div className="flex md:hidden gap-2">
        <button
          onClick={() => setShowSearch(!showSearch)}
          className="p-2 bg-gray-700 rounded"
        >
          <Search size={20} />
        </button>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="p-2 bg-gray-700 rounded"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Input de busca no Mobile */}
      {showSearch && (
        <div className="absolute top-16 left-0 right-0 p-4 bg-gray-800 md:hidden">
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full px-2 py-1 rounded bg-gray-700 border border-gray-600 focus:outline-none"
          />
        </div>
      )}

      {/* Menu de links no Mobile */}
      {showMenu && (
        <nav className="absolute top-16 left-0 right-0 p-4 bg-gray-800 md:hidden flex flex-col gap-2">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            Sobre
          </a>
          <a href="#" className="hover:underline">
            Contato
          </a>
        </nav>
      )}
    </header>
  );
}

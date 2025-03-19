import { Home, Menu, Settings, User, X } from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center">
      {/* Bouton pour ouvrir/fermer la sidebar */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 text-gray-800 md:hidden"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-blue-900 text-white w-64 p-5 h-[700px] transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative md:w-64`}
      >
        <h2 className="text-xl font-bold mb-5">Mon Menu</h2>
        <nav>
          <ul>
            <li className="flex items-center p-2 hover:bg-blue-700 rounded">
              <Home className="mr-3" /> Accueil
            </li>
            <li className="flex items-center p-2 hover:bg-blue-700 rounded">
              <User className="mr-3" /> Profil
            </li>
            <li className="flex items-center p-2 hover:bg-blue-700 rounded">
              <Settings className="mr-3" /> Paramètres
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlay mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      <p className="text-7xl text-center px-[300px]">Bienvenue</p>
    </div>
  );
}

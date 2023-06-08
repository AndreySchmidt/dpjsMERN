import { Navbar } from "./Navbar";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const isAuth = true;
  const activeStyles = { active: "white" };

  return (
    <div className="flex justify-between items-center py-4 ">
      <span className="flex justify-between items-center w-6 h-6 bg-gray-600 text-xs text-white rounded-sm">
        Chtoto
      </span>
      {isAuth && (
        <ul className="flex gap-8">
          <li>
            <NavLink
              to="/"
              className="text-xs text-gray-400 hover:text-white"
              style={({ isActive }) => (isActive ? activeStyles : undefined)}
            >
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/posts"
              className="text-xs text-gray-400 hover:text-white"
              style={({ isActive }) => (isActive ? activeStyles : undefined)}
            >
              Мои посты
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new"
              className="text-xs text-gray-400 hover:text-white"
              style={({ isActive }) => (isActive ? activeStyles : undefined)}
            >
              Добавить пост
            </NavLink>
          </li>
        </ul>
      )}

      <div className="flex justify-between items-center bg-gray-600 text-xs text-white rounded-sm px-4 py-2">
        {isAuth ? <button>Выйти</button> : <Link to="/login">Войти</Link>}
      </div>
    </div>
  );
};

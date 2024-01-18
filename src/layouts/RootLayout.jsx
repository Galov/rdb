import { Link, NavLink, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <header className="flex justify-end gap-4 p-3 text-white bg-manun-black">
        <img src="./assets/public/facebook_icon.png" alt="" className="w-2" />
        <img
          src="../src/assets/public/facebook_icon.png"
          alt=""
          className="w-2"
        />
        <img
          src="../src/assets/public/facebook_icon.png"
          alt=""
          className="w-2"
        />
      </header>
      <menu className="flex items-center justify-between px-4 py-2 text-white bg-manun-red">
        <img
          src="../src/assets/public/red-devils-bg-logo.png"
          alt=""
          className="w-16 h-16"
        />
        <nav className="flex gap-4 uppercase">
          <NavLink to="/" className="font-semibold">
            Начало
          </NavLink>
          <NavLink to="/about" className="font-semibold">
            За нас
          </NavLink>
          <NavLink to="/membership" className="font-semibold">
            Членство
          </NavLink>
          <NavLink to="/events" className="font-semibold">
            Събития
          </NavLink>
          <NavLink to="/team" className="font-semibold">
            За отбора
          </NavLink>
          <NavLink to="/contacts" className="font-semibold">
            Контакти
          </NavLink>
        </nav>
      </menu>
      <div className="mx-auto">
        <Outlet />
      </div>
      <footer className="flex justify-around p-8 mt-8 text-white bg-manun-black">
        <nav className="flex flex-col gap-4 text-sm uppercase">
          <NavLink to="/" className="font-semibold">
            Начало
          </NavLink>
          <NavLink to="/about" className="font-semibold">
            За нас
          </NavLink>
          <NavLink to="/membership" className="font-semibold">
            Членство
          </NavLink>
          <NavLink to="/events" className="font-semibold">
            Събития
          </NavLink>
          <NavLink to="/team" className="font-semibold">
            За отбора
          </NavLink>
          <NavLink to="/contacts" className="font-semibold">
            Контакти
          </NavLink>
        </nav>
        <nav className="flex flex-col gap-4 text-sm uppercase">
          <NavLink to="/" className="font-semibold">
            Общи условия
          </NavLink>
          <NavLink to="/about" className="font-semibold">
            Политика за поверителност
          </NavLink>
          <NavLink to="/membership" className="font-semibold">
            Политика за бисквитки
          </NavLink>
        </nav>
        <div className="flex flex-col">
          <Link>Facebook</Link>
          <Link>Twitter</Link>
          <Link>You Tube</Link>
        </div>
      </footer>
    </>
  );
}

export default RootLayout;

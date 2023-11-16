import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div className="w-screen min-h-screen pb-52 bg-gradient-to-b from-white to-sky-200 dark:bg-sky-900">
        <header>
          <nav className="flex flex justify-center gap-12 items-center bg-slate-100 py-2">
            <Link className="nav-button" to="/">
              Home
            </Link>
            <Link className="nav-button" to="/ewallet">
              E-wallet example
            </Link>
            <Link className="nav-button" to="/jotai-test">
              Jotai example
            </Link>
          </nav>
        </header>
        <main className="flex flex-col items-center min-h-screen md:mt-20 md:mb-40">
          <Outlet />
        </main>
        <footer className="fixed bottom-2 right-2">Footer</footer>
      </div>
    </>
  );
}

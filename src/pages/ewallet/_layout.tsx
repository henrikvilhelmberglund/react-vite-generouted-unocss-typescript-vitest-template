import { Link, Outlet, useLoaderData, useNavigate } from "react-router-dom";

export default function Layout() {
  const data = useLoaderData();
  return (
    <>
      <div className="w-screen min-h-screen pb-52 bg-gradient-to-b from-white to-sky-200 dark:bg-sky-900">
        <header>
          <nav className="flex flex justify-center gap-12 items-center bg-slate-100 py-2">
            <Link className="nav-button" to="./">
              Home
            </Link>
            <Link className="nav-button" to="./cards">
              Cards
            </Link>
          </nav>
        </header>
        <main className="flex flex-col items-center min-h-screen md:mt-20 md:mb-40">
          <Outlet context={data} />
        </main>
        <footer className="fixed bottom-2 right-2">
          Copyright ©2023 Ankwallet
        </footer>
      </div>
    </>
  );
}

export const Loader = async () => {
  const response = await fetch("https://randomuser.me/api/");
  const data = await response.json();
  const { first: firstName, last: lastName } = data.results[0].name;
  return { firstName, lastName };
};


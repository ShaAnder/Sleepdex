/**
 * Navigation component for sleep dex website
 * @returns jsx for navbar
 * @author ShaAnder
 */
export function NavBar() {
  return (
    <>
      <nav>
        <h1 className="end">SleepDex</h1>
        <div className="nav-items">
          <span className="background" id="background"></span>
          <a href="#">
            <span className="material-symbols-outlined">Pokemon</span>
          </a>
          <a href="#">
            <span className="material-symbols-outlined">Items</span>
          </a>
          <a href="#">
            <span className="end material-symbols-outlined"> Calculator</span>
          </a>
        </div>
      </nav>
      <section id="pokemon"></section>
      <section id="items"></section>
      <section id="calculator"></section>
    </>
  );
}

import RouterLink from "./RouterLink";

function Header() {
  return (
    <div className="w-full h-24 bg-raisin-black text-linen shadow-md text-4xl flex items-center justify-around">
      <RouterLink name="Homepage" href="/" />
      <RouterLink name="Contact" href="/contact" />
    </div>
  );
}

export default Header;

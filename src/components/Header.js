import RouterLink from "./RouterLink";

function Header() {
  return (
    <div className="w-full h-24 flex items-center justify-around bg-raisin-black text-linen shadow-md text-2xl sm:text-4xl">
      <RouterLink name="Homepage" href="/" />
      <RouterLink name="Contact" href="/contact" />
    </div>
  );
}

export default Header;

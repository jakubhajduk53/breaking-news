import RouterLink from "./RouterLink";

function Header() {
  return (
    <div className="w-full h-24 bg-verdigris shadow-md text-4xl flex items-center justify-around pl-10">
      <RouterLink name="Homepage" href="/" />
      <RouterLink name="Contact" href="/contact" />
    </div>
  );
}

export default Header;

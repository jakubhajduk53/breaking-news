import RouterLink from "./RouterLink";

function Header() {
  return (
    <div className="w-full h-24 bg-verdigris shadow-md text-4xl flex items-center pl-10">
      <RouterLink name="Homepage" />
    </div>
  );
}

export default Header;

import logo from "../assets/images/Logo.png";

const HeaderHome: React.FC = () => {
  const navBarItem: string[] = [
    "خانه",
    "مقاصد گردشگری",
    "نقشه",
    "بلاگ",
    "درباره ما",
  ];

  return (
    <div className={"h-20 bg-primary flex justify-between px-12 py-3"}>
      <a href="#" className="duration-300 hover:scale-110">
        <img className="w-9 h-12" alt="Safar Soon" src={logo} />
      </a>
      <div className="py-2 flex flex-row ">
        {navBarItem.map((item) => (
          <a
            href="#"
            className="text-white mx-5 px-4 py-2 rounded-3xl transition duration-300 hover:bg-secondary hover:text-background hover:scale-110"
          >
            {item}
          </a>
        ))}
      </div>
      <div className="py-2 flex flex-row">
        <a
          href="#"
          className="text-background mx-5 border border-background px-4 py-2 rounded transition duration-300 hover:bg-background hover:text-secondary hover:scale-110"
        >
          تماس با ما
        </a>
      </div>
    </div>
  );
};
export default HeaderHome;

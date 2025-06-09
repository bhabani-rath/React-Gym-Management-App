import gymeaselogo from "../../assets/Gymease.png";

const Navbar = () => {
  return (
    <nav>
      {/* Section-1 Logo of the website */}
      <figure>
        <img src={gymeaselogo} alt="" />
      </figure>
    </nav>
  );
};

export default Navbar;

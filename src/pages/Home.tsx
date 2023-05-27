import useScreenHeight from "../Hooks/useScreenSize";
import HeaderHome from "../components/HeaderHome";
import bgImage from "../assets/images/5327.jpg";

const Home: React.FC = () => {
  const screenHeight = useScreenHeight();

  return (
    <>
      <div
        className="w-full bg-cover bg-center h-full"
        style={{
          height: `${screenHeight}px`,
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <HeaderHome />
      </div>
    </>
  );
};
export default Home;

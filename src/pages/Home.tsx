import useScreenHeight from "../Hooks/useScreenSize";
import HeaderHome from "../components/HeaderHome";
import HeaderOther from "../components/HeaderOther";
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
        <HeaderHome>
          <div className="w-full flex flex-col justify-center pt-[200px]">
            <div className="w-1/2 text-3xl text-background m-auto flex justify-center items-center">
              لطفاً مقصد گردشگری دلخواه خود را وارد کنید
            </div>
          </div>
        </HeaderHome>
      </div>
    </>
  );
};
export default Home;

import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/footer";
import { Button } from "./components/Button";
import ImgTest from "./assets/pexel.jpg";
import ImgTest2 from "./assets/pxfuel.jpg";
import ImageTest3 from "./assets/image3.jpg";
import ImageTest4 from "./assets/image4.jpeg";
import ImageTest5 from "./assets/image5.jpg";
import { ImageCard } from "./components/cards/Cards";
import { LoginCard } from "./components/cards/LoginCard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className=" ">
        <div className="h-[355px]  md:h-[755px] bg-painter bg-no-repeat bg-cover flex flex-col content-center justify-evenly  p-[15px] md:p-[0px]">
          <div className=" w-full h-[269px] md:w-[450px] md:h-[269px] p-[25px] flex flex-col border border-[#000000] border-opacity-20 md:ml-[45px] justify-around">
            <p className="text-[24px] md:text-[47px] font-bold">Look my art.</p>
            <p className="text-[17px]">
              Millions of artist want to find a way to express their feelings
              through art. And look for a fashion and accisble way to find that
              person that will sustain their art.
            </p>
            <Button
              styleButton="mt-[43px] w-[126px] h-[40px] border-none  items-center sm:mt-0 border-[#9E9C9C] focus:outline-none  hover:bg-[#269A47] bg-[#2EA44F] "
              styleText="text-[15px] px-[13px]"
              onClick={() => {}}
            >
              Find my artist
            </Button>
          </div>
        </div>
        <div className="flex  flex-col md:flex-row ">
          <div className="h-[502px] md:h-[902px]  md:w-1/2 bg-girlpaint-bg bg-no-repeat bg-cover flex flex-col content-center justify-evenly"></div>
          <div className="bg-[#FFE710] md:w-1/2 flex flex-col items-center justify-center   gap-y-[50px] md:gap-y-[130px]">
            <p className="text-[#3B3B3B] text-[32px] p-[15px] md:p-[0px] md:text-[48px] font-bold">
              Search for your artist
            </p>
            <p className="text-[#3B3B3B] p-[15px] md:p-[0px]">
              You can take a look at our artists collections and see what you
              might want.
            </p>
            <Button
              styleButton="mt-[43px] mb-[43px] md:mb-[0px]  w-[194px] h-[57px]  rounded-[15px] border-none drop-shadow-3xl items-center sm:mt-0 border-[#9E9C9C] focus:outline-none hover:bg-[#E4C210] bg-[#ECD24A]"
              styleText="text-[#242424] text-[18px] px-[13px] font-bold"
              onClick={() => {}}
            >
              Explore
            </Button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row bg-[#B6D9FF]">
          <div className="bg-[#B6D9FF]  pt-[35px] md:pt-[0px] md:h-[902px] px-[2px] md:w-1/2 flex flex-col items-center justify-center gap-y-[90px] md:gap-y-[130px]">
            <p className="text-[#3B3B3B] text-[27px] md:text-[48px] font-bold">
              Look it, like it, contact
            </p>
            <p className="px-[25px] md:px-[0px] text-[#3B3B3B]">
              You can take a look at our artists collections and see what you
              might want.
            </p>
            <Button
              styleButton="mt-[43px] w-[194px] h-[57px]  rounded-[15px] border-none drop-shadow-3xl items-center sm:mt-0 border-[#9E9C9C] bg-[#ACCEF3CC] focus:outline-none hover:bg-[#84BAF5]"
              styleText="text-[#242424] text-[18px] px-[13px] font-bold"
              onClick={() => {}}
            >
              Explore more
            </Button>
          </div>
          <div className="md:w-1/2 pt-[35px] flex flex-col m-[15px] gap-y-[25px] md:gap-y-[0px] ">
            <div className="flex flex-col justify-center items-center gap-y-[25px] md:gap-y-[0px] md:flex-row md:justify-between md:items-end">
              {" "}
              <ImageCard
                image={ImgTest}
                styleCover="w-[258px] h-[190px] bg-cover bg-no-repeat rounded-[50px]
              flex flex-col justify-end pb-[17px] pl-[17px]"
                styleText="text-[32px] font-bold"
                textLabel="Cyberpunk"
              />{" "}
              <ImageCard
                image={ImgTest2}
                styleCover="w-[219px] h-[173px] bg-cover bg-no-repeat rounded-[50px]
            flex flex-col justify-end pb-[17px] pl-[17px]"
                styleText="text-[32px] font-bold"
                textLabel="AI Art"
              />
            </div>
            <div className="flex flex-col justify-center items-center md:flex-row gap-y-[25px] md:gap-y-[0px] md:items-center md:justify-center md:items-end">
              {" "}
              <ImageCard
                image={ImageTest3}
                styleCover="w-[277px] h-[175px] bg-cover bg-no-repeat rounded-[50px]
            flex flex-col justify-end pb-[17px] pl-[17px]"
                styleText="text-[32px] font-bold"
                textLabel="Realism"
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-y-[25px] md:gap-y-[0px] md:flex-row md:justify-between md:items-end ">
              {" "}
              <ImageCard
                image={ImageTest4}
                styleCover="w-[277px] h-[224px] bg-cover bg-no-repeat rounded-[50px]
          flex flex-col justify-end pb-[17px] pl-[17px]"
                styleText="text-[32px] font-bold"
                textLabel="Realism"
              />{" "}
              <ImageCard
                image={ImageTest5}
                styleCover="w-[219px] h-[173px] bg-cover bg-no-repeat rounded-[50px]
        flex flex-col justify-end pb-[17px] pl-[17px]"
                styleText="text-[32px] font-bold"
                textLabel="Realism"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row bg-torre-bg bg-no-repeat bg-cover">
          <div className="h-[300px] md:h-[1213px]  md:w-1/2  flex flex-col content-center items-center justify-center md:justify-evenly">
            <p className="text-[#F8F7F7] text-[36px] md:text-[64px] font-bold leading-extra-space px-[15px]">
              Sign up and find your favorite art collection
            </p>
          </div>
          <div className=" md:w-1/2 flex flex-col items-center justify-center ">
            <LoginCard />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;

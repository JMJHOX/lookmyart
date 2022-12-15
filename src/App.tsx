import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/footer";
import { Button } from "./components/Button";
import IconLogoWithoutText from "./icons/IconLogoWithoutText";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className=" ">
        <div className="h-[755px] bg-painter-bg bg-no-repeat bg-cover flex flex-col content-center justify-evenly">
          <div className=" w-[450px] h-[269px] p-[25px] flex flex-col border border-[#000000] border-opacity-20 ml-[45px] justify-around">
            <p className="text-[47px] font-bold">Look my art.</p>
            <p className="text-[17px]">
              Millions of artist want to find a way to express their feelings
              through art. And look for a fashion and accisble way to find that
              person that will sustain their art.
            </p>
            <Button
              styleButton="mt-[43px] w-[126px] h-[30px] border-none items-center sm:mt-0 border-[#9E9C9C] bg-[#2EA44F]"
              styleText="text-[12px] px-[13px]"
              onClick={() => {}}
            >
              Find my artist
            </Button>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="h-[902px]  w-1/2 bg-girlpaint-bg bg-no-repeat bg-cover flex flex-col content-center justify-evenly"></div>
          <div className="bg-[#FFE710] w-1/2 flex flex-col items-center justify-center gap-y-[130px]">
            <p className="text-[#3B3B3B] text-[48px] font-bold">
              Search for your artist
            </p>
            <p className="text-[#3B3B3B]">
              You can take a look at our artists collections and see what you
              might want.
            </p>
            <Button
              styleButton="mt-[43px] w-[194px] h-[57px]  rounded-[15px] border-none drop-shadow-3xl items-center sm:mt-0 border-[#9E9C9C] bg-[#ECD24A]"
              styleText="text-[#242424] text-[18px] px-[13px] font-bold"
              onClick={() => {}}
            >
              Explore
            </Button>
          </div>
        </div>
        <div className="flex flex-row bg-[#B6D9FF]">
          <div className="bg-[#B6D9FF] h-[902px]  w-1/2 flex flex-col items-center justify-center gap-y-[130px]">
            <p className="text-[#3B3B3B] text-[48px] font-bold">
              Look it, like it, contact
            </p>
            <p className="text-[#3B3B3B]">
              You can take a look at our artists collections and see what you
              might want.
            </p>
            <Button
              styleButton="mt-[43px] w-[194px] h-[57px]  rounded-[15px] border-none drop-shadow-3xl items-center sm:mt-0 border-[#9E9C9C] bg-[#ACCEF3CC]"
              styleText="text-[#242424] text-[18px] px-[13px] font-bold"
              onClick={() => {}}
            >
              Explore more
            </Button>
          </div>
          <div className=" w-1/2">
            <div className="w-[551px] bg-[#FFFFFF] h-[711px] rounded-[70px] flex flex-col items-center"></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="flex flex-row bg-torre-bg bg-no-repeat bg-cover">
          <div className="h-[1213px]  w-1/2  flex flex-col content-center justify-evenly">
            <p className="text-[#F8F7F7] text-[64px] font-bold leading-extra-space px-[15px]">
              Sign up and find your favorite art collection
            </p>
          </div>
          <div className=" w-1/2 flex flex-col items-center justify-center ">
            <div className="w-[551px] bg-[#FFFFFF] h-[711px] rounded-[70px] flex flex-col items-center">
              <IconLogoWithoutText />
              <p className="text-[#3B3B3B] text-[36px] font-semibold leading-space">
                Welcome to LookMyArt
              </p>
              <p className="text-[#9E9C9C] text-[36px] font-semibold leading-space pt-[25px]">
                Find your best artist
              </p>
              <div className="pt-[75px] flex flex-col  items-center gap-y-12">
                <div className=" flex flex-col items-left ">
                  <p className="text-[#636363] text-[12px]">Email</p>
                  <input
                    type="email"
                    placeholder="Email"
                    className="border border-solid border-[#3B3B3B3D] rounded-[15px]  h-[57px] w-[276px]"
                  />
                </div>
                <div className=" flex flex-col items-left">
                  <p className="text-[#636363] text-[12px]">Password</p>
                  <input
                    type="password"
                    placeholder="Password"
                    className="border border-solid border-[#3B3B3B3D] rounded-[15px]  h-[57px] w-[276px]"
                  />
                </div>
                <Button
                  styleButton="mt-[43px] w-[242px] h-[57px]  rounded-[15px] border-none drop-shadow-3xl items-center sm:mt-0 border-[#9E9C9C] bg-[#6CB2FE]"
                  styleText="text-[20px] px-[13px] text-[#242424]"
                  onClick={() => {}}
                >
                  Sign up
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;

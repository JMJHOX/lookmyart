import { Button } from "../Buttons/ButtonComponent";

const ExploreBar = () => {
  return (
    <div className="h-[150px] hidden md:block">
      <h4 className="text-black text-[32px] p-[15px] pb-[45px]">
        Top Searchs of the week
      </h4>
      <div
        id="topsearchs"
        className=" flex flex-row gap-x-[50px] pl-[150px] grow-0"
      >
        <Button
          styleButton="mt-[43px] sm:mt-0 drop-shadow-3xl w-[80px] h-[34px]  py-[2px] px-[7px] rounded-[25px]  bg-[#FFFFFF] "
          styleText=" flex justify-center text-black"
          onClick={() => {}}
        >
          Realistic
        </Button>
        <Button
          styleButton="mt-[43px] sm:mt-0 drop-shadow-3xl w-[80px] h-[34px]  py-[2px] px-[7px] rounded-[25px]  bg-[#FFFFFF] "
          styleText=" flex justify-center text-black"
          onClick={() => {}}
        >
          Anime
        </Button>
        <Button
          styleButton="mt-[43px] sm:mt-0 drop-shadow-3xl w-[80px] h-[34px]  py-[2px] px-[7px] rounded-[25px]  bg-[#FFFFFF] "
          styleText=" flex justify-center text-black"
          onClick={() => {}}
        >
          Pop
        </Button>
        <Button
          styleButton="mt-[43px] sm:mt-0 drop-shadow-3xl w-[80px] h-[34px]  py-[2px] px-[7px] rounded-[25px]  bg-[#FFFFFF] "
          styleText=" flex justify-center text-black"
          onClick={() => {}}
        >
          AI
        </Button>
        <Button
          styleButton="mt-[43px] sm:mt-0 drop-shadow-3xl w-[80px] h-[34px]  py-[2px] px-[7px] rounded-[25px]  bg-[#FFFFFF] "
          styleText=" flex justify-center text-black"
          onClick={() => {}}
        >
          Furry
        </Button>
        <Button
          styleButton="mt-[43px] sm:mt-0 drop-shadow-3xl  w-[80px] h-[34px]  py-[2px] px-[7px] rounded-[25px]  bg-[#FFFFFF] "
          styleText=" flex justify-center text-black"
          onClick={() => {}}
        >
          Punk
        </Button>
        <Button
          styleButton="mt-[43px] sm:mt-0 drop-shadow-3xl w-[80px] h-[34px]  py-[2px] px-[7px] rounded-[25px]  bg-[#FFFFFF]"
          styleText=" flex justify-center text-black"
          onClick={() => {}}
        >
          Classic
        </Button>
      </div>
    </div>
  );
};
export default ExploreBar;

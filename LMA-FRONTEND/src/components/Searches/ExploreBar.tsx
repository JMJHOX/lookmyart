import { Button } from "../Buttons/ButtonComponent";

const ExploreBar = () => {
  return (
    <div className="h-[150px]   ">
      <h6 className="text-black font-bold px-[25px] md:px-[15px] py-[5px] md:py-[15px] ">
        Top search of the week
      </h6>
      <div
        id="topsearchs"
        className=" no-scrollbar flex flex-row gap-x-[20px] px-[25px] md:p-[15px] h-full md:h-auto     w-screen overflow-auto md:overflow-hidden md:w-full whitespace-no-wrap"
      >
        <Button
          styleButton="button-search"
          styleText="text-search"
          onClick={() => {}}
        >
          realistic
        </Button>
        <Button
          styleButton="button-search"
          styleText="text-search"
          onClick={() => {}}
        >
          anime
        </Button>
        <Button
          styleButton="button-search"
          styleText="text-search"
          onClick={() => {}}
        >
          pop
        </Button>

        <Button
          styleButton="button-search"
          styleText="text-search"
          onClick={() => {}}
        >
          punk
        </Button>
        <Button
          styleButton="button-search"
          styleText="text-search"
          onClick={() => {}}
        >
          classic
        </Button>
      </div>
    </div>
  );
};
export default ExploreBar;

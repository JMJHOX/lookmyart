import { useDispatch } from "react-redux";
import { ChangeSearch } from "../../services/apollo/store/userAuth";
import { Button } from "../Buttons/ButtonComponent";

const ExploreButtonOptionsBar = () => {
  const dispatch = useDispatch();
  return (
    <div className="h-[150px]   ">
      <h6 className="text-black font-bold px-[25px] md:px-[15px] py-[17px] md:py-[25px] ">
        Top search of the week
      </h6>
      <div
        id="topsearchs"
        className=" no-scrollbar flex flex-row gap-x-[20px] px-[25px] md:p-[15px] h-full md:h-auto     w-screen overflow-auto md:overflow-hidden md:w-full whitespace-no-wrap"
      >
        <Button
          styleButton="button-search"
          styleText="text-search"
          onClick={() => {
            dispatch(ChangeSearch("realistic"));
          }}
        >
          realistic
        </Button>
        <Button
          styleButton="button-search"
          styleText="text-search"
          onClick={() => {
            dispatch(ChangeSearch("anime"));
          }}
        >
          anime
        </Button>
        <Button
          styleButton="button-search"
          styleText="text-search"
          onClick={() => {
            dispatch(ChangeSearch("pop"));
          }}
        >
          pop
        </Button>

        <Button
          styleButton="button-search"
          styleText="text-search"
          onClick={() => {
            dispatch(ChangeSearch("punk"));
          }}
        >
          punk
        </Button>
        <Button
          styleButton="button-search"
          styleText="text-search"
          onClick={() => {
            dispatch(ChangeSearch("classic"));
          }}
        >
          classic
        </Button>
      </div>
    </div>
  );
};
export default ExploreButtonOptionsBar;

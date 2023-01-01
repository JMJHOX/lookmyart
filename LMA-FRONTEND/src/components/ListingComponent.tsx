import { useNavigate } from "react-router-dom";
import { ExplorerCardSmall } from "./cardsExplorer";
import ExploreBar from "./ExploreBar";
import InputBar from "./InputBar";

function ListingPageComponent({
  onScroll,
  listInnerRef,
  userList,
  isLoading,
}: any) {
  let navigate = useNavigate();
  console.log(isLoading)
  return (
    <div
      onScroll={onScroll}
      ref={listInnerRef}
      style={{ height: "100vh", overflowY: "auto" }}
      className="no-scrollbar"
    >
      <InputBar />
      <ExploreBar />
      <div className="  flex flex-col items-center md:grid md:grid-cols-4 gap-y-4">
        { userList.map((item: any, index: any) => {
          return (
            <div
              onClick={() => {
                navigate("/explore/arts/:id");
              }}
              key={index}
            >
              <ExplorerCardSmall />
            </div>
          );
        })}
        {isLoading && "Fetching more list items..."}
      </div>
    </div>
  );
}

export default ListingPageComponent;

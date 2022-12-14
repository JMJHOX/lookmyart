import { useNavigate } from "react-router-dom";

import ExploreBar from "../Searches/ExploreBar";
import { ExplorerCardSmall } from "../Explorers/CardsExplorerComponent";

function ListingPageComponent({
  onScroll,
  listInnerRef,
  userList,
  isLoading,
}: any) {
  let navigate = useNavigate();
  return (
    <div
      onScroll={onScroll}
      ref={listInnerRef}
      style={{ height: "100vh", overflowY: "auto" }}
      className="no-scrollbar"
    >
      <ExploreBar />
      <div className="  flex flex-col items-center md:grid_container  gap-y-4 ">
        {userList.map((item: any, index: any) => {
          //console.log(item.attributes);
          console.log(item.attributes.image_art.data.attributes.url);

          let StyleCard = "rounded-[10px] md:grid__item";

          console.log(index);
          if (index == 0) {
            StyleCard = "rounded-[10px]  md:grid__item  large1 w-full h-full";
          }
          if (index == 6) {
            StyleCard = "rounded-[10px]  md:grid__item  large2 w-full h-full";
          }

          return (
            <ExplorerCardSmall
              onClick={() => {
                navigate(`/explore/arts/${item.id}`);
              }}
              key={index}
              Style={StyleCard}
              image={`http://localhost:1338${item.attributes.image_art.data.attributes.url}`}
            />
          );
        })}
        {isLoading && "Fetching more list items..."}
      </div>
    </div>
  );
}

export default ListingPageComponent;

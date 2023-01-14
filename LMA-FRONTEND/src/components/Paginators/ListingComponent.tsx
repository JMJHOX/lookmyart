import { useNavigate } from "react-router-dom";

import { ExplorerCardSmall } from "../Explorers/CardsExplorerComponent";
import ExploreButtonOptionsBar from "../Searches/ExploreButtonOptionsBar";

function ListingPageComponent({
  onScroll,
  listInnerRef,
  userList,
  isLoading,
  isFailed,
}: any) {
  let navigate = useNavigate();
  return (
    <div
      onScroll={onScroll}
      ref={listInnerRef}
      style={{ height: "100vh", overflowY: "auto" }}
      className="no-scrollbar"
    >
      <ExploreButtonOptionsBar />
      <div className="  flex flex-col items-center md:grid_container  gap-y-4 ">
        {userList.map((item: any, index: any) => {
          //console.log(item.attributes);
          console.log(item.attributes.image_art.data.attributes.url);

          let StyleCard = "rounded-[10px] md:grid__item";

          console.log(index);
          if (index == 0) {
            StyleCard = "rounded-[10px]  md:grid__item  large1 w-full h-full ";
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
        {isLoading && <p className="text-black">Fetching more Photos...</p>}
        {isFailed && (
          <p className="text-black">
            Failed to contact with the server. Please contact with the
            administrator
          </p>
        )}
      </div>
    </div>
  );
}

export default ListingPageComponent;

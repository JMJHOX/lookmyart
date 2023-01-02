import { useNavigate } from "react-router-dom";

import ExploreBar from "../Searches/ExploreBar";
import InputBar from "../InputBarComponent";
import { ExplorerCardSmall } from "../Explorers/CardsExplorerComponent";

function ListingPageComponent({
  onScroll,
  listInnerRef,
  userList,
  isLoading,
}: any) {
  let navigate = useNavigate();
  console.log(isLoading);
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
        {userList.map((item: any, index: any) => {
          //console.log(item.attributes);
          console.log(item.attributes.image_art.data.attributes.url);
          return (
            <div
              onClick={() => {
                navigate(`/explore/arts/${item.id}`);
              }}
              key={index}
            >
              <ExplorerCardSmall
                image={`http://localhost:1338${item.attributes.image_art.data.attributes.url}`}
              />
            </div>
          );
        })}
        {isLoading && "Fetching more list items..."}
      </div>
    </div>
  );
}

export default ListingPageComponent;

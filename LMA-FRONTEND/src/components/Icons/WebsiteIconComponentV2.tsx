import WebsiteIcon from "./../../assets/icons/Website.svg";
const WebsiteIconComponentV2 = ( prosp:any) => {
  return (
    <div className="icon-show-style pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3">
      <img src={WebsiteIcon} alt="" className="w-[30px] h-[30px] " />
      {prosp.url}
    </div>
  );
};
export default WebsiteIconComponentV2;

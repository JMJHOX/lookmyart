import WebsiteIcon from "./../../assets/icons/Website.svg";
const WebsiteIconComponentV2 = ( prosp:any) => {
  return (
    <div className="icon-show-style">
      <img src={WebsiteIcon} alt="" className="w-[30px] h-[30px] " />
      {prosp.url}
    </div>
  );
};
export default WebsiteIconComponentV2;

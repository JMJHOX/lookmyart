import WebsiteIcon from "./../../assets/icons/Website.svg";
const WebsiteIconComponent = ( prosp:any) => {
  return (
    <div className="icon-show-style">
      <img src={WebsiteIcon} alt="" className="w-[30px] h-[30px] " />
      {prosp.url}
    </div>
  );
};
export default WebsiteIconComponent;

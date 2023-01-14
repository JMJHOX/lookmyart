import WebsiteIcon from "./../../assets/icons/Website.svg";
const WebsiteIconComponent = () => {
  return (
    <div className="icon-show-style">
      <img src={WebsiteIcon} alt="" className="w-[30px] h-[30px] " />
      <p>website.com</p>
    </div>
  );
};
export default WebsiteIconComponent;

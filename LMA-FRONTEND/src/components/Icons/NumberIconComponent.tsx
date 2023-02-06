import WhatsAppIcon from "./../../assets/icons/whats-icon.svg";
const NumberIconComponent = (props:{
  number:string
}) => {
  return (
    <div className="icon-show-style">
      <img src={WhatsAppIcon} alt="" className="w-[30px] h-[30px] " />
      <p>{props.number}</p>
    </div>
  );
};
export default NumberIconComponent;

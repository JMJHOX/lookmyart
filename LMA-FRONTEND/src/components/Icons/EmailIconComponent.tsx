import EmailIcon from "./../../assets/icons/email-icon.svg";
const EmailIconComponent = (props: {
  email: string
}) => {
  return (
    <div className="icon-show-style">
      <img src={EmailIcon} alt="" className="w-[30px] h-[30px] " />
      <p>{props.email}</p>
    </div>
  );
};
export default EmailIconComponent;

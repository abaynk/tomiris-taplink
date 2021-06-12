import "./Button.css";
const Button = ({ name, link, img, clas }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <button className={clas}>
        <img src={img} alt="telegram" style={{ width: "30px" }} />
      </button>
    </a>
  );
};

export default Button;

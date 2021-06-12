import { useState } from "react";
import "./Card.css";

const Card = ({ heading, subheading, extra, alwaysOpen, link, document }) => {
  const [open, setOpen] = useState(false);

  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className="Card" onClick={() => setOpen(!open)}>
        <h3>{heading}</h3>
        {extra ? !open && <p>{subheading}</p> : <p>{subheading}</p>}
        {!alwaysOpen && extra
          ? open && (
              <>
                <h4 className="extra">{extra}</h4>
                {document && (
                  <a href={document} target="_balnk">
                    скачать PDF
                  </a>
                )}
              </>
            )
          : null}{" "}
        {alwaysOpen && <h4 className="extra">{extra}</h4>}{" "}
      </div>
    </a>
  );
};

export default Card;

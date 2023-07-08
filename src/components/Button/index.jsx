import { ButtonGroup } from "@mui/material";
import PropTypes from "prop-types";

export default function Button(props) {
  const defaultProps = {
    background: "black",
    text: "Кнопка",
  };

  return (
    <>
      <ButtonGroup
        className="round-button"
        style={{
          background: props.background || defaultProps.background,
          color: props.color,
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          e.target.style.background =
            "linear-gradient(to bottom, #000000, #ff0000)";
          e.target.style.color = "#ffffff";
        }}
        onMouseLeave={(e) => {
          e.target.style.background = props.background;
          e.target.style.color = props.color;
        }}
        onClick={props.setModal}>
        {props.text ? props.text : defaultProps.text}
      </ButtonGroup>
    </>
  );
}

Button.propTypes = {
  backgroundColor: PropTypes.string,
  click: PropTypes.func,
  color: PropTypes.string,
  text: PropTypes.string,
};

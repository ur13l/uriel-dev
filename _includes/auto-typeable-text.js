import React from "react";
import Typist from "react-typist";
import PropTypes from "prop-types";

const AutoTypeableText = ({ phrases = [] }) => (
  <Typist className="text-center text-white font-console">
    {phrases.map((phrase, key) => (
      <span key={key}>
        {phrase.text}
        <Typist.Backspace count={phrase.backspace} delay={1000} />
      </span>
    ))}
  </Typist>
);

AutoTypeableText.propTypes = {
  phrases: PropTypes.array,
};

AutoTypeableText.defaultProps = {
  phrases: [],
};

export default AutoTypeableText;

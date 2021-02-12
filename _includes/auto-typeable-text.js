import React from "react";
import Typist from "react-typist";

const AutoTypeableText = ({ phrases }) => (
  <Typist className="text-center text-white font-console">
    {phrases.map((phrase, key) => (
      <span key={key}>
        {phrase.text}
        <Typist.Backspace count={phrase.backspace} delay={1000} />
      </span>
    ))}
  </Typist>
);

export default AutoTypeableText;

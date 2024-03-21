"use client";

import { getSeeAlso, getSubtitle, getSearching } from "../../lib/texts";
import { useState, useEffect } from "react";

function RandomText({ getText, className }) {
  const [text, setText] = useState('');

  useEffect(() => {
    setText(getText());
  }, []);

  return <p className={className}>{text}</p>;
}

export function RandomLoading() {
  return <RandomText getText={getSearching} />
}

export function RandomSeeAlso() {
  return (
    <RandomText
      className="font-extralight uppercase text-gray-900 text-3xl"
      getText={getSeeAlso}
    />
  );
}

export function RandomSubtitle() {
  return (
    <RandomText
      className="text-gray-950 text-center sm:text-lg md:text-2xl lg:text-4xl font-serif font-semibold"
      getText={getSubtitle}
    />
  );
}

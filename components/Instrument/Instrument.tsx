import { FC } from "react";

import { InstrumentProps } from "./types";

import css from "./Instrument.module.css";

const Instrument: FC<InstrumentProps> = ({ icon, text }) => (
  <div className={css.instrument}>
    {icon}
    {text}
  </div>
);

export default Instrument;

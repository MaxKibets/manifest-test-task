import { FC } from "react";

import Instrument from "@/components/Instrument";

import { INSTRUMENTS } from "./constants";
import InstrumentListContainer from "./InstrumentListContainer";
import css from "./InstrumentList.module.css";

const InstrumentsList: FC = () => {
  return (
    <div className={css.instruments}>
      <InstrumentListContainer>
        {INSTRUMENTS.map(({ icon, text }) => (
          <Instrument key={text} text={text} icon={icon} />
        ))}
      </InstrumentListContainer>
    </div>
  );
};

export default InstrumentsList;

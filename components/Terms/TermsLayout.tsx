import { FC } from "react";

import { TEXT } from "@/constants";

import css from "./Terms.module.css";

const TermsLayout: FC<{ price: string }> = ({ price }) => (
  <div className={css.terms}>
    <p>
      {TEXT.TERMS.AUTO_RENEW} {price} {TEXT.TERMS.PER_MONTH}
      <br />
      {TEXT.TERMS.MAY_CANCEL}&nbsp;
      <a href={`mailto:${TEXT.TERMS.EMAIL}`} className={css.link}>
        {TEXT.TERMS.EMAIL}
      </a>
      . {TEXT.TERMS.OUR_GOAL}
    </p>
  </div>
);

export default TermsLayout;

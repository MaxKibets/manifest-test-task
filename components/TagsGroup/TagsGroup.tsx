import { FC } from "react";

import Tag from "@/components/Tag";
import { ITag } from "@/types";
import { SIZE, TYPE } from "@/constants";

import css from "./TagsGroup.module.css";

const TagsGroup: FC<{ tags: ITag[] }> = ({ tags }) => (
  <div className={css.tags}>
    {tags.map((tag, index) => {
      const isFirst = index === 0;

      return (
        <Tag
          key={tag}
          type={isFirst ? TYPE.DEFAULT : TYPE.WARNING}
          size={isFirst ? SIZE.SMALL : SIZE.LARGE}
        >
          {tag}
        </Tag>
      );
    })}
  </div>
);

export default TagsGroup;

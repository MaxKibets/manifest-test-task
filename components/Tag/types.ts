import { Size, Type, WithChildren } from "@/types";

export type TagProps = WithChildren<{
  type?: Type;
  size?: Size;
}>;

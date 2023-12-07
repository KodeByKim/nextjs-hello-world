export type TVProps = {
  index: number;
  value?: number | null;
  setValue: (_value: number | null, _index: number) => void;
};

import { MoxieLawsText } from "./MoxieLawText";

export const MoxieLawsBackground = () => {
  return (
    <>
      {Array.from({ length: 12 }).map((_, i) => (
        <MoxieLawsText key={i} />
      ))}
    </>
  );
};

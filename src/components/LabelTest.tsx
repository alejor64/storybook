import "./LabelTest.css";

interface Props {
  /**
   * Text to display
   */
  label: string;
  /**
   * Label size
   */
  size?: "normal" | "h1" | "h2" | "h3";
  /**
   * Capitalize all letters
   */
  allCaps?: boolean;
  /**
   * Label color
   */
  color?: "text-primary" | "text-secondary" | "text-tertiary";
  /**
   * Font color
   */
  fontColor?: string;
}

export const LabelTest = ({
  label,
  size = "normal",
  allCaps = false,
  color,
  fontColor,
}: Props) => {
  const text = allCaps ? label.toUpperCase() : label;
  return (
    <span className={`${size} ${color}`} style={{ color: fontColor }}>
      {text}
    </span>
  );
};

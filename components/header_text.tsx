import { backgroundImageStyle } from "../lib/common";
import utilStyles from "../styles/utils.module.css";

interface HeaderTextProps {
  children: React.ReactNode;
  backgroundImage: string;
  opacity: number | undefined;
  styles: any;
}

export default function HeaderText({
  children,
  backgroundImage,
  opacity,
  styles,
}: HeaderTextProps) {
  const s = {
    ...styles,
    marginTop: "2px",
    ...backgroundImageStyle(backgroundImage, opacity),
  };
  return (
    <div className={utilStyles.coverContainer} style={s}>
      {children}
    </div>
  );
}

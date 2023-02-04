import utilStyles from "../styles/utils.module.css";
import { Blurb } from "./pages/about";
import Image from "../node_modules/next/image";

export default function MiniAbout() {
  return (
    <>
      <div className={utilStyles.flexWrapContainer}>
        <p
          className={utilStyles.justifyCenter}
          style={{
            fontSize: "36px",
          }}
        >
          About Us
        </p>
        <div className={utilStyles.flexGapContainer}>
          <div>
            <Image
              style={{
                borderRadius: "50%",
              }}
              alt="Heart Rock at Joshua Tree"
              width={350}
              height={350}
              src="/us-square.jpg"
            />
          </div>
          <div className={utilStyles.textBlock}>{Blurb}</div>
        </div>
      </div>
    </>
  );
}

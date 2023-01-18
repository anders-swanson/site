import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import { PostHeader } from "./layout";

const readMoreSlug = "read-more";

export function ReadMoreHeader({ metadata, enabled }) {
  return <>{enabled && <PostHeader txt={metadata.title} />}</>;
}

export default function ReadMoreLink({
  children,
  readMoreText,
  text,
  uri,
  enabled,
}) {
  readMoreText = readMoreText ? readMoreText : "READ MORE on";
  return (
    <>
      {enabled && (
        <div className={utilStyles.justifyCenter} style={{ fontSize: "28px" }}>
          <Link
            href={`${uri}#${readMoreSlug}`}
          >{`${readMoreText} ${text}`}</Link>
        </div>
      )}
      {!enabled && (
        <>
          <div id={readMoreSlug} />
          {children}
        </>
      )}
    </>
  );
}

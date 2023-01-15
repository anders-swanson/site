import Link from "next/link";
import utilStyles from "../styles/utils.module.css";

const readMoreSlug = "read-more";

export default function ReadMoreLink({
  children,
  readMoreText,
  text,
  uri,
  enabled,
}) {
  readMoreText = readMoreText ? readMoreText : "Read more about";
  return (
    <>
      {enabled && (
        <div className={utilStyles.justifyCenter}>
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

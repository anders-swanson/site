import Link from "next/link";

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
      {enabled && <Link href={uri}>{`${readMoreText} ${text}`}</Link>}
      {!enabled && { children }}
    </>
  );
}

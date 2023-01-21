import Link from "next/link";
import { LookupByDate, LookupByID } from "../lib/lookup";

const maxWidth = "140px";

export default function PrevNextPost({ date }) {
  const [next, prev] = lookupNextPrev(date);
  const buildLink = (id) => {
    return `/blog${id}`;
  };
  return (
    <>
      <div
        style={{
          paddingBottom: "125px",
          paddingTop: "25px",
        }}
      >
        {prev && (
          <div
            style={{
              float: "left",
              maxWidth: maxWidth,
            }}
          >
            <Link href={buildLink(prev.id)}>{`← ${prev.title}`}</Link>
          </div>
        )}
        {next && (
          <div
            style={{
              float: "right",
              maxWidth: maxWidth,
            }}
          >
            <Link href={buildLink(next.id)}>{`${next.title} →`}</Link>
          </div>
        )}
      </div>
    </>
  );
}

function lookupNextPrev(date) {
  const [id] = LookupByDate(date);
  let next = false;
  let prev = false;

  if (id > -1) {
    prev = LookupByID(id + 1);
  }
  if (id > 0) {
    next = LookupByID(id - 1);
  }
  return [next, prev];
}

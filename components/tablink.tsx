import Link from "next/link";

export default function TabLink({ href, text }) {
  return (
    <Link href={href} target="_blank">
      {text}
    </Link>
  );
}

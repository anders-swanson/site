import Link from "next/link";

export default function TabLink({ href, text }) {
  return (
    <Link href={href}>
      <a target="_blank">{text}</a>
    </Link>
  );
}

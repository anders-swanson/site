import Link from "next/link";

// Deprecated, use LinkT instead
export default function TabLink({ href, text }) {
  return (
    <Link href={href} target="_blank">
      {text}
    </Link>
  );
}

interface LinkTProps {
  children: React.ReactNode;
  href: string;
}

export function LinkT({ href, children }: LinkTProps) {
  return (
    <Link target="_blank" href={href}>
      {children}
    </Link>
  );
}

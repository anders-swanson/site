import Link from "next/link";

export default function Contact() {
  return (
    <div>
      {`Still have questions? `}
      <Link href="/contact">Send me a message</Link>
      {` over email to connect. Happy Trails!`}
    </div>
  );
}

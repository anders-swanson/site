import Link from "next/link";

export default function Contact() {
    return (
        <div>
            {`Still have questions? `}<Link href='/contact'>Send me a message</Link>{` and I'll be happy to help you out!`}
        </div>
    )
}

import Image from "next/image";
import Link from "next/link";

export default function FeaturedProjectCard() {
  return (
    <article>
      {true && <Image src="" alt="" fill sizes="100%" />}
      <h3>{}</h3>
      <p>{}</p>
      <Link href="">{}</Link>
    </article>
  );
}

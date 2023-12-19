import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/assets/images/logo.svg"
        alt="Evently Logo"
        width={128}
        height={38}
      />
    </Link>
  );
};

export default Logo;

import Image from "next/image";

export default function Page() {
  return (
    <section className="flex flex-wrap gap-5 max-lg:items-center justify-center">
      <Image
        src="https://res.cloudinary.com/di6vnxokz/image/upload/q_auto/portafolio-2024/fotografia%20de%20comieda/cdytmpdhwrttsm1d7xdr.jpg"
        alt="Chocolate cake"
        width={500}
        height={300}
      />
      <Image
        src="https://res.cloudinary.com/di6vnxokz/image/upload/portafolio-2024/fotografia%20de%20comieda/lykwe7eyxuufasivi23q.jpg"
        alt="Burger, fries and craft beer"
        width={500}
        height={300}
      />
      <Image
        src="https://res.cloudinary.com/di6vnxokz/image/upload/portafolio-2024/fotografia%20de%20comieda/zx8x7qc5egbmoq5r4wyv.jpg"
        alt="Smoked Short ribs"
        width={500}
        height={300}
      />
      <Image
        src="https://res.cloudinary.com/di6vnxokz/image/upload/v1717778460/portafolio-2024/fotografia%20de%20comieda/syjtkkniji9liyeftyws.jpg"
        alt="Saque Mate"
        width={500}
        height={300}
      />
    </section>
  );
}

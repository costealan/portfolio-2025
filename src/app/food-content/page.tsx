import Image from "next/image";

export default function Page() {
  return (
    <section>
      <div className="flex justify-center">
        <h1>Cooking and photography porftolio</h1>
      </div>
      <Image
        src="https://res.cloudinary.com/di6vnxokz/image/upload/v1717617435/portafolio-2024/fotografia%20de%20comieda/cdytmpdhwrttsm1d7xdr.jpg"
        alt="Chocolate cake"
        width={500}
        height={300}
      />
    </section>
  );
}

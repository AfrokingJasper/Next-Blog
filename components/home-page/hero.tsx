import Image from "next/image";

function Hero() {
  return (
    <section className="flex flex-col p-5 justify-center items-center gap-2 text-white bg-gray-800">
      <div className="  rounded-full ">
        <Image
          className="rounded-full object-cover h-72 w-72"
          src="/images/site/fortune-profile-photo-1.jpg"
          alt="An image showing fortune"
          height={300}
          width={300}
        />
      </div>
      {/* </div> */}

      <h1 className="font-bold text-3xl">Hi, I'm Fortune</h1>
      <p className="w-[40%] text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eos
        explicabo consequatur unde dolores voluptas expedita officia quibusdam
        exercitationem quos maiores.
      </p>
    </section>
  );
}

export default Hero;

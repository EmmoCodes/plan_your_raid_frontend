export default function HomePage() {
  return (
    <main>
      <section className="bg-[url(../img/hero.jpg)] h-screen bg-no-repeat bg-cover relative">
        <a
          href="/login"
          className=" px-5 py-2 bg-darkgreen hover:bg-highlight rounded-xl mt-5 absolute right-6 top-5 text-white">
          Lets Raid
        </a>
        <div className=" uppercase text-4xl text-white font-bold leading-loose absolute left-7 bottom-8">
          <h1 className=" w-52 text-center">
            Plan your <span className=" text-8xl text-highlight">Raid</span>
          </h1>
        </div>
      </section>
      <section className="bg-darkgreen h-screen flex gap-10">
        <img
          className="w-80 object-cover rounded-[45%] p-10"
          src="./img/kriegerin.jpg"
          alt="Ein echt starke Kriegerin mit einem schönen Bogen"
        />
        <div className="mt-20 ml-40  w-[35rem] text-white leading-loose">
          <h3 className="leading-loose uppercase text-4xl font-bold text-white  w-72">
            Choose your <span className=" text-8xl text-highlight">Group</span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nobis pariatur hic, vel illo beatae aut
            dolorum est recusandae sit sed tenetur. Eligendi, adipisci iusto reiciendis, aut eaque autem, dolorem quos
            dolore est corporis iste sint dolores rem magnam aliquam dignissimos doloribus amet minus. Accusantium ipsam
            eveniet rem fuga consectetur?
          </p>
        </div>
      </section>
    </main>
  )
}

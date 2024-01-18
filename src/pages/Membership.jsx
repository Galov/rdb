function Membership() {
  return (
    <>
      <div className="bg-[url('../src/assets/public/membership_xlarge.jpg')] bg-cover bg-top mt-8 rounded-lg">
        <h2 className="pb-12 pl-24 text-4xl font-black text-white uppercase pt-96">
          Стани член
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-8">
        <div className="p-4 bg-gray-100 rounded-lg">
          <h3 className="font-bold uppercase">Придобивки</h3>
          <p className="mt-2 font-extralight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            totam facilis praesentium commodi libero? Ullam, quam voluptates
            vitae blanditiis eveniet amet corporis atque ad alias consectetur
            explicabo in itaque? Reprehenderit?
          </p>
        </div>
        <div className="p-4 bg-gray-200 rounded-lg">
          <h3 className="font-bold uppercase">Как да се регистрирам</h3>
          <p className="mt-2 font-extralight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            totam facilis praesentium commodi libero? Ullam, quam voluptates
            vitae blanditiis eveniet amet corporis atque ad alias consectetur
            explicabo in itaque? Reprehenderit?
          </p>
        </div>
      </div>
      <div className="p-4 mt-4 bg-gray-200 rounded-lg">
        <h3 className="font-bold uppercase">Информация за билети</h3>
        <p className="mt-2 font-extralight">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime totam
          facilis praesentium commodi libero? Ullam, quam voluptates vitae
          blanditiis eveniet amet corporis atque ad alias consectetur explicabo
          in itaque? Reprehenderit?
        </p>
      </div>
    </>
  );
}

export default Membership;

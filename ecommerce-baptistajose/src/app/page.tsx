export default function Hero() {
  return (
    <section className="flex items-center min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-black">
      <div className="container flex flex-col items-center gap-16 px-6 py-20 mx-auto lg:flex-row">

        <div className="flex justify-center flex-1 lg:justify-start">
          <div
            className="
              relative 
              bg-gradient-to-br from-gray-700 to-gray-500
              p-12
              max-w-xl
              text-white
              shadow-2xl
              rounded-tl-[80px] 
              rounded-br-[80px] 
              rounded-tr-[30px] 
              rounded-bl-[30px]
              border border-white/10
            "
          >
            <h1 className="text-4xl font-bold leading-tight lg:text-6xl">
              Boost your digital world.
            </h1>

            <p className="mt-6 text-lg text-blue-100">
              Discover smartphones, laptops and accessories with the best performance and price.
            </p>

            <button
              className="px-8 py-4 mt-8 text-lg font-semibold text-black transition-all duration-300 bg-gray-500 shadow-lg rounded-2xl hover:scale-105 hover:bg-gray-400"
            >
              Shop Now
            </button>
          </div>
        </div>

        <div className="flex-1">
          <img
            src="/laptop.png"
            alt="Preview"
            className="w-full transition-all duration-500 shadow-2xl rounded-3xl hover:scale-105"
          />
        </div>

      </div>
    </section>
  );
}
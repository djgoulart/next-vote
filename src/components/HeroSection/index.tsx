export default function HeroSection() {
  return (
    <div className="lg:2/6 mt-20 text-left lg:ml-16 lg:mt-40 xl:w-2/4">
      <div className="text-6xl font-semibold leading-none">
        We made the best planning poker
      </div>
      <div className="text-true-gray-500 mt-6 text-xl font-light antialiased">
        You are about to experiencing an awesome planning session.
      </div>
      <button className="mt-6 rounded-full bg-gradient-to-b from-blue-600 to-blue-700 px-8 py-4 font-normal tracking-wide text-white outline-none transition duration-200 ease-in-out hover:from-blue-700 hover:shadow-lg focus:outline-none">
        Create your free voting room
      </button>
    </div>
  )
}

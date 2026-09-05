import { Link } from 'react-router-dom'
import MouseFollowingEyes from '../components/MouseFollowingEyes'
import Footer from '../components/Footer'

function About() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-5">

      {/* Hero */}
      <section className="pb-12 md:min-h-[70vh] md:pb-16 flex flex-col items-center justify-center text-center">

        <MouseFollowingEyes />

        <h1 className="mt-6 max-w-4xl text-4xl sm:text-5xl font-bold tracking-tight text-white md:text-7xl">
          A place for
          <span className="text-gray-500"> ideas worth sharing.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-gray-400 md:text-lg">
          Inkora is a modern space for discovering thoughtful articles,
          exploring new ideas, and connecting with the world of technology.
        </p>

      </section>


      {/* What is Inkora */}
      <section className="border-t border-gray-800 py-12 md:py-24">

        <div className="grid gap-6 md:gap-12 md:grid-cols-2 md:items-center">

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-gray-600">
              What is Inkora?
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
              Built for curious minds.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-gray-400">
              Inkora is a place where technology, creativity, and curiosity
              meet. Instead of endlessly scrolling through content, Inkora
              helps you discover articles that are worth your time.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-500">
              From React and Python to backend engineering and everything
              in between, there is always something new to learn.
            </p>
          </div>

        </div>
      </section>


      {/* Features */}
      <section className="py-10">

        <div className="grid gap-5 md:grid-cols-3">

          <div className="rounded-[28px] border border-gray-800 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-gray-600">
            <span className="text-sm text-gray-600">
              01
            </span>

            <h3 className="mt-8 text-xl font-semibold text-white">
              Discover
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Explore articles from developers and creators across the
              technology community.
            </p>
          </div>


          <div className="rounded-[28px] border border-gray-800 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-gray-600">
            <span className="text-sm text-gray-600">
              02
            </span>

            <h3 className="mt-8 text-xl font-semibold text-white">
              Learn
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Find practical ideas, experiences, and knowledge that can
              help you grow as a developer.
            </p>
          </div>


          <div className="rounded-[28px] border border-gray-800 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-gray-600">
            <span className="text-sm text-gray-600">
              03
            </span>

            <h3 className="mt-8 text-xl font-semibold text-white">
              Connect
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Follow interesting writers, discover different perspectives,
              and become part of a larger community.
            </p>
          </div>

        </div>

      </section>


      {/* Mission */}
      <section className="py-12 md:py-32">

        <div className="rounded-[32px] border border-gray-800 bg-gray-950 p-5 sm:p-8 md:p-14">

          <p className="text-sm uppercase tracking-[0.2em] text-gray-600">
            Our idea
          </p>

          <h2 className="mt-5 max-w-4xl text-3xl font-bold leading-tight text-white md:text-5xl">
            Good ideas deserve
            <span className="text-gray-500"> good places to live.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-500">
            Inkora was created around a simple idea: make discovering
            meaningful technical content feel simple, beautiful, and
            enjoyable.
          </p>

        </div>

      </section>


      {/* CTA */}
      <section className="pb-12 md:pb-28 text-center">

        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Ready to explore?
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-gray-500">
          Dive into the latest articles and find something worth reading.
        </p>

        <Link
          to="/"
          className="mt-7 inline-flex rounded-full border border-gray-700 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-gray-900"
        >
          Explore Articles →
        </Link>

      </section>

      <Footer />
    </main>

  )
}

export default About

import { FaGithub, FaLinkedin } from "react-icons/fa";
import Footer from "../components/Footer";

function Contact() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-5">

      {/* Hero */}
      <section className="py-12 md:min-h-[75vh] md:py-16 flex flex-col items-center justify-center text-center">
        <h1 className="mt-8 max-w-4xl text-4xl sm:text-5xl font-bold leading-[0.95] tracking-tight text-white md:text-7xl">
          So...
          <br />
          you actually
          <br />
          <span className="text-gray-500">want to talk?</span>
        </h1>

        <p className="mt-8 max-w-xl text-base leading-7 text-gray-500 md:text-lg">
          Bold of you to assume I have something interesting to say.
          <br />
          But sure, let's find out.
        </p>

        {/* Social Links */}
        <div className="mt-8 flex flex-wrap justify-center gap-3 sm:mt-10 sm:gap-4">

          <a
            href="https://github.com/tamanghawana09"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-gray-800 px-6 py-3 text-sm text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-gray-900"
          >
            GitHub
            <FaGithub className="text-lg" />
          </a>

          <a
            href="https://www.linkedin.com/in/hawana0911/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-gray-800 px-6 py-3 text-sm text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-gray-900"
          >
            LinkedIn
            <FaLinkedin className="text-lg" />
          </a>

        </div>

      </section>


      {/* Savage Section */}
      <section className="border-t border-gray-800 py-12 md:py-24 text-center">

        <p className="text-xs uppercase tracking-[0.2em] text-gray-700">
          Important information
        </p>

        <h2 className="mt-6 text-3xl font-bold text-white md:text-5xl">
          Don't send me
          <span className="text-gray-500"> "Hi"</span>
          <br />
          and disappear.
        </h2>

        <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-gray-600">
          If you're going to start a conversation, at least bring a thought,
          an idea, a bug, a project, or something mildly interesting.
        </p>

      </section>


      {/* Final Message */}
      <section className="pb-12 md:pb-32 text-center">

        <div className="mx-auto max-w-3xl rounded-[32px] border border-gray-800 bg-gray-950 p-5 sm:p-10 md:p-16">

          <p className="text-sm text-gray-600">
            Anyway...
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
            You know where to find me.
          </h2>

          <p className="mt-5 text-sm text-gray-600">
            The internet isn't exactly short on ways to reach people.
          </p>

        </div>

      </section>
    <Footer />
    </main>
  );
}

export default Contact;

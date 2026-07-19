export default function HeroButtons() {
  return (
    <div className="mt-10 md:mt-14 flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 px-6">

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="
          glass
          w-full
          sm:w-auto
          text-center
          rounded-full
          px-8
          py-3.5
          font-medium
          transition-all
          duration-300
          hover:-translate-y-1
          hover:bg-white/10
        "
      >
        Resume
      </a>

      <a
        href="https://github.com/abhishek77anil-jpg"
        target="_blank"
        rel="noopener noreferrer"
        className="
          glass
          w-full
          sm:w-auto
          text-center
          rounded-full
          px-8
          py-3.5
          transition-all
          duration-300
          hover:-translate-y-1
          hover:bg-white/10
        "
      >
        GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/abhishek-anil-79166628a/"
        target="_blank"
        rel="noopener noreferrer"
        className="
          glass
          w-full
          sm:w-auto
          text-center
          rounded-full
          px-8
          py-3.5
          transition-all
          duration-300
          hover:-translate-y-1
          hover:bg-white/10
        "
      >
        LinkedIn
      </a>

    </div>
  );
}
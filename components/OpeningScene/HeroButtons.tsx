import Link from "next/link";

export default function HeroButtons() {
  return (
    <div className="mt-14 flex flex-wrap justify-center gap-6">

  <a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="
    glass
    rounded-full
    px-8
    py-3
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
    className="glass rounded-full px-9 py-3.5 transition hover:bg-white/10"
  >
    GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/abhishek-anil-79166628a/"
    target="_blank"
    rel="noopener noreferrer"
    className="glass rounded-full px-9 py-3.5 transition hover:bg-white/10"
  >
    LinkedIn
  </a>

</div>
  );
}
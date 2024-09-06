export default function IntroButton({ name, href }) {
  return (
    <div className="flex justify-center items-center relative pl-1 pb-5">
      <a
        href={href || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-block px-3 py-1 text-black-300 font-mono border-2 border-gray-500 rounded-none transition-all duration-[0.5s] ease-[cubic-bezier(0.55,0,0.1,1)] cursor-pointer no-underline hover:shadow-[8px_8px_0px_#5e5e5e,-8px_-8px_0px_#5e5e5e]"
      >
        {name}
      </a>
    </div>
  );
}

export default function About() {
  return (
    <>
      <div className="border text-base p-5 mx-5 md:w-[600px]">
        <p className="mb-5">Hello, I'm Tom!</p>
        <p className="text-justify mb-5">
          I am a full-stack developer with experience in a wide range of
          technologies and frameworks. My skillset includes proficiency in
          React.js, Vue.js, Node.js, Git and much more. I have a strong
          understanding of web development principles and I am able to learn new
          skills and adapt rapidly.
        </p>
        <p className="font-bold mb-5">Ways of contacting me :</p>
        <address className="flex flex-col items-center [&>a]:w-[300px] [&>a]:my-1">
          <a
            href="mailto:xiloe.lepetit@gmail.com"
            className="text-center text-white border border-slate-600 p-1 px-5 hover:underline"
          >
            xiloe.lepetit<span className="font-bold">[at]</span>gmail.com
          </a>

          <a
            href="tel:+33769509282"
            className="text-center text-white border border-slate-600 p-1 px-5 hover:underline"
          >
            +33 7 69 50 92 82
          </a>

          <a
            href="https://linkedin.com/in/tom-ferriere-9a685b260/"
            target="_blank"
            className="text-center text-white border border-slate-600 p-1 px-5 hover:underline"
          >
            Linkedin
          </a>
        </address>
      </div>
    </>
  );
}

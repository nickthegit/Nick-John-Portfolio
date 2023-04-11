export default function Footer() {
  return (
    <footer className="w-full h-auto text-center pt-16">
      <footer>
        <section className="footer-socials wrapper text-footer-socials flex justify-center gap-10 py-12">
          <a
            href="https://www.linkedin.com/in/nickjohn-dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
          </a>
          <a
            href="https://github.com/nickthegit"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
          <a
            href="mailto:nickjohnmail@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            email
          </a>
        </section>
        <section className="footer-bottom-bar wrapper pb-4">
          © Nick John {new Date().getFullYear()}
        </section>
      </footer>
    </footer>
  );
}

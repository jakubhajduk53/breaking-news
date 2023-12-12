function Contact() {
  return (
    <div className="flex flex-col items-center text-linen text-lg md:text-3xl p-3">
      <p>
        Created by: <span className="text-verdigris">Jakub Hajduk</span>
      </p>
      <p>
        Email: <span className="text-verdigris">jakubhajduk53@gmail.com</span>
      </p>
      <p>
        Api:{" "}
        <a href="https://newsapi.org/" className="text-verdigris underline">
          https://newsapi.org/
        </a>
      </p>
      <p>
        Repository:{" "}
        <a
          href="https://github.com/jakubhajduk53/breaking-news"
          className="text-verdigris underline"
        >
          GitHub
        </a>
      </p>
    </div>
  );
}

export default Contact;

function Contact() {
  return (
    <div className="flex flex-col items-center text-linen text-3xl p-3">
      <p>
        Created by: <span className="text-verdigris">Jakub Hajduk</span>
      </p>
      <p>
        Email: <span className="text-verdigris">jakubhajduk53@gmail.com</span>
      </p>
      <p>
        Api: <span className="text-verdigris">https://newsapi.org/</span>
      </p>
      <p>
        Repository:{" "}
        <span className="text-verdigris">
          <a href="https://github.com/jakubhajduk53/breaking-news">
            https://github.com/jakubhajduk53/breaking-news
          </a>
        </span>
      </p>
    </div>
  );
}

export default Contact;

import Link from "next/link";

export default function notFound() {
  return (
    // <div className="flex justify-center items-center h-screen text-4xl font-bold">
    //   404- Not Found 🔭🧐
    // </div>
    <main className="bsod container">
      <h1 className="neg title">
        <span className="bg">Error - 404</span>
      </h1>
      <p>An error has occured, to continue:</p>
      <p>
        * Return to our homepage.
        <br />* Send us an e-mail about this error and try later.
      </p>
      <nav className="nav">
        <Link href="/" className="link">
          index
        </Link>
        &nbsp;|&nbsp;
        <Link href="/products" className="link">
          products
        </Link>
      </nav>
    </main>
  );
}

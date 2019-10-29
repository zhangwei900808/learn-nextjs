import Link from "next/link";

function Home() {
  return (
    <div>
      Click{" "}
      <Link href="/about" replace>
        <a>here</a>
      </Link>{" "}
      to read more
    </div>
  );
}

export default Home;

import Link from "next/link";

function Home() {
  return (
    <div>
      Click{" "}
      <Link href="/about">
        <img src="/static/awbeci.png" width={50}></img>
      </Link>
    </div>
  );
}

export default Home;

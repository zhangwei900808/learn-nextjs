import Link from "next/link";

function Home() {
  return (
    <div>
      Click{" "}
      <Link href={{ pathname: "/about", query: { name: "Zeit" } }}>
        <a>here</a>
      </Link>{" "}
      to read more
    </div>
  );
}
export default Home;

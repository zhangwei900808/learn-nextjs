import { useRouter } from "next/router";

const customerRouter = () => {
  const router = useRouter();
  const { slug } = router.query;

  return <p>My Blog Post:{slug}</p>;
};

export default customerRouter;

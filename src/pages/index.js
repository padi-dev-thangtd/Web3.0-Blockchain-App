import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouteConstant } from "src/constants/RouteConstant";
import styles from "../styles/Home.module.css";

const Home = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  // useEffect(() => {
  //   router.push(RouteConstant.Hr);
  // });
  return <div className={styles.container}>HOmes page</div>;
};

export default Home;

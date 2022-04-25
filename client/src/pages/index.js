import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouteConstant } from "src/constants/RouteConstant";
import LayoutDocument from "src/layouts/LayoutDocument";
import HomeView from "src/modules/home/views/HomeView";

const Home = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  // useEffect(() => {
  //   router.push(RouteConstant.Hr);
  // });
  return (
    <LayoutDocument>
      <HomeView />
    </LayoutDocument>
  );
};

export default Home;

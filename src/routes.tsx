import HomePage from "./Pages/HomePage";
import NotFound from "./Pages/NotFound";
import NewComment from "./Pages/NewComment/NewComment";
import FullComment from "./Pages/FullComment/FullComment";

const routes = [
  { path: "/new-comment", component: NewComment },
  { path: "/comment/:id?", component: FullComment },
  { path: "/", component: HomePage, exact: true },
  { component: NotFound },
];

export default routes;

import { Route, Routes } from "react-router-dom";
import { MainMenu } from "../views/MainMenu/MainMenu";
import { HowToPlay } from "../views/HowToPlay/HowToPlay";
import { CategoryPick } from "../views/CategoryPick/CategoryPick";
import { Play } from "../views/Play/Play";

interface IRoute {
  path: string;
  element: React.ReactNode;
}

export const routes: IRoute[] = [
  {
    path: "/",
    element: <MainMenu />,
  },
  {
    path: "/howtoplay",
    element: <HowToPlay />,
  },
  {
    path: "/categories",
    element: <CategoryPick />,
  },
  {
    path: "/play",
    element: <Play />,
  },
];

export const AppRoutes = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={route.element}
        />
      ))}
    </Routes>
  );
};

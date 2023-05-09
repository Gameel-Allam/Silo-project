import React, { Suspense } from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";

// Import main layouts components
import LoginLayout from "../layouts/LoginLayout/LoginLayout";
const GateLayout = React.lazy(() =>
  import("../layouts/GateAndScallLayout/GateAndScaleLayout")
);
const ScaleLayout = React.lazy(() =>
  import("../layouts/GateAndScallLayout/GateAndScaleLayout")
);
const ReviewerLayout = React.lazy(() =>
  import("../layouts/ReviewerLayout/ReviewerLayout")
);
const ManagerLayout = React.lazy(() =>
  import("../layouts/ManagerLayout/ManagerLayout")
);

// import Gate and Scale routes pages
const GateIndex = React.lazy(() => import("../pages/gate"));
const ScaleIndex = React.lazy(() => import("../pages/scale/main"));
const ScaleMills = React.lazy(() => import("../pages/scale/mills"));

// import Manager routes pages
const ReviewerMain = React.lazy(() => import("../pages/reviewer/main"));
const ReviewerCells = React.lazy(() => import("../pages/reviewer/cells"));
const ReviewerMillsInfo = React.lazy(() =>
  import("../pages/reviewer/mills-info")
);
const ReviewerMillsProgram = React.lazy(() =>
  import("../pages/reviewer/mills-program")
);
const ReviewerSessions = React.lazy(() => import("../pages/reviewer/sessions"));
const ReviewerWheatInfo = React.lazy(() =>
  import("../pages/reviewer/wheat-info")
);
const ReviewerWheatProgram = React.lazy(() =>
  import("../pages/reviewer/wheat-program")
);

// import Manager routes pages
const ManagerMain = React.lazy(() => import("../pages/manager/main"));
const ManagerCells = React.lazy(() => import("../pages/manager/cells"));
const ManagerMillsInfo = React.lazy(() =>
  import("../pages/manager/mills-info")
);
const ManagerMillsProgram = React.lazy(() =>
  import("../pages/manager/mills-program")
);
const ManagerSessions = React.lazy(() => import("../pages/manager/sessions"));
const ManagerUsers = React.lazy(() => import("../pages/manager/users"));
const ManagerVisits = React.lazy(() => import("../pages/manager/visits"));
const ManagerWheat = React.lazy(() => import("../pages/manager/wheat"));

const reviewerRoutes = [
  { index: true, element: <ReviewerMain /> },
  {
    path: "program/sessions",
    element: (
      <Suspense fallback="loading ...">
        <ReviewerSessions />
      </Suspense>
    ),
  },
  {
    path: "program/mills",
    element: (
      <Suspense fallback="loading ...">
        <ReviewerMillsProgram />
      </Suspense>
    ),
  },
  {
    path: "program/wheat",
    element: (
      <Suspense fallback="loading ...">
        <ReviewerWheatProgram />
      </Suspense>
    ),
  },
  {
    path: "info/wheat",
    element: (
      <Suspense fallback="loading ...">
        {" "}
        <ReviewerWheatInfo />
      </Suspense>
    ),
  },
  {
    path: "info/mills",
    element: (
      <Suspense fallback="loading ...">
        <ReviewerMillsInfo />
      </Suspense>
    ),
  },
  {
    path: "info/cells",
    element: (
      <Suspense fallback="loading ...">
        <ReviewerCells />
      </Suspense>
    ),
  },
];
const managerRoutes = [
  { index: true, element: <ManagerMain /> },
  {
    path: "info/sessions",
    element: (
      <Suspense fallback="loading ...">
        <ManagerSessions />
      </Suspense>
    ),
  },
  {
    path: "info/cells",
    element: (
      <Suspense fallback="loading ...">
        <ManagerCells />
      </Suspense>
    ),
  },
  {
    path: "info/visits",
    element: (
      <Suspense fallback="loading ...">
        <ManagerVisits />
      </Suspense>
    ),
  },
  {
    path: "info/mills",
    element: (
      <Suspense fallback="loading ...">
        <ManagerMillsInfo />
      </Suspense>
    ),
  },
  {
    path: "program/wheat",
    element: (
      <Suspense fallback="loading ...">
        <ManagerWheat />
      </Suspense>
    ),
  },
  {
    path: "program/mills",
    element: (
      <Suspense fallback="loading ...">
        <ManagerMillsProgram />
      </Suspense>
    ),
  },
  {
    path: "users",
    element: (
      <Suspense fallback="loading ...">
        <ManagerUsers />
      </Suspense>
    ),
  },
];
const routerConfig = [
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback="loading ...">
            <LoginLayout />
          </Suspense>
        ),
      },
      {
        path: "gate",
        element: (
          <Suspense fallback="loading ...">
            <GateLayout />
          </Suspense>
        ),
        children: [
          {
            index: true,
            element: (
              <Suspense fallback="loading ...">
                <GateIndex />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "scale",
        element: (
          <Suspense fallback="loading ...">
            <ScaleLayout />
          </Suspense>
        ),
        children: [
          {
            index: true,
            element: (
              <Suspense fallback="loading ...">
                <ScaleIndex />
              </Suspense>
            ),
          },
          {
            path: "mills",
            element: (
              <Suspense fallback="loading ...">
                <ScaleMills />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "reviewer",
        element: (
          <Suspense fallback="loading ...">
            <ReviewerLayout />
          </Suspense>
        ),
        children: reviewerRoutes,
      },
      {
        path: "manager",
        element: (
          <Suspense fallback="loading ...">
            <ManagerLayout />
          </Suspense>
        ),
        children: managerRoutes,
      },
    ],
  },
];
export const router = createBrowserRouter(routerConfig);

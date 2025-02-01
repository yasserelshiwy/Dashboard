import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./components/Layout/Layout";
import Dashboard from "../src/page/1-Dashboard/Dashboard";
import ManageTeam from "../src/page/2-ManageTeam/ManageTeam";
import Contacts from "../src/page/3-Contacts/Contacts";
import Invoices from "../src/page/4-Invoices/Invoices";
import Profile from "../src/page/5-Profile/Profile";
import FaqPage from "../src/page/7-FaqPage/FaqPage";
import PieChart from "./page/9-PieChart/PieChart";
import LineChart from "./page/10-LineChart/LineChart";
import Geography from "../src/page/11-Geography/Geography";
import Calendar from "../src/page/6-Calendar/Calendar";
import Bar from "../src/page/8-BarChart/Bar";
import NotFound from "../src/page/12-notFound/NotFound";
import { HelmetProvider } from "react-helmet-async";
import { Offline, Online } from "react-detect-offline";
import OfflinePage from "./page/Offline/OfflinePage";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <HelmetProvider>
          <Layout />
        </HelmetProvider>
      ),
      children: [
        { index: true, element: <Dashboard /> },
        { path: "team", element: <ManageTeam /> },
        { path: "contacts", element: <Contacts /> },
        { path: "invoices", element: <Invoices /> },
        { path: "form", element: <Profile /> },
        { path: "calendar", element: <Calendar /> },
        { path: "faq", element: <FaqPage /> },
        { path: "bar", element: <Bar /> },
        { path: "pie", element: <PieChart /> },
        { path: "line", element: <LineChart /> },
        { path: "geography", element: <Geography /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return (
    <>
      <Online>
        <RouterProvider router={router}></RouterProvider>
      </Online>
      <Offline>
        <OfflinePage />
      </Offline>
    </>
  );
}

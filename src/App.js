// App (root) component
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Home";
import Products from "./pages/Products";
import Error from "./pages/Error";
import RootLayout from "./pages/Root";
import ProductDetailPage from "./pages/ProductDetail";

/* 
  using "RouterProvider" + "createBrowserRouter" to PROVIDE ROUTING
  (similar to Angular routing)
*/
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      // "index: true" => when navigating to the root page, display this element by default
      { index: true, element: <Homepage /> },
      { path: "products", element: <Products /> },
      { path: "products/:productId", element: <ProductDetailPage /> }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

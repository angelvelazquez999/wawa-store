import { jsxs, jsx } from "react/jsx-runtime";
import { L as Layout } from "./AuthenticatedLayout-B14YG1MC.js";
import { Head } from "@inertiajs/react";
import { useState, useEffect } from "react";
import "dayjs/locale/es.js";
import Swal from "sweetalert2";
import { c as config } from "./config-SkdcRZ4H.js";
import "@headlessui/react";
import "lucide-react";
import "@heroicons/react/24/outline";
import "@mui/icons-material/ShoppingCart";
const apiBaseUrl = config.apiBaseUrl;
function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const fetchDataTable = async () => {
    var _a;
    try {
      setLoading(true);
      const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').getAttribute("content"),
        Authorization: ""
      };
      const token = localStorage.getItem("token");
      if (token) {
        headers.Authorization = `Bearer ${token}`;
      }
      const response = await fetch(`${apiBaseUrl}/products`, {
        method: "GET",
        headers,
        credentials: "same-origin"
      });
      if (!response.ok) {
        let errorMessage = "Error al obtener la dirección.";
        try {
          const errorData = await response.json();
          errorMessage = ((_a = errorData.context) == null ? void 0 : _a.Message) || errorData.message || errorMessage;
        } catch {
        }
        throw new Error(errorMessage);
      }
      const data = await response.json();
      setFeaturedProducts(data.data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error al obtener los datos.",
        text: error.message,
        showConfirmButton: true,
        confirmButtonColor: "#646464ff"
      });
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchDataTable();
  }, []);
  const addToCart = async (product) => {
    var _a;
    try {
      const csrf = (_a = document.querySelector('meta[name="csrf-token"]')) == null ? void 0 : _a.getAttribute("content");
      const token = localStorage.getItem("token");
      const response = await fetch("/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "X-CSRF-TOKEN": csrf,
          ...token ? { Authorization: `Bearer ${token}` } : {}
        },
        body: JSON.stringify({ product_id: product.id }),
        credentials: "same-origin"
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Error al añadir al carrito");
      }
      window.dispatchEvent(new Event("cartChanged"));
      Swal.fire({
        icon: "success",
        title: "Producto añadido",
        text: `${product.name} se añadió al carrito`,
        timer: 1500,
        showConfirmButton: false
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message || "No se pudo añadir al carrito",
        confirmButtonColor: "#9a9a9aff"
      });
    }
  };
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Dashboard" }),
    /* @__PURE__ */ jsx("div", { className: "py-12 px-4 sm:px-6 lg:px-8 bg-[#ffffff]", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8", children: featuredProducts == null ? void 0 : featuredProducts.map((product) => /* @__PURE__ */ jsxs("div", { className: "group shadow-md rounded-lg overflow-hidden bg-white", children: [
      /* @__PURE__ */ jsx("div", { className: "aspect-w-1 aspect-h-1 bg-gray-100", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: product.image_path,
          alt: product.name,
          className: "h-80 w-full object-cover object-center transition-opacity duration-300 group-hover:opacity-80"
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-sm font-medium text-gray-800", children: product.name }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm font-semibold text-gray-900", children: [
            "$",
            product.price
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => addToCart(product),
            className: "mt-4 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors",
            children: "Añadir al Carrito"
          }
        )
      ] })
    ] }, product.id)) }) }) })
  ] });
}
export {
  Dashboard as default
};

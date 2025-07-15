import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { N as Navbar } from "./Navbar-CFl5BSwZ.js";
import { Head, Link } from "@inertiajs/react";
import { ArrowRightIcon, TruckIcon, ShieldIcon } from "lucide-react";
import "react";
import "@heroicons/react/24/outline";
const Welcome = ({ auth }) => {
  const featuredProducts = [{
    id: 1,
    name: "Urban Cargo Pants",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=600&q=80"
  }, {
    id: 2,
    name: "Street Graphic Tee",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=600&q=80"
  }, {
    id: 3,
    name: "Oversized Hoodie",
    price: 64.99,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=600&q=80"
  }, {
    id: 4,
    name: "Urban Sneakers",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=600&q=80"
  }];
  const collections = [{
    name: "Pantalones Perrones",
    description: "Escenciales Pa´ tú día a día",
    image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=700&q=80"
  }, {
    name: "Por si te persigue un perro",
    description: "Un comfort pa´ correr chido de ellos",
    image: "https://images.unsplash.com/photo-1483721310020-03333e577078?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=700&q=80"
  }];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Navbar, { showButtons: true }),
    /* @__PURE__ */ jsx(Head, { title: "Bienvenido" }),
    /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
      /* @__PURE__ */ jsxs("section", { className: "relative bg-black text-white", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 z-0", children: /* @__PURE__ */ jsx("img", { src: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80", alt: "Urban fashion", className: "w-full h-full object-cover opacity-50" }) }),
        /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 relative z-20", children: /* @__PURE__ */ jsxs("div", { className: "max-w-xl", children: [
          /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold tracking-tight mb-6", children: "Define Tu Estilo, Redefine Las Calles" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg mb-8 text-gray-300", children: "Moda urbana premium para aquellos que se atreven a destacar. Nuevas colecciones cada semana." }),
          /* @__PURE__ */ jsxs("div", { className: "flex space-x-4", children: [
            /* @__PURE__ */ jsx(
              Link,
              {
                href: route("register"),
                className: "bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition relative z-10",
                children: "Compra Ahora"
              }
            ),
            /* @__PURE__ */ jsx(Link, { href: route("register"), className: "border border-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-black transition relative z-10", children: "Explorar Colecciones" })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "py-16 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-end mb-8", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold tracking-tight text-gray-900", children: "Productos Chidotes" }),
            /* @__PURE__ */ jsx("p", { className: "mt-2 text-gray-600", children: "Lo que más le gusta a la gente" })
          ] }),
          /* @__PURE__ */ jsxs(Link, { href: route("register"), className: "text-black font-medium flex items-center", children: [
            "Ver Todo ",
            /* @__PURE__ */ jsx(ArrowRightIcon, { className: "ml-2 h-4 w-4" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: featuredProducts.map((product) => /* @__PURE__ */ jsxs("div", { className: "group", children: [
          /* @__PURE__ */ jsx("div", { className: "aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-100", children: /* @__PURE__ */ jsx("img", { src: product.image, alt: product.name, className: "h-80 w-full object-cover object-center group-hover:opacity-75" }) }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4 flex justify-between", children: [
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h3", { className: "text-sm text-gray-700", children: product.name }) }),
            /* @__PURE__ */ jsxs("p", { className: "text-sm font-medium text-gray-900", children: [
              "$",
              product.price
            ] })
          ] }),
          /* @__PURE__ */ jsx("button", { className: "mt-2 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition", children: "Añadir al Carrito" })
        ] }, product.id)) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-16 bg-gray-100", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold tracking-tight text-gray-900 mb-8", children: "Colecciones de Compra" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: collections.map((collection, index) => /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-lg group", children: [
          /* @__PURE__ */ jsx("img", { src: collection.image, alt: collection.name, className: "w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105" }),
          /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white", children: collection.name }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-4", children: collection.description }),
            /* @__PURE__ */ jsx(Link, { href: route("register"), className: "inline-block bg-white text-black px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition w-fit", children: "Compra Ahora" })
          ] })
        ] }, index)) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-12 bg-white", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center", children: [
          /* @__PURE__ */ jsx(TruckIcon, { className: "h-10 w-10 mb-4 text-gray-900" }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium text-gray-900", children: "Envio Gratis" }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-gray-600", children: "En todas las ordenes de más $100" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "h-10 w-10 mb-4 text-gray-900" }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium text-gray-900", children: "Posibles devoluciones" }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-gray-600", children: "Política de 30 minutos" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center", children: [
          /* @__PURE__ */ jsx(ShieldIcon, { className: "h-10 w-10 mb-4 text-gray-900" }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium text-gray-900", children: "Pagos seguros" }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-gray-600", children: "Pagos 100% Seguros " })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-16 bg-black text-white", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "max-w-xl mx-auto text-center", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-xl font-bold tracking-wider mb-6", children: [
          "URBAN",
          /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "THREADS" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-400 mb-6", children: "La mejor calidad en moda urbana. Únete a nuestra comunidad y descubre lo último en tendencias." }),
        /* @__PURE__ */ jsx("div", { className: "mt-12 border-t border-gray-800 pt-8 flex flex-col items-center", children: /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm text-center", children: "© 2023 UrbanWawa. Todos los derechos reservados." }) })
      ] }) }) })
    ] })
  ] });
};
export {
  Welcome as default
};

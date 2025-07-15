import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { Dog, UserIcon, XIcon, MenuIcon } from "lucide-react";
import { Link } from "@inertiajs/react";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
const Navbar = ({ showButtons }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return /* @__PURE__ */ jsxs("nav", { className: "bg-white shadow-sm sticky top-0 z-50", children: [
    /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between h-16", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center ml-2.5", children: /* @__PURE__ */ jsxs(Link, { href: "/", className: "flex-shrink-0 flex items-center", children: [
        /* @__PURE__ */ jsx(Dog, { className: "h-9 w-auto text-gray-800 dark:text-gray-800 mr-2" }),
        /* @__PURE__ */ jsxs("span", { className: "text-xl font-bold text-black tracking-wider", children: [
          "URBAN",
          /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: "WAWA" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4", children: showButtons && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs(
          Link,
          {
            href: route("register"),
            className: "flex items-center gap-2 px-5 py-2 rounded-full text-sm text-gray-200 bg-gray-800 hover:bg-gray-700 transition",
            children: [
              /* @__PURE__ */ jsx(UserIcon, { className: "h-5 w-5" }),
              "Registrate"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          Link,
          {
            href: route("login"),
            className: "flex items-center gap-2 px-4 py-2 rounded-full text-sm text-gray-200 bg-gray-800 hover:bg-gray-700 transition",
            children: [
              /* @__PURE__ */ jsx(ArrowRightOnRectangleIcon, { className: "h-5 w-5" }),
              "Iniciar Sesión"
            ]
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center sm:hidden", children: /* @__PURE__ */ jsx("button", { onClick: () => setIsMenuOpen(!isMenuOpen), className: "inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none", children: isMenuOpen ? /* @__PURE__ */ jsx(XIcon, { className: "block h-6 w-6" }) : /* @__PURE__ */ jsx(MenuIcon, { className: "block h-6 w-6" }) }) })
    ] }) }),
    isMenuOpen && /* @__PURE__ */ jsx("div", { className: "sm:hidden", children: /* @__PURE__ */ jsxs("div", { className: "pt-2 pb-3 space-y-1", children: [
      /* @__PURE__ */ jsx(Link, { to: "/", className: "block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300", onClick: () => setIsMenuOpen(false), children: "Home" }),
      /* @__PURE__ */ jsx(Link, { to: "/shop", className: "block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300", onClick: () => setIsMenuOpen(false), children: "Shop" }),
      /* @__PURE__ */ jsx(Link, { to: "/collections", className: "block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300", onClick: () => setIsMenuOpen(false), children: "Collections" }),
      /* @__PURE__ */ jsx(Link, { to: "/about", className: "block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300", onClick: () => setIsMenuOpen(false), children: "About" }),
      /* @__PURE__ */ jsx(Link, { to: "/signin", className: "block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300", onClick: () => setIsMenuOpen(false), children: "Sign In" })
    ] }) })
  ] });
};
export {
  Navbar as N
};

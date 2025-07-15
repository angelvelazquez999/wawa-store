import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, createContext, useContext, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { Link, usePage } from "@inertiajs/react";
import { Dog, UserIcon, XIcon, MenuIcon } from "lucide-react";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const DropDownContext = createContext();
const Dropdown = ({ children }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen((previousState) => !previousState);
  };
  return /* @__PURE__ */ jsx(DropDownContext.Provider, { value: { open, setOpen, toggleOpen }, children: /* @__PURE__ */ jsx("div", { className: "relative", children }) });
};
const Trigger = ({ children }) => {
  const { open, setOpen, toggleOpen } = useContext(DropDownContext);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { onClick: toggleOpen, children }),
    open && /* @__PURE__ */ jsx(
      "div",
      {
        className: "fixed inset-0 z-40",
        onClick: () => setOpen(false)
      }
    )
  ] });
};
const Content = ({
  align = "right",
  width = "48",
  contentClasses = "py-1 bg-white dark:bg-gray-700",
  children
}) => {
  const { open, setOpen } = useContext(DropDownContext);
  let alignmentClasses = "origin-top";
  if (align === "left") {
    alignmentClasses = "ltr:origin-top-left rtl:origin-top-right start-0";
  } else if (align === "right") {
    alignmentClasses = "ltr:origin-top-right rtl:origin-top-left end-0";
  }
  let widthClasses = "";
  if (width === "48") {
    widthClasses = "w-48";
  }
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    Transition,
    {
      show: open,
      enter: "transition ease-out duration-200",
      enterFrom: "opacity-0 scale-95",
      enterTo: "opacity-100 scale-100",
      leave: "transition ease-in duration-75",
      leaveFrom: "opacity-100 scale-100",
      leaveTo: "opacity-0 scale-95",
      children: /* @__PURE__ */ jsx(
        "div",
        {
          className: `absolute z-50 mt-2 rounded-md shadow-lg ${alignmentClasses} ${widthClasses}`,
          onClick: () => setOpen(false),
          children: /* @__PURE__ */ jsx(
            "div",
            {
              className: `rounded-md ring-1 ring-black ring-opacity-5 ` + contentClasses,
              children
            }
          )
        }
      )
    }
  ) });
};
const DropdownLink = ({ className = "", children, ...props }) => {
  return /* @__PURE__ */ jsx(
    Link,
    {
      ...props,
      className: "block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-gray-300 dark:hover:bg-gray-800 dark:focus:bg-gray-800 " + className,
      children
    }
  );
};
Dropdown.Trigger = Trigger;
Dropdown.Content = Content;
Dropdown.Link = DropdownLink;
function NavLink({
  active = false,
  className = "",
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Link,
    {
      ...props,
      className: "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none " + (active ? "border-indigo-400 text-gray-900 focus:border-indigo-700 dark:border-indigo-600 dark:text-gray-100" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 focus:border-gray-300 focus:text-gray-700 dark:text-gray-400 dark:hover:border-gray-700 dark:hover:text-gray-300 dark:focus:border-gray-700 dark:focus:text-gray-300") + className,
      children
    }
  );
}
function ResponsiveNavLink({
  active = false,
  className = "",
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Link,
    {
      ...props,
      className: `flex w-full items-start border-l-4 py-2 pe-4 ps-3 ${active ? "border-indigo-400 bg-indigo-50 text-indigo-700 focus:border-indigo-700 focus:bg-indigo-100 focus:text-indigo-800 dark:border-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300 dark:focus:border-indigo-300 dark:focus:bg-indigo-900 dark:focus:text-indigo-200" : "border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 focus:border-gray-300 focus:bg-gray-50 focus:text-gray-800 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-200 dark:focus:border-gray-600 dark:focus:bg-gray-700 dark:focus:text-gray-200"} text-base font-medium transition duration-150 ease-in-out focus:outline-none ${className}`,
      children
    }
  );
}
function Layout({ header, children, showButtons = false }) {
  var _a;
  const user = (_a = usePage().props.auth) == null ? void 0 : _a.user;
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    async function fetchCartCount() {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch("/cart/count", {
          headers: {
            "Authorization": token ? `Bearer ${token}` : "",
            "Accept": "application/json"
          },
          credentials: "same-origin"
        });
        if (!res.ok) throw new Error("Error al obtener el conteo del carrito");
        const data = await res.json();
        setCartCount(data.count || 0);
      } catch (error) {
        console.error(error);
      }
    }
    fetchCartCount();
    const handleCartChange = () => {
      fetchCartCount();
    };
    window.addEventListener("cartChanged", handleCartChange);
    return () => {
      window.removeEventListener("cartChanged", handleCartChange);
    };
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-[#fefcf9] dark:bg-[#ffffff]", children: [
    /* @__PURE__ */ jsxs("nav", { className: "bg-white dark:bg-gray-800 border-b dark:border-gray-700 shadow-sm sticky top-0 z-50", children: [
      /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between h-16 items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-4", children: /* @__PURE__ */ jsxs(Link, { href: "/dashboard", className: "flex items-center", children: [
          /* @__PURE__ */ jsx(Dog, { className: "h-9 w-auto text-gray-800 dark:text-gray-200" }),
          /* @__PURE__ */ jsxs("span", { className: "ml-2 text-xl font-bold text-black dark:text-white tracking-wider", children: [
            "URBAN",
            /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: "WAWA" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "hidden sm:flex items-center gap-4", children: [
          /* @__PURE__ */ jsxs(NavLink, { href: route("cart.show"), children: [
            /* @__PURE__ */ jsx(ShoppingCartIcon, {}),
            cartCount > 0 && /* @__PURE__ */ jsx("span", { className: "ml-2 inline-block bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full", children: cartCount })
          ] }),
          user ? /* @__PURE__ */ jsxs(Dropdown, { children: [
            /* @__PURE__ */ jsx(Dropdown.Trigger, { children: /* @__PURE__ */ jsxs("button", { className: "flex items-center text-sm text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md focus:outline-none", children: [
              user.name,
              /* @__PURE__ */ jsx("svg", { className: "ml-1 h-4 w-4", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z", clipRule: "evenodd" }) })
            ] }) }),
            /* @__PURE__ */ jsxs(Dropdown.Content, { children: [
              /* @__PURE__ */ jsx(Dropdown.Link, { href: route("profile.edit"), children: "Perfil" }),
              /* @__PURE__ */ jsx(Dropdown.Link, { href: route("logout"), method: "post", as: "button", children: "Cerrar sesión" })
            ] })
          ] }) : showButtons && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsxs(
              Link,
              {
                href: route("register"),
                className: "flex items-center gap-2 px-4 py-2 rounded-full text-sm text-gray-200 bg-gray-800 hover:bg-gray-700 transition",
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
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "sm:hidden", children: /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setMenuOpen(!menuOpen),
            className: "p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-700 focus:outline-none",
            children: menuOpen ? /* @__PURE__ */ jsx(XIcon, { className: "h-6 w-6" }) : /* @__PURE__ */ jsx(MenuIcon, { className: "h-6 w-6" })
          }
        ) })
      ] }) }),
      menuOpen && /* @__PURE__ */ jsxs("div", { className: "sm:hidden bg-white dark:bg-gray-800 border-t dark:border-gray-700 py-3 px-4", children: [
        /* @__PURE__ */ jsx(ResponsiveNavLink, { href: route("dashboard"), active: route().current("dashboard"), children: "Dashboard" }),
        user ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(ResponsiveNavLink, { href: route("profile.edit"), children: "Perfil" }),
          /* @__PURE__ */ jsx(ResponsiveNavLink, { method: "post", href: route("logout"), as: "button", children: "Cerrar sesión" })
        ] }) : showButtons && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(ResponsiveNavLink, { href: route("register"), children: "Registrate" }),
          /* @__PURE__ */ jsx(ResponsiveNavLink, { href: route("login"), children: "Iniciar sesión" })
        ] })
      ] })
    ] }),
    header && /* @__PURE__ */ jsx("header", { className: "bg-white dark:bg-gray-800 shadow", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8", children: header }) }),
    /* @__PURE__ */ jsx("main", { children })
  ] });
}
export {
  Layout as L
};

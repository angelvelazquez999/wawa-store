import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { T as TextInput, I as InputError } from "./TextInput-CnZpuTZV.js";
import { I as InputLabel } from "./InputLabel-BwxjdX49.js";
import { P as PrimaryButton } from "./PrimaryButton-D5gT5VMO.js";
import { G as GuestLayout } from "./GuestLayout-C-zKkeZp.js";
import { useForm, Head, Link } from "@inertiajs/react";
import { N as Navbar } from "./Navbar-CFl5BSwZ.js";
import "react";
import "lucide-react";
import "@heroicons/react/24/outline";
function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: false
  });
  const submit = (e) => {
    e.preventDefault();
    post(route("login"), {
      onFinish: () => reset("password")
    });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Navbar, { showButtons: false }),
    /* @__PURE__ */ jsxs(GuestLayout, { children: [
      /* @__PURE__ */ jsx(Head, { title: "Log in" }),
      status && /* @__PURE__ */ jsx("div", { className: "mb-4 text-sm font-medium text-green-600", children: status }),
      /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: "email", value: "Email" }),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              id: "email",
              type: "email",
              name: "email",
              value: data.email,
              className: "mt-1 block w-full",
              autoComplete: "username",
              isFocused: true,
              onChange: (e) => setData("email", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: "Contraseña" }),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              id: "password",
              type: "password",
              name: "password",
              value: data.password,
              className: "mt-1 block w-full",
              autoComplete: "current-password",
              onChange: (e) => setData("password", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center justify-end", children: [
          canResetPassword && /* @__PURE__ */ jsx(
            Link,
            {
              href: route("password.request"),
              className: "rounded-md text-sm text-gray-600 underline hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-800 dark:hover:text-gray-700 dark:focus:ring-offset-gray-800",
              children: "Olvidaste tu contraseña?"
            }
          ),
          /* @__PURE__ */ jsx(PrimaryButton, { className: "ms-4", disabled: processing, children: "Iniciar sesión" })
        ] })
      ] })
    ] })
  ] });
}
export {
  Login as default
};

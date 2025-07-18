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
function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
  });
  const submit = (e) => {
    e.preventDefault();
    post(route("register"), {
      onFinish: () => reset("password", "password_confirmation")
    });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Navbar, { showButtons: false }),
    /* @__PURE__ */ jsxs(GuestLayout, { children: [
      /* @__PURE__ */ jsx(Head, { title: "Register" }),
      /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: "name", value: "Nombre" }),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              id: "name",
              name: "name",
              value: data.name,
              className: "mt-1 block w-full",
              autoComplete: "name",
              isFocused: true,
              onChange: (e) => setData("name", e.target.value),
              required: true
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.name, className: "mt-2" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: "email", value: "Correo" }),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              id: "email",
              type: "email",
              name: "email",
              value: data.email,
              className: "mt-1 block w-full",
              autoComplete: "username",
              onChange: (e) => setData("email", e.target.value),
              required: true
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
              autoComplete: "new-password",
              onChange: (e) => setData("password", e.target.value),
              required: true
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
          /* @__PURE__ */ jsx(
            InputLabel,
            {
              htmlFor: "password_confirmation",
              value: "Confirmar Contraseña"
            }
          ),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              id: "password_confirmation",
              type: "password",
              name: "password_confirmation",
              value: data.password_confirmation,
              className: "mt-1 block w-full",
              autoComplete: "new-password",
              onChange: (e) => setData("password_confirmation", e.target.value),
              required: true
            }
          ),
          /* @__PURE__ */ jsx(
            InputError,
            {
              message: errors.password_confirmation,
              className: "mt-2"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center justify-end", children: [
          /* @__PURE__ */ jsx(
            Link,
            {
              href: route("login"),
              className: "rounded-md text-sm text-gray-600 underline hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-800 dark:hover:text-gray-700 dark:focus:ring-offset-gray-800",
              children: "Ya tas registrao?"
            }
          ),
          /* @__PURE__ */ jsx(PrimaryButton, { className: "ms-4", disabled: processing, children: "Registrate" })
        ] })
      ] })
    ] })
  ] });
}
export {
  Register as default
};

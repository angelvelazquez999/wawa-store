import { jsxs, jsx } from "react/jsx-runtime";
import { L as Layout } from "./AuthenticatedLayout-B14YG1MC.js";
import { Head } from "@inertiajs/react";
import DeleteUserForm from "./DeleteUserForm-CA6pGzOK.js";
import UpdatePasswordForm from "./UpdatePasswordForm-TKj6Rrmg.js";
import UpdateProfileInformation from "./UpdateProfileInformationForm-3DfS454I.js";
import "react";
import "@headlessui/react";
import "lucide-react";
import "@heroicons/react/24/outline";
import "@mui/icons-material/ShoppingCart";
import "./TextInput-CnZpuTZV.js";
import "./InputLabel-BwxjdX49.js";
import "./PrimaryButton-D5gT5VMO.js";
function Edit({ mustVerifyEmail, status }) {
  return /* @__PURE__ */ jsxs(
    Layout,
    {
      header: /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200", children: "Profile" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Profile" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800", children: /* @__PURE__ */ jsx(
            UpdateProfileInformation,
            {
              mustVerifyEmail,
              status,
              className: "max-w-xl"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800", children: /* @__PURE__ */ jsx(UpdatePasswordForm, { className: "max-w-xl" }) }),
          /* @__PURE__ */ jsx("div", { className: "bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800", children: /* @__PURE__ */ jsx(DeleteUserForm, { className: "max-w-xl" }) })
        ] }) })
      ]
    }
  );
}
export {
  Edit as default
};

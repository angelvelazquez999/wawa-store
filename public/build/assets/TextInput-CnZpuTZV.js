import { jsx } from "react/jsx-runtime";
import { forwardRef, useRef, useImperativeHandle, useEffect } from "react";
function InputError({ message, className = "", ...props }) {
  return message ? /* @__PURE__ */ jsx(
    "p",
    {
      ...props,
      className: "text-sm text-red-600 dark:text-red-400 " + className,
      children: message
    }
  ) : null;
}
const TextInput = forwardRef(function TextInput2({ type = "text", className = "", isFocused = false, ...props }, ref) {
  const localRef = useRef(null);
  useImperativeHandle(ref, () => ({
    focus: () => {
      var _a;
      return (_a = localRef.current) == null ? void 0 : _a.focus();
    }
  }));
  useEffect(() => {
    var _a;
    if (isFocused) {
      (_a = localRef.current) == null ? void 0 : _a.focus();
    }
  }, [isFocused]);
  return /* @__PURE__ */ jsx(
    "input",
    {
      ...props,
      type,
      ref: localRef,
      className: "rounded-md border border-gray-300 bg-white text-gray-800 shadow-sm focus:border-gray-500 focus:ring-gray-500 dark:border-gray-400 dark:bg-[#ebebeb] dark:text-gray-900 dark:placeholder-gray-700 dark:focus:border-gray-700 dark:focus:ring-gray-700 " + className
    }
  );
});
export {
  InputError as I,
  TextInput as T
};

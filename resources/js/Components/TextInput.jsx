import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

export default forwardRef(function TextInput(
    { type = 'text', className = '', isFocused = false, ...props },
    ref,
) {
    const localRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    return (
        <input
            {...props}
            type={type}
            ref={localRef}
            className={
                'rounded-md border border-gray-300 bg-white text-gray-800 shadow-sm ' +
                'focus:border-gray-500 focus:ring-gray-500 ' +
                'dark:border-gray-400 dark:bg-[#ebebeb] dark:text-gray-900 ' +
                'dark:placeholder-gray-700 dark:focus:border-gray-700 dark:focus:ring-gray-700 ' +
                className
            }
        />
    );
});

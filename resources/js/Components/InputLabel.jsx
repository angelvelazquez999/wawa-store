export default function InputLabel({
    value,
    className = '',
    children,
    ...props
}) {
    return (
        <label
            {...props}
            className={
                `block text-sm font-medium text-gray-700 dark:text-black-300 ` +
                className
            }
        >
            {value ? value : children}
        </label>
    );
}

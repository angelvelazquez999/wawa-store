import { Link } from '@inertiajs/react';
import { Dog } from 'lucide-react';

export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-white pt-6 sm:justify-center sm:pt-0 dark:bg-[#cfcfcf]">
            <div>
                <Link href="/">
                    <Dog className="h-20 w-20 text-gray-500" />
                </Link>
            </div>

            <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg dark:bg-[#fafafa]">
                {children}
            </div>
        </div>

    );
}

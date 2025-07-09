import { Head, Link } from '@inertiajs/react';
import { ArrowRightIcon, TruckIcon, ShieldIcon } from 'lucide-react';


const Welcome = ({ auth }) => {
    const featuredProducts = [{
        id: 1,
        name: 'Urban Cargo Pants',
        price: 89.99,
        image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=600&q=80'
    }, {
        id: 2,
        name: 'Street Graphic Tee',
        price: 34.99,
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=600&q=80'
    }, {
        id: 3,
        name: 'Oversized Hoodie',
        price: 64.99,
        image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=600&q=80'
    }, {
        id: 4,
        name: 'Urban Sneakers',
        price: 119.99,
        image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=600&q=80'
    }]

    const collections = [{
        name: 'Streetwear',
        description: 'Urban essentials for everyday style',
        image: 'https://images.unsplash.com/photo-1523398002811-999ca8dec234?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=700&q=80'
    }, {
        name: 'Athleisure',
        description: 'Where comfort meets street style',
        image: 'https://images.unsplash.com/photo-1483721310020-03333e577078?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=700&q=80'
    }];

    return (
        <>
        {/* <Navbar /> */}
        <div className="w-full">
            <section className="relative bg-black text-white">
                <div className="absolute inset-0 z-0">
                    <img src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Urban fashion" className="w-full h-full object-cover opacity-50" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 relative z-10">
                    <div className="max-w-xl">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                            Define Your Style, Redefine The Streets
                        </h1>
                        <p className="text-lg mb-8 text-gray-300">
                            Premium urban wear for those who dare to stand out. New collection
                            drops weekly.
                        </p>
                        <div className="flex space-x-4">
                            <Link to="/shop" className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition">
                                Shop Now
                            </Link>
                            <Link to="/collections" className="border border-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-black transition">
                                Explore Collections
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* Featured Products */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-8">
                        <div>
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                                Featured Products
                            </h2>
                            <p className="mt-2 text-gray-600">
                                Our most popular items this season
                            </p>
                        </div>
                        <Link to="/shop" className="text-black font-medium flex items-center">
                            View All <ArrowRightIcon className="ml-2 h-4 w-4" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {featuredProducts.map(product => <div key={product.id} className="group">
                            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-100">
                                <img src={product.image} alt={product.name} className="h-80 w-full object-cover object-center group-hover:opacity-75" />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">{product.name}</h3>
                                </div>
                                <p className="text-sm font-medium text-gray-900">
                                    ${product.price}
                                </p>
                            </div>
                            <button className="mt-2 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
                                Add to Cart
                            </button>
                        </div>)}
                    </div>
                </div>
            </section>
            {/* Collections */}
            <section className="py-16 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">
                        Shop Collections
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {collections.map((collection, index) => <div key={index} className="relative overflow-hidden rounded-lg group">
                            <img src={collection.image} alt={collection.name} className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                                <h3 className="text-xl font-bold text-white">
                                    {collection.name}
                                </h3>
                                <p className="text-gray-300 mb-4">{collection.description}</p>
                                <Link to={`/collections/${collection.name.toLowerCase()}`} className="inline-block bg-white text-black px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition w-fit">
                                    Shop Now
                                </Link>
                            </div>
                        </div>)}
                    </div>
                </div>
            </section>
            {/* Trust badges */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center text-center">
                            <TruckIcon className="h-10 w-10 mb-4 text-gray-900" />
                            <h3 className="text-lg font-medium text-gray-900">
                                Free Shipping
                            </h3>
                            <p className="mt-2 text-gray-600">On all orders over $100</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="h-10 w-10 mb-4 text-gray-900" />
                            <h3 className="text-lg font-medium text-gray-900">
                                Easy Returns
                            </h3>
                            <p className="mt-2 text-gray-600">30-day return policy</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <ShieldIcon className="h-10 w-10 mb-4 text-gray-900" />
                            <h3 className="text-lg font-medium text-gray-900">
                                Secure Checkout
                            </h3>
                            <p className="mt-2 text-gray-600">100% protected payments</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Newsletter */}
            <section className="py-16 bg-black text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-4">Join the Movement</h2>
                        <p className="text-gray-400 mb-6">
                            Subscribe to get exclusive offers, early access to new drops, and
                            more.
                        </p>
                        <form className="flex w-full max-w-md mx-auto">
                            <input type="email" placeholder="Your email address" className="flex-grow px-4 py-3 rounded-l-md text-black focus:outline-none" required />
                            <button type="submit" className="bg-white text-black px-6 py-3 rounded-r-md font-medium hover:bg-gray-100 transition">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
        </>
    )

};

export default Welcome;

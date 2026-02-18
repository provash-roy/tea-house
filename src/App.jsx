import image1 from "../public/images/fresh-1.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Services", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <>
      <nav className="bg-white shadow-md sticky z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="text-2xl font-bold text-green-600">Tea House</div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-green-600 transition duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="md:flex hidden font-semibold space-x-8">
              <button>login</button>
              <button>Sign up</button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                  <X className="w-6 h-6 text-gray-700" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-red-400 shadow-md">
            <div className="px-4 pt-2 pb-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-700 hover:text-green-600 transition duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
      <section className="py-4">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <span className="text-sm bg-green-100 px-3 py-1 rounded-full">
              🚀 Fast Delivery
            </span>

            <h1 className="text-5xl font-bold leading-tight">
              Delicious Food Delivered To Your Doorstep
            </h1>

            <p className="text-gray-600">
              Order from your favorite restaurants and get your food in minutes.
            </p>

            <div className="flex gap-4">
              <button className="bg-green-600 text-white px-6 py-3 rounded-xl">
                Order Now
              </button>

              <button className="border px-6 py-3 rounded-xl">
                Download App
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <img
              className="w-full h-[450px] object-cover transition-transform duration-500 hover:scale-105"
              src="https://images.pexels.com/photos/4916677/pexels-photo-4916677.jpeg"
              alt="Food delivery preview"
            />
          </div>
        </div>
      </section>
      <section className="py-4">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <span className="text-sm bg-green-100 px-3 py-1 rounded-full">
              🚀 Fast Delivery
            </span>

            <h1 className="text-5xl font-bold leading-tight">
              Delicious Food Delivered To Your Doorstep
            </h1>

            <p className="text-gray-600">
              Order from your favorite restaurants and get your food in minutes.
            </p>

            <div className="flex gap-4">
              <button className="bg-green-600 text-white px-6 py-3 rounded-xl">
                Order Now
              </button>

              <button className="border px-6 py-3 rounded-xl">
                Download App
              </button>
            </div>
          </div>

          {/* Right Image */}
          {/* Right Image */}
          <div className="relative">
            <img
              className="w-full h-[450px] object-cover rounded-3xl shadow-2xl"
              src="https://images.pexels.com/photos/4916677/pexels-photo-4916677.jpeg"
              alt="Delicious food delivery preview"
            />
          </div>
        </div>
      </section>
      <section className="py-4">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <span className="text-sm bg-green-100 px-3 py-1 rounded-full">
              🚀 Fast Delivery
            </span>

            <h1 className="text-5xl font-bold leading-tight">
              Delicious Food Delivered To Your Doorstep
            </h1>

            <p className="text-gray-600">
              Order from your favorite restaurants and get your food in minutes.
            </p>

            <div className="flex gap-4">
              <button className="bg-green-600 text-white px-6 py-3 rounded-xl">
                Order Now
              </button>

              <button className="border px-6 py-3 rounded-xl">
                Download App
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              className="w-full h-[450px] object-cover rounded-3xl"
              src="https://images.pexels.com/photos/4916677/pexels-photo-4916677.jpeg"
              alt="Food delivery app preview"
            />

            <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent rounded-3xl"></div>
          </div>
        </div>
      </section>
      <div className="flex gap-4 m-16">
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl w-80 transition-all duration-300 p-6 border">
          {/* Image */}
          <div className="overflow-hidden rounded-xl mb-4">
            <img
              src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg"
              alt="Card Preview"
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Content */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Card Title</h3>

            <p className="text-gray-600 text-sm">
              Short description about this item or feature goes here.
            </p>

            {/* Footer */}
            <div className="flex justify-between items-center pt-4">
              <span className="font-bold text-green-600">$19.99</span>

              <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300  w-80">
          {/* Image */}
          <div className="h-48 sm:h-64 w-full overflow-hidden">
            <img
              src={image1}
              alt="Milk Tea"
              className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="p-5 space-y-3">
            <h2 className="text-xl font-semibold text-gray-800">Milk Tea</h2>

            <p className="text-sm text-gray-600 leading-relaxed">
              Creamy and refreshing milk tea made with premium tea leaves.
            </p>

            <div className="flex justify-between items-center pt-3">
              <span className="font-bold text-green-600">$3.50</span>

              <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition">
                Order
              </button>
            </div>
          </div>
        </div>
        <div className="backdrop-blur-md bg-white/70 rounded-2xl border p-6 shadow-lg">
          <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
          <p className="text-gray-600 text-sm">
            Get your order delivered within 30 minutes.
          </p>
          <div className="overflow-hidden rounded-xl mb-4">
            <img
              src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg"
              alt="Card Preview"
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Creamy and refreshing milk tea made with premium tea leaves.
          </p>

          <div className="flex justify-between items-center pt-3">
            <span className="font-bold text-green-600">$3.50</span>

            <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition">
              Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

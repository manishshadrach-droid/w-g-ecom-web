import Link from "next/link"
import AddToCartButton from "../components/AddToCartButton"
interface Product {
  id: number
  name: string
  price: number
  image: string
  slug: string
}

export default function HomePage() {
  const products: Product[] = [
    {
      id: 1,
      name: "Handcrafted Metal Mandala Wall Art",
      price: 2499,
      image: "/product/mandala1.jpg",
      slug: "mandala"
    },
    {
      id: 2,
      name: "Gold Finish Lotus Urli Bowl",
      price: 1899,
      image: "/product/mandala2.jpg",
      slug: "lotus"
    },
    {
      id: 3,
      name: "Decorative Mandala Wall Frame",
      price: 2999,
      image: "/product/mandala3.jpg",
      slug: "mandala-frame"
    }
  ]

  return (
    <main>
      {/* HERO SECTION */}
      <section
        className="h-[90vh] flex items-center justify-center text-white relative"
        style={{
          backgroundImage: "url('/hero/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative text-center max-w-xl backdrop-blur-md bg-black/30 p-10 rounded-2xl">
          <h1 className="text-5xl font-bold mb-6">
            Elevate Your Living Space
          </h1>
          <p className="text-lg mb-8">
            Premium handcrafted decor for modern homes
          </p>
          <Link
            href="/shop"
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="max-w-7xl mx-auto py-20 px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Featured Collection
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="group block bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden"
            >
              <Link href={`/product/${product.slug}`}>
                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-700 font-bold mb-4">
                    ₹{product.price}
                  </p>
                </div>
              </Link>
              <div className="p-6 pt-0">
                <AddToCartButton product={product} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RELATED PRODUCTS */}
      <section className="max-w-7xl mx-auto px-8 py-16">
        <h2 className="text-2xl font-bold mb-8">
          Related Products
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.slice(0, 3).map((p) => (
            <Link
              key={p.id}
              href={"/product/" + p.slug}
              className="block bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={p.image}
                className="w-full h-64 object-cover rounded-t-xl"
              />
              <div className="p-4">
                <h3 className="font-semibold">
                  {p.name}
                </h3>
                <p className="text-gray-700">
                  ₹ {p.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
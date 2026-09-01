"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Clock, MapPin, Phone, Mail, Star, ChevronLeft, ChevronRight, Utensils, Wine, Flame, Instagram, Facebook, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function HomePage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [activeMenuCategory, setActiveMenuCategory] = useState("antipasti")
  const [testimonialIndex, setTestimonialIndex] = useState(0)

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ]

  const menuCategories = {
    antipasti: {
      title: "Antipasti",
      items: [
        { name: "Burrata con Prosciutto", description: "Creamy burrata, aged prosciutto di Parma, grilled crostini, basil oil" },
        { name: "Carpaccio di Manzo", description: "Thinly sliced beef tenderloin, arugula, shaved Parmigiano, truffle aioli" },
        { name: "Calamari Fritti", description: "Crispy fried calamari, spicy marinara, lemon aioli" },
        { name: "Bruschetta Trio", description: "Tomato basil, wild mushroom, and white bean spreads on grilled bread" },
      ]
    },
    pasta: {
      title: "Pasta Fatta in Casa",
      items: [
        { name: "Tagliatelle al Ragù", description: "Handmade ribbon pasta, slow braised Bolognese, Parmigiano Reggiano", signature: true },
        { name: "Cacio e Pepe", description: "Tonnarelli, Pecorino Romano, black pepper, olive oil" },
        { name: "Pappardelle ai Funghi", description: "Wide ribbon pasta, wild mushroom medley, truffle cream, thyme" },
        { name: "Spaghetti alle Vongole", description: "Fresh littleneck clams, white wine, garlic, parsley, chili flakes" },
      ]
    },
    pizza: {
      title: "Pizza dal Forno a Legna",
      items: [
        { name: "Margherita DOC", description: "San Marzano tomatoes, fresh mozzarella di bufala, basil, olive oil" },
        { name: "Diavola", description: "Spicy salami, roasted peppers, mozzarella, fresh oregano" },
        { name: "Quattro Formaggi", description: "Mozzarella, gorgonzola, fontina, Parmigiano, honey drizzle" },
        { name: "Prosciutto e Rucola", description: "Prosciutto di Parma, arugula, shaved Parmigiano, balsamic reduction" },
      ]
    },
    secondi: {
      title: "Secondi Piatti",
      items: [
        { name: "Bistecca Fiorentina", description: "Grilled Porterhouse for two, Tuscan olive oil, rosemary, sea salt", signature: true },
        { name: "Branzino al Forno", description: "Whole roasted Mediterranean sea bass, capers, olives, cherry tomatoes" },
        { name: "Osso Buco alla Milanese", description: "Braised veal shank, saffron risotto, gremolata" },
        { name: "Pollo alla Parmigiana", description: "Breaded chicken cutlet, tomato sauce, melted mozzarella, fresh basil" },
      ]
    },
    dolci: {
      title: "Dolci",
      items: [
        { name: "Tiramisu della Casa", description: "Our signature recipe with espresso soaked savoiardi, mascarpone, cocoa", signature: true },
        { name: "Panna Cotta", description: "Vanilla bean custard, seasonal berry compote, mint" },
        { name: "Cannoli Siciliani", description: "Crispy shells, sweet ricotta, chocolate chips, pistachios" },
        { name: "Affogato", description: "Vanilla gelato drowned in fresh espresso, amaretti crumble" },
      ]
    },
  }

  const testimonials = [
    {
      text: "The most authentic Italian food I have had outside of Florence. The tagliatelle al ragù transported me back to my grandmother's kitchen in Tuscany.",
      author: "A Devoted Regular",
      rating: 5
    },
    {
      text: "Bella Cucina is our go to for every special occasion. The warm atmosphere, impeccable service, and that Bistecca Fiorentina... perfection.",
      author: "Anniversary Celebrant",
      rating: 5
    },
    {
      text: "Finally, a restaurant that understands real Italian cooking. Simple ingredients, executed flawlessly. The tiramisu is not to be missed.",
      author: "Local Food Critic",
      rating: 5
    },
  ]

  const galleryImages = [
    { src: "/images/hero.png", alt: "Fresh handmade pasta", span: "col-span-2 row-span-2" },
    { src: "/images/feature.png", alt: "Wood fired pizza oven", span: "col-span-1 row-span-1" },
    { src: "/images/hero.png", alt: "Rustic interior with exposed brick", span: "col-span-1 row-span-2" },
    { src: "/images/feature.png", alt: "Signature tiramisu", span: "col-span-1 row-span-1" },
    { src: "/images/hero.png", alt: "Bistecca Fiorentina", span: "col-span-1 row-span-1" },
  ]

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#F5EDE4" }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" style={{ backgroundColor: "rgba(44, 36, 32, 0.95)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="font-serif text-2xl tracking-wide" style={{ color: "#F5EDE4", fontFamily: "Playfair Display, serif" }}>
              Bella Cucina
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm tracking-widest uppercase transition-colors duration-300 hover:opacity-80"
                  style={{ color: "#E8DDD1", fontFamily: "Source Sans Pro, sans-serif" }}
                >
                  {link.label}
                </a>
              ))}
              <Button
                asChild
                className="px-6 py-2 text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-90"
                style={{ backgroundColor: "#C4553D", color: "#F5EDE4" }}
              >
                <a href="#reservations">Reserve</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              aria-label="Toggle menu"
            >
              {mobileNavOpen ? (
                <X className="w-6 h-6" style={{ color: "#F5EDE4" }} />
              ) : (
                <Menu className="w-6 h-6" style={{ color: "#F5EDE4" }} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            mobileNavOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
          style={{ backgroundColor: "#2C2420" }}
        >
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileNavOpen(false)}
                className="block text-center text-sm tracking-widest uppercase py-2"
                style={{ color: "#E8DDD1", fontFamily: "Source Sans Pro, sans-serif" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#reservations"
              onClick={() => setMobileNavOpen(false)}
              className="block text-center text-sm tracking-widest uppercase py-3 mt-4"
              style={{ backgroundColor: "#C4553D", color: "#F5EDE4" }}
            >
              Reserve a Table
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.png"
            alt="Bella Cucina interior with warm candlelit ambiance"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(44, 36, 32, 0.6)" }} />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p
            className="text-sm tracking-[0.3em] uppercase mb-6"
            style={{ color: "#E8DDD1", fontFamily: "Source Sans Pro, sans-serif" }}
          >
            Authentic Italian Cuisine
          </p>
          <h1
            className="text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight"
            style={{ color: "#F5EDE4", fontFamily: "Playfair Display, serif" }}
          >
            Bella Cucina
          </h1>
          <p
            className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
            style={{ color: "#E8DDD1", fontFamily: "Source Sans Pro, sans-serif" }}
          >
            Traditional Tuscan recipes crafted with passion. Wood fired pizzas, handmade pasta, and the warmth of Italian hospitality in the heart of New York City.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="px-10 py-6 text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: "#C4553D", color: "#F5EDE4" }}
            >
              <a href="#reservations">Reserve Your Table</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="px-10 py-6 text-sm tracking-widest uppercase transition-all duration-300 border-2"
              style={{ borderColor: "#F5EDE4", color: "#F5EDE4", backgroundColor: "transparent" }}
            >
              <a href="#menu">Explore Menu</a>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 rounded-full flex justify-center pt-2" style={{ borderColor: "#E8DDD1" }}>
            <div className="w-1 h-2 rounded-full" style={{ backgroundColor: "#E8DDD1" }} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32" style={{ backgroundColor: "#F5EDE4" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="relative">
              <div
                className="absolute -top-4 -left-4 w-full h-full"
                style={{ backgroundColor: "#C4553D", opacity: 0.1 }}
              />
              <Image
                src="/images/feature.png"
                alt="Chef preparing fresh pasta"
                width={600}
                height={700}
                className="relative z-10 object-cover w-full"
              />
            </div>
            <div className="space-y-8">
              <div>
                <p
                  className="text-sm tracking-[0.3em] uppercase mb-4"
                  style={{ color: "#C4553D", fontFamily: "Source Sans Pro, sans-serif" }}
                >
                  Our Story
                </p>
                <h2
                  className="text-4xl md:text-5xl leading-tight"
                  style={{ color: "#2C2420", fontFamily: "Playfair Display, serif" }}
                >
                  A Taste of Tuscany in Every Bite
                </h2>
              </div>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "#8B7355", fontFamily: "Source Sans Pro, sans-serif" }}
              >
                Born from a deep love for Italian culinary traditions, Bella Cucina brings the soul of Tuscany to New York City. Our kitchen honors time tested recipes passed down through generations, where every dish tells a story of family, passion, and the finest ingredients.
              </p>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "#8B7355", fontFamily: "Source Sans Pro, sans-serif" }}
              >
                From our wood fired oven that reaches temperatures of over 900 degrees to our handmade pasta crafted fresh daily, we believe in the art of slow food. Our exposed brick walls and warm candlelit ambiance create the perfect setting for memorable meals with loved ones.
              </p>
              <div className="pt-4">
                <Button
                  asChild
                  className="px-8 py-6 text-sm tracking-widest uppercase transition-all duration-300"
                  style={{ backgroundColor: "#2C2420", color: "#F5EDE4" }}
                >
                  <a href="#menu">Discover Our Menu</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#2C2420" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { icon: Flame, number: "900°+", label: "Wood Fired Oven" },
              { icon: Utensils, number: "Fresh", label: "Daily Handmade Pasta" },
              { icon: Wine, number: "100+", label: "Italian Wine Labels" },
              { icon: Star, number: "Tuscan", label: "Family Recipes" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-4" style={{ color: "#C4553D" }} />
                <p
                  className="text-3xl md:text-4xl mb-2"
                  style={{ color: "#F5EDE4", fontFamily: "Playfair Display, serif" }}
                >
                  {stat.number}
                </p>
                <p
                  className="text-sm tracking-widest uppercase"
                  style={{ color: "#8B7355", fontFamily: "Source Sans Pro, sans-serif" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 md:py-32" style={{ backgroundColor: "#E8DDD1" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p
              className="text-sm tracking-[0.3em] uppercase mb-4"
              style={{ color: "#C4553D", fontFamily: "Source Sans Pro, sans-serif" }}
            >
              Culinary Excellence
            </p>
            <h2
              className="text-4xl md:text-5xl mb-6"
              style={{ color: "#2C2420", fontFamily: "Playfair Display, serif" }}
            >
              Our Menu
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "#8B7355", fontFamily: "Source Sans Pro, sans-serif" }}
            >
              Each dish is a celebration of authentic Italian flavors, crafted with imported ingredients and generations of culinary wisdom.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(menuCategories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveMenuCategory(category)}
                className={`px-6 py-3 text-sm tracking-widest uppercase transition-all duration-300 ${
                  activeMenuCategory === category ? "shadow-lg" : "hover:opacity-80"
                }`}
                style={{
                  backgroundColor: activeMenuCategory === category ? "#C4553D" : "transparent",
                  color: activeMenuCategory === category ? "#F5EDE4" : "#2C2420",
                  border: activeMenuCategory === category ? "none" : "1px solid #8B7355",
                  fontFamily: "Source Sans Pro, sans-serif",
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="max-w-4xl mx-auto">
            <h3
              className="text-2xl md:text-3xl text-center mb-10"
              style={{ color: "#2C2420", fontFamily: "Playfair Display, serif" }}
            >
              {menuCategories[activeMenuCategory as keyof typeof menuCategories].title}
            </h3>
            <div className="space-y-8">
              {menuCategories[activeMenuCategory as keyof typeof menuCategories].items.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row md:items-start gap-4 pb-8 border-b"
                  style={{ borderColor: "#8B7355", borderStyle: "dotted" }}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4
                        className="text-xl"
                        style={{ color: "#2C2420", fontFamily: "Playfair Display, serif" }}
                      >
                        {item.name}
                      </h4>
                      {item.signature && (
                        <span
                          className="text-xs tracking-widest uppercase px-3 py-1"
                          style={{ backgroundColor: "#C4553D", color: "#F5EDE4", fontFamily: "Source Sans Pro, sans-serif" }}
                        >
                          Signature
                        </span>
                      )}
                    </div>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: "#8B7355", fontFamily: "Source Sans Pro, sans-serif" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <p
              className="text-sm mb-6"
              style={{ color: "#8B7355", fontFamily: "Source Sans Pro, sans-serif" }}
            >
              Dinner served nightly • Weekend brunch available
            </p>
            <Button
              asChild
              className="px-10 py-6 text-sm tracking-widest uppercase transition-all duration-300"
              style={{ backgroundColor: "#2C2420", color: "#F5EDE4" }}
            >
              <a href="#reservations">Make a Reservation</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 md:py-32" style={{ backgroundColor: "#F5EDE4" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p
              className="text-sm tracking-[0.3em] uppercase mb-4"
              style={{ color: "#C4553D", fontFamily: "Source Sans Pro, sans-serif" }}
            >
              Visual Journey
            </p>
            <h2
              className="text-4xl md:text-5xl"
              style={{ color: "#2C2420", fontFamily: "Playfair Display, serif" }}
            >
              A Glimpse Inside
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`relative overflow-hidden group ${image.span}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6"
                  style={{ background: "linear-gradient(to top, rgba(44, 36, 32, 0.8), transparent)" }}
                >
                  <p
                    className="text-sm tracking-wide"
                    style={{ color: "#F5EDE4", fontFamily: "Source Sans Pro, sans-serif" }}
                  >
                    {image.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 md:py-32" style={{ backgroundColor: "#2C2420" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p
              className="text-sm tracking-[0.3em] uppercase mb-4"
              style={{ color: "#C4553D", fontFamily: "Source Sans Pro, sans-serif" }}
            >
              Guest Experiences
            </p>
            <h2
              className="text-4xl md:text-5xl"
              style={{ color: "#F5EDE4", fontFamily: "Playfair Display, serif" }}
            >
              What Our Guests Say
            </h2>
          </div>

          <div className="relative">
            <div className="text-center px-8 md:px-16">
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(testimonials[testimonialIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" style={{ color: "#C4553D" }} />
                ))}
              </div>
              <blockquote
                className="text-xl md:text-2xl leading-relaxed mb-8 italic"
                style={{ color: "#E8DDD1", fontFamily: "Playfair Display, serif" }}
              >
                &ldquo;{testimonials[testimonialIndex].text}&rdquo;
              </blockquote>
              <p
                className="text-sm tracking-widest uppercase"
                style={{ color: "#8B7355", fontFamily: "Source Sans Pro, sans-serif" }}
              >
                — {testimonials[testimonialIndex].author}
              </p>
            </div>

            <div className="flex justify-center gap-4 mt-12">
              <button
                onClick={prevTestimonial}
                className="p-3 border transition-all duration-300 hover:bg-white/10"
                style={{ borderColor: "#8B7355" }}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" style={{ color: "#E8DDD1" }} />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 border transition-all duration-300 hover:bg-white/10"
                style={{ borderColor: "#8B7355" }}
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" style={{ color: "#E8DDD1" }} />
              </button>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setTestimonialIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === testimonialIndex ? "w-8" : ""
                  }`}
                  style={{ backgroundColor: index === testimonialIndex ? "#C4553D" : "#8B7355" }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="reservations" className="relative py-32 md:py-40">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.png"
            alt="Bella Cucina dining experience"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(44, 36, 32, 0.85)" }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className="text-sm tracking-[0.3em] uppercase mb-6"
            style={{ color: "#C4553D", fontFamily: "Source Sans Pro, sans-serif" }}
          >
            Join Us
          </p>
          <h2
            className="text-4xl md:text-6xl mb-8 leading-tight"
            style={{ color: "#F5EDE4", fontFamily: "Playfair Display, serif" }}
          >
            Reserve Your Table Tonight
          </h2>
          <p
            className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
            style={{ color: "#E8DDD1", fontFamily: "Source Sans Pro, sans-serif" }}
          >
            Experience the warmth of Italian hospitality and the flavors of Tuscany. We look forward to welcoming you to our table.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="px-12 py-6 text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: "#C4553D", color: "#F5EDE4" }}
            >
              <a href="https://www.opentable.com" target="_blank" rel="noopener noreferrer">
                Book on OpenTable
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="px-12 py-6 text-sm tracking-widest uppercase transition-all duration-300 border-2"
              style={{ borderColor: "#F5EDE4", color: "#F5EDE4", backgroundColor: "transparent" }}
            >
              <a href="#contact">Private Events</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32" style={{ backgroundColor: "#E8DDD1" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            {/* Contact Info */}
            <div>
              <p
                className="text-sm tracking-[0.3em] uppercase mb-4"
                style={{ color: "#C4553D", fontFamily: "Source Sans Pro, sans-serif" }}
              >
                Visit Us
              </p>
              <h2
                className="text-4xl md:text-5xl mb-8"
                style={{ color: "#2C2420", fontFamily: "Playfair Display, serif" }}
              >
                Get in Touch
              </h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: "#C4553D" }} />
                  <div>
                    <p
                      className="font-medium mb-1"
                      style={{ color: "#2C2420", fontFamily: "Source Sans Pro, sans-serif" }}
                    >
                      Location
                    </p>
                    <p
                      className="leading-relaxed"
                      style={{ color: "#8B7355", fontFamily: "Source Sans Pro, sans-serif" }}
                    >
                      New York City<br />
                      Manhattan
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: "#C4553D" }} />
                  <div>
                    <p
                      className="font-medium mb-1"
                      style={{ color: "#2C2420", fontFamily: "Source Sans Pro, sans-serif" }}
                    >
                      Hours
                    </p>
                    <p
                      className="leading-relaxed"
                      style={{ color: "#8B7355", fontFamily: "Source Sans Pro, sans-serif" }}
                    >
                      Dinner: Nightly<br />
                      Brunch: Weekends
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: "#C4553D" }} />
                  <div>
                    <p
                      className="font-medium mb-1"
                      style={{ color: "#2C2420", fontFamily: "Source Sans Pro, sans-serif" }}
                    >
                      Email
                    </p>
                    <a
                      href="mailto:info@bellacucinanyc.com"
                      className="transition-colors duration-300 hover:opacity-80"
                      style={{ color: "#8B7355", fontFamily: "Source Sans Pro, sans-serif" }}
                    >
                      info@bellacucinanyc.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                {[
                  { icon: Instagram, label: "Instagram" },
                  { icon: Facebook, label: "Facebook" },
                  { icon: Twitter, label: "Twitter" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="p-3 transition-all duration-300 hover:opacity-80"
                    style={{ backgroundColor: "#2C2420" }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" style={{ color: "#F5EDE4" }} />
                  </a>
                ))}
              </div>
            </div>

            {/* Private Dining Form */}
            <div
              className="p-8 md:p-12"
              style={{ backgroundColor: "#F5EDE4" }}
            >
              <h3
                className="text-2xl md:text-3xl mb-6"
                style={{ color: "#2C2420", fontFamily: "Playfair Display, serif" }}
              >
                Private Dining Inquiry
              </h3>
              <p
                className="mb-8"
                style={{ color: "#8B7355", fontFamily: "Source Sans Pro, sans-serif" }}
              >
                Planning a special celebration? Our private dining room is perfect for intimate gatherings and corporate events.
              </p>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    placeholder="Your Name"
                    className="py-6 px-4 border-0"
                    style={{ backgroundColor: "#E8DDD1", color: "#2C2420" }}
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="py-6 px-4 border-0"
                    style={{ backgroundColor: "#E8DDD1", color: "#2C2420" }}
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    placeholder="Event Date"
                    className="py-6 px-4 border-0"
                    style={{ backgroundColor: "#E8DDD1", color: "#2C2420" }}
                  />
                  <Input
                    type="text"
                    placeholder="Number of Guests"
                    className="py-6 px-4 border-0"
                    style={{ backgroundColor: "#E8DDD1", color: "#2C2420" }}
                  />
                </div>
                <Textarea
                  placeholder="Tell us about your event..."
                  rows={4}
                  className="px-4 py-4 border-0 resize-none"
                  style={{ backgroundColor: "#E8DDD1", color: "#2C2420" }}
                />
                <Button
                  type="submit"
                  className="w-full py-6 text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-90"
                  style={{ backgroundColor: "#C4553D", color: "#F5EDE4" }}
                >
                  Submit Inquiry
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 md:py-20" style={{ backgroundColor: "#2C2420" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <Link
                href="/"
                className="text-3xl mb-6 inline-block"
                style={{ color: "#F5EDE4", fontFamily: "Playfair Display, serif" }}
              >
                Bella Cucina
              </Link>
              <p
                className="text-base leading-relaxed max-w-md mb-6"
                style={{ color: "#8B7355", fontFamily: "Source Sans Pro, sans-serif" }}
              >
                Authentic Italian cuisine in the heart of New York City. Traditional Tuscan recipes, wood fired pizzas, and handmade pasta in a warm, rustic atmosphere.
              </p>
              <div className="flex gap-4">
                {[Instagram, Facebook, Twitter].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="p-2 transition-all duration-300 hover:opacity-80"
                    aria-label="Social media"
                  >
                    <Icon className="w-5 h-5" style={{ color: "#8B7355" }} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4
                className="text-sm tracking-widest uppercase mb-6"
                style={{ color: "#F5EDE4", fontFamily: "Source Sans Pro, sans-serif" }}
              >
                Quick Links
              </h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-base transition-colors duration-300 hover:opacity-80"
                      style={{ color: "#8B7355", fontFamily: "Source Sans Pro, sans-serif" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4
                className="text-sm tracking-widest uppercase mb-6"
                style={{ color: "#F5EDE4", fontFamily: "Source Sans Pro, sans-serif" }}
              >
                Reservations
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://www.opentable.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base transition-colors duration-300 hover:opacity-80"
                    style={{ color: "#8B7355", fontFamily: "Source Sans Pro, sans-serif" }}
                  >
                    Book on OpenTable
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-base transition-colors duration-300 hover:opacity-80"
                    style={{ color: "#8B7355", fontFamily: "Source Sans Pro, sans-serif" }}
                  >
                    Private Events
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@bellacucinanyc.com"
                    className="text-base transition-colors duration-300 hover:opacity-80"
                    style={{ color: "#8B7355", fontFamily: "Source Sans Pro, sans-serif" }}
                  >
                    Email Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4"
            style={{ borderColor: "#8B7355", borderTopWidth: "1px", opacity: 0.3 }}
          >
            <p
              className="text-sm"
              style={{ color: "#8B7355", fontFamily: "Source Sans Pro, sans-serif" }}
            >
              © {new Date().getFullYear()} Bella Cucina. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm transition-colors duration-300 hover:opacity-80"
                style={{ color: "#8B7355", fontFamily: "Source Sans Pro, sans-serif" }}
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm transition-colors duration-300 hover:opacity-80"
                style={{ color: "#8B7355", fontFamily: "Source Sans Pro, sans-serif" }}
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
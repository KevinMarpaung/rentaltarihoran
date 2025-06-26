import React, { useState, useEffect, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Car,
  Star,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Users,
  Shield,
  Clock,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";

// Animation variants
// const fadeInUp = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: "easeOut",
//     },
//   },
// };

const infiniteScroll = {
  animate: {
    x: [0, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export default function CarRentalLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  const cars = [
    {
      id: 1,
      name: "Toyota Avanza",
      price: "500.000",
      image: "/avanza.jpg",
      seats: 5,
      transmission: "Manual",
      fuel: "Bensin",
    },
    {
      id: 2,
      name: "Toyota Hiace ",
      price: "1.300.000",
      image: "/hiace1.jpeg",
      seats: 10,
      transmission: "Automatic",
      fuel: "Bensin",
    },
    {
      id: 3,
      name: "Mitsubishi Xpander",
      price: "500.000",
      image: "/xpander.jpg",
      seats: 5,
      transmission: "Manual",
      fuel: "Bensin",
    },
    {
      id: 4,
      name: "Toyota Fortuner",
      price: "1,200.000",
      image: "/fortuner.jpg",
      seats: 5,
      transmission: "Automatic",
      fuel: "Diesel",
    },
    {
      id: 5,
      name: "Pajero Sport",
      price: "1.200.000",
      image: "/pajero.jpeg",
      seats: 5,
      transmission: "Automatic",
      fuel: "Bensin",
    },
    {
      id: 6,
      name: "Toyota Innova Reborn",
      price: "600.000",
      image: "/innova.jpg",
      seats: 5,
      transmission: "Manual",
      fuel: "Diesel",
    },
  ];

  const testimonials = [
    {
      name: "Tigor Sinaga",
      rating: 6,
      comment:
        "Pelayanan rental mobil ini sangat luar biasa! Mobilnya bersih, nyaman, dan stafnya sangat ramah!",
    },
    {
      name: "Maria Sihombing",
      rating: 4,
      comment:
        "Pengalaman terbaik menyewa mobil. Prosesnya mudah, dan kendaraannya dalam kondisi prima",
    },
    {
      name: "Sahat Marpaung",
      rating: 3,
      comment:
        "Harga terjangkau dengan pelayanan premium. Saya sangat puas dengan layanan mereka!",
    },
    {
      name: "Anita Pardede",
      rating: 5,
      comment:
        "Rental mobil ini menjadi pilihan utama saya untuk perjalanan keluarga. Sangat direkomendasikan!",
    },
    {
      name: "Hotman Tambunan",
      rating: 6,
      comment:
        "Sopirnya profesional dan sangat membantu. Terima kasih atas pelayanan yang luar biasa!",
    },
    {
      name: "Duma Sitompul",
      rating: 6,
      comment:
        "Terbaik di kelasnya! Saya tidak akan ragu untuk kembali menggunakan jasa mereka!",
    },
    {
      name: "Roy Sitohang",
      rating: 3,
      comment:
        "Sistem penyewaan yang mudah dan mobilnya sangat nyaman. Tidak ada kendala sama sekali!",
    },
    {
      name: "Lumban Siagian",
      rating: 5,
      comment:
        "Mobilnya sangat irit bahan bakar dan cocok untuk perjalanan jauh. Sungguh pengalaman yang memuaskan!",
    },
    {
      name: "Rita Pangaribuan",
      rating: 4,
      comment:
        "Pilihan mobilnya banyak dan semua dalam kondisi bagus. Staffnya sangat membantu!",
    },
    {
      name: "Davin Hutabarat",
      rating: 5,
      comment:
        "Rental mobil yang paling jujur dan terpercaya. Prosesnya cepat dan praktis!",
    },
    {
      name: "Tiur Nababan",
      rating: 5,
      comment:
        "Sangat puas dengan pelayanan yang diberikan. Mobilnya bersih dan nyaman digunakan!",
    },
    {
      name: "Marselina Simatupang",
      rating: 3,
      comment:
        "Tidak ada yang mengalahkan kenyamanan dan pelayanan dari rental ini. Mantap!",
    },
    {
      name: "Jonatan Samosir",
      rating: 5,
      comment:
        "Pelayanan 24 jam mereka sangat membantu saat saya membutuhkan mobil mendadak!",
    },
    {
      name: "Angelina Tamba",
      rating: 4,
      comment:
        "Rental mobil yang paling profesional di kota ini. Tidak akan mencari yang lain lagi!",
    },
    {
      name: "Herman Saragih",
      rating: 5,
      comment:
        "Luar biasa! Mobilnya seperti baru dan perjalanan saya jadi menyenangkan!",
    },
    {
      name: "Margaretha Hutapea",
      rating: 4,
      comment: "Rekomendasi saya untuk semua orang. Mobilnya aman dan nyaman!",
    },
    {
      name: "Budi Santoso",
      rating: 5,
      comment:
        "Pelayanan sangat memuaskan, mobil bersih dan terawat. Recommended!",
    },
    {
      name: "Sari Dewi",
      rating: 4,
      comment:
        "Proses sewa mudah dan cepat. Harga terjangkau dengan kualitas terbaik.",
    },
    {
      name: "Ahmad Rahman",
      rating: 4,
      comment:
        "Sudah beberapa kali sewa disini, selalu puas dengan pelayanannya.",
    },
    {
      name: "Dewi Lestari",
      rating: 3,
      comment: "Armada terawat dan kondisi mobil sangat bagus. Puas!",
    },
    {
      name: "Rudi Hartono",
      rating: 4,
      comment: "Harga bersaing dan pelayanan ramah. Akan sewa lagi nanti.",
    },
    {
      name: "Munir Manurung",
      rating: 4,
      comment: "Mantap Banget Pelayannya.",
    },
    {
      name: "Anita Wulandari",
      rating: 5,
      comment: "Respon cepat dan proses sewa sangat mudah. Terima kasih!",
    },
  ];

  const phoneNumber = "6281361276796";
  const message = "Halo, saya tertarik untuk menyewa mobil.";

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Navigation */}
      <motion.nav
        className="bg-white/90 backdrop-blur-md shadow-lg fixed w-full z-50 transition-all duration-300"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                TarihoranRentalMobilMedan
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Beranda
              </a>
              <a
                href="#cars"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Mobil
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Layanan
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Testimoni
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Kontak
              </a>
              <button
                onClick={() =>
                  window.open(
                    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                      message
                    )}`,
                    "_blank"
                  )
                }
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Sewa Sekarang
              </button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#home"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Beranda
              </a>
              <a
                href="#cars"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Mobil
              </a>
              <a
                href="#services"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Layanan
              </a>
              <a
                href="#testimonials"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Testimoni
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Kontak
              </a>
            </div>
          </div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        id="home"
        className="pt-20 pb-16 px-4 sm:px-8 md:px-16"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={staggerContainer}
        ref={ref}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <motion.div className="space-y-8" variants={staggerContainer}>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                    Sewa Mobil
                  </span>
                  <br />
                  <span className="text-gray-800">Terpercaya & Terjangkau</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Dapatkan mobil berkualitas dengan harga terbaik untuk
                  perjalanan Anda. Proses mudah, cepat, dan terpercaya.
                </p>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                variants={staggerContainer}
              >
                <button
                  onClick={() =>
                    window.open(
                      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                        message
                      )}`,
                      "_blank"
                    )
                  }
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 flex items-center justify-center group"
                >
                  Mulai Sewa Mobil
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => (window.location.href = "#cars")}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-blue-600 hover:text-blue-600 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  Lihat Katalog
                </button>
              </motion.div>

              <motion.div
                className="grid grid-cols-3 gap-8 pt-8"
                variants={staggerContainer}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">100+</div>
                  <div className="text-gray-600">Mobil Tersedia</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">
                    1000+
                  </div>
                  <div className="text-gray-600">Pelanggan Puas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">24/7</div>
                  <div className="text-gray-600">Layanan</div>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="relative z-10 bg-white rounded-3xl shadow-2xl p-8"
                whileHover={{ rotate: 0, scale: 1.02 }}
                initial={{ rotate: 3 }}
                transition={{ type: "spring", stiffness: 100, damping: 10 }}
              >
                <div className="text-8xl text-center mb-4">
                  <img src="/cars.png" alt="Car" />
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold text-gray-800">
                    Booking Instan
                  </h3>
                  <p className="text-gray-600">
                    Pesan mobil hanya dalam 3 menit
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-20"
                animate={{
                  y: [0, -30, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Cars Section */}
      <motion.section
        id="cars"
        className="py-20 bg-white px-4 sm:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Pilihan Mobil{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Terbaik
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Berbagai jenis mobil berkualitas siap menemani perjalanan Anda
            </p>
          </div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {cars.map((car) => (
              <motion.div
                key={car.id}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden group"
                variants={item}
                whileHover={{ y: -15, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div className="p-6">
                  <div className="text-6xl text-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full lg:h-64 p-6 object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {car.name}
                  </h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">
                    Rp {car.price}
                    <span className="text-lg text-gray-500">/hari</span>
                  </div>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{car.seats} Penumpang</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Car className="h-4 w-4 mr-2" />
                      <span>{car.transmission}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="mr-2">⛽</span>
                      <span>{car.fuel}</span>
                    </div>
                  </div>

                  <button
                    onClick={() =>
                      window.open(
                        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                          message
                        )}`,
                        "_blank"
                      )
                    }
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Sewa Sekarang
                  </button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        id="services"
        className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Mengapa Pilih{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                TarihoranRentalMobilMedan?
              </span>
            </h2>
          </div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              className="text-center group"
              variants={item}
              whileHover={{ y: -15 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-lg h-full flex flex-col"
                whileHover={{
                  y: -15,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Clock className="h-8 w-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  24/7 Service
                </h3>
                <p className="text-gray-600">
                  Layanan pelanggan siap membantu Anda kapan saja
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              className="text-center group"
              variants={item}
              whileHover={{ y: -15 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-lg h-full flex flex-col"
                whileHover={{
                  y: -15,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="bg-gradient-to-br from-green-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Shield className="h-8 w-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Asuransi Lengkap
                </h3>
                <p className="text-gray-600">
                  Perlindungan menyeluruh untuk keamanan perjalanan
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              className="text-center group"
              variants={item}
              whileHover={{ y: -15 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-lg h-full flex flex-col"
                whileHover={{
                  y: -15,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="bg-gradient-to-br from-purple-500 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Calendar className="h-8 w-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Booking Mudah
                </h3>
                <p className="text-gray-600">
                  Reservasi online yang cepat dan praktis
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              className="text-center group"
              variants={item}
              whileHover={{ y: -15 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-lg h-full flex flex-col"
                whileHover={{
                  y: -15,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="bg-gradient-to-br from-orange-500 to-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Star className="h-8 w-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Kualitas Terjamin
                </h3>
                <p className="text-gray-600">
                  Mobil terawat dan selalu dalam kondisi prima
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        id="testimonials"
        className="py-20 bg-white overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Kata{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Pelanggan
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Apa kata mereka yang sudah mencoba layanan kami
            </p>
          </div>

          <div className="relative overflow-x-hidden py-8">
            <motion.div
              className="flex space-x-8"
              variants={infiniteScroll}
              animate="animate"
            >
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-80 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 shadow-lg"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "{testimonial.comment}"
                  </p>
                  <h4 className="font-bold text-gray-800">
                    {testimonial.name}
                  </h4>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Location Section */}
      <motion.section
        id="location"
        className="py-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Lokasi{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Kami
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kunjungi kantor kami di Medan untuk mendapatkan pelayanan terbaik
            </p>
          </div>

          <motion.div
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="h-[500px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127430.05030787903!2d98.5977056!3d3.5628129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30312f04cb0bc177%3A0x3b5e57ca56318f71!2sPerumahan%20Srigunting%20Residence!5e0!3m2!1sid!2sid!4v1718532944502"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Lokasi RentalKu di Medan"
              ></iframe>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Kantor Pusat
              </h3>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <p>Perumahan Srigunting Blok J No 59, Medan, Sumatra Utara</p>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-600 mr-3" />
                  <p>+62 813-6127-6796</p>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-600 mr-3" />
                  <p>tarihoranrenltalmobilmedan@gmail.com</p>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-blue-600 mr-3" />
                  <p>Buka Setiap Hari: 08.00 - 21.00 WIB</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Hubungi{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Kami
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Siap membantu perjalanan Anda
            </p>
          </div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              className="text-center group"
              variants={item}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 h-full"
                whileHover={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  scale: 1.03,
                }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 500 }}
                >
                  <Phone className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                </motion.div>
                <h3 className="text-xl font-bold mb-2">Telepon</h3>
                <p className="text-gray-300">+62-813-6127-6796</p>
              </motion.div>
            </motion.div>

            <motion.div
              className="text-center group"
              variants={item}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 h-full"
                whileHover={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  scale: 1.03,
                }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 500 }}
                >
                  <Mail className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                </motion.div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-gray-300">
                  tarihoranrenltalmobilmedan@gmail.com
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              className="text-center group"
              variants={item}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 h-full"
                whileHover={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  scale: 1.03,
                }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 500 }}
                >
                  <MapPin className="h-12 w-12 text-green-400 mx-auto mb-4" />
                </motion.div>
                <h3 className="text-xl font-bold mb-2">Alamat</h3>
                <p className="text-gray-300">
                  Perumahan Srigunting Blok J No.59, Medan
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Car className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">
                TarihoranRentalMobilMedan
              </span>
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 TarihoranRentalMobilMedan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}

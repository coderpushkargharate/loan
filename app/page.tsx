"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import { 
  Clock, 
  Percent, 
  Shield, 
  Star, 
  Phone,
  MessageCircle,
  CheckCircle,
  User,
  ChevronDown,
  ArrowRight
} from "lucide-react";

export default function Home() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    loanType: ""
  });
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We will call you shortly.");
    setFormData({ fullName: "", mobileNumber: "", loanType: "" });
  };

  const testimonials = [
    {
      name: "Priya S., Cuttack",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      text: "Got my car loan approved in just 1 day. Great service!"
    },
    {
      name: "Rahul K., Bhubaneswar",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      text: "Quick process, minimum paperwork. Highly recommended."
    },
    {
      name: "Anjali P., Puri",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      text: "Very good support throughout the loan process."
    }
  ];

  const loanProducts = [
    {
      title: "Car Loan",
      description: "Get loan up to 90% of your car value with low interest.",
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400&h=300&fit=crop",
      link: "/car-loan"
    },
    {
      title: "Personal Loan",
      description: "Get up to ₹25 Lakhs for your personal needs.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
      link: "/personal-loan"
    },
    {
      title: "Loan Against Property",
      description: "Get loan up to 75% of your property value.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
      link: "/property-loan"
    },
    {
      title: "Balance Transfer",
      description: "Transfer your existing loan and save on interest.",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=300&fit=crop",
      link: "/balance-transfer"
    }
  ];

  const bankLogos = [
    "/banks/AU-Small-Finance-Bank.webp",
    "/banks/Axis_Bank_logo.svg.png",
    "/banks/Bajaj-Finsery-Logo.png",
    "/banks/chola-logo.jpg",
    "/banks/Tata-Capital.png",
    "/banks/HDB.png",
    "/banks/boi.png",
    "/banks/Hero-Fincorp.png",
    "/banks/ICICI-Bank-logo.png",
    "/banks/IDFC-logo.png",
    "/banks/Kotak_Mahindra_Bank_logo.png",
    "/banks/Mahindra_Finance_Logo.png",
    "/banks/Piramal-Logo.png",
    "/banks/esaf-seeklogo.png",
    "/banks/aditya_birla_camptal-removebg-preview.png",
    "/banks/arka-removebg-preview.png",
    "/banks/dcb_bank-removebg-preview.png",
    "/banks/Poonamwalla-Fincorp-removebg-preview.png",
  ].filter(Boolean);

  const bankingPartners = bankLogos.map((logo, index) => ({
    name: `Bank Partner ${index + 1}`,
    logo: logo
  }));

  return (
    <div className="min-h-screen bg-white pt-16 sm:pt-20 lg:pt-24">
      
      {/* ✅ Use the imported Header component */}
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-6 sm:pt-8 pb-12 sm:pb-16 overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-40 -right-40 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* 📱 MOBILE LAYOUT: Vertical Stack - Heading → Car Image → Content → Form */}
          <div className="lg:hidden">
            
            {/* 1️⃣ Heading - Mobile */}
            <div className=" mb-4">
              <h1 className="text-3xl font-bold text-gray-900 leading-tight">
                Get Loan Approved in{" "}
                <span className="text-blue-600">24 Hours in Odisha</span>
              </h1>
            </div>

            {/* 2️⃣ Car Image - Mobile: Centered below heading */}
            <div className="flex justify-center mb-5">
              <img 
                src="/homebanner/image.png" 
                alt="Car Loan" 
                className="w-48 h-auto object-contain drop-shadow-lg"
              />
            </div>

            {/* 3️⃣ Remaining Content - Mobile: Badges, features, text */}
            <div className="space-y-4 text-center mb-6">
              
              <div className="flex items-center justify-center space-x-2 bg-green-50 w-fit mx-auto px-3 py-1.5 rounded-full">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="font-semibold text-xs text-green-700">LOAN APPROVED IN 24 HOURS*</span>
              </div>

              <div className="flex flex-wrap justify-center gap-3 text-xs">
                <div className="flex items-center space-x-1.5">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Hassle-free process</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Low interest rates</span>
                </div>
              </div>

              <p className="text-gray-600 font-medium text-sm">Trusted by 10,000+ customers</p>

              {/* Features - Mobile */}
              <div className="grid grid-cols-3 gap-2">
                <div className="text-center p-3 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="w-9 h-9 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-1.5">
                    <Clock className="w-4 h-4 text-blue-600" />
                  </div>
                  <p className="text-xs font-semibold text-gray-800">Quick Approval</p>
                </div>
                <div className="text-center p-3 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="w-9 h-9 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-1.5">
                    <Percent className="w-4 h-4 text-blue-600" />
                  </div>
                  <p className="text-xs font-semibold text-gray-800">Lowest Rates</p>
                </div>
                <div className="text-center p-3 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="w-9 h-9 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-1.5">
                    <Shield className="w-4 h-4 text-blue-600" />
                  </div>
                  <p className="text-xs font-semibold text-gray-800">100% Secure</p>
                </div>
              </div>
            </div>

            {/* 4️⃣ Form - Mobile: Full width at bottom */}
            <div className="w-full bg-blue-900 rounded-2xl p-5 text-white shadow-2xl">
              <div className="text-center mb-4">
                <h3 className="text-sm font-bold mb-1">Check Eligibility in <span className="text-orange-400">30 Sec</span></h3>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-3">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    required
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    value={formData.mobileNumber}
                    onChange={(e) => setFormData({...formData, mobileNumber: e.target.value})}
                    className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    required
                  />
                </div>

                <div className="relative">
                  <select
                    value={formData.loanType}
                    onChange={(e) => setFormData({...formData, loanType: e.target.value})}
                    className="w-full pl-3 pr-8 py-2.5 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none text-sm"
                    required
                  >
                    <option value="">Select Loan Type</option>
                    <option value="car">Car Loan</option>
                    <option value="personal">Personal Loan</option>
                    <option value="property">Loan Against Property</option>
                    <option value="business">Business Loan</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none">
                    <ChevronDown className="h-4 w-4 text-gray-400" />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 rounded-lg transition duration-300 shadow-lg text-sm"
                >
                  Get Instant Callback
                </button>

                <div className="flex items-center justify-center space-x-1.5 text-xs text-green-300">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Your details are 100% safe.</span>
                </div>
              </form>
            </div>
          </div>

          {/* 💻 LARGE SCREEN LAYOUT: Keep original design exactly as is */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
            
            {/* Left Content - Large */}
            <div className="space-y-6 text-left ">
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                Get Loan Approved in{" "}
                <span className="text-blue-600">24 Hours in Odisha</span>
              </h1>

              <div className="flex items-center space-x-2 bg-green-50 w-fit px-4 py-2 rounded-full">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-sm text-green-700">LOAN APPROVED IN 24 HOURS*</span>
              </div>

              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Hassle-free process</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Low interest rates</span>
                </div>
              </div>

              <p className="text-gray-600 font-medium">Trusted by 10,000+ customers</p>

              {/* Features - Large */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <p className="text-sm font-semibold text-gray-800">Quick Approval</p>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Percent className="w-6 h-6 text-blue-600" />
                  </div>
                  <p className="text-sm font-semibold text-gray-800">Lowest Interest Rates</p>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <p className="text-sm font-semibold text-gray-800">100% Secure Process</p>
                </div>
              </div>
            </div>

            {/* Right Content - Large: Absolute positioned image + form */}
            <div className="relative h-[600px]">
              {/* Car Image - Large: Absolute */}
              <div className="absolute right-92 bottom-39 w-110 z-10">
                <img 
                  src="/homebanner/image.png" 
                  alt="Car Loan" 
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>

              {/* Form - Large: Absolute */}
              <div className="absolute right-0 top-0 w-96 bg-blue-900 rounded-2xl p-8 text-white shadow-2xl z-20">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-bold mb-1">Check Your Loan Eligibility in <span className="text-orange-400">30 Sec</span></h3>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
                      required
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      placeholder="Mobile Number"
                      value={formData.mobileNumber}
                      onChange={(e) => setFormData({...formData, mobileNumber: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
                      required
                    />
                  </div>

                  <div className="relative">
                    <select
                      value={formData.loanType}
                      onChange={(e) => setFormData({...formData, loanType: e.target.value})}
                      className="w-full pl-4 pr-10 py-3 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none text-base"
                      required
                    >
                      <option value="">Select Loan Type</option>
                      <option value="car">Car Loan</option>
                      <option value="personal">Personal Loan</option>
                      <option value="property">Loan Against Property</option>
                      <option value="business">Business Loan</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition duration-300 shadow-lg text-base"
                  >
                    Get Instant Callback
                  </button>

                  <div className="flex items-center justify-center space-x-2 text-sm text-green-300">
                    <Shield className="w-4 h-4" />
                    <span>Your details are 100% safe with us.</span>
                  </div>
                </form>
              </div>
            </div>
            
          </div>

          {/* Google Review Badge - Full Width in Hero Section */}
          <div className="max-w-[85rem] mx-auto mt-5 lg:mt-0 px-4 sm:px-6 lg:px-0 mt-0 lg:mt-[-135px] w-full">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 w-full">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 w-full">
                <p className="text-gray-800 font-semibold text-center sm:text-left text-sm sm:text-base">Trusted by 10,000+ Customers Across Odisha</p>
                <div className="flex items-center space-x-2 sm:space-x-3 bg-gray-50 rounded-lg px-3 sm:px-4 py-2">
                  <span className="text-lg sm:text-xl font-bold text-blue-600">Google</span>
                  <div className="flex items-center">
                    <span className="font-bold text-gray-800 mr-1 sm:mr-2 text-sm sm:text-base">4.8</span>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-gray-600 text-xs sm:text-sm ml-1 sm:ml-2">(1200+ Reviews)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
        </div>

        
        {/* Testimonials - SM: 1 column, MD: 3 columns */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-blue-100 flex-shrink-0"
                  />
                  <div>
                    <p className="text-gray-700 text-xs sm:text-sm mb-2 leading-relaxed">"{testimonial.text}"</p>
                    <p className="text-gray-900 font-semibold text-xs sm:text-sm">- {testimonial.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

         {/* Banking Partners Carousel */}
        <div className="w-full px-4 py-4 sm:py-5 lg:py-7">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2 sm:mb-4">
              <div className="h-[2px] w-12 sm:w-16 md:w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
              <h2 className="text-base sm:text-lg md:text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Our Banking Partners
              </h2>
              <div className="h-[2px] w-10 sm:w-12 md:w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl lg:py-2 shadow-lg overflow-hidden">
              <div className="relative overflow-hidden py-2 lg:py-4">
                <div className="flex animate-scroll space-x-3 sm:space-x-4 md:space-x-6" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  <style>{`
                    .scrollbar-hide::-webkit-scrollbar {
                      display: none;
                    }
                    @keyframes scroll {
                      0% { transform: translateX(0); }
                      100% { transform: translateX(calc(-120px * ${bankingPartners.length})); }
                    }
                    @media (min-width: 640px) {
                      @keyframes scroll {
                        100% { transform: translateX(calc(-140px * ${bankingPartners.length})); }
                      }
                    }
                    @media (min-width: 1024px) {
                      @keyframes scroll {
                        100% { transform: translateX(calc(-160px * ${bankingPartners.length})); }
                      }
                    }
                    .animate-scroll {
                      animation: scroll 45s linear infinite;
                      width: calc(120px * ${bankingPartners.length * 2});
                    }
                    @media (min-width: 640px) {
                      .animate-scroll {
                        width: calc(140px * ${bankingPartners.length * 2});
                      }
                    }
                    @media (min-width: 1024px) {
                      .animate-scroll {
                        width: calc(160px * ${bankingPartners.length * 2});
                      }
                    }
                    .animate-scroll:hover {
                      animation-play-state: paused;
                    }
                  `}</style>
                  {[...bankingPartners, ...bankingPartners].map((partner, index) => (
                    <div key={index} className="flex-shrink-0 w-28 sm:w-32 md:w-36 lg:w-40 h-14 sm:h-16 md:h-20 lg:h-24 bg-gradient-to-br from-white to-blue-50/50 rounded-xl p-2 sm:p-3 flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-blue-100/30">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-w-full max-h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
                <div className="absolute top-0 left-0 bottom-0 w-8 sm:w-12 md:w-16 bg-gradient-to-r from-white/50 to-transparent pointer-events-none"></div>
                <div className="absolute top-0 right-0 bottom-0 w-8 sm:w-12 md:w-16 bg-gradient-to-l from-white/50 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Loan Products - SM: 1 col, MD: 2 cols, LG: 4 cols */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 mb-12 sm:mb-16">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">Explore Our Loan Products</h2>
            <p className="text-gray-600 text-sm sm:text-base">Choose the best loan for your needs and get instant approval</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {loanProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="h-40 sm:h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">{product.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">{product.description}</p>
                  <Link href={product.link} className="text-blue-600 font-medium text-xs sm:text-sm flex items-center hover:text-blue-700 transition">
                    Learn More <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4-Step Process - SM: 1/2 cols, MD: 4 cols */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 mb-16 sm:mb-24">
          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-lg border border-gray-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-10">Our Simple 4-Step Process</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {[
                { step: 1, title: "Apply", desc: "Fill quick application form", icon: "📝" },
                { step: 2, title: "Get a Call", desc: "Our expert will contact you", icon: "📞" },
                { step: 3, title: "Approval", desc: "Get quick loan approval", icon: "✅" },
                { step: 4, title: "Disbursement", desc: "Receive funds in your account", icon: "💰" }
              ].map((item, index) => (
                <div key={index} className="text-center relative">
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-200 to-blue-300"></div>
                  )}
                  <div className="relative z-10">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-2xl sm:text-3xl">
                      {item.icon}
                    </div>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 font-bold text-xs sm:text-sm">
                      {item.step}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1 sm:mb-2 text-xs sm:text-base">{item.title}</h3>
                    <p className="text-xs text-gray-600 px-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </section>

      {/* Bottom CTA - SM: Better spacing */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-2xl p-3 sm:p-4 z-50">
        <div className="max-w-7xl mx-auto flex justify-center gap-2 sm:gap-4">
          <button className="flex-1 max-w-xs bg-blue-600 text-white py-2.5 sm:py-3 rounded-full font-semibold flex items-center justify-center space-x-1.5 sm:space-x-2 hover:bg-blue-700 transition shadow-lg text-xs sm:text-sm">
            <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Call Now</span>
          </button>
          <button className="flex-1 max-w-xs bg-green-500 text-white py-2.5 sm:py-3 rounded-full font-semibold flex items-center justify-center space-x-1.5 sm:space-x-2 hover:bg-green-600 transition shadow-lg text-xs sm:text-sm">
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>WhatsApp</span>
          </button>
          <button className="flex-1 max-w-xs bg-orange-500 text-white py-2.5 sm:py-3 rounded-full font-semibold hover:bg-orange-600 transition shadow-lg text-xs sm:text-sm">
            Apply Now
          </button>
        </div>
      </div>

      {/* Spacer for fixed bottom bar */}
      <div className="h-16 sm:h-20 lg:h-24"></div>
    </div>
  );
}
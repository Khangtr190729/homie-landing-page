import { MapPin, Search } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <div className="flex flex-col gap-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage/20 text-forest font-medium w-fit animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-forest opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-forest"></span>
              </span>
              Nền tảng tìm nơi ở số 1
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-forest leading-[1.15] tracking-tight animate-in fade-in slide-in-from-bottom-5 duration-700 delay-150">
              Tìm nơi ở <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest to-sage">phù hợp dễ dàng</span> <br/>
              cùng Homie
            </h1>
            
            <p className="text-lg md:text-xl text-charcoal/70 max-w-lg leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
              Tìm kiếm nơi ở, khám phá khu vực, đánh giá lựa chọn và kết nối các dịch vụ hỗ trợ cuộc sống - tất cả trong một ứng dụng.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-7 duration-700 delay-500 mt-4">
              <button className="flex items-center justify-center gap-3 bg-charcoal text-white px-8 py-3.5 rounded-xl hover:bg-black transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                <div className="flex flex-col items-start">
                  <span className="text-[10px] uppercase font-semibold text-white/70">Download on the</span>
                  <span className="text-lg font-bold leading-tight">App Store</span>
                </div>
              </button>
              <button className="flex items-center justify-center gap-3 bg-white text-charcoal border border-charcoal/10 px-8 py-3.5 rounded-xl hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                <div className="flex flex-col items-start">
                  <span className="text-[10px] uppercase font-semibold text-charcoal/70">GET IT ON</span>
                  <span className="text-lg font-bold leading-tight">Google Play</span>
                </div>
              </button>
            </div>
          </div>

          <div className="relative z-10 animate-in fade-in zoom-in-95 duration-1000 delay-300 lg:ml-10">
            {/* Abstract representation of phone UI since we don't have real assets */}
            <div className="relative mx-auto w-full max-w-[320px] aspect-[9/19] bg-white rounded-[40px] shadow-2xl border-[8px] border-charcoal overflow-hidden flex flex-col">
              <div className="absolute top-0 w-full h-7 bg-charcoal rounded-b-3xl z-20 flex justify-center">
                 <div className="w-1/3 h-4 bg-black rounded-b-xl"></div>
              </div>
              
              <div className="flex-1 bg-ivory/50 flex flex-col pt-12 p-4 gap-4">
                <div className="bg-white rounded-2xl p-3 shadow-sm flex items-center gap-3 border border-sage/20">
                  <Search className="w-5 h-5 text-sage" />
                  <div className="h-4 bg-gray-100 rounded w-1/2"></div>
                </div>
                
                <div className="flex-1 bg-white rounded-2xl shadow-sm border border-sage/20 overflow-hidden relative">
                  <div className="absolute inset-0 bg-sage/10">
                     {/* Map dots */}
                     <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-forest rounded-full border-2 border-white shadow-md"></div>
                     <div className="absolute top-1/2 left-2/3 w-3 h-3 bg-forest rounded-full border-2 border-white shadow-md"></div>
                     <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-sand rounded-full border-2 border-white shadow-lg animate-pulse"></div>
                  </div>
                  
                  {/* Floating card on map */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl p-3 shadow-lg">
                    <div className="w-full h-24 bg-gray-200 rounded-lg mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-100 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative background shapes */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-sage/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-sand/20 rounded-full blur-3xl -z-10"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;

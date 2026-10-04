import { Map, Navigation, Compass } from 'lucide-react';

const MapSearchSection = () => {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden" id="features">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <h2 className="text-3xl md:text-5xl font-bold text-forest leading-tight">
              Tìm nơi ở ngay <br/>trên bản đồ
            </h2>
            
            <p className="text-lg text-charcoal/70 leading-relaxed mb-4">
              Không còn phải vất vả tra cứu từng con đường. Homie mang đến trải nghiệm tìm kiếm trực quan ngay trên bản đồ tương tác.
            </p>
            
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sage/15 flex items-center justify-center flex-shrink-0 mt-1 text-forest">
                  <Navigation className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-2">Khám phá khu vực xung quanh</h3>
                  <p className="text-charcoal/70">Dễ dàng xem các tiện ích xung quanh như chợ, trường học, trạm xe buýt chỉ với vài thao tác.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sage/15 flex items-center justify-center flex-shrink-0 mt-1 text-forest">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-2">So sánh vị trí thông minh</h3>
                  <p className="text-charcoal/70">Tìm kiếm các địa điểm tối ưu, cân bằng khoảng cách giữa nơi học tập và làm việc của bạn.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl bg-ivory shadow-xl overflow-hidden border border-black/5">
              {/* Map mockup */}
              <div className="absolute inset-0 bg-sage/5">
                {/* Decorative map lines */}
                <svg className="absolute w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0,50 Q100,100 200,50 T400,50" stroke="#78947B" strokeWidth="4" fill="none" />
                  <path d="M0,150 Q100,200 200,150 T400,150" stroke="#78947B" strokeWidth="4" fill="none" />
                  <path d="M100,0 V400" stroke="#78947B" strokeWidth="4" fill="none" />
                  <path d="M300,0 V400" stroke="#78947B" strokeWidth="4" fill="none" />
                </svg>
                
                {/* Location markers */}
                <div className="absolute top-1/4 left-1/4 group cursor-pointer">
                  <div className="bg-forest text-white px-3 py-1.5 rounded-lg shadow-md font-bold text-sm mb-1 group-hover:scale-105 transition-transform">
                    3.5tr
                  </div>
                  <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-forest mx-auto"></div>
                </div>
                
                <div className="absolute top-1/2 right-1/4 group cursor-pointer z-10">
                  <div className="bg-sand text-white px-3 py-1.5 rounded-lg shadow-md font-bold text-sm mb-1 scale-110">
                    4.2tr
                  </div>
                  <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-sand mx-auto"></div>
                  
                  {/* Property Card Popup */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-48 bg-white rounded-xl shadow-xl p-2 border border-black/5 animate-in fade-in zoom-in-95">
                    <div className="w-full h-24 bg-gray-200 rounded-lg mb-2"></div>
                    <div className="text-xs font-bold text-forest mb-1">Phòng trọ cao cấp</div>
                    <div className="text-[10px] text-charcoal/60 mb-2">Quận 7, TP.HCM</div>
                    <div className="flex justify-between items-center">
                       <span className="text-xs font-bold">4.200.000đ</span>
                       <span className="text-[10px] bg-sage/20 text-forest px-2 py-0.5 rounded">Trống</span>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-1/4 left-1/2 group cursor-pointer">
                  <div className="bg-forest text-white px-3 py-1.5 rounded-lg shadow-md font-bold text-sm mb-1 group-hover:scale-105 transition-transform">
                    2.8tr
                  </div>
                  <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-forest mx-auto"></div>
                </div>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-black/5 flex items-center gap-4 animate-bounce-slow hidden md:flex">
              <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center text-forest">
                <Map className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold text-charcoal">Hơn 10.000+</div>
                <div className="text-sm text-charcoal/60">địa điểm trên bản đồ</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default MapSearchSection;

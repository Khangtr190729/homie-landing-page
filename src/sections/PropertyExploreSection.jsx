import { Star, Home, ArrowRight } from 'lucide-react';

const PropertyExploreSection = () => {
  return (
    <section className="py-20 md:py-32 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <h2 className="text-3xl md:text-5xl font-bold text-forest leading-tight">
              Xem kỹ trước <br/>khi quyết định
            </h2>
            
            <p className="text-lg text-charcoal/70 leading-relaxed mb-4">
              Đừng chỉ xem một căn phòng trống. Homie giúp bạn hiểu rõ về nơi mình sắp sống thông qua đánh giá và chi tiết trực quan.
            </p>
            
            <div className="flex flex-col gap-5">
              <div className="bg-ivory p-6 rounded-2xl border border-black/5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <Star className="w-6 h-6 text-sand fill-sand" />
                  <h3 className="text-xl font-bold text-charcoal">Đánh giá thực tế</h3>
                </div>
                <p className="text-charcoal/70">Đọc những đánh giá và nhận xét từ những người đã từng thuê hoặc đến xem phòng.</p>
              </div>
              
              <div className="bg-ivory p-6 rounded-2xl border border-black/5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <Home className="w-6 h-6 text-sage" />
                  <h3 className="text-xl font-bold text-charcoal">Chi tiết đầy đủ</h3>
                </div>
                <p className="text-charcoal/70">Hình ảnh sắc nét ở nhiều góc độ và danh sách đầy đủ các tiện nghi được cung cấp.</p>
              </div>
            </div>
            
            <button className="flex items-center gap-2 text-forest font-bold mt-4 hover:gap-3 transition-all w-fit">
              Khám phá ngay <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative w-full aspect-[4/5] md:aspect-[3/4] rounded-3xl overflow-hidden bg-gray-100 shadow-xl border border-black/5 flex flex-col">
              {/* Photo Gallery Mockup */}
              <div className="h-[45%] w-full bg-gray-200 relative">
                 <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800" alt="Phòng trọ" className="w-full h-full object-cover" />
                 <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                   1/5 Ảnh
                 </div>
              </div>
              
              <div className="p-6 flex-1 bg-white flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-charcoal">Phòng Studio Mới Xây</h3>
                  <div className="flex items-center gap-1 bg-sand/10 text-sand px-2 py-1 rounded text-sm font-bold">
                    <Star className="w-3 h-3 fill-sand" /> 4.8
                  </div>
                </div>
                
                <p className="text-charcoal/60 text-sm mb-6">Bình Thạnh, TP.HCM</p>
                
                <div className="space-y-4 mb-6 flex-1">
                   <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex-shrink-0 mt-1 flex items-center justify-center">
                        <span className="text-xs font-bold text-gray-500">M</span>
                      </div>
                      <div className="bg-ivory p-3 rounded-xl rounded-tl-none text-sm text-charcoal/80 w-full relative">
                        "Phòng đẹp y hình, chủ nhà nhiệt tình. Hơi xa bến xe buýt một chút."
                        <div className="absolute -bottom-5 right-2 text-[10px] text-gray-400">Hôm qua</div>
                      </div>
                   </div>
                   
                   <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex-shrink-0 mt-1 flex items-center justify-center">
                        <span className="text-xs font-bold text-gray-500">T</span>
                      </div>
                      <div className="bg-ivory p-3 rounded-xl rounded-tl-none text-sm text-charcoal/80 w-full relative">
                        "Khu vực an ninh, yên tĩnh. Rất đáng tiền."
                        <div className="absolute -bottom-5 right-2 text-[10px] text-gray-400">1 tuần trước</div>
                      </div>
                   </div>
                </div>
                
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default PropertyExploreSection;

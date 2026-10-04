import { ShieldCheck, Info, MessageSquare } from 'lucide-react';

const SafeSearchSection = () => {
  return (
    <section className="py-20 md:py-32 bg-ivory relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl bg-gradient-to-br from-sage/20 to-forest/10 shadow-inner overflow-hidden flex items-center justify-center p-8">
              {/* App UI mockup */}
              <div className="w-full max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden border border-black/5 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="p-5 border-b border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                     <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                       <img src="https://ui-avatars.com/api/?name=Chu+Nha&background=D9A477&color=fff" alt="Avatar" className="w-full h-full object-cover" />
                     </div>
                     <div>
                       <div className="font-bold text-sm">Nguyễn Văn A</div>
                       <div className="text-xs text-charcoal/60 flex items-center gap-1">
                          <ShieldCheck className="w-3 h-3 text-forest" />
                          Đã xác thực
                       </div>
                     </div>
                  </div>
                  <div className="bg-sage/10 text-forest text-xs font-bold px-3 py-1 rounded-full">Chủ nhà</div>
                </div>
                
                <div className="p-5">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-bold text-lg mb-1">Phòng trọ ban công thoáng mát</h4>
                      <div className="text-sm text-charcoal/70">Quận 3, TP.HCM</div>
                    </div>
                    <div className="font-bold text-forest text-lg">3.5tr<span className="text-xs font-normal text-charcoal/60">/tháng</span></div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 mb-5 text-sm text-charcoal/80">
                    <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg">
                      <div className="w-2 h-2 rounded-full bg-forest"></div>
                      25m²
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg">
                      <div className="w-2 h-2 rounded-full bg-forest"></div>
                      Có nội thất
                    </div>
                  </div>
                  
                  <div className="bg-forest text-white text-center py-3 rounded-xl font-medium mb-3 cursor-pointer">
                    Liên hệ ngay
                  </div>
                  <div className="bg-ivory text-forest text-center py-3 rounded-xl font-medium cursor-pointer border border-forest/20">
                    Xem thông tin chi tiết
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative dots */}
            <div className="absolute top-10 -left-6 w-20 h-20 bg-[radial-gradient(#244C3B_1px,transparent_1px)] [background-size:10px_10px] opacity-20"></div>
          </div>

          <div className="flex flex-col gap-6 order-1 lg:order-2">
            <h2 className="text-3xl md:text-5xl font-bold text-forest leading-tight">
              Tìm nơi ở an toàn <br/>và dễ dàng hơn
            </h2>
            
            <p className="text-lg text-charcoal/70 leading-relaxed mb-4">
              Chúng tôi hiểu rằng tìm kiếm chỗ ở mới luôn đi kèm với nhiều lo âu. Homie cung cấp thông tin minh bạch giúp bạn đưa ra quyết định tự tin hơn.
            </p>
            
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white transition-colors border border-transparent hover:border-black/5 hover:shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-forest text-white flex items-center justify-center flex-shrink-0 mt-1 shadow-md">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-2">Giảm thiểu rủi ro</h3>
                  <p className="text-charcoal/70">Xem trước hình ảnh, thông tin chi tiết và đọc đánh giá thực tế từ người thuê trước để có cái nhìn chân thực nhất.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white transition-colors border border-transparent hover:border-black/5 hover:shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-sage/20 text-forest flex items-center justify-center flex-shrink-0 mt-1">
                  <Info className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-2">Thông tin minh bạch</h3>
                  <p className="text-charcoal/70">Các thông tin quan trọng như chi phí phát sinh, tiện ích đi kèm đều được trình bày rõ ràng, dễ hiểu.</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default SafeSearchSection;

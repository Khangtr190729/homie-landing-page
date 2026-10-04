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
            
            <div className="flex gap-4 animate-in fade-in slide-in-from-bottom-7 duration-700 delay-500 mt-4">
              <a href="#download" className="bg-forest text-white px-8 py-4 rounded-xl font-medium hover:bg-forest/90 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                Khám phá ngay
              </a>
            </div>
          </div>

          <div className="relative z-10 animate-in fade-in zoom-in-95 duration-1000 delay-300 lg:ml-10">
            {/* Abstract representation of phone UI since we don't have real assets */}
            <div className="relative mx-auto w-full max-w-[320px] aspect-[9/19] bg-white rounded-[40px] shadow-2xl border-[8px] border-charcoal overflow-hidden flex flex-col transform hover:-translate-y-4 transition-transform duration-700">
              <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-20">
                 <div className="w-1/3 h-full bg-charcoal rounded-b-[1rem]"></div>
              </div>
              
              <div className="flex-1 bg-gray-50 flex flex-col pt-10 p-4 gap-4 overflow-y-hidden relative pb-16">
                {/* Simulated app header */}
                <div className="flex justify-between items-center mb-1">
                  <img src="https://ui-avatars.com/api/?name=User&background=D9A477&color=fff" className="w-8 h-8 rounded-full shadow-sm" alt="Avatar"/>
                  <div className="flex flex-col items-center">
                    <div className="text-[10px] text-gray-500">Vị trí hiện tại</div>
                    <div className="text-xs font-bold flex items-center"><MapPin className="w-3 h-3 text-forest mr-1"/> Quận 1, TP.HCM</div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center relative">
                     <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                     <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-3 shadow-sm flex items-center gap-2 border border-gray-100">
                  <Search className="w-4 h-4 text-gray-400" />
                  <div className="text-xs text-gray-400">Tìm kiếm phòng trọ, căn hộ...</div>
                </div>
                
                {/* Categories */}
                <div className="flex justify-between px-1">
                   <div className="flex flex-col items-center gap-1 cursor-pointer">
                      <div className="w-12 h-12 rounded-2xl bg-forest/10 flex items-center justify-center text-forest">
                         <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                      </div>
                      <span className="text-[10px] font-medium text-gray-600">Phòng trọ</span>
                   </div>
                   <div className="flex flex-col items-center gap-1 cursor-pointer">
                      <div className="w-12 h-12 rounded-2xl bg-sage/10 flex items-center justify-center text-sage">
                         <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
                      </div>
                      <span className="text-[10px] font-medium text-gray-600">Căn hộ</span>
                   </div>
                   <div className="flex flex-col items-center gap-1 cursor-pointer">
                      <div className="w-12 h-12 rounded-2xl bg-sand/10 flex items-center justify-center text-sand">
                         <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 22h20"/><path d="M17 2v20"/><path d="M7 22V8l10-4"/><path d="M11 22v-5"/><path d="M7 12h4"/><path d="M7 17h4"/></svg>
                      </div>
                      <span className="text-[10px] font-medium text-gray-600">Nguyên căn</span>
                   </div>
                   <div className="flex flex-col items-center gap-1 cursor-pointer">
                      <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-500">
                         <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
                      </div>
                      <span className="text-[10px] font-medium text-gray-600">Xem thêm</span>
                   </div>
                </div>

                <div className="flex justify-between items-end mt-2">
                   <h3 className="text-sm font-bold text-charcoal">Đề xuất cho bạn</h3>
                   <span className="text-[10px] text-forest font-medium">Xem tất cả</span>
                </div>
                
                {/* Horizontal scroll cards */}
                <div className="flex gap-3 overflow-hidden pb-1">
                  <div className="w-[140px] flex-shrink-0 bg-white rounded-2xl shadow-sm border border-gray-100 p-2 relative group cursor-pointer hover:border-forest/30 transition-colors">
                    <div className="w-full h-24 bg-gray-200 rounded-xl mb-2 object-cover overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=400" alt="room" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[9px] font-bold px-1.5 py-0.5 rounded text-forest flex items-center gap-1">
                       <svg className="w-2.5 h-2.5 fill-sand text-sand" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                       4.8
                    </div>
                    <div className="font-bold text-xs truncate">Phòng Studio Mới Xây</div>
                    <div className="text-[9px] text-gray-400 mb-1 truncate">Quận 3, TP.HCM</div>
                    <div className="text-forest font-bold text-sm">4.200.000đ<span className="text-[9px] font-normal text-gray-400">/tháng</span></div>
                  </div>
                  <div className="w-[140px] flex-shrink-0 bg-white rounded-2xl shadow-sm border border-gray-100 p-2 relative group cursor-pointer hover:border-forest/30 transition-colors">
                    <div className="w-full h-24 bg-gray-200 rounded-xl mb-2 object-cover overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1502672260266-1c1cd2cb4442?auto=format&fit=crop&q=80&w=400" alt="room" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[9px] font-bold px-1.5 py-0.5 rounded text-forest flex items-center gap-1">
                       <svg className="w-2.5 h-2.5 fill-sand text-sand" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                       4.5
                    </div>
                    <div className="font-bold text-xs truncate">Căn hộ Mini Ban Công</div>
                    <div className="text-[9px] text-gray-400 mb-1 truncate">Bình Thạnh, TP.HCM</div>
                    <div className="text-forest font-bold text-sm">5.500.000đ<span className="text-[9px] font-normal text-gray-400">/tháng</span></div>
                  </div>
                </div>
                
                {/* Vertical list item */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-2 flex gap-3 cursor-pointer hover:bg-gray-50 transition-colors mt-2">
                   <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                      <img src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=300" className="w-full h-full object-cover" alt="room"/>
                   </div>
                   <div className="flex flex-col justify-center flex-1 overflow-hidden">
                      <div className="text-xs font-bold text-charcoal truncate">Phòng trọ giá rẻ sinh viên</div>
                      <div className="text-[10px] text-gray-400 mt-0.5 truncate">Gần ĐH Quốc Gia</div>
                      <div className="text-forest font-bold text-sm mt-1">2.500.000đ</div>
                   </div>
                </div>
              </div>
              
              {/* Bottom Tab Bar */}
              <div className="absolute bottom-0 inset-x-0 h-16 bg-white border-t border-gray-100 flex justify-between items-center px-6 rounded-b-[40px] z-30">
                 <div className="flex flex-col items-center text-forest cursor-pointer">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z"/></svg>
                    <span className="text-[9px] font-bold mt-1">Trang chủ</span>
                 </div>
                 <div className="flex flex-col items-center text-gray-400 cursor-pointer hover:text-gray-600 transition-colors">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
                    <span className="text-[9px] font-medium mt-1">Đã lưu</span>
                 </div>
                 <div className="flex flex-col items-center text-gray-400 cursor-pointer hover:text-gray-600 transition-colors">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
                    <span className="text-[9px] font-medium mt-1">Thông báo</span>
                 </div>
                 <div className="flex flex-col items-center text-gray-400 cursor-pointer hover:text-gray-600 transition-colors">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    <span className="text-[9px] font-medium mt-1">Tài khoản</span>
                 </div>
              </div>
            </div>
            
            {/* Decorative background shapes */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-gradient-to-br from-sage/30 to-forest/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-gradient-to-tr from-sand/30 to-ivory/10 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { MapPin, Search } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img src="/hero-bg.jpg?v=3" alt="Background" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/10 z-0 backdrop-blur-[2px]"></div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-8 relative z-10"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/60 backdrop-blur-md border border-white/40 shadow-sm text-forest font-semibold w-fit"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-forest opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-forest"></span>
              </span>
              Nền tảng tìm nơi ở số 1
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-extrabold text-charcoal leading-[1.1] tracking-tight">
              Tìm nơi ở <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest via-sage to-sand">phù hợp dễ dàng</span> <br/>
              cùng Homie
            </h1>
            
            <p className="text-lg md:text-xl text-charcoal/70 max-w-lg leading-relaxed font-medium">
              Tìm kiếm nơi ở, khám phá khu vực, đánh giá lựa chọn và kết nối các dịch vụ hỗ trợ cuộc sống - tất cả trong một ứng dụng.
            </p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex gap-4 mt-2"
            >
              <a href="#download" className="relative overflow-hidden group bg-forest text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-[0_8px_30px_rgb(36,76,59,0.3)] hover:shadow-[0_8px_30px_rgb(36,76,59,0.5)] transform hover:-translate-y-1">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                <span className="relative">Khám phá ngay</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50, rotate: 5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="relative z-10 lg:ml-10 perspective-1000"
          >
            {/* Phone Mockup with floating animation */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative mx-auto w-full max-w-[340px] aspect-[9/19] bg-white rounded-[44px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-[10px] border-gray-900 overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 inset-x-0 h-7 flex justify-center z-30">
                 <div className="w-[40%] h-full bg-gray-900 rounded-b-[18px]"></div>
              </div>
              
              <div className="flex-1 bg-gray-50 flex flex-col pt-12 p-5 gap-5 overflow-y-hidden relative pb-20">
                {/* Simulated app header */}
                <div className="flex justify-between items-center mb-1">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-sand to-sage p-[2px] shadow-sm">
                    <img src="https://ui-avatars.com/api/?name=User&background=fff&color=244C3B" className="w-full h-full rounded-full border border-white" alt="Avatar"/>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Vị trí hiện tại</div>
                    <div className="text-xs font-extrabold text-charcoal flex items-center"><MapPin className="w-3.5 h-3.5 text-forest mr-1"/> Quận 1, TP.HCM</div>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center relative">
                     <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                     <div className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-3.5 shadow-[0_2px_10px_rgba(0,0,0,0.03)] flex items-center gap-2 border border-gray-100">
                  <Search className="w-4 h-4 text-forest" />
                  <div className="text-xs text-gray-400 font-medium">Tìm kiếm phòng trọ, căn hộ...</div>
                </div>
                
                {/* Categories */}
                <div className="flex justify-between">
                   <div className="flex flex-col items-center gap-1.5 cursor-pointer group">
                      <div className="w-14 h-14 rounded-2xl bg-forest/5 flex items-center justify-center text-forest group-hover:bg-forest group-hover:text-white transition-colors duration-300">
                         <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                      </div>
                      <span className="text-[10px] font-bold text-gray-600">Phòng trọ</span>
                   </div>
                   <div className="flex flex-col items-center gap-1.5 cursor-pointer group">
                      <div className="w-14 h-14 rounded-2xl bg-sage/10 flex items-center justify-center text-sage group-hover:bg-sage group-hover:text-white transition-colors duration-300">
                         <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
                      </div>
                      <span className="text-[10px] font-bold text-gray-600">Căn hộ</span>
                   </div>
                   <div className="flex flex-col items-center gap-1.5 cursor-pointer group">
                      <div className="w-14 h-14 rounded-2xl bg-sand/10 flex items-center justify-center text-sand group-hover:bg-sand group-hover:text-white transition-colors duration-300">
                         <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 22h20"/><path d="M17 2v20"/><path d="M7 22V8l10-4"/><path d="M11 22v-5"/><path d="M7 12h4"/><path d="M7 17h4"/></svg>
                      </div>
                      <span className="text-[10px] font-bold text-gray-600">Nguyên căn</span>
                   </div>
                   <div className="flex flex-col items-center gap-1.5 cursor-pointer group">
                      <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-gray-100 transition-colors duration-300">
                         <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
                      </div>
                      <span className="text-[10px] font-bold text-gray-500">Xem thêm</span>
                   </div>
                </div>

                <div className="flex justify-between items-end mt-2">
                   <h3 className="text-sm font-extrabold text-charcoal">Đề xuất cho bạn</h3>
                   <span className="text-[10px] text-forest font-bold bg-forest/10 px-2 py-1 rounded-full">Xem tất cả</span>
                </div>
                
                {/* Horizontal scroll cards */}
                <div className="flex gap-4 overflow-hidden pb-2 -mx-5 px-5">
                  <div className="w-[150px] flex-shrink-0 bg-white rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.03)] border border-gray-100 p-2.5 relative group cursor-pointer hover:border-forest/50 transition-colors">
                    <div className="w-full h-28 bg-gray-200 rounded-xl mb-3 object-cover overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=400" alt="room" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[10px] font-bold px-2 py-0.5 rounded-full text-charcoal flex items-center gap-1 shadow-sm">
                       <svg className="w-3 h-3 fill-sand text-sand" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                       4.8
                    </div>
                    <div className="font-extrabold text-xs truncate text-charcoal">Phòng Studio Mới Xây</div>
                    <div className="text-[10px] text-gray-400 mb-1.5 truncate flex items-center gap-1"><MapPin className="w-2.5 h-2.5"/> Quận 3, TP.HCM</div>
                    <div className="text-forest font-black text-sm">4.2<span className="text-[10px] font-bold">tr</span><span className="text-[9px] font-medium text-gray-400">/tháng</span></div>
                  </div>
                  <div className="w-[150px] flex-shrink-0 bg-white rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.03)] border border-gray-100 p-2.5 relative group cursor-pointer hover:border-forest/50 transition-colors">
                    <div className="w-full h-28 bg-gray-200 rounded-xl mb-3 object-cover overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1502672260266-1c1cd2cb4442?auto=format&fit=crop&q=80&w=400" alt="room" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[10px] font-bold px-2 py-0.5 rounded-full text-charcoal flex items-center gap-1 shadow-sm">
                       <svg className="w-3 h-3 fill-sand text-sand" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                       4.5
                    </div>
                    <div className="font-extrabold text-xs truncate text-charcoal">Căn hộ Mini Ban Công</div>
                    <div className="text-[10px] text-gray-400 mb-1.5 truncate flex items-center gap-1"><MapPin className="w-2.5 h-2.5"/> Bình Thạnh</div>
                    <div className="text-forest font-black text-sm">5.5<span className="text-[10px] font-bold">tr</span><span className="text-[9px] font-medium text-gray-400">/tháng</span></div>
                  </div>
                </div>
                
                {/* Vertical list item */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-2.5 flex gap-3 cursor-pointer hover:shadow-md transition-shadow mt-1">
                   <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 relative">
                      <img src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=300" className="w-full h-full object-cover" alt="room"/>
                   </div>
                   <div className="flex flex-col justify-center flex-1 overflow-hidden">
                      <div className="text-xs font-extrabold text-charcoal truncate">Phòng trọ giá rẻ sinh viên</div>
                      <div className="text-[10px] text-gray-400 mt-0.5 truncate flex items-center gap-1"><MapPin className="w-2.5 h-2.5"/> Gần ĐH Quốc Gia</div>
                      <div className="text-forest font-black text-sm mt-1">2.5<span className="text-[10px] font-bold">tr/tháng</span></div>
                   </div>
                </div>
              </div>
              
              {/* Bottom Tab Bar */}
              <div className="absolute bottom-0 inset-x-0 h-[72px] bg-white/90 backdrop-blur-xl border-t border-gray-100 flex justify-around items-center px-4 rounded-b-[34px] z-30 shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
                 <div className="flex flex-col items-center text-forest cursor-pointer w-12">
                    <svg className="w-6 h-6 fill-current mb-1" viewBox="0 0 24 24"><path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z"/></svg>
                    <span className="text-[9px] font-bold">Trang chủ</span>
                 </div>
                 <div className="flex flex-col items-center text-gray-400 cursor-pointer hover:text-forest transition-colors w-12">
                    <svg className="w-6 h-6 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
                    <span className="text-[9px] font-medium">Đã lưu</span>
                 </div>
                 <div className="flex flex-col items-center text-gray-400 cursor-pointer hover:text-forest transition-colors w-12 relative">
                    <div className="absolute top-0 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></div>
                    <svg className="w-6 h-6 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
                    <span className="text-[9px] font-medium">Thông báo</span>
                 </div>
                 <div className="flex flex-col items-center text-gray-400 cursor-pointer hover:text-forest transition-colors w-12">
                    <svg className="w-6 h-6 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    <span className="text-[9px] font-medium">Tài khoản</span>
                 </div>
              </div>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { ShieldCheck, Info, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const SafeSearchSection = () => {
  return (
    <section className="py-24 md:py-32 bg-ivory/50 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-mocha/5 to-brown/10 rounded-full blur-[100px] -translate-y-1/2 -z-10"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            className="relative order-2 lg:order-1 perspective-1000"
          >
            <div className="relative w-full aspect-square md:aspect-[4/3] rounded-[2.5rem] bg-gradient-to-br from-brown/20 to-mocha/10 shadow-[inset_0_2px_20px_rgba(255,255,255,0.5)] overflow-hidden flex items-center justify-center p-8">
              {/* App UI mockup */}
              <motion.div 
                whileHover={{ rotate: 0, scale: 1.05 }}
                className="w-full max-w-sm bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-[0_30px_60px_rgba(36,76,59,0.15)] border border-white overflow-hidden transform -rotate-3 transition-all duration-500"
              >
                <div className="p-5 border-b border-gray-100/50 flex items-center justify-between bg-white">
                  <div className="flex items-center gap-3">
                     <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                       <img src="https://ui-avatars.com/api/?name=Chu+Nha&background=D9A477&color=fff" alt="Avatar" className="w-full h-full object-cover" />
                     </div>
                     <div>
                       <div className="font-extrabold text-sm text-mocha">Nguyễn Văn A</div>
                       <div className="text-[10px] text-gray-500 flex items-center gap-1 font-medium mt-0.5">
                          <ShieldCheck className="w-3.5 h-3.5 text-mocha" />
                          Đã xác thực danh tính
                       </div>
                     </div>
                  </div>
                  <div className="bg-brown/15 text-mocha text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">Chủ nhà</div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-5">
                    <div>
                      <h4 className="font-extrabold text-xl text-mocha mb-1">Phòng trọ ban công</h4>
                      <div className="text-xs font-medium text-gray-500 flex items-center gap-1"><MapPin className="w-3 h-3"/> Quận 3, TP.HCM</div>
                    </div>
                    <div className="font-black text-mocha text-xl text-right">3.5<span className="text-sm font-bold">tr</span><div className="text-[10px] font-medium text-gray-400 mt-1">/tháng</div></div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6 text-xs font-bold text-mocha/70">
                    <div className="flex items-center gap-2.5 bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                      <div className="w-2.5 h-2.5 rounded-full bg-mocha shadow-sm"></div>
                      25m² diện tích
                    </div>
                    <div className="flex items-center gap-2.5 bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                      <div className="w-2.5 h-2.5 rounded-full bg-caramel shadow-sm"></div>
                      Có nội thất
                    </div>
                  </div>
                  
                  <button className="w-full bg-mocha text-white text-center py-3.5 rounded-2xl font-bold mb-3 shadow-[0_10px_20px_rgba(36,76,59,0.2)] hover:bg-mocha/90 transition-colors hover:-translate-y-0.5 transform">
                    Liên hệ ngay
                  </button>
                  <button className="w-full bg-ivory text-mocha text-center py-3.5 rounded-2xl font-bold border border-mocha/10 hover:bg-mocha hover:text-white transition-colors">
                    Xem thông tin chi tiết
                  </button>
                </div>
              </motion.div>
            </div>
            
            {/* Decorative dots */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[radial-gradient(#244C3B_2px,transparent_2px)] [background-size:12px_12px] opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[radial-gradient(#D9A477_2px,transparent_2px)] [background-size:12px_12px] opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6 order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-caramel/10 text-caramel font-bold w-fit border border-caramel/20">
              <ShieldCheck className="w-4 h-4" /> An tâm tuyệt đối
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-mocha leading-[1.1] tracking-tight">
              Tìm nơi ở <span className="text-transparent bg-clip-text bg-gradient-to-r from-mocha to-caramel">an toàn</span> <br/>và dễ dàng hơn
            </h2>
            
            <p className="text-xl text-mocha/70 leading-relaxed font-medium mb-2">
              Chúng tôi hiểu rằng tìm kiếm chỗ ở mới luôn đi kèm với nhiều lo âu. Homie cung cấp thông tin minh bạch giúp bạn đưa ra quyết định tự tin hơn.
            </p>
            
            <div className="flex flex-col gap-6 mt-4">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-5 p-5 rounded-3xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-50 cursor-pointer"
              >
                <div className="w-14 h-14 rounded-2xl bg-mocha text-white flex items-center justify-center flex-shrink-0 shadow-[0_8px_20px_rgba(36,76,59,0.3)]">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-mocha mb-2">Giảm thiểu rủi ro</h3>
                  <p className="text-mocha/70 font-medium leading-relaxed">Xem trước hình ảnh, thông tin chi tiết và đọc đánh giá thực tế từ người thuê trước để có cái nhìn chân thực nhất.</p>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-5 p-5 rounded-3xl bg-white/50 hover:bg-white transition-colors border border-transparent hover:border-gray-50 hover:shadow-[0_10px_30px_rgba(0,0,0,0.03)] cursor-pointer"
              >
                <div className="w-14 h-14 rounded-2xl bg-brown/20 text-mocha flex items-center justify-center flex-shrink-0 border border-brown/30">
                  <Info className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-mocha mb-2">Thông tin minh bạch</h3>
                  <p className="text-mocha/70 font-medium leading-relaxed">Các thông tin quan trọng như chi phí phát sinh, tiện ích đi kèm đều được trình bày rõ ràng, dễ hiểu.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default SafeSearchSection;

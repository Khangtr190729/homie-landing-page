import { Star, Home, ArrowRight, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const PropertyExploreSection = () => {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-ivory to-transparent rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 -z-10"></div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8 order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sand/10 text-sand font-bold w-fit border border-sand/20">
              <Star className="w-4 h-4 fill-current" /> Đánh giá chân thực
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-charcoal leading-[1.1] tracking-tight">
              Xem kỹ trước <br/>khi <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest to-sage">quyết định</span>
            </h2>
            
            <p className="text-xl text-charcoal/70 leading-relaxed font-medium mb-2">
              Đừng chỉ xem một căn phòng trống. Homie giúp bạn hiểu rõ về nơi mình sắp sống thông qua đánh giá và chi tiết trực quan.
            </p>
            
            <div className="flex flex-col gap-6">
              <motion.div 
                whileHover={{ x: 10 }}
                className="bg-ivory/50 backdrop-blur-sm p-8 rounded-[2rem] border border-forest/5 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(36,76,59,0.05)] transition-all cursor-pointer relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-sand/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex items-center gap-4 mb-4 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-sand">
                     <Star className="w-6 h-6 fill-sand" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-charcoal">Đánh giá thực tế</h3>
                </div>
                <p className="text-charcoal/70 font-medium text-lg relative z-10">Đọc những đánh giá và nhận xét từ những người đã từng thuê hoặc đến xem phòng.</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ x: 10 }}
                className="bg-ivory/50 backdrop-blur-sm p-8 rounded-[2rem] border border-forest/5 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(36,76,59,0.05)] transition-all cursor-pointer relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-sage/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex items-center gap-4 mb-4 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-forest">
                     <Home className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-charcoal">Chi tiết đầy đủ</h3>
                </div>
                <p className="text-charcoal/70 font-medium text-lg relative z-10">Hình ảnh sắc nét ở nhiều góc độ và danh sách đầy đủ các tiện nghi được cung cấp.</p>
              </motion.div>
            </div>
            
            <button className="flex items-center gap-3 text-forest font-extrabold text-lg mt-4 group w-fit bg-forest/5 px-6 py-3 rounded-xl hover:bg-forest/10 transition-colors">
              Khám phá ngay <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="relative order-1 lg:order-2 perspective-1000"
          >
            <div className="relative w-full aspect-[4/5] md:aspect-[3/4] rounded-[3rem] overflow-hidden bg-white shadow-[0_40px_80px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col group transform transition-transform duration-700 hover:rotate-1 hover:scale-[1.02]">
              {/* Photo Gallery Mockup */}
              <div className="h-[45%] w-full bg-gray-200 relative overflow-hidden">
                 <motion.img 
                   whileHover={{ scale: 1.1 }}
                   transition={{ duration: 0.7 }}
                   src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800" 
                   alt="Phòng trọ" 
                   className="w-full h-full object-cover" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                 <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-sm border border-white/30">
                   1/5 Ảnh
                 </div>
                 <div className="absolute bottom-4 left-4 flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-white shadow-sm"></div>
                    <div className="w-2 h-2 rounded-full bg-white/40"></div>
                    <div className="w-2 h-2 rounded-full bg-white/40"></div>
                 </div>
              </div>
              
              <div className="p-8 flex-1 bg-white flex flex-col relative">
                <div className="absolute top-0 right-8 -translate-y-1/2 w-16 h-16 bg-forest text-white rounded-full flex items-center justify-center shadow-lg border-4 border-white z-10 cursor-pointer hover:bg-forest/90 transition-colors hover:scale-105">
                   <ArrowRight className="w-7 h-7" />
                </div>

                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-3xl font-extrabold text-charcoal">Studio Mới Xây</h3>
                </div>
                
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center gap-1.5 bg-sand/10 text-sand px-3 py-1.5 rounded-lg text-sm font-black border border-sand/20">
                    <Star className="w-4 h-4 fill-sand" /> 4.8
                  </div>
                  <p className="text-gray-500 font-medium flex items-center gap-1"><MapPin className="w-4 h-4 text-forest"/> Bình Thạnh, TP.HCM</p>
                </div>
                
                <div className="space-y-5 flex-1 relative">
                   <div className="absolute left-[15px] top-6 bottom-4 w-px bg-gray-100"></div>

                   <motion.div 
                     initial={{ opacity: 0, x: 20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ delay: 0.2 }}
                     className="flex items-start gap-4 relative z-10"
                   >
                      <div className="w-8 h-8 rounded-full bg-sage text-white flex-shrink-0 mt-1 flex items-center justify-center shadow-md font-bold text-sm ring-4 ring-white">
                        M
                      </div>
                      <div className="bg-ivory/80 p-4 rounded-2xl rounded-tl-sm text-sm text-charcoal/80 w-full relative border border-gray-100 font-medium">
                        "Phòng đẹp y hình, chủ nhà nhiệt tình. Ánh sáng tự nhiên rất tốt."
                        <div className="absolute -bottom-6 right-2 text-[10px] font-bold text-gray-400">Hôm qua</div>
                      </div>
                   </motion.div>
                   
                   <motion.div 
                     initial={{ opacity: 0, x: 20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ delay: 0.4 }}
                     className="flex items-start gap-4 relative z-10"
                   >
                      <div className="w-8 h-8 rounded-full bg-sand text-white flex-shrink-0 mt-2 flex items-center justify-center shadow-md font-bold text-sm ring-4 ring-white">
                        T
                      </div>
                      <div className="bg-ivory/80 p-4 rounded-2xl rounded-tl-sm text-sm text-charcoal/80 w-full relative border border-gray-100 font-medium">
                        "Khu vực an ninh, yên tĩnh. Rất đáng tiền."
                        <div className="absolute -bottom-6 right-2 text-[10px] font-bold text-gray-400">1 tuần trước</div>
                      </div>
                   </motion.div>
                </div>
                
              </div>
            </div>
            
            {/* Decorative background shapes */}
            <div className="absolute top-10 -right-10 w-40 h-40 bg-sand/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default PropertyExploreSection;

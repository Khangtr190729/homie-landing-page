import { Map, Navigation, Compass, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const MapSearchSection = () => {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden" id="features">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8 order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mocha/5 text-mocha font-bold w-fit border border-mocha/10">
              <Map className="w-4 h-4" /> Bản đồ thông minh
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-mocha leading-[1.1] tracking-tight">
              Tìm nơi ở ngay <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-mocha to-brown">trên bản đồ</span>
            </h2>
            
            <p className="text-xl text-mocha/70 leading-relaxed font-medium">
              Không còn phải vất vả tra cứu từng con đường. Homie mang đến trải nghiệm tìm kiếm trực quan ngay trên bản đồ tương tác.
            </p>
            
            <div className="flex flex-col gap-8 mt-4">
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-start gap-5 p-4 -ml-4 rounded-2xl hover:bg-ivory transition-colors cursor-pointer"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brown/20 to-mocha/10 flex items-center justify-center flex-shrink-0 mt-1 text-mocha shadow-sm border border-mocha/5">
                  <Navigation className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-mocha mb-2">Khám phá khu vực xung quanh</h3>
                  <p className="text-mocha/70 font-medium">Dễ dàng xem các tiện ích xung quanh như chợ, trường học, trạm xe buýt chỉ với vài thao tác.</p>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-start gap-5 p-4 -ml-4 rounded-2xl hover:bg-ivory transition-colors cursor-pointer"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-caramel/20 to-ivory flex items-center justify-center flex-shrink-0 mt-1 text-caramel shadow-sm border border-caramel/5">
                  <Compass className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-mocha mb-2">So sánh vị trí tối ưu</h3>
                  <p className="text-mocha/70 font-medium">Tìm kiếm các địa điểm tuyệt vời, cân bằng khoảng cách giữa nơi học tập và làm việc của bạn.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative w-full aspect-square md:aspect-[4/3] rounded-[2.5rem] bg-ivory shadow-[0_30px_60px_rgba(0,0,0,0.12)] overflow-hidden border border-white/50 group">
              {/* Map mockup */}
              <div className="absolute inset-0 bg-brown/5 transition-transform duration-1000 group-hover:scale-105">
                {/* Google Maps iframe background */}
                <div className="absolute inset-0 pointer-events-none">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15676.818968032733!2d106.6958434!3d10.7963625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1714000000000!5m2!1svi!2s" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                
                {/* Blur overlay for better contrast at the edges */}
                <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(247,245,237,0.5)] pointer-events-none"></div>
                
                {/* Location markers */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="absolute top-1/4 left-1/4 cursor-pointer z-10"
                >
                  <div className="bg-mocha text-white px-3.5 py-1.5 rounded-xl shadow-lg font-bold text-sm mb-1 hover:scale-110 transition-transform">
                    3.5tr
                  </div>
                  <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-mocha mx-auto drop-shadow-md"></div>
                </motion.div>
                
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="absolute top-1/2 right-1/4 z-20"
                >
                  <div className="bg-mocha text-white px-4 py-2 rounded-xl shadow-xl font-extrabold text-sm mb-1 scale-110 ring-4 ring-mocha/20 animate-pulse">
                    4.2tr
                  </div>
                  <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-mocha mx-auto drop-shadow-lg"></div>
                  
                  {/* Property Card Popup */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 1, type: "spring" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 bg-white/90 backdrop-blur-xl rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] p-3 border border-white"
                  >
                    <div className="w-full h-28 rounded-xl mb-3 overflow-hidden">
                       <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="room"/>
                    </div>
                    <div className="text-sm font-extrabold text-mocha mb-1">Phòng trọ ban công</div>
                    <div className="text-[10px] font-medium text-gray-500 mb-2 flex items-center gap-1"><MapPin className="w-3 h-3"/> Quận 7, TP.HCM</div>
                    <div className="flex justify-between items-center mt-2 pt-2 border-t border-gray-100">
                       <span className="text-sm font-black text-mocha">4.200.000đ</span>
                       <span className="text-[9px] font-bold bg-brown/15 text-mocha px-2 py-1 rounded-full uppercase tracking-wider">Trống</span>
                    </div>
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="absolute bottom-1/4 left-1/2 cursor-pointer z-10"
                >
                  <div className="bg-mocha text-white px-3.5 py-1.5 rounded-xl shadow-lg font-bold text-sm mb-1 hover:scale-110 transition-transform">
                    2.8tr
                  </div>
                  <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-mocha mx-auto drop-shadow-md"></div>
                </motion.div>
              </div>
            </div>
            
            {/* Floating badge */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-xl p-5 rounded-[2rem] shadow-2xl border border-white flex items-center gap-5 hidden md:flex"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-brown/30 to-mocha/20 rounded-2xl flex items-center justify-center text-mocha shadow-inner">
                <Map className="w-7 h-7" />
              </div>
              <div>
                <div className="font-extrabold text-2xl text-mocha">10.000+</div>
                <div className="text-sm font-medium text-mocha/60 uppercase tracking-wider">địa điểm trên bản đồ</div>
              </div>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default MapSearchSection;

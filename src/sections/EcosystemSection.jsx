import { Box, Truck, Paintbrush, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

const EcosystemSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.4 } }
  };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-white">
      {/* Dynamic Backgrounds */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-sage/10 to-forest/5 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-sand/10 to-ivory/30 rounded-full blur-[100px] -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sage/5 to-white -z-20"></div>

      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-block px-4 py-1.5 bg-forest/5 text-forest font-bold text-sm rounded-full mb-6 border border-forest/10 uppercase tracking-widest">
            Hệ sinh thái Homie
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-charcoal mb-6 leading-tight tracking-tight">
            Hơn cả việc <br className="hidden md:block" /> tìm một <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest to-sage">căn phòng</span>
          </h2>
          <p className="text-xl text-charcoal/70 font-medium">
            Tìm được nơi ở chỉ là bước đầu. Homie đồng hành cùng bạn trong suốt quá trình chuyển đến và trang hoàng không gian mới.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10"
        >
          <motion.div variants={itemVariants} className="bg-white/80 backdrop-blur-md p-10 rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:border-sand/30 transition-all duration-500 transform hover:-translate-y-2 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-sand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-20 h-20 bg-ivory rounded-3xl flex items-center justify-center mb-8 text-sand group-hover:bg-sand group-hover:text-white transition-colors duration-500 shadow-sm relative z-10">
              <Box className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-extrabold text-charcoal mb-4 relative z-10">Thanh lý & Chuyển nhượng</h3>
            <p className="text-charcoal/70 font-medium leading-relaxed relative z-10">Mua bán, trao đổi đồ dùng cũ tiện lợi ngay trong cộng đồng Homie, giúp bạn tiết kiệm chi phí mua sắm.</p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-white/80 backdrop-blur-md p-10 rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_20px_50px_rgba(36,76,59,0.08)] hover:border-forest/30 transition-all duration-500 transform hover:-translate-y-2 group relative overflow-hidden mt-0 md:mt-10">
            <div className="absolute inset-0 bg-gradient-to-br from-forest/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-20 h-20 bg-ivory rounded-3xl flex items-center justify-center mb-8 text-forest group-hover:bg-forest group-hover:text-white transition-colors duration-500 shadow-sm relative z-10">
              <Truck className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-extrabold text-charcoal mb-4 relative z-10">Hỗ trợ chuyển nhà</h3>
            <p className="text-charcoal/70 font-medium leading-relaxed relative z-10">Kết nối nhanh chóng với các dịch vụ vận chuyển uy tín, giá cả minh bạch ngay khi bạn quyết định thuê.</p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-white/80 backdrop-blur-md p-10 rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_20px_50px_rgba(120,148,123,0.1)] hover:border-sage/30 transition-all duration-500 transform hover:-translate-y-2 group relative overflow-hidden mt-0 md:mt-20">
            <div className="absolute inset-0 bg-gradient-to-br from-sage/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-20 h-20 bg-ivory rounded-3xl flex items-center justify-center mb-8 text-sage group-hover:bg-sage group-hover:text-white transition-colors duration-500 shadow-sm relative z-10">
              <Paintbrush className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-extrabold text-charcoal mb-4 relative z-10">Trang trí phòng</h3>
            <p className="text-charcoal/70 font-medium leading-relaxed relative z-10">Gợi ý thiết kế và mua sắm vật dụng trang trí giúp bạn biến căn phòng trống thành tổ ấm thực sự.</p>
          </motion.div>
          
        </motion.div>
        
        {/* Visual connection lines (desktop only) */}
        <div className="hidden md:block absolute top-[55%] left-1/2 -translate-x-1/2 w-full max-w-5xl h-[2px] bg-gradient-to-r from-transparent via-forest/10 to-transparent -z-10"></div>
      </div>
    </section>
  );
};

export default EcosystemSection;

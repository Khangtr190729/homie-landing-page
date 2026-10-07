import { motion } from 'framer-motion';

const ProviderSection = () => {
  return (
    <section className="py-24 bg-ivory relative border-t border-mocha/5 overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-caramel/10 rounded-full blur-[100px] -z-10"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          className="bg-white rounded-[3rem] p-10 md:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden"
        >
          {/* Decorative shapes inside card */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-brown/10 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="flex-1 relative z-10">
            <div className="inline-block px-4 py-1.5 bg-caramel/15 text-caramel font-extrabold text-xs rounded-full mb-6 uppercase tracking-widest border border-caramel/20">
              Dành cho đối tác
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-mocha mb-6 leading-tight">
              Bạn có bất động sản <br/>cần cho thuê?
            </h2>
            <p className="text-xl text-mocha/70 max-w-xl font-medium leading-relaxed">
              Đăng tin dễ dàng, tiếp cận hàng ngàn khách thuê tiềm năng mỗi ngày và quản lý thông tin hiệu quả trên nền tảng của chúng tôi.
            </p>
          </div>
          
          <div className="flex-shrink-0 relative z-10 w-full md:w-auto">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto bg-mocha text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-mocha/90 transition-colors shadow-[0_10px_30px_rgba(36,76,59,0.3)] hover:shadow-[0_15px_40px_rgba(36,76,59,0.4)] whitespace-nowrap relative overflow-hidden group"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
              Đăng tin cùng Homie
            </motion.button>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
};

export default ProviderSection;

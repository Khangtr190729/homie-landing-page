import { motion } from 'framer-motion';

const FinalCTA = () => {
  return (
    <section className="py-24 md:py-32 bg-mocha relative overflow-hidden" id="download">
      {/* Dynamic Background decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brown/20 rounded-full blur-[100px] -translate-y-1/3 translate-x-1/3 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-ivory/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-[5rem] font-extrabold text-white mb-8 leading-[1.1] tracking-tight"
        >
          Tìm nơi ở an toàn,<br />trên khắp đất nước.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-ivory/80 max-w-2xl mx-auto mb-14 font-medium"
        >
          Hàng ngàn người đã tìm được không gian sống lý tưởng. Tải ứng dụng Homie ngay hôm nay để bắt đầu hành trình của bạn.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-5"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-3 bg-mocha text-white px-8 py-3.5 rounded-2xl hover:bg-black transition-colors shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.4)] w-full sm:w-[220px]"
          >
            <svg viewBox="0 0 384 512" className="w-8 h-8 fill-current"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
            <div className="flex flex-col items-start">
              <span className="text-[10px] font-medium leading-tight">Download on the</span>
              <span className="text-xl font-bold leading-tight">App Store</span>
            </div>
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-3 bg-mocha text-white px-8 py-3.5 rounded-2xl hover:bg-black transition-colors shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.4)] w-full sm:w-[220px]"
          >
            <svg viewBox="0 0 512 512" className="w-8 h-8 fill-current"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
            <div className="flex flex-col items-start">
              <span className="text-[10px] font-medium leading-tight uppercase">Get it on</span>
              <span className="text-xl font-bold leading-tight">Google Play</span>
            </div>
          </motion.button>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 text-white/40 text-sm font-bold tracking-[0.2em] uppercase"
        >
          Homie - Nền tảng kết nối không gian sống
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;

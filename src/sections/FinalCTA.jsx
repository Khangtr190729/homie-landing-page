const FinalCTA = () => {
  return (
    <section className="py-24 md:py-32 bg-forest relative overflow-hidden" id="download">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
          Tìm nơi ở an toàn,<br />trên khắp đất nước.
        </h2>
        
        <p className="text-xl text-ivory/80 max-w-2xl mx-auto mb-12">
          Hàng ngàn người đã tìm được không gian sống lý tưởng. Tải ứng dụng Homie ngay hôm nay để bắt đầu hành trình của bạn.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="flex items-center justify-center gap-3 bg-white text-charcoal px-8 py-3.5 rounded-xl hover:bg-ivory transition-colors shadow-lg transform hover:-translate-y-1">
            <div className="flex flex-col items-start">
              <span className="text-[10px] uppercase font-semibold text-charcoal/70">Download on the</span>
              <span className="text-lg font-bold leading-tight">App Store</span>
            </div>
          </button>
          
          <button className="flex items-center justify-center gap-3 bg-transparent text-white border border-white/30 px-8 py-3.5 rounded-xl hover:bg-white/10 transition-colors shadow-lg transform hover:-translate-y-1">
            <div className="flex flex-col items-start">
              <span className="text-[10px] uppercase font-semibold text-white/70">GET IT ON</span>
              <span className="text-lg font-bold leading-tight">Google Play</span>
            </div>
          </button>
        </div>
        
        <div className="mt-16 text-white/40 text-sm font-medium tracking-widest uppercase">
          Homie - Nền tảng kết nối không gian sống
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

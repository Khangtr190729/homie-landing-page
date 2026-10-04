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
          <button className="flex items-center justify-center gap-3 bg-black text-white px-6 py-2.5 rounded-xl hover:bg-gray-900 transition-colors shadow-lg transform hover:-translate-y-1 w-[200px]">
            <svg viewBox="0 0 384 512" className="w-7 h-7 fill-current"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
            <div className="flex flex-col items-start">
              <span className="text-[10px] font-normal leading-tight">Download on the</span>
              <span className="text-xl font-medium leading-tight">App Store</span>
            </div>
          </button>
          
          <button className="flex items-center justify-center gap-3 bg-black text-white px-6 py-2.5 rounded-xl hover:bg-gray-900 transition-colors shadow-lg transform hover:-translate-y-1 w-[200px]">
            <svg viewBox="0 0 512 512" className="w-7 h-7 fill-current"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
            <div className="flex flex-col items-start">
              <span className="text-[10px] font-normal leading-tight uppercase">Get it on</span>
              <span className="text-xl font-medium leading-tight">Google Play</span>
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

const ProviderSection = () => {
  return (
    <section className="py-20 bg-ivory relative border-t border-forest/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-black/5 flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="flex-1">
            <div className="inline-block px-3 py-1 bg-sand/10 text-sand font-bold text-xs rounded-full mb-4 uppercase tracking-wider">
              Dành cho đối tác
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-forest mb-4">
              Bạn có bất động sản cần cho thuê?
            </h2>
            <p className="text-lg text-charcoal/70 max-w-xl">
              Đăng tin dễ dàng, tiếp cận hàng ngàn khách thuê tiềm năng mỗi ngày và quản lý thông tin hiệu quả trên nền tảng của chúng tôi.
            </p>
          </div>
          
          <div className="flex-shrink-0">
            <button className="bg-forest text-white px-8 py-4 rounded-xl font-medium hover:bg-forest/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 whitespace-nowrap">
              Đăng tin cùng Homie
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ProviderSection;

import { Box, Truck, Paintbrush, ArrowDown } from 'lucide-react';

const EcosystemSection = () => {
  return (
    <section className="py-24 bg-sage/10 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-forest mb-6">
            Hơn cả việc tìm một căn phòng
          </h2>
          <p className="text-lg text-charcoal/70">
            Tìm được nơi ở chỉ là bước đầu. Homie đồng hành cùng bạn trong suốt quá trình chuyển đến và обустр không gian mới.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-black/5 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="w-16 h-16 bg-ivory rounded-2xl flex items-center justify-center mb-6 text-sand group-hover:bg-sand group-hover:text-white transition-colors">
              <Box className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-charcoal mb-4">Thanh lý & Chuyển nhượng</h3>
            <p className="text-charcoal/70">Mua bán, trao đổi đồ dùng cũ tiện lợi ngay trong cộng đồng Homie, giúp bạn tiết kiệm chi phí mua sắm.</p>
          </div>
          
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-black/5 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group mt-0 md:mt-8">
            <div className="w-16 h-16 bg-ivory rounded-2xl flex items-center justify-center mb-6 text-forest group-hover:bg-forest group-hover:text-white transition-colors">
              <Truck className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-charcoal mb-4">Hỗ trợ chuyển nhà</h3>
            <p className="text-charcoal/70">Kết nối nhanh chóng với các dịch vụ vận chuyển uy tín, giá cả minh bạch ngay khi bạn quyết định thuê.</p>
          </div>
          
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-black/5 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group mt-0 md:mt-16">
            <div className="w-16 h-16 bg-ivory rounded-2xl flex items-center justify-center mb-6 text-sage group-hover:bg-sage group-hover:text-white transition-colors">
              <Paintbrush className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-charcoal mb-4">Trang trí phòng</h3>
            <p className="text-charcoal/70">Gợi ý thiết kế và mua sắm vật dụng trang trí giúp bạn biến căn phòng trống thành tổ ấm thực sự.</p>
          </div>
          
        </div>
        
        {/* Visual connection lines (desktop only) */}
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-0.5 bg-gradient-to-r from-transparent via-forest/20 to-transparent -z-10 mt-8"></div>
      </div>
    </section>
  );
};

export default EcosystemSection;

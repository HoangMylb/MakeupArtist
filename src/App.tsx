import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation, BrowserRouter, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Facebook, Mail, Phone, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';

// --- Dữ liệu ---

const BLOG_POSTS = [
  {
    id: 1,
    slug: "glass-skin-era-2026",
    title: "Xu hướng makeup 2026: Kỷ nguyên Glass Skin",
    category: "Xu hướng",
    date: "12 Tháng 10, 2025",
    img: "https://picsum.photos/seed/trend1/1200/800",
    duration: "45 phút",
    skinType: "Mọi loại da",
    intro: "Năm 2026 đánh dấu sự trở lại mạnh mẽ của làn da 'Glass Skin' nhưng với một phiên bản tinh tế hơn. Không còn là lớp bóng dầu quá mức, xu hướng năm nay tập trung vào độ trong suốt và sự khỏe mạnh từ sâu bên trong. Đây là biểu tượng của sự sang trọng tối giản, nơi lớp makeup hòa quyện hoàn hảo với làn da tự nhiên, tạo nên một vẻ ngoài thanh khiết và đầy sức sống. Makeup artist chuyên nghiệp ngày nay không chỉ tô điểm mà còn phải là người thấu hiểu cấu trúc da để tạo nên hiệu ứng ánh sáng đa chiều này.",
    technicalBreakdown: "Kỹ thuật cốt lõi của 'Glass Skin 2026' chính là 'Underpainting' kết hợp với 'Luminous finish'. Chúng tôi bắt đầu bằng việc chuẩn bị da cực kỳ kỹ lưỡng với các lớp serum cấp ẩm sâu và kem lót bắt sáng. Thay vì đánh nền dày, kỹ thuật Underpainting cho phép chúng tôi tạo khối và highlight bên dưới lớp kem nền mỏng nhẹ, giúp các đường nét gương mặt hiện lên một cách tự nhiên nhất. \n\nBí quyết giữ lớp nền lâu trôi nằm ở việc sử dụng phấn phủ dạng bột siêu mịn chỉ ở những vùng cần thiết như vùng chữ T, giữ cho gò má luôn có độ bóng tự nhiên. Color theory được áp dụng ở đây là các tông màu trung tính (Muted tones) như hồng tro hoặc nâu nhạt để không làm mất đi sự tập trung vào làn da trong suốt. Hướng dẫn makeup trend 2026 nhấn mạnh vào việc sử dụng cọ lông mềm để tán đều các sản phẩm dạng kem, tạo nên sự chuyển màu không tì vết.",
    productPalette: "Để đạt được độ hoàn hảo này, chúng tôi tin dùng các dòng sản phẩm cao cấp: Dior Forever Skin Glow cho lớp nền hoàn hảo, Chanel Les Beiges Healthy Glow Bronzing Cream để tạo khối tự nhiên, và Hourglass Ambient Lighting Powder để kết thúc với hiệu ứng ánh sáng huyền ảo.",
    closing: "Làn da Glass Skin không chỉ là một xu hướng, đó là một tuyên ngôn về vẻ đẹp tự tin và thuần khiết. Nếu bạn đang tìm kiếm một diện mạo đẳng cấp cho sự kiện sắp tới, hãy để Ethereal Glow giúp bạn tỏa sáng. Đặt lịch ngay hôm nay để trải nghiệm dịch vụ makeup chuyên nghiệp nhất.",
    gallery: [
      "https://picsum.photos/seed/detail1a/600/600",
      "https://picsum.photos/seed/detail1b/600/600",
      "https://picsum.photos/seed/detail1c/600/600"
    ]
  },
  {
    id: 2,
    slug: "tone-tay-sang-chanh",
    title: "Tone Tây sang chảnh cho tiệc tối",
    category: "Hướng dẫn",
    date: "05 Tháng 11, 2025",
    img: "https://picsum.photos/seed/trend2/1200/800",
    duration: "60 phút",
    skinType: "Da dầu / Hỗn hợp",
    intro: "Tone Tây sang chảnh luôn là lựa chọn hàng đầu cho những quý cô muốn khẳng định cá tính và sự quyến rũ trong các buổi tiệc tối. Năm 2026, phong cách này được nâng cấp với sự kết hợp giữa nét cổ điển và hiện đại. Không còn quá nặng nề, tone Tây mới tập trung vào sự sắc sảo của đôi mắt và độ lì mịn của làn da. Đây là phong cách đòi hỏi kỹ năng xử lý màu sắc điêu luyện từ một makeup artist chuyên nghiệp để đảm bảo gương mặt vẫn giữ được nét thanh thoát dù trang điểm đậm.",
    technicalBreakdown: "Điểm nhấn của phong cách này là đôi mắt khói (Smokey eyes) và đường Graphic liner sắc lẹm. Chúng tôi sử dụng bảng màu đất ấm kết hợp với các tông màu lạnh để tạo chiều sâu tối đa cho hốc mắt. Kỹ thuật đánh nền được chú trọng vào độ che phủ cao nhưng vẫn phải đảm bảo 'Luminous finish' ở các điểm bắt sáng để gương mặt không bị phẳng. \n\nBí quyết giữ lớp nền lâu trôi trong suốt buổi tiệc là sử dụng xịt khoá nền chuyên dụng sau mỗi lớp makeup. Chúng tôi áp dụng 'Muted tones' cho đôi môi với các dòng son lì màu nude đất, tạo nên sự cân bằng hoàn hảo với đôi mắt đậm. Hướng dẫn makeup trend 2026 cho thấy việc kết hợp giữa tạo khối dạng kem và dạng bột giúp gương mặt trở nên sắc sảo và bền màu hơn dưới ánh đèn sân khấu.",
    productPalette: "Danh sách sản phẩm không thể thiếu: Bảng mắt Tom Ford Cocoa Mirage, Kem nền Estée Lauder Double Wear cho độ bền cực đại, và Son môi Charlotte Tilbury màu Pillow Talk huyền thoại.",
    closing: "Bạn đã sẵn sàng để trở thành tâm điểm của mọi ánh nhìn? Tone Tây sang chảnh sẽ biến bạn thành một nữ hoàng thực thụ. Hãy liên hệ với chúng tôi để được tư vấn và đặt lịch cho buổi tiệc sắp tới của bạn.",
    gallery: [
      "https://picsum.photos/seed/detail2a/600/600",
      "https://picsum.photos/seed/detail2b/600/600",
      "https://picsum.photos/seed/detail2c/600/600"
    ]
  },
  {
    id: 3,
    slug: "makeup-co-dau-tu-nhien",
    title: "Makeup cô dâu tự nhiên - Vẻ đẹp vượt thời gian",
    category: "Cô dâu",
    date: "20 Tháng 12, 2025",
    img: "https://picsum.photos/seed/trend3/1200/800",
    duration: "90 phút",
    skinType: "Da nhạy cảm / Thường",
    intro: "Trong ngày trọng đại nhất của cuộc đời, mọi cô dâu đều mong muốn mình trông thật xinh đẹp nhưng vẫn là chính mình. Makeup cô dâu tự nhiên chính là chìa khóa để mở ra vẻ đẹp vượt thời gian đó. Xu hướng 2026 hướng tới sự nhẹ nhàng, trong trẻo như sương mai, tôn vinh những đường nét tự nhiên nhất trên khuôn mặt. Một makeup artist chuyên nghiệp sẽ biết cách làm cho cô dâu tỏa sáng một cách tinh tế nhất, để khi nhìn lại những bức ảnh sau nhiều năm, vẻ đẹp ấy vẫn không hề lỗi mốt.",
    technicalBreakdown: "Kỹ thuật đánh nền cho cô dâu yêu cầu sự tỉ mỉ tuyệt đối. Chúng tôi sử dụng kỹ thuật 'Skin-like finish', tạo nên một lớp nền mỏng như không nhưng vẫn che phủ được các khuyết điểm. Việc sử dụng các tông màu hồng đào và cam san hô (Peach & Coral) giúp gương mặt trở nên rạng rỡ và đầy sức sống. \n\nBí quyết giữ lớp nền lâu trôi cho cô dâu là việc cấp ẩm đa tầng trước khi trang điểm. Chúng tôi hạn chế tối đa việc sử dụng phấn phủ để giữ độ bóng tự nhiên của da. Hướng dẫn makeup trend 2026 cho cô dâu nhấn mạnh vào việc chuốt mi tơi và sử dụng màu mắt dạng nhũ mịn để tạo hiệu ứng long lanh. Color theory được áp dụng là sự phối hợp giữa các tông màu ấm để tạo cảm giác gần gũi và hạnh phúc.",
    productPalette: "Sản phẩm tin dùng cho ngày cưới: Kem lót Guerlain L'Or, Phấn má hồng NARS Orgasm, và Xịt khoá nền Skindinavia Bridal Setting Spray.",
    closing: "Ngày cưới của bạn xứng đáng với những gì tốt đẹp nhất. Hãy để Ethereal Glow đồng hành cùng bạn trong hành trình tìm lại vẻ đẹp thuần khiết nhất. Đặt lịch ngay để nhận được sự chăm sóc đặc biệt dành riêng cho cô dâu.",
    gallery: [
      "https://picsum.photos/seed/detail3a/600/600",
      "https://picsum.photos/seed/detail3b/600/600",
      "https://picsum.photos/seed/detail3c/600/600"
    ]
  }
];

// --- Các thành phần ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Trang chủ', path: '/' },
    { name: 'Xu hướng', path: '/blog' },
    { name: 'Đặt lịch', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass-nav py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif tracking-tighter font-bold">
          ETHEREAL<span className="text-gold">GLOW</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-12 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-[10px] uppercase tracking-[0.2em] font-bold hover:text-gold transition-colors ${location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path)) ? 'text-gold' : 'text-charcoal'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary py-2 px-6 text-[10px]">
            Đặt lịch ngay
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-charcoal" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-cream border-b border-charcoal/10 md:hidden"
          >
            <div className="flex flex-col p-8 space-y-6 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-sm uppercase tracking-widest font-medium"
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setIsOpen(false)} className="btn-primary w-full text-center">
                Đặt lịch ngay
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-charcoal text-cream py-20 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="col-span-1 md:col-span-2">
        <h2 className="text-3xl font-serif mb-6">ETHEREAL GLOW</h2>
        <p className="text-cream/60 max-w-md font-light leading-relaxed">
          Định nghĩa lại vẻ đẹp qua sự sang trọng tối giản và nghệ thuật chuyên nghiệp. 
          Chuyên về trang điểm cô dâu, thời trang và sự kiện cao cấp.
        </p>
      </div>
      <div>
        <h4 className="text-xs uppercase tracking-widest font-bold mb-6 text-gold">Khám phá</h4>
        <ul className="space-y-4 text-sm font-light text-cream/80">
          <li><Link to="/" className="hover:text-gold transition-colors">Trang chủ</Link></li>
          <li><Link to="/blog" className="hover:text-gold transition-colors">Xu hướng làm đẹp</Link></li>
          <li><Link to="/contact" className="hover:text-gold transition-colors">Đặt lịch</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-xs uppercase tracking-widest font-bold mb-6 text-gold">Liên hệ</h4>
        <ul className="space-y-4 text-sm font-light text-cream/80">
          <li className="flex items-center gap-3"><Instagram size={16} /> @ethereal.glow</li>
          <li className="flex items-center gap-3"><Mail size={16} /> hello@etherealglow.com</li>
          <li className="flex items-center gap-3"><Phone size={16} /> +84 900 000 000</li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-[10px] uppercase tracking-widest text-cream/40">© 2026 Ethereal Glow Artistry. Bảo lưu mọi quyền.</p>
      <div className="flex gap-6">
        <Facebook size={18} className="text-cream/40 hover:text-cream cursor-pointer transition-colors" />
        <Instagram size={18} className="text-cream/40 hover:text-cream cursor-pointer transition-colors" />
      </div>
    </div>
  </footer>
);

// --- Các trang ---

const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="overflow-hidden"
    >
      {/* Hero Section */}
      <section className="relative split-screen-hero flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src="https://picsum.photos/seed/makeup1/1200/1600" 
            alt="Nghệ thuật trang điểm"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-charcoal/10"></div>
        </div>
        <div className="w-full md:w-1/2 h-1/2 md:h-full bg-nude flex items-center justify-center p-12 md:p-24">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-md"
          >
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-charcoal/50 mb-4 block">Nghệ thuật chuyên nghiệp</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">Khám phá <br/><i className="font-normal">Vẻ đẹp Rạng ngời</i></h1>
            <p className="text-charcoal/70 mb-10 font-light leading-relaxed">
              Dịch vụ trang điểm cao cấp được thiết kế riêng cho nét đẹp độc bản của bạn. Từ vẻ rạng rỡ tự nhiên của cô dâu đến phong cách thời trang ấn tượng.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-3 group">
              Đặt lịch ngay <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6 bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-12 italic">"Trang điểm không phải là lớp mặt nạ che đi vẻ đẹp; đó là vũ khí giúp bạn thể hiện con người thật từ bên trong."</h2>
            <div className="w-20 h-px bg-gold mx-auto mb-12"></div>
            <p className="text-lg font-light text-charcoal/80 leading-relaxed">
              Triết lý của tôi tập trung vào <b>Sự sang trọng tối giản</b>. Tôi tin vào việc tôn vinh những gì bạn vốn có, sử dụng các sản phẩm cao cấp và kỹ thuật tinh tế để tạo nên một diện mạo vẫn là chính bạn, nhưng hoàn hảo hơn. Dù là ngày cưới hay một buổi chụp hình thương mại, mục tiêu của tôi là sự thanh lịch vượt thời gian.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Gallery */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-gold mb-2 block">Bộ sưu tập</span>
              <h2 className="text-4xl font-serif">Các phong cách nổi bật</h2>
            </div>
            <Link to="/blog" className="text-xs uppercase tracking-widest font-bold border-b border-charcoal pb-1 hover:text-gold hover:border-gold transition-all">Xem tất cả xu hướng</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.slice(0, 3).map((item, idx) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group cursor-pointer"
              >
                <Link to={`/blog/${item.slug}`}>
                  <div className="relative aspect-[4/5] overflow-hidden mb-6">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white text-xs uppercase tracking-widest font-bold border border-white px-6 py-2">Xem chi tiết</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-serif mb-1">{item.title}</h3>
                  <p className="text-xs uppercase tracking-widest text-charcoal/40 font-bold">{item.category}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

const Blog = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 px-6 bg-cream min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 text-center">
          <span className="text-xs uppercase tracking-[0.4em] font-bold text-gold mb-4 block">Nhật ký</span>
          <h1 className="text-5xl md:text-6xl font-serif mb-6">Xu hướng & Bí quyết Làm đẹp</h1>
          <p className="text-charcoal/60 max-w-2xl mx-auto font-light">
            Cập nhật những xu hướng trang điểm chuyên nghiệp mới nhất, từ các phong cách theo mùa đến lời khuyên từ chuyên gia cho thói quen hàng ngày của bạn.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {BLOG_POSTS.map((post, idx) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <Link to={`/blog/${post.slug}`}>
                <div className="relative aspect-video overflow-hidden mb-8">
                  <img 
                    src={post.img} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-1">
                    <span className="text-[10px] uppercase tracking-widest font-bold">{post.category}</span>
                  </div>
                </div>
                <h2 className="text-3xl font-serif mb-4 group-hover:text-gold transition-colors">{post.title}</h2>
                <p className="text-charcoal/70 font-light leading-relaxed mb-6 line-clamp-3">
                  {post.intro}
                </p>
                <div className="text-xs uppercase tracking-widest font-bold border-b border-charcoal pb-1 hover:text-gold hover:border-gold transition-all inline-flex items-center gap-2">
                  Đọc thêm <ArrowRight size={14} />
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const PostDetail = () => {
  const { slug } = useParams();
  const post = BLOG_POSTS.find(p => p.slug === slug);
  const relatedPosts = BLOG_POSTS.filter(p => p.slug !== slug).slice(0, 2);

  if (!post) return <div className="pt-40 text-center font-serif text-2xl">Không tìm thấy bài viết</div>;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-cream min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <img 
          src={post.img} 
          alt={post.title} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-charcoal/30 flex items-end">
          <div className="max-w-7xl mx-auto px-6 pb-20 w-full">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-xs uppercase tracking-[0.4em] font-bold text-white/80 mb-4 block">{post.category} — {post.date}</span>
              <h1 className="text-4xl md:text-6xl font-serif text-white max-w-4xl leading-tight">{post.title}</h1>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="prose prose-lg max-w-none">
              <section className="mb-16">
                <h2 className="text-3xl font-serif mb-8 text-charcoal">Tầm nhìn</h2>
                <p className="text-charcoal/80 font-light leading-relaxed text-lg">
                  {post.intro}
                </p>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-serif mb-8 text-charcoal">Phân tích kỹ thuật</h2>
                <div className="text-charcoal/80 font-light leading-relaxed space-y-6">
                  {post.technicalBreakdown.split('\n\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
                
                <div className="mt-10 bg-nude/30 p-8 border-l-4 border-gold">
                  <h4 className="text-xs uppercase tracking-widest font-bold mb-4 text-gold">Lời khuyên chuyên gia</h4>
                  <p className="text-charcoal/70 italic font-light">
                    "Luôn ưu tiên việc chuẩn bị da (Skin prep) hơn là việc che phủ. Một làn da đủ ẩm sẽ giúp các sản phẩm makeup hòa quyện và giữ được độ tươi mới suốt cả ngày."
                  </p>
                </div>
              </section>

              {/* Comparison/Gallery */}
              <section className="mb-16">
                <h2 className="text-3xl font-serif mb-8 text-charcoal">Chi tiết cận cảnh</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {post.gallery.map((img, i) => (
                    <div key={i} className="aspect-square overflow-hidden group">
                      <img 
                        src={img} 
                        alt="Chi tiết" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-[10px] uppercase tracking-widest text-charcoal/40 text-center">Ảnh cận cảnh: Mắt, Môi và Kết cấu da</p>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-serif mb-8 text-charcoal">Bảng sản phẩm</h2>
                <p className="text-charcoal/80 font-light leading-relaxed">
                  {post.productPalette}
                </p>
                <ul className="mt-8 space-y-3">
                  {['Dior Forever Skin Glow', 'Chanel Les Beiges', 'Hourglass Ambient Lighting', 'Charlotte Tilbury Magic Cream'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-light text-charcoal/70">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mb-16 pt-12 border-t border-charcoal/10">
                <h2 className="text-3xl font-serif mb-8 text-charcoal italic">Sẵn sàng cho sự thay đổi của bạn?</h2>
                <p className="text-charcoal/80 font-light leading-relaxed mb-10">
                  {post.closing}
                </p>
                <Link to="/contact" className="btn-primary inline-flex items-center gap-4">
                  Đặt phong cách này <Calendar size={16} />
                </Link>
              </section>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/3">
            <div className="sticky top-32 space-y-8">
              <div className="bg-white p-8 border border-charcoal/5 shadow-sm">
                <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-gold mb-8">Thông tin nhanh</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-charcoal/5 pb-4">
                    <span className="text-xs uppercase tracking-widest text-charcoal/40">Thời gian</span>
                    <span className="font-serif text-lg">{post.duration}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-charcoal/5 pb-4">
                    <span className="text-xs uppercase tracking-widest text-charcoal/40">Loại da</span>
                    <span className="font-serif text-lg">{post.skinType}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-charcoal/5 pb-4">
                    <span className="text-xs uppercase tracking-widest text-charcoal/40">Phong cách</span>
                    <span className="font-serif text-lg">{post.category}</span>
                  </div>
                </div>
                <Link to="/contact" className="btn-primary w-full mt-10 text-center block">
                  Đặt chỗ ngay
                </Link>
              </div>

              <div className="bg-charcoal text-cream p-8">
                <h4 className="text-xs uppercase tracking-widest font-bold mb-4 text-gold">Bạn cần tư vấn?</h4>
                <p className="text-sm font-light text-cream/60 mb-6">Bạn không chắc phong cách này có phù hợp với loại da của mình? Hãy trò chuyện với chuyên gia của chúng tôi để nhận được đề xuất cá nhân hóa.</p>
                <Link to="/contact" className="text-xs uppercase tracking-widest font-bold border-b border-gold pb-1 text-gold">Liên hệ chuyên gia</Link>
              </div>
            </div>
          </aside>
        </div>

        {/* Related Looks */}
        <section className="mt-32 pt-20 border-t border-charcoal/10">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl font-serif">Các phong cách liên quan</h2>
            <Link to="/blog" className="text-xs uppercase tracking-widest font-bold border-b border-charcoal pb-1">Xem tất cả</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {relatedPosts.map((rp) => (
              <Link key={rp.id} to={`/blog/${rp.slug}`} className="group">
                <div className="aspect-video overflow-hidden mb-6">
                  <img 
                    src={rp.img} 
                    alt={rp.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-2xl font-serif mb-2 group-hover:text-gold transition-colors">{rp.title}</h3>
                <span className="text-[10px] uppercase tracking-widest font-bold text-charcoal/40">{rp.category}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
};

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    date: '',
    service: 'Trang điểm cô dâu',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Giả lập gọi API
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      console.log('Dữ liệu đặt lịch đã được gửi:', formState);
    }, 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 px-6 bg-cream min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.4em] font-bold text-gold mb-4 block">Đặt lịch</span>
            <h1 className="text-5xl md:text-6xl font-serif mb-8">Hãy cùng tạo nên <br/>điều gì đó <i className="font-normal">Tuyệt vời</i></h1>
            <p className="text-charcoal/70 font-light leading-relaxed mb-12 max-w-md">
              Bạn đã sẵn sàng để tỏa sáng? Điền vào form để yêu cầu đặt lịch. Tôi sẽ phản hồi trong vòng 24 giờ để xác nhận lịch trống và thảo luận về mong muốn của bạn.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full border border-charcoal/10 flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-gold" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold mb-1">Gửi Email</h4>
                  <p className="text-charcoal/60 font-light">bookings@etherealglow.com</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full border border-charcoal/10 flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-gold" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold mb-1">Gọi cho chúng tôi</h4>
                  <p className="text-charcoal/60 font-light">+84 900 000 000</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full border border-charcoal/10 flex items-center justify-center shrink-0">
                  <Instagram size={20} className="text-gold" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold mb-1">Theo dõi chúng tôi</h4>
                  <p className="text-charcoal/60 font-light">@ethereal.glow.artistry</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 md:p-12 shadow-2xl shadow-charcoal/5"
          >
            {isSuccess ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} className="text-gold" />
                </div>
                <h2 className="text-3xl font-serif mb-4">Đã nhận yêu cầu</h2>
                <p className="text-charcoal/60 font-light mb-8">
                  Cảm ơn bạn đã lựa chọn Ethereal Glow. Chúng tôi đã gửi email xác nhận đến hộp thư của bạn và sẽ liên hệ sớm nhất có thể.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="btn-outline w-full"
                >
                  Gửi yêu cầu khác
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-charcoal/50">Họ và tên</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Nguyễn Văn A"
                      className="w-full border-b border-charcoal/10 py-3 focus:border-gold outline-none transition-colors font-light"
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-charcoal/50">Số điện thoại</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="+84 ..."
                      className="w-full border-b border-charcoal/10 py-3 focus:border-gold outline-none transition-colors font-light"
                      value={formState.phone}
                      onChange={(e) => setFormState({...formState, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-charcoal/50">Ngày dịch vụ</label>
                    <div className="relative">
                      <input 
                        required
                        type="date" 
                        className="w-full border-b border-charcoal/10 py-3 focus:border-gold outline-none transition-colors font-light bg-transparent"
                        value={formState.date}
                        onChange={(e) => setFormState({...formState, date: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-charcoal/50">Loại dịch vụ</label>
                    <select 
                      className="w-full border-b border-charcoal/10 py-3 focus:border-gold outline-none transition-colors font-light bg-transparent"
                      value={formState.service}
                      onChange={(e) => setFormState({...formState, service: e.target.value})}
                    >
                      <option>Trang điểm cô dâu</option>
                      <option>Thời trang / Editorial</option>
                      <option>Tiệc tối / Sự kiện</option>
                      <option>Khóa học trang điểm</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-charcoal/50">Mong muốn / Lời nhắn của bạn</label>
                  <textarea 
                    rows={4}
                    placeholder="Hãy cho chúng tôi biết về sự kiện và phong cách bạn mong muốn..."
                    className="w-full border-b border-charcoal/10 py-3 focus:border-gold outline-none transition-colors font-light resize-none"
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-primary w-full flex justify-center items-center gap-3 disabled:opacity-50"
                >
                  {isSubmitting ? 'Đang gửi yêu cầu...' : 'Yêu cầu đặt lịch'}
                  {!isSubmitting && <Calendar size={16} />}
                </button>
                <p className="text-[10px] text-center text-charcoal/40 uppercase tracking-widest">
                  Hệ thống đặt lịch an toàn bởi Ethereal Glow Artistry
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

// --- Main App ---

const AppContent = () => {
  const location = useLocation();

  // Cuộn lên đầu trang khi chuyển route
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<PostDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

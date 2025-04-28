const translations = {
    tr: {
      home: "Ana Sayfa",
      work: "İş Hayatı",
      individual: "Bireysel",
      corporate: "Kurumsal",
      education: "Eğitim",
      sports: "Spor",
      tools: "Araçlar",
      welcome: "Kişisel web siteme hoş geldiniz!",
      intro: "Geçmişimi, projelerimi ve daha fazlasını keşfedin.",
  
      qr_title: "QR Kod Üretici",
      qr_desc: "Aşağıya bir metin girerek anında QR kodunuzu oluşturun!",
  
      seo_title: "Etsy SEO Analiz Aracı",
      seo_intro: "Ürün başlığı, etiket ve açıklamanızı girerek SEO performansınızı analiz edin.",
      seo_label_title: "Ürün Başlığı",
      seo_label_tags: "Etiketler (virgülle ayırın)",
      seo_label_desc: "Açıklama",
      seo_button: "Analiz Et",
  
      waterpolo_title: "Su Topu",
      waterpolo_text: "2008-2016 yılları arasında ENKA Spor Kulübü'nde su topu oynadım. Bu yıllar boyunca disiplin, dayanıklılık ve stratejik düşünme becerileri kazandım. 8 Türkiye Şampiyonluğu kazandığımız bu süreçte takım ruhu ve liderlik gibi değerleri benimsedim.",
      handball_title: "Hentbol",
      handball_text: "Üniversitenin ikinci yılında Kadir Has Üniversitesi Hentbol Takımı’na katıldım ve 2021-2023 yılları arasında takım kaptanlığı yaptım. 2022 yılında Üniversiteler Ligi’nde gruptan çıkarak kulüp tarihinde ikinci kez bu başarıya ulaştık. Bu deneyim liderlik, azim ve baskı altında takım ruhu konularında bana çok şey kattı.",
  
      pod_title: "Print-on-Demand Kar Hesaplayıcı",
      pod_desc: "Ürün maliyeti, satış fiyatı ve platform kesintilerini girerek net karınızı hesaplayın.",
      pod_base_cost: "Ürün Maliyeti ($)",
      pod_shipping_cost: "Kargo Maliyeti ($)",
      pod_selling_price: "Satış Fiyatı ($)",
      pod_platform_fee: "Platform Kesintisi (%)",
      pod_calculate: "Hesapla",

      highschool_title: "Lise",
      highschool_text: "Nişantaşı Nuri Akın Anadolu Lisesi’nden mezun oldum. Bu okulda güçlü bir akademik temel edindim ve teknolojiye olan ilgim bu yıllarda başladı.",
      bachelor_title: "Lisans",
      bachelor_text: "Kadir Has Üniversitesi Elektrik-Elektronik Mühendisliği bölümünü %100 İngilizce olarak tamamladım. Bitirme projemde bir road blocker tasarlayarak mühendisliği güvenlikle birleştirdim.",
      master_title: "Yüksek Lisans",
      master_text: "UCT Prag'da aldığım İnovasyon Proje Yönetimi yüksek lisans programı kapsamında Proje Yönetimi, İnovasyon Yönetimi, Stratejik Düşünme ve İşletme Ekonomisi gibi dersler aldım. Bu dersler, sadece inovasyon odaklı projelerin başlatılması ve yönetilmesine dair pratik yöntemleri öğretmekle kalmadı; aynı zamanda organizasyonel yapıları anlama, problem çözme yaklaşımları geliştirme ve uzun vadeli stratejik düşünme yetkinliklerimi de pekiştirdi.",

      etsy_sales_title: "Etsy Satış Deneyimi",
      etsy_sales_text: "6 yıl boyunca Etsy’de 3000’in üzerinde satış gerçekleştirdim. Ev dekorasyon ürünlerinden sweatshirt ve tişörtlere, iç çamaşırından dijital tasarımlara kadar birçok kategoride satış yaptım.",
  
      etsy_consulting_title: "Etsy Danışmanlığı",
      etsy_consulting_text: "Pandemi sonrası e-ticaret artışıyla birlikte Etsy’de satış yapmak isteyen girişimcilere destek verdim. Mağaza kurulumundan ürün yüklemeye, sosyal medyadan dijital pazarlamaya kadar 9 mağazaya danışmanlık sağladım.",
  
      event_organizing_title: "Etkinlik & Mekan Danışmanlığı",
      event_organizing_text: "Türkiye'de BARınak adında bir topluluk kurdum. 6 büyük parti organize ettim. Mekanlara danışmanlık vererek müşteri sayısını ve gelirlerini artırdım.",
  
      supply_title: "Tedarik Zinciri Planlama Uzmanı",
      supply_text: "Pizza Lazza ve Saloon Burger’da stok takip ve satın alma sistemleri kurdum. Depo sayısını 3’ten 2’ye, palet sayısını 2000’den 1200’e düşürdüm. Tahminleme modelleri geliştirip tedarikçi görüşmeleri yürüttüm.",
  
      radio_title: "Radyo Kontrol Sistemleri Stajyeri",
      radio_text: "Turkcell’de 2G/3G/4G teknolojileri üzerinde çalıştım. Altyapı analizi ve operasyonel verimlilik üzerine üretici firmalarla iş birliği yaptım.",
  
      strategy_title: "Stratejik Planlama Uzman Yardımcısı",
      strategy_text: "Külah Patates ürününü Türkiye’ye ilk kez sundum. Malzeme seçiminden pazar araştırmasına kadar tüm süreci yönettim. Veri analizleri, raporlamalar ve performans takibi görevlerini üstlendim.",
  
      master_title: "Yüksek Lisans",
      master_text: `🎓 Seçilen Yüksek Lisans Derslerine Yönelik Değerlendirme<br /><br />
      Yüksek lisans eğitimimi University of Chemistry and Technology Prague (UCT Prague)’da, Innovational Project Management (İnovasyonel Proje Yönetimi) alanında yapıyorum. Program boyunca stratejik düşünme, proje liderliği ve inovasyon odaklı problem çözme konularında derinleşme fırsatı buldum. Aşağıda yıldızlayarak seçtiğim bazı dersler ve bu derslerin bana kattıklarıyla ilgili kısa değerlendirmeler yer almaktadır:<br /><br />
      
      📊 <strong>İstatistiksel Analiz</strong><br />
      Bu ders, veri yorumlama ve modelleme becerilerimi geliştirdi. Regresyon analizi, hipotez testleri ve veri görselleştirme gibi yöntemleri gerçek dünya iş senaryolarında kullanmayı öğrendim. Özellikle, veri setlerinden anlamlı içgörüler çıkarma ve bu içgörüleri proje tahmini ile risk değerlendirmesinde kullanmaya odaklandım.<br /><br />
      
      📈 <strong>Proje Yönetimi</strong><br />
      Proje yaşam döngüsü, paydaş yönetimi, bütçeleme ve kapsam kontrolü konularında derinlemesine bilgi edindim. Özellikle Agile metodolojilerine ve zaman çizelgeleri ile ekip performansını optimize etmek için Gantt şemaları ve kaynak planlama araçlarına odaklandım.<br /><br />
      
      📣 <strong>Pazarlama Yönetimi</strong><br />
      Tüketici davranışı, marka konumlandırma ve entegre pazarlama stratejileri konularını inceledim. Gerçek hayat vaka çalışmalarında segmentasyon, hedefleme ve konumlandırma çerçevelerini uygulayarak yenilikçi ürünler için etkili kampanyalar oluşturma üzerine çalıştım.<br /><br />
      
      💰 <strong>Finansal Yönetim</strong><br />
      Bu ders, sermaye bütçelemesi, finansal tablo analizi ve değerleme gibi temel kurumsal finans konularını kapsadı. Yönetsel bakış açısıyla finansal karar alma süreçlerini anlamaya ve finansal sağlığın proje başarısına etkisini kavramaya odaklandım.<br /><br />
      
      🏭 <strong>Yalın Üretim</strong><br />
      Yalın üretim prensipleri sayesinde israfı tespit etme ve daha az kaynakla daha fazla değer üretme konularını öğrendim. Süreç haritalama, Kaizen, 5S ve Kanban gibi sürekli iyileştirme araçlarına özellikle yoğunlaştım. Bu yöntemler, sınırlı kaynaklarla yürütülen inovasyon projelerinde oldukça değerliydi.<br /><br />
      
      📉 <strong>Mikroekonomi Teorisi</strong><br />
      Arz-talep dinamikleri, fiyatlandırma stratejileri ve piyasa yapıları gibi konuları derinlemesine inceledim. Farklı rekabet koşullarında işletmelerin nasıl faaliyet gösterdiğini ve ekonomik davranışların fiyat ve üretim kararlarını nasıl etkilediğini anlamaya çalıştım.<br /><br />
      
      📊 <strong>Verimlilik ve Yönetim Kontrol Sistemleri</strong><br />
      Bu ders, kurumların iç performanslarını nasıl değerlendirdiğini anlamama yardımcı oldu. KPI'lar, kıyaslama (benchmarking) ve Balanced Scorecard gibi yönetim kontrol tekniklerine odaklandım. Bu araçların operasyonları stratejik hedeflerle hizalamadaki önemini kavradım.<br /><br />
      
      🧠 <strong>İnovasyon Yönetimi ve Projesi</strong><br />
      İnovasyonun fikir aşamasından uygulamaya kadar olan yaşam döngüsünü öğrendim. Özellikle inovasyon stratejisi, portföy yönetimi ve organizasyonel dirençle başa çıkma konularına odaklandım. Küçük çaplı bir inovasyon projesine liderlik ederek yaratıcı araçlar ve proje planlama yöntemlerini gerçek bir çözüm önerisine dönüştürdüm.<br /><br />
      
      🚀 <strong>Agile Proje Yönetimi</strong><br />
      Bu ders, en etkileyici derslerden biriydi. Scrum ve Kanban gibi Agile framework'ler konusunda uygulamalı deneyim kazandım. Esnek, yinelemeli gelişim ve müşteri odaklı proje yönetimi anlayışı kazandım. Bu yaklaşım, işbirliği ve adaptasyon anlayışımı tamamen değiştirdi.`
          },
  
    en: {
      home: "Home",
      work: "Work Experience",
      individual: "Individual",
      corporate: "Corporate",
      education: "Education",
      sports: "Sports",
      tools: "Tools",
      welcome: "Welcome to my personal website!",
      intro: "Explore my background, projects, and more.",
  
      qr_title: "QR Code Generator",
      qr_desc: "Enter a text below and get your QR code instantly!",
  
      seo_title: "Etsy SEO Analyzer",
      seo_intro: "Paste your Etsy product title, tags and description. Get instant SEO feedback.",
      seo_label_title: "Product Title",
      seo_label_tags: "Tags (comma separated)",
      seo_label_desc: "Description",
      seo_button: "Analyze",
  
      waterpolo_title: "Water Polo",
      waterpolo_text: "I played water polo at ENKA Sports Club between 2008 and 2016. During these formative years, I developed discipline, endurance, and strategic thinking. Competing in numerous national tournaments, I proudly contributed to winning 8 Turkish Championships. Water polo was more than a sport to me—it was a school of teamwork, leadership, and resilience.",
      handball_title: "Handball",
      handball_text: "In my second year of university, I joined the Kadir Has University Handball Team and became the team captain from 2021 to 2023. In 2022, we advanced past the group stage in the University League—a historic achievement for the team, marking only the second time in the school’s history. This experience taught me the power of leadership, perseverance, and team spirit under pressure.",
  
      pod_title: "Print-on-Demand Profit Calculator",
      pod_desc: "Enter your product costs, selling price, and platform fees to calculate your net profit.",
      pod_base_cost: "Base Product Cost ($)",
      pod_shipping_cost: "Shipping Cost ($)",
      pod_selling_price: "Selling Price ($)",
      pod_platform_fee: "Platform Fee (%)",
      pod_calculate: "Calculate",

      highschool_title: "High School",
      highschool_text: "I graduated from Nisantasi Nuri Akin Anatolian High School in Istanbul. Here, I built a strong academic foundation and started developing an interest in technology.",
      bachelor_title: "Bachelor's Degree",
      bachelor_text: "I completed my undergraduate studies in Electrical and Electronics Engineering at Kadir Has University with 100% English instruction. My final project involved designing a road blocker, combining engineering with safety innovation.",
      
      master_title: "Master's Degree",
      master_text: "During my master's in Innovation Project Management at UCT Prague, I took courses like Project Management, Innovation Management, Strategic Thinking, and Business Economics. These subjects not only provided practical methodologies for initiating and managing innovation-driven projects, but also helped me develop a holistic understanding of organizational dynamics, problem-solving frameworks, and long-term strategic thinking.",

      etsy_sales_title: "Etsy Sales Experience",
      etsy_sales_text: "Over 6 years, I made more than 3000 sales on Etsy. I sold home decor, sweatshirts, t-shirts, underwear, socks, vintage jerseys, and most recently, digitally designed items.",
  
      etsy_consulting_title: "Etsy Consulting Experience",
      etsy_consulting_text: "Following the post-pandemic e-commerce boom, I supported entrepreneurs in the US, Europe, and Turkey who wanted to sell on Etsy. I provided services like store setup, product upload, social media, and digital marketing.",
  
      event_organizing_title: "Event & Venue Consulting",
      event_organizing_text: "I founded BARınak and organized 6 events with 200+ attendees. I helped venues attract first customers and increase revenue with consulting strategies.",
  
      supply_title: "Supply Chain Planning Specialist",
      supply_text: "At Pizza Lazza and Saloon Burger – I built a stock monitoring and purchasing system, consolidated warehouses, optimized supplier negotiations, and developed forecasting models.",
  
      radio_title: "Radio Control Systems Intern",
      radio_text: "At Turkcell – I worked on 2G/3G/4G network stability and collaborated with vendors to enhance infrastructure efficiency.",
  
      strategy_title: "Strategic Planning Assistant Specialist",
      strategy_text: "At Pizza Lazza and Saloon Burger – I introduced 'Külah Patates' to the market, led the entire development process, and handled data analysis and reporting tasks.",
  
      master_title: "Master's Degree",
      master_text: ` Reflection on Selected Master's Courses<br /><br />
      I am currently pursuing my master’s degree in Innovation Project Management at the University of Chemistry and Technology Prague (UCT Prague). Throughout the program, I’ve had the opportunity to deepen my understanding of strategic thinking, innovation leadership, and analytical problem-solving. Below are reflections on the core courses I found particularly impactful:<br /><br />
      
       <strong>Statistical Analysis</strong><br />
      This course helped me enhance my ability to interpret and model data. I learned to apply regression analysis, hypothesis testing, and data visualization in real-world business scenarios. I focused particularly on extracting meaningful insights from data and using those insights in project forecasting and risk assessment.<br /><br />
      
       <strong>Project Management</strong><br />
      I gained in-depth knowledge of the project life cycle, stakeholder engagement, budgeting, and scope control. I concentrated on Agile methodologies and tools like Gantt charts and resource planning to optimize timelines and team efficiency.<br /><br />
      
       <strong>Marketing Management</strong><br />
      I explored topics such as consumer behavior, brand positioning, and integrated marketing strategies. Through case studies, I practiced segmentation, targeting, and positioning frameworks to build effective campaigns for innovative products.<br /><br />
      
       <strong>Financial Management</strong><br />
      This course covered core corporate finance concepts such as capital budgeting, financial statement analysis, and valuation. I focused on understanding financial decision-making from a managerial perspective and its impact on project success.<br /><br />
      
       <strong>Lean Production</strong><br />
      Lean principles taught me how to identify waste and deliver more value with fewer resources. I focused on process mapping, Kaizen, 5S, and Kanban—tools that proved especially useful for running innovation projects with limited resources.<br /><br />
      
       <strong>Microeconomic Theory</strong><br />
      I studied supply-demand dynamics, pricing strategies, and market structures in depth. The course helped me understand how businesses operate under various competitive conditions and how economic behavior influences pricing and production decisions.<br /><br />
      
       <strong>Efficiency and Management Control Systems</strong><br />
      This course helped me understand how organizations assess internal performance. I focused on KPIs, benchmarking, and Balanced Scorecard tools, and grasped their importance in aligning operations with strategic goals.<br /><br />
      
       <strong>Innovation Management & Project</strong><br />
      I learned the innovation lifecycle—from idea generation to implementation. I focused on innovation strategy, portfolio management, and overcoming organizational resistance. I also led a small-scale innovation project, using creative tools and planning techniques to turn an idea into a practical solution.<br /><br />
      
       <strong>Agile Project Management</strong><br />
      This was one of the most transformative courses. I gained hands-on experience with Agile frameworks like Scrum and Kanban. I embraced iterative development, flexibility, and customer-centric project thinking—transforming how I collaborate and adapt in projects.`
          }
  };
  
window.translations = translations;
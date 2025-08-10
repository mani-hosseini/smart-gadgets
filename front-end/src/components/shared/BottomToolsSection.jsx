import React from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Shield, 
  Truck, 
  CreditCard, 
  Headphones,
  Star,
  Zap
} from 'lucide-react';

const BottomToolsSection = () => {
  const tools = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "پشتیبانی ۲۴/۷",
      description: "در هر ساعت شبانه‌روز در خدمت شما هستیم",
      color: "bg-blue-500"
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "ارسال رایگان",
      description: "برای خریدهای بالای ۵۰۰ هزار تومان",
      color: "bg-green-500"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "ضمانت اصالت",
      description: "تمام محصولات ما اصل و دارای گارانتی",
      color: "bg-purple-500"
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "پرداخت امن",
      description: "پرداخت آنلاین با درگاه‌های معتبر",
      color: "bg-orange-500"
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "مشاوره رایگان",
      description: "کارشناسان ما آماده راهنمایی شما هستند",
      color: "bg-pink-500"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "تحویل سریع",
      description: "تحویل در کمترین زمان ممکن",
      color: "bg-yellow-500"
    }
  ];

  const quickActions = [
    {
      icon: <MessageCircle className="w-5 h-5" />,
      title: "چت آنلاین",
      action: "شروع چت"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "موقعیت ما",
      action: "مشاهده نقشه"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "ساعات کاری",
      action: "شنبه تا چهارشنبه ۹-۱۸"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* بخش ابزارهای اصلی */}
        <div className="mb-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              چرا ما را انتخاب کنید؟
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              با بیش از ۱۰ سال تجربه در زمینه فروش گجت‌های هوشمند، 
              ما متعهد به ارائه بهترین خدمات به مشتریان خود هستیم
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className={`inline-flex p-3 rounded-lg ${tool.color} text-white mb-4`}>
                  {tool.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {tool.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {tool.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* بخش آمار و ارقام */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">۱۰,۰۰۰+</div>
              <div className="text-gray-600">مشتری راضی</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">۵۰۰+</div>
              <div className="text-gray-600">محصول متنوع</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">۵۰+</div>
              <div className="text-gray-600">برند معتبر</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">۲۴/۷</div>
              <div className="text-gray-600">پشتیبانی</div>
            </div>
          </div>
        </div>

        {/* بخش اقدامات سریع */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">نیاز به کمک دارید؟</h3>
            <p className="text-blue-100">
              تیم پشتیبانی ما آماده پاسخگویی به سوالات شما است
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 cursor-pointer"
              >
                <div className="inline-flex p-3 rounded-lg bg-white/20 mb-4">
                  {action.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2">{action.title}</h4>
                <p className="text-blue-100 text-sm">{action.action}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomToolsSection; 
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import NotFound from './src/notFound';
import { Linceses } from './src/components';
import { clients } from './src/constans/indx';
import { comment } from 'postcss';

const languageDirection = {
    ar: 'rtl', // Arabic language direction is RTL
    default: 'ltr', // Default language direction is LTR
  };

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
        en: {
          translation: {
            
            greeting: 'Together we advance education, innovate for a changing world',
            //Not Found page
            NotFound: {
              title: "404 Not Found",
              desc: "The page you are looking for does not exist.",
              btn: "Go to Home",
            },
            // Navbar
            navbar: {
              home: 'Home',
              about: 'About Us',
              ourProjects: 'Projects',
              contact: 'Contact Us',
            },
            //Footer
            footer: {
              logo: "The best partner to help you develop the education process.",
              copyright : 'Copyright Ⓒ 2024 Zero To ONe. All Rights Reserved.',
              titel: {
                Community: "Community",
                UsefulLinks: "Useful Links",
              },
              links : {
                
                Content: "Content",
                TermsServices: "Terms & Services",
                Explore: "Explore",
                How_it_Works: "How it Works" ,
                Create: "Create",
                Suggestions: "Suggestions",
                HelpCenter: "Help Center",
                Partners: "Partners",
                Blog: "Blog",

              }
            },
            //Join Us btn
            joinUs:{
              line1: 'Join',
              line2: 'Us'
            },
            //Contact Us page
            contactUs: "Contact Us",
            form: {

              name: 'Name',
              email: 'Email',
              message: 'Message',
              button: 'submit',
            },
            //About Us
            about_greeting: "",
            learn_more: "مزيد من المعلومات",
            about_description: "",
            about_title: "",
            about_content: "",
            about_feature1: "",
            about_feature2: "",
            about_feature3: "",
            team_title: "Zero to One team",
            name: {
              HermanJensen:"Herman Jensen",
              SteveMark: "Steve Mark",
              KennGallagher: "Kenn Gallagher",
            },
            role: {
              FounderLeader: "Founder & Leader",
              CEO: "CEO",

            },
            //Remark
             //Why Remark
             WhyRemark:{
              title:"Why is Remark Office the ideal choice in the field of electronic correction of paper tests?",
              feature: {
                f1:"Saving a lot of exorbitant expenses",
                f2:"Compatible with most scanners",
                f3:"Linking questions to learning objectives and improving the quality of tests",
                f4:"Creating different answer keys for the same test to prevent cheating among students",
                f5:"Accuracy and speed of correcting tests while avoiding human errors",
                f6:"Easy and fast extraction of all reports and statistical analyzes",
                },

             }
            
          },
        },
        ar: {
          translation: {
            greeting: 'معاً نرتقي بالتعليم, نبتكر لعالم متطور',
            desc: {
              line1:"الريادة والتميز",
              line2:"في تطوير العملية التعليمية من خلال تقديم أفضل وأحدث الحلول والابتكارات التكنولوجية في مجال التعليم.",
              line3:"غايتنا تطبيق أهدافكم واحتياجاتكم وتقديم الحلول الأنسب والحدث والأكثر فاعلية لتبلية كافة متطلباتكم من خلال فريق متكامل من الخبراء والمختصين ، للتوجه إلى رحلة تعلم مبتكرة"
            },
            //Not Found page
            NotFound: {
              title: "404 لم يتم العثور على الصفحة",
              desc: "الصفحة التي تبحث عنها غير موجودة.",
              btn: "الذهاب إلى الصفحة الرئيسية"
            },
            //Navbar
            navbar: {
              home: 'الصفحة الرئيسية',
              about: 'من نحن',
              ourProjects: 'مشاريعنا',
              contact: 'تواصل معنا',
            },
             //Footer
             footer: {
              logo: "الشريك الأفضل لمساعدتك في تطوير العملية التعليم.",
              copyright : 'حقوق النشر Ⓒ 2024 Zero To ONe. كل الحقوق محفوظة.',
              title: {
                Community: "مجتمع",
                UsefulLinks: "روابط مفيدة",
                Communiction: "معلومات التواصل",
              },
              links : {
                titel: {
                  Community: "مجتمع",
                  UsefulLinks: "روابط مفيدة",
                  
                },
                Newsletters: "",
                Content: "محتوى",
                TermsServices: "الشروط والخدمات",
                Explore: "استكشاف",
                How_it_Works: "كيف تعمل" ,
                Create: "إنشاء",
                Suggestions: "اقتراحات",
                HelpCenter: "مركز المساعدة",
                Partners: "الشركاء",
                Blog: "مدونة",
                MobilePhone: "رقم الموبايل",
                LandPhone: "رقم الاضي",
                Email: "Zero-to-one-co@gmail.com",
                Location: "نحن معك في كل مكان"

              }
            },
            //Join Us btn
            joinUs:{
              line1: 'انضم',
              line2: 'لنا'
            },
            //Contact Us page
            contactUs: "تواصل معنا",
            form: {

              name: 'الاسم',
              email: 'البريد الالكتروني',
              message: 'الرسالة',
              button: 'ارسال',


            },
             //About Us
             about_greeting: "",
             learn_more: "مزيد من المعلومات",
             about_description: "",
             about_title: "من نحن ؟ " ,
             about_content: {
                  line1: "تأسست شركة زيرو تو ون في عام 2024  بهدف تزويد المؤسسات التعليمية المختلفة بأحدث النظم التكنولوجية والحلول التعليمية المتكاملة والمبتكرة في مجال تكنولوجيا التعليم. وقد أحرزت الشركة نجاحا ملموساً في مجالها وذلك بفضل الفهم العميق لإحتياجات المؤسسات التعليمية المختلفة وتقديم تجربة تعليمية متخصصة وتقديم أفضل خدمات الدعم بعد البيع من أجل ارضاء عملائها في الأراضي العربية السورية. .",
                  line2: "ويعمل بالشركة فريق عمل من الكوادر المؤهلة والتي تمنح الشركة ميزة تنافسية، حيث نستطيع فهم احتياجات المؤسسات المختلفة والتعامل معها ووضع الحلول التي تناسب كل مؤسسة علي حدة"
                },
             vision: "رؤيتنا",
             ourVision: "الريادة والتميز في تطوير العملية التعليمية من خلال تقديم أفضل وأحدث الحلول والابتكارات التكنولوجية في مجال التعليم.",
             message: "رسالتنا",
             ourMessage: "نتطلع إلي صنع واقع، نستطيع من خلاله تطبيق التكنولوجيا الحديثة في كافة المجالات التعليمية بالدولة وتقديم تجربة تعليمية متميزة تكون أكثر إنتاجية، وذلك من خلال التعاون مع أهم الكيانات العالمية والمحلية التي تقوم بتصميم وتنفيذ الأجهزة والمعدات والبرامج المطلوبة لذلك",
             values: "قيمنا" ,
             about_Values_title:{
                1 : "الابتكار",
                2 : "التعاون",
                3 : "التميز",
              },
                about_Values_desc:{
                  1:"نؤمن بأن الابتكار هو مفتاح تطوير التعليم ونسعى لتقديم أساليب تعليمية جديدة تناسب احتياجات العصر",
                  2: "نعمل على تعزيز روح التعاون بين الطلاب والمعلمين لخلق بيئة تعليمية ديناميكة",
                  3:"نسعى للتميز في كل ما نقدمه من خدمات تعليمية, مع التزامنا بأعلى معايير الجودة",
                
                
             },
             team_title: "Zero to One فريق",
             name: {
               HermanJensen:"Herman Jensen",
               SteveMark: "Steve Mark",
               KennGallagher: "Kenn Gallagher",
             },
             role: {
               FounderLeader: "Founder & Leader",
               CEO: "CEO",
 
             },
             //Remark Page
             //Why Remark
             WhyRemark:{
              title:"لماذا يعتبر برنامج ريمارك أوفيس هو الاختيار الأمثل في مجال التصحيح الالكتروني للاختبارات الورقية؟",
              feature: {
                f0:"توفير الكثير من النفقات الباهظة",
                f1:"متوافق مع معظم الماسحات الضوئية",
                f2:"ربط الأسئلة بأهداف التعلم وسهولة استخراج حميع التقارير والتحليلات الإحصائية",
                f3:"امنع الغش تمامًا مع نماذج مختلفة لنفس الامتحان",
                f4:"الدقة وسرعة تصحيح الاختبارات مع تجنب الأخطاء البشرية",
                f6:"0% تظلمات من نتائج الطلاب",
                desc0:"وفر 83% من تكاليف الأوراق الضرورية, لا داعي لشراء نماذج إجابة خاصة بأجهزة التصحيح الإلكتروني. أوقف هدر الأموال، وقم بتحميل برنامج ريمارك أوفيس لأنه يتوافق مع أي طابعة!.",
                desc1:"لا تقلق بعد الآن بشأن شراء أنواع معينة من الماسحات الضوئية للقيام بالتصحيح الآلي للامتحانات! يتوافق برنامج ريمارك أوفيس مع معظم ماركات الماسحات الضوئية التقليدية.",
                desc2:"يمكنك في برنامج ريمارك أوفيس من ربط أسئلة الاختبارات بمدى تحقق أهداف التعلم لقياس كفاءة أسئلة الاختبارات ,ويوفر جميع التقارير اللازمة للحصول على الاعتمادات الدولية.",
                desc3:"مع ريمارك أوفيس يمكنك إنشاء مفاتيح إجابة مختلفة لنفس الاختبار لمنع الغش بين الطلاب، كما يمكنك البرنامج من خلال خيارات عديدة ومتقدمة من التصحيح الإلكتروني للامتحانات المختلفة بسرعة ودقة متناهية.",
                desc4:"يتميز برنامج ريمارك بالسرعة والدقة المتناهية، حيث يساعد مسؤولي التصحيح الإلكتروني للاختبارات بالجامعات والمدارس على تجنب الأخطاء البشرية تمامًا .",
                desc6:"تميز بجودة وسرعة ودقة التصحيح داخل مؤسستك التعليمية واجعل تظلمات الطلاب من النتائج شيئًا من الماضي عن طريق تحميل برنامج التصحيح الآلي ريمارك !",
              },

             },
             //Linceses
             Linceses:{
              title:"شهادات خبراء في مجال التعليم",
              clients: {
                comment:""
              }
              

             }

            

          },
        },
      },
    lng: 'ar', // set the default language
    fallbackLng: 'en', // set the fallback language
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    direction: languageDirection, // Set language direction
    
  });

export default i18n;

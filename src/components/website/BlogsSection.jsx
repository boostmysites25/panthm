import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import blog1 from "../../assets/images/blogs/1.png";
import blog2 from "../../assets/images/blogs/2.png";
import blog3 from "../../assets/images/blogs/3.png";
import { ArrowLeft, ArrowRight, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";

const BlogsSection = () => {
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      initial: 0,
      slides: {
        perView: 1,
        spacing: 24,
      },
      breakpoints: {
        "(min-width: 640px)": {
          slides: {
            perView: 2,
            spacing: 24,
          },
        },
        "(min-width: 1024px)": {
          slides: {
            perView: 3,
            spacing: 24,
          },
        },
      },
      created() {
        setLoaded(true);
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 3000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <section className="py-20 wrapper">
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
        <h2 data-aos="fade-up" className="section-heading">
          Latest Insights
        </h2>
        <p data-aos="fade-up" className="text-slate-600 text-lg">
          Explore our latest thoughts on technology, design, and innovation.
        </p>
      </div>

      <div data-aos="fade-up" className="relative">
        <div ref={sliderRef} className="keen-slider">
          {[blog1, blog2, blog3].map((item, i) => (
            <Link
              to="/blogs/1"
              key={i}
              className="keen-slider__slide group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm flex flex-col h-full"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={item}
                  alt="Blog Cover"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary uppercase tracking-wider">
                  Technology
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>Oct 24, 2023</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    <span>Admin</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  The Future of AI in Enterprise Software Development
                </h3>
                
                <p className="text-slate-600 line-clamp-3 mb-6 flex-grow">
                  Discover how artificial intelligence is reshaping the landscape of software engineering, from automated testing to intelligent code generation.
                </p>

                <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                  Read Article <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {loaded && instanceRef.current && (
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={() => instanceRef.current?.prev()}
              className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white hover:border-primary transition-all"
              aria-label="Previous slide"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => instanceRef.current?.next()}
              className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white hover:border-primary transition-all"
              aria-label="Next slide"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogsSection;

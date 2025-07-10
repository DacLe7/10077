import { useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import { useToast } from "../hooks/use-toast";

export default function ProductGrid() {
  const navigate = useNavigate();
  const { addItem } = useCart();
  const { toast } = useToast();
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      price: 299000,
      image_url: product.image_url,
    });
    
    toast({
      title: "Đã thêm vào giỏ hàng",
      description: `${product.name} đã được thêm vào giỏ hàng`,
    });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Bộ Sưu Tập Nến Thơm
          </h2>
        </div>
        <div className="relative">
          {/* Nút trái */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-2 hover:bg-gray-100 transition hidden md:block"
            onClick={scrollPrev}
            aria-label="Trước"
            style={{ outline: "none" }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          {/* Carousel */}
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {products.map((product, idx) => {
                const cardRef = useRef(null);
                const isInView = useInView(cardRef, { once: true, margin: "-40px" });
                const controls = useAnimation();
                useEffect(() => {
                  if (isInView) controls.start("visible");
                }, [isInView, controls]);
                return (
                  <motion.div
                    key={product.id}
                    ref={cardRef}
                    initial="hidden"
                    animate={controls}
                    variants={{
                      hidden: { opacity: 0, y: 40 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          type: "spring" as const,
                          stiffness: 80,
                          damping: 18,
                          delay: idx * 0.12,
                        },
                      },
                    }}
                    className="embla__slide min-w-[220px] max-w-[220px] md:min-w-[260px] md:max-w-[260px] flex-shrink-0 px-2"
                  >
                    <Card className="border-none shadow-none bg-white">
                      <div className="rounded-lg overflow-hidden bg-gray-100">
                        <img
                          src={product.image_url}
                          alt={product.name}
                          className="w-full h-56 object-cover"
                        />
                      </div>
                      <CardContent className="flex flex-col items-center py-3 px-0">
                        <div className="text-base font-medium text-gray-900 mb-1 text-center w-full whitespace-pre-line leading-tight line-clamp-2" style={{minHeight: '3rem'}}>
                          {product.name.replace(/^Nến Hương\s*/i, "")}
                        </div>
                        <div className="text-lg font-bold text-primary mb-3">
                          ₫299,000
                        </div>
                        <div className="flex gap-2 w-full">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="flex-1"
                            onClick={() => navigate(`/product/${product.id}`)}
                          >
                            Chi tiết
                          </Button>
                          <Button 
                            size="sm" 
                            className="flex-1"
                            onClick={() => handleAddToCart(product)}
                          >
                            <ShoppingCart className="h-4 w-4 mr-1" />
                            Thêm
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
          {/* Nút phải */}
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-2 hover:bg-gray-100 transition hidden md:block"
            onClick={scrollNext}
            aria-label="Sau"
            style={{ outline: "none" }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
} 
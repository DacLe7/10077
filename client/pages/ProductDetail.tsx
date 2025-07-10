import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { ArrowLeft, ShoppingCart, Minus, Plus } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="max-w-2xl mx-auto py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Không tìm thấy sản phẩm</h2>
        <Button onClick={() => navigate(-1)}>
          <ArrowLeft className="w-4 h-4 mr-2" /> Quay lại
        </Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: 299000,
        image_url: product.image_url,
      });
    }
    
    toast({
      title: "Đã thêm vào giỏ hàng",
      description: `${quantity} ${product.name} đã được thêm vào giỏ hàng`,
    });
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="bg-white min-h-screen py-10">
      <div className="max-w-5xl mx-auto px-4">
        <Button variant="ghost" className="mb-6" onClick={() => navigate(-1)}>
          <ArrowLeft className="w-4 h-4 mr-2" /> Quay lại
        </Button>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Image */}
          <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center">
            <img
              src={product.image_url}
              alt={product.name}
              className="w-full max-w-xs h-auto object-contain rounded-lg shadow-md"
            />
          </div>
          {/* Info */}
          <div>
            <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
              {product.emoji} {product.name}
            </h1>
            <div className="text-lg text-gray-600 mb-4">{product.description}</div>
            <div className="flex items-center gap-4 mb-4">
              <Badge variant="outline" className="text-base px-3 py-1">
                {product.category}
              </Badge>
              {product.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag.replace("_", " ")}
                </Badge>
              ))}
            </div>
            <div className="text-2xl font-bold text-primary mb-6">₫299,000</div>
            
            {/* Quantity Selector */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-medium">Số lượng:</span>
              <div className="flex items-center border rounded-lg">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleQuantityChange(quantity - 1)}
                  disabled={quantity <= 1}
                  className="px-3"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="px-4 py-2 text-center min-w-[3rem]">
                  {quantity}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleQuantityChange(quantity + 1)}
                  disabled={quantity >= 10}
                  className="px-3"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <Button size="lg" className="w-full mb-4" onClick={handleAddToCart}>
              <ShoppingCart className="w-5 h-5 mr-2" />
              Thêm vào giỏ hàng
            </Button>
            
            <div className="text-sm text-gray-500 mb-2">{product.reason}</div>
            <div className="mb-2">
              <span className="font-semibold">Hương thơm:</span> {product.scent}
            </div>
            <div className="mb-2">
              <span className="font-semibold">Lợi ích:</span> {product.benefit}
            </div>
            <div className="mb-2">
              <span className="font-semibold">Cảm xúc:</span> Valence: {product.emotions[0]}, Arousal: {product.emotions[1]}
            </div>
          </div>
        </div>
        {/* Thông tin mở rộng */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">Thành phần nổi bật</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              {product.scent.split(",").map((s) => (
                <li key={s.trim()}>{s.trim()}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Lợi ích & Trải nghiệm</h2>
            <p className="text-gray-700 mb-2">{product.benefit}</p>
            <p className="text-gray-500">{product.reason}</p>
          </div>
        </div>
      </div>
    </div>
  );
} 
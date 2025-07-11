import { useState } from "react";
import { X, Trash2, Minus, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { useCart } from "../contexts/CartContext";
import { useToast } from "../hooks/use-toast";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Cart({ isOpen, onClose }: CartProps) {
  const { state, removeItem, updateQuantity, clearCart } = useCart();
  const { toast } = useToast();

  const handleRemoveItem = (id: number) => {
    removeItem(id);
    toast({
      title: "Đã xóa sản phẩm",
      description: "Sản phẩm đã được xóa khỏi giỏ hàng",
    });
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    if (quantity >= 1 && quantity <= 10) {
      updateQuantity(id, quantity);
    }
  };

  const handleClearCart = () => {
    clearCart();
    toast({
      title: "Đã xóa giỏ hàng",
      description: "Tất cả sản phẩm đã được xóa khỏi giỏ hàng",
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold">Giỏ Hàng ({state.items.length})</h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {state.items.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-gray-400 text-6xl mb-4">🛒</div>
              <p className="text-gray-500">Giỏ hàng trống</p>
              <p className="text-sm text-gray-400">Hãy thêm sản phẩm vào giỏ hàng</p>
            </div>
          ) : (
            <div className="space-y-4">
              {state.items.map((item) => (
                <div key={item.id} className="flex gap-3 p-3 border rounded-lg">
                  <img
                    src={item.image_url}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-sm line-clamp-2">{item.name}</h3>
                    <p className="text-primary font-bold text-sm">
                      {formatPrice(item.price)}
                    </p>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className="h-6 w-6 p-0"
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="text-sm min-w-[2rem] text-center">
                        {item.quantity}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                        disabled={item.quantity >= 10}
                        className="h-6 w-6 p-0"
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {state.items.length > 0 && (
          <div className="border-t p-4 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-bold">Tổng cộng:</span>
              <span className="font-bold text-lg text-primary">
                {formatPrice(state.total)}
              </span>
            </div>
            
            <div className="flex gap-2">
              <Button
                variant="outline"
                className="flex-1"
                onClick={handleClearCart}
              >
                Xóa giỏ hàng
              </Button>
              <Button className="flex-1">
                Thanh toán
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 
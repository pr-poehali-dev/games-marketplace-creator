import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Navbar() {
  const [cartCount] = useState(3);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary">
                <Icon name="Gamepad2" size={24} className="text-white" />
              </div>
              <span className="text-2xl font-heading font-bold text-gradient">GameStore</span>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              <Button variant="ghost" className="text-foreground hover:text-primary">
                Главная
              </Button>
              <Button variant="ghost" className="text-foreground hover:text-primary">
                Каталог
              </Button>
              <Button variant="ghost" className="text-foreground hover:text-primary">
                Топ игры
              </Button>
              <Button variant="ghost" className="text-foreground hover:text-primary">
                Поддержка
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-4 flex-1 max-w-md">
            <div className="relative flex-1">
              <Icon name="Search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input 
                placeholder="Поиск игр..." 
                className="pl-10 bg-muted/50 border-border"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative">
              <Icon name="ShoppingCart" size={20} />
              {cartCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-accent text-xs">
                  {cartCount}
                </Badge>
              )}
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="User" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

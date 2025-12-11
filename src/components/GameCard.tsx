import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface GameCardProps {
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  discount?: number;
  tags: string[];
  rating: number;
}

export default function GameCard({ title, price, originalPrice, image, discount, tags, rating }: GameCardProps) {
  return (
    <Card className="group overflow-hidden border-border bg-card hover:border-primary/50 transition-all duration-300 hover-scale cursor-pointer">
      <div className="relative overflow-hidden aspect-[16/9]">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {discount && (
          <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground font-bold text-sm">
            -{discount}%
          </Badge>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-4 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-heading font-semibold text-lg line-clamp-1 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <div className="flex items-center gap-1 text-sm">
            <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{rating}</span>
          </div>
        </div>

        <div className="flex gap-2 flex-wrap">
          {tags.slice(0, 3).map((tag, idx) => (
            <Badge key={idx} variant="secondary" className="text-xs bg-muted text-muted-foreground">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2">
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {originalPrice} ₽
              </span>
            )}
            <span className="text-xl font-bold text-primary">
              {price} ₽
            </span>
          </div>
          <Button size="sm" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            <Icon name="ShoppingCart" size={16} className="mr-1" />
            Купить
          </Button>
        </div>
      </div>
    </Card>
  );
}

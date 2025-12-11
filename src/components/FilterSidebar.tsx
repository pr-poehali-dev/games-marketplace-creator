import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

export default function FilterSidebar() {
  const [priceRange, setPriceRange] = useState([0, 5000]);

  const genres = [
    'Экшен', 'Приключения', 'RPG', 'Стратегия', 
    'Симулятор', 'Спорт', 'Гонки', 'Хоррор'
  ];

  const platforms = ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch'];
  
  const sortOptions = ['Популярность', 'Цена: низкая', 'Цена: высокая', 'Новинки', 'Рейтинг'];

  return (
    <Card className="p-6 space-y-6 border-border bg-card sticky top-24">
      <div className="flex items-center justify-between">
        <h3 className="font-heading font-bold text-lg">Фильтры</h3>
        <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
          Сбросить
        </Button>
      </div>

      <Separator />

      <div className="space-y-3">
        <Label className="text-base font-semibold flex items-center gap-2">
          <Icon name="Filter" size={16} />
          Сортировка
        </Label>
        <div className="space-y-2">
          {sortOptions.map((option) => (
            <div key={option} className="flex items-center space-x-2">
              <Checkbox id={option} />
              <label
                htmlFor={option}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      <div className="space-y-3">
        <Label className="text-base font-semibold flex items-center gap-2">
          <Icon name="Tag" size={16} />
          Жанр
        </Label>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {genres.map((genre) => (
            <div key={genre} className="flex items-center space-x-2">
              <Checkbox id={genre} />
              <label
                htmlFor={genre}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                {genre}
              </label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      <div className="space-y-3">
        <Label className="text-base font-semibold flex items-center gap-2">
          <Icon name="Monitor" size={16} />
          Платформа
        </Label>
        <div className="space-y-2">
          {platforms.map((platform) => (
            <div key={platform} className="flex items-center space-x-2">
              <Checkbox id={platform} />
              <label
                htmlFor={platform}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                {platform}
              </label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label className="text-base font-semibold flex items-center gap-2">
            <Icon name="DollarSign" size={16} />
            Цена
          </Label>
          <span className="text-sm text-muted-foreground">
            {priceRange[0]} - {priceRange[1]} ₽
          </span>
        </div>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          max={5000}
          step={100}
          className="w-full"
        />
      </div>

      <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
        Применить фильтры
      </Button>
    </Card>
  );
}

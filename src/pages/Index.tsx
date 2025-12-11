import Navbar from '../components/Navbar';
import GameCard from '../components/GameCard';
import FilterSidebar from '../components/FilterSidebar';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import Icon from '../components/ui/icon';

const Index = () => {
  const featuredGames = [
    {
      id: 1,
      title: 'Cyber Revolution 2077',
      price: 1999,
      originalPrice: 2999,
      discount: 33,
      image: 'https://cdn.poehali.dev/projects/349f81b5-f127-4b7c-ac22-54b60e22d586/files/db504c47-62eb-45b7-859e-1d739cefaa0b.jpg',
      tags: ['Экшен', 'RPG', 'Киберпанк'],
      rating: 4.8,
    },
    {
      id: 2,
      title: 'Dragon Kingdom Legends',
      price: 2499,
      originalPrice: 3499,
      discount: 29,
      image: 'https://cdn.poehali.dev/projects/349f81b5-f127-4b7c-ac22-54b60e22d586/files/f7413e56-6dae-47e8-90b6-dd102960b430.jpg',
      tags: ['RPG', 'Фэнтези', 'Приключения'],
      rating: 4.9,
    },
    {
      id: 3,
      title: 'Speed Racing Ultimate',
      price: 1499,
      originalPrice: 1999,
      discount: 25,
      image: 'https://cdn.poehali.dev/projects/349f81b5-f127-4b7c-ac22-54b60e22d586/files/43f60546-e350-4af4-93c0-dd9481b44a35.jpg',
      tags: ['Гонки', 'Симулятор', 'Мультиплеер'],
      rating: 4.7,
    },
  ];

  const allGames = [
    ...featuredGames,
    {
      id: 4,
      title: 'Medieval Strategy Wars',
      price: 1799,
      image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&h=450&fit=crop',
      tags: ['Стратегия', 'Средневековье'],
      rating: 4.6,
    },
    {
      id: 5,
      title: 'Space Survival',
      price: 999,
      originalPrice: 1499,
      discount: 33,
      image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=800&h=450&fit=crop',
      tags: ['Выживание', 'Космос', 'Хоррор'],
      rating: 4.5,
    },
    {
      id: 6,
      title: 'Football Manager 2024',
      price: 2299,
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=450&fit=crop',
      tags: ['Спорт', 'Симулятор', 'Менеджер'],
      rating: 4.4,
    },
    {
      id: 7,
      title: 'Zombie Apocalypse',
      price: 1299,
      originalPrice: 1899,
      discount: 32,
      image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&h=450&fit=crop',
      tags: ['Экшен', 'Хоррор', 'Выживание'],
      rating: 4.3,
    },
    {
      id: 8,
      title: 'City Builder Deluxe',
      price: 1599,
      image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&h=450&fit=crop',
      tags: ['Стратегия', 'Градостроитель'],
      rating: 4.7,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative overflow-hidden py-20 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <Badge className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1.5 text-sm">
              🔥 Зимняя распродажа
            </Badge>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-gradient leading-tight">
              Лучшие игры
              <br />
              для настоящих геймеров
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Скидки до 80% на тысячи игр. Все платформы, все жанры, моментальная доставка ключей
            </p>
            <div className="flex gap-4 justify-center pt-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8">
                <Icon name="Sparkles" size={20} className="mr-2" />
                Открыть каталог
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-primary/50 hover:bg-primary/10">
                Топ продаж
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-heading font-bold flex items-center gap-3">
              <Icon name="Flame" size={32} className="text-accent" />
              Горячие предложения
            </h2>
            <Button variant="ghost" className="text-primary hover:text-primary/80">
              Смотреть все
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredGames.map((game) => (
              <GameCard key={game.id} {...game} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Icon name="Library" size={32} className="text-secondary" />
            <h2 className="text-3xl font-heading font-bold">
              Все игры
            </h2>
            <Badge variant="secondary" className="ml-2">
              {allGames.length} игр
            </Badge>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <aside className="lg:col-span-1">
              <FilterSidebar />
            </aside>

            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {allGames.map((game) => (
                  <GameCard key={game.id} {...game} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-muted/30 mt-20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary">
                  <Icon name="Gamepad2" size={24} className="text-white" />
                </div>
                <span className="text-xl font-heading font-bold text-gradient">GameStore</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Крупнейшая площадка для покупки игр с мгновенной доставкой ключей
              </p>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary cursor-pointer transition-colors">О нас</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Вакансии</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Партнерам</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Блог</li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary cursor-pointer transition-colors">Помощь</li>
                <li className="hover:text-primary cursor-pointer transition-colors">FAQ</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Возврат</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Контакты</li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-3">
                <Button size="icon" variant="outline" className="hover:bg-primary/10 hover:border-primary/50">
                  <Icon name="Twitter" size={18} />
                </Button>
                <Button size="icon" variant="outline" className="hover:bg-primary/10 hover:border-primary/50">
                  <Icon name="Youtube" size={18} />
                </Button>
                <Button size="icon" variant="outline" className="hover:bg-primary/10 hover:border-primary/50">
                  <Icon name="Instagram" size={18} />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 GameStore. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
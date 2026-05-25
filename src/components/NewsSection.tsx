import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const news = [
  {
    date: "20 мая 2025",
    category: "Программы",
    title: "Расширена программа микрозаймов для производственных предприятий",
    excerpt: "Фонд увеличил лимит по программе «Максимум» до 5 млн рублей для предприятий приоритетных отраслей. Ставка снижена до 3% годовых.",
    icon: "Banknote",
  },
  {
    date: "12 мая 2025",
    category: "Обучение",
    title: "Бесплатный семинар: «Как открыть бизнес в 2025 году»",
    excerpt: "Приглашаем начинающих предпринимателей на бесплатный практический семинар. Разберём регистрацию, налоги и первые шаги в бизнесе.",
    icon: "GraduationCap",
  },
  {
    date: "5 мая 2025",
    category: "События",
    title: "Фонд принял участие в форуме малого бизнеса Ростовской области",
    excerpt: "Представители фонда выступили с докладом о мерах поддержки МСП в Таганроге. Подписано соглашение о сотрудничестве с региональными партнёрами.",
    icon: "Users",
  },
]

export function NewsSection() {
  return (
    <section className="bg-background py-16 md:py-24" id="news">
      <div className="container mx-auto px-6 flex flex-col gap-12 md:gap-16">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div className="flex flex-col gap-4 max-w-xl">
            <p className="text-sm md:text-base font-semibold text-muted-foreground">Новости</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Последние события</h2>
            <p className="text-base text-muted-foreground">
              Следите за актуальными программами, семинарами и событиями фонда.
            </p>
          </div>
          <Button variant="outline" className="shrink-0" asChild>
            <a href="https://tagfond.ru" target="_blank" rel="noopener noreferrer">
              Все новости
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <Card key={index} className="p-6 flex flex-col gap-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                  {item.category}
                </span>
                <span className="text-xs text-muted-foreground">{item.date}</span>
              </div>

              <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary/10 shrink-0">
                <Icon name={item.icon} size={20} className="text-primary" />
              </div>

              <div className="flex flex-col gap-2 flex-1">
                <h3 className="font-semibold text-foreground leading-snug">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.excerpt}</p>
              </div>

              <a
                href="https://tagfond.ru"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-primary hover:underline flex items-center gap-1 mt-auto"
              >
                Читать далее
                <Icon name="ArrowRight" size={14} />
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

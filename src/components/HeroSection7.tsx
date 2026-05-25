import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function HeroSection7() {
  return (
    <section className="bg-muted pattern-1 py-16 lg:py-24" aria-labelledby="hero-heading" id="features">
      <div className="container px-6 flex flex-col items-center gap-12 lg:gap-16 mx-auto">
        <div className="flex gap-12 lg:gap-16 w-full">
          <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8 w-full">
            <h1 id="hero-heading" className="text-foreground text-3xl lg:text-5xl font-bold flex-1">
              Поддержка бизнеса в <span className="text-primary">Таганроге</span> — просто и доступно
            </h1>
            <div className="flex-1 w-full flex flex-col gap-8">
              <p className="text-muted-foreground text-base lg:text-lg">
                Фонд поддержки предпринимательства города Таганрога помогает малому и среднему бизнесу развиваться: займы, гарантии, консультации и образовательные программы для предпринимателей.
              </p>

              <div className="flex flex-col lg:flex-row gap-3">
                <Button asChild>
                  <a href="tel:+78634312272">Получить консультацию</a>
                </Button>
                <Button variant="ghost" asChild>
                  <a href="#services">
                    Все услуги
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </a>
                </Button>
              </div>

              <div className="flex flex-wrap gap-6">
                <div className="flex flex-col gap-1">
                  <span className="text-2xl font-bold text-foreground">15+</span>
                  <span className="text-sm text-muted-foreground">лет на рынке</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-2xl font-bold text-foreground">1 000+</span>
                  <span className="text-sm text-muted-foreground">предпринимателей</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-2xl font-bold text-foreground">500 млн ₽</span>
                  <span className="text-sm text-muted-foreground">выдано займов</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: "Banknote", title: "Займы для бизнеса", desc: "До 5 млн ₽ под льготную ставку" },
            { icon: "Shield", title: "Гарантийная поддержка", desc: "Поручительство при получении кредита" },
            { icon: "GraduationCap", title: "Обучение и консультации", desc: "Бесплатные семинары для предпринимателей" },
          ].map((card) => (
            <div key={card.title} className="bg-background rounded-xl border p-6 flex flex-col gap-3 shadow-sm">
              <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary/10">
                <Icon name={card.icon} size={20} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">{card.title}</h3>
              <p className="text-sm text-muted-foreground">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

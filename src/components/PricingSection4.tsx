import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const programs = [
  {
    name: "Старт",
    description: "Для начинающих предпринимателей и самозанятых.",
    amount: "до 500 тыс. ₽",
    rate: "от 5% годовых",
    features: [
      "Срок займа до 24 месяцев",
      "Минимальный пакет документов",
      "Бесплатная консультация",
      "Помощь в подготовке документов",
    ],
    cta: "Подать заявку",
    highlight: false,
  },
  {
    name: "Развитие",
    description: "Для действующего малого бизнеса.",
    badge: "Популярная",
    amount: "до 3 млн ₽",
    rate: "от 4% годовых",
    features: [
      "Срок займа до 36 месяцев",
      "Отсрочка платежа до 3 месяцев",
      "Финансовая консультация",
      "Обучающие семинары",
      "Юридическое сопровождение",
    ],
    cta: "Подать заявку",
    highlight: true,
  },
  {
    name: "Максимум",
    description: "Для приоритетных отраслей и производства.",
    amount: "до 5 млн ₽",
    rate: "от 3% годовых",
    features: [
      "Срок займа до 60 месяцев",
      "Индивидуальные условия",
      "Гарантийная поддержка",
      "Персональный менеджер",
      "Полное сопровождение",
      "Доступ ко всем программам",
    ],
    cta: "Подать заявку",
    highlight: false,
  },
]

export function PricingSection4() {
  return (
    <section className="py-16 md:py-24 pattern-1 bg-muted" aria-labelledby="pricing-section-title-4">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-4 md:gap-5 max-w-xl text-center">
            <p className="text-base font-semibold text-muted-foreground">Программы займов</p>
            <h2 id="pricing-section-title-4" className="text-3xl md:text-4xl font-bold">
              Выберите подходящую программу
            </h2>
            <p className="text-base text-muted-foreground">Льготное финансирование для малого и среднего бизнеса Таганрога.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:max-w-5xl w-full mx-auto">
            {programs.map((plan, index) => (
              <Card key={plan.name} className={`p-8 space-y-8 ${index === 1 ? "bg-foreground text-background" : ""}`}>
                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold leading-7">{plan.name}</h3>
                      {plan.badge && (
                        <span className="text-xs font-semibold bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                          {plan.badge}
                        </span>
                      )}
                    </div>
                    <p className={`text-sm leading-5 ${index === 1 ? "opacity-70" : "text-muted-foreground"}`}>
                      {plan.description}
                    </p>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-3xl font-semibold leading-10">{plan.amount}</span>
                    <span className={`text-sm ${index === 1 ? "opacity-70" : "text-muted-foreground"}`}>{plan.rate}</span>
                  </div>

                  <Button variant={index === 1 ? "secondary" : "default"} className="w-full" asChild>
                    <a href="#application">{plan.cta}</a>
                  </Button>
                </div>

                <div className="space-y-4">
                  <p className="text-sm font-medium">Что включено:</p>
                  <div className="flex flex-col gap-4">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Check className={`h-5 w-5 shrink-0 ${index === 1 ? "" : "text-primary"}`} />
                        <span className={`text-sm flex-1 ${index === 1 ? "opacity-70" : "text-muted-foreground"}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
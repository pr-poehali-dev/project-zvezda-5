import Icon from "@/components/ui/icon"

const steps = [
  {
    icon: "ClipboardList",
    title: "Оставьте заявку",
    description: "Позвоните нам или заполните форму на сайте. Наш специалист свяжется с вами в течение одного рабочего дня.",
  },
  {
    icon: "FileSearch",
    title: "Подготовьте документы",
    description: "Мы поможем собрать необходимый пакет документов и подобрать подходящую программу поддержки.",
  },
  {
    icon: "CheckCircle",
    title: "Получите поддержку",
    description: "После одобрения заявки вы получаете финансирование или другую помощь на развитие вашего бизнеса.",
  },
]

export function FeatureSection3() {
  return (
    <section className="bg-muted py-16 md:py-24" id="programs">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-12 md:gap-16 items-center">
        <div className="flex flex-col gap-8 flex-1">
          <div className="flex flex-col gap-4 md:gap-5">
            <p className="text-sm md:text-base font-semibold text-muted-foreground">Как получить поддержку</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Всего 3 шага до результата</h2>
            <p className="text-base text-muted-foreground">Процесс получения поддержки максимально простой и прозрачный:</p>
          </div>
          <div className="flex flex-col gap-6">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                <div className="flex justify-center items-center w-10 h-10 shrink-0 rounded-md bg-background border shadow-sm">
                  <Icon name={step.icon} size={20} className="text-primary" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 w-full">
          <div className="overflow-hidden rounded-xl border bg-background shadow-xl p-8 flex flex-col gap-6">
            <h3 className="text-xl font-bold text-foreground">Программы поддержки</h3>
            {[
              { name: "Микрозаём «Старт»", desc: "До 500 тыс. ₽ для начинающих предпринимателей", badge: "до 500 тыс. ₽" },
              { name: "Микрозаём «Развитие»", desc: "До 3 млн ₽ для действующего бизнеса", badge: "до 3 млн ₽" },
              { name: "Микрозаём «Максимум»", desc: "До 5 млн ₽ для приоритетных отраслей", badge: "до 5 млн ₽" },
              { name: "Гарантийная поддержка", desc: "Поручительство до 70% суммы кредита", badge: "до 70%" },
            ].map((program) => (
              <div key={program.name} className="flex items-start justify-between gap-4 pb-4 border-b last:border-0 last:pb-0">
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-foreground text-sm">{program.name}</span>
                  <span className="text-xs text-muted-foreground">{program.desc}</span>
                </div>
                <span className="shrink-0 text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">{program.badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

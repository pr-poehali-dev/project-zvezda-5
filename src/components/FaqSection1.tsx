import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "Кто может получить поддержку фонда?",
    answer: "Поддержку могут получить субъекты малого и среднего предпринимательства, зарегистрированные и ведущие деятельность на территории города Таганрога: ИП, ООО и другие юридические лица.",
  },
  {
    question: "Какие документы нужны для получения займа?",
    answer: "Для подачи заявки потребуются: паспорт, свидетельство о регистрации ИП/ООО, налоговая отчётность за последний период, бизнес-план или финансовая модель. Полный список документов уточняйте у наших специалистов.",
  },
  {
    question: "Сколько времени занимает рассмотрение заявки?",
    answer: "Стандартный срок рассмотрения заявки — от 5 до 10 рабочих дней с момента предоставления полного пакета документов. Мы стремимся рассматривать заявки как можно быстрее.",
  },
  {
    question: "Нужен ли залог для получения займа?",
    answer: "Для небольших сумм (до 500 тыс. ₽) залог может не потребоваться. Для крупных займов — возможно поручительство самого фонда или имущественный залог. Уточните условия на консультации.",
  },
  {
    question: "Есть ли бесплатные консультации?",
    answer: "Да, все консультации по программам поддержки, помощь в подготовке документов и обучающие семинары для предпринимателей предоставляются бесплатно.",
  },
]

export function FaqSection1() {
  return (
    <section className="bg-background py-16 md:py-24" aria-labelledby="faq-heading" id="faq">
      <div className="max-w-2xl gap-12 mx-auto px-6 flex flex-col">
        <div className="flex flex-col text-center gap-5">
          <p className="text-sm md:text-base text-muted-foreground font-semibold">Частые вопросы</p>
          <h1 id="faq-heading" className="text-3xl md:text-4xl font-bold text-foreground">
            Есть вопросы? У нас есть ответы.
          </h1>
          <p className="text-muted-foreground">
            Собрали ответы на самые частые вопросы предпринимателей. Не нашли нужный?{" "}
            <a href="tel:+78634312272" className="text-primary underline">
              Позвоните нам.
            </a>
          </p>
        </div>

        <Accordion type="single" collapsible defaultValue="item-1" aria-label="Часто задаваемые вопросы">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className="text-base font-medium text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="bg-muted/60 w-full rounded-xl p-6 md:p-8 flex flex-col items-center gap-6">
          <div className="flex flex-col text-center gap-2">
            <h2 className="text-2xl font-bold text-foreground">Готовы помочь вашему бизнесу!</h2>
            <p className="text-base text-muted-foreground">
              г. Таганрог, пер. Красногвардейский, 16. Пн–Пт: 9:00–18:00
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button aria-label="Позвонить в фонд" asChild>
              <a href="tel:+78634312272">+7 (8634) 31-22-72</a>
            </Button>
            <Button variant="outline" aria-label="Написать на email" asChild>
              <a href="mailto:info@tagfond.ru">info@tagfond.ru</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

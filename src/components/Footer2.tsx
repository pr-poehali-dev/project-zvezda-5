import { Logo } from "./Logo"
import { Separator } from "@/components/ui/separator"

export function Footer2() {
  return (
    <footer className="bg-muted py-16 lg:py-24" role="contentinfo" aria-label="Подвал сайта">
      <div className="container px-6 mx-auto flex flex-col gap-12 lg:gap-16">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col lg:flex-row md:justify-between md:items-start gap-12">
            <div className="flex flex-col gap-4 max-w-xs">
              <a href="/" aria-label="На главную">
                <Logo />
              </a>
              <p className="text-sm text-muted-foreground">
                Фонд поддержки предпринимательства города Таганрога — финансовая и консультационная помощь малому бизнесу.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-10">
              <div className="flex flex-col gap-4">
                <p className="text-sm font-semibold text-foreground">Навигация</p>
                <nav className="flex flex-col gap-3" aria-label="Навигация в подвале">
                  <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">О фонде</a>
                  <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Услуги</a>
                  <a href="#programs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Программы займов</a>
                  <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Вопросы</a>
                </nav>
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-sm font-semibold text-foreground">Контакты</p>
                <div className="flex flex-col gap-3">
                  <a href="tel:+78634312272" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    +7 (8634) 31-22-72
                  </a>
                  <a href="mailto:info@tagfond.ru" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    info@tagfond.ru
                  </a>
                  <p className="text-sm text-muted-foreground">
                    пер. Красногвардейский, 16<br />г. Таганрог
                  </p>
                  <p className="text-sm text-muted-foreground">Пн–Пт: 9:00–18:00</p>
                </div>
              </div>
            </div>
          </div>

          <Separator role="presentation" />

          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Фонд поддержки предпринимательства г. Таганрога. Все права защищены.
            </p>
            <a href="https://tagfond.ru" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              tagfond.ru
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

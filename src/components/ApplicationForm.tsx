import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Icon from "@/components/ui/icon"

export function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    program: "",
    comment: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1000)
  }

  return (
    <section className="bg-muted py-16 md:py-24" id="application">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          <div className="flex flex-col gap-6 flex-1">
            <div className="flex flex-col gap-4">
              <p className="text-sm md:text-base font-semibold text-muted-foreground">Заявка</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Получите поддержку сегодня</h2>
              <p className="text-base text-muted-foreground">
                Оставьте заявку — наш специалист свяжется с вами в течение одного рабочего дня и ответит на все вопросы.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {[
                { icon: "Clock", text: "Ответим в течение 1 рабочего дня" },
                { icon: "ShieldCheck", text: "Бесплатная консультация" },
                { icon: "FileCheck", text: "Поможем подготовить документы" },
                { icon: "Phone", text: "+7 (8634) 31-22-72" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10 shrink-0">
                    <Icon name={item.icon} size={16} className="text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full">
            {submitted ? (
              <div className="bg-background rounded-xl border p-8 flex flex-col items-center gap-4 text-center shadow-sm">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10">
                  <Icon name="CheckCircle" size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Заявка отправлена!</h3>
                <p className="text-muted-foreground">
                  Спасибо! Мы свяжемся с вами в ближайший рабочий день.
                </p>
                <Button variant="outline" onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", program: "", comment: "" }) }}>
                  Отправить ещё одну
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-background rounded-xl border p-8 flex flex-col gap-5 shadow-sm"
              >
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">Ваше имя *</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Иван Иванов"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="example@mail.ru"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="program">Программа поддержки</Label>
                  <Select onValueChange={(val) => setForm({ ...form, program: val })}>
                    <SelectTrigger id="program">
                      <SelectValue placeholder="Выберите программу" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="start">Микрозаём «Старт» — до 500 тыс. ₽</SelectItem>
                      <SelectItem value="razvitie">Микрозаём «Развитие» — до 3 млн ₽</SelectItem>
                      <SelectItem value="maximum">Микрозаём «Максимум» — до 5 млн ₽</SelectItem>
                      <SelectItem value="guarantee">Гарантийная поддержка</SelectItem>
                      <SelectItem value="consult">Консультация</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="comment">Комментарий</Label>
                  <Textarea
                    id="comment"
                    name="comment"
                    placeholder="Кратко опишите ваш бизнес и цель обращения"
                    value={form.comment}
                    onChange={handleChange}
                    rows={3}
                  />
                </div>

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Отправляем..." : "Отправить заявку"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
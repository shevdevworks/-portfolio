import { Icon } from "./components";
import type { Lang } from "./content";

const copy = {
  en: {
    assistant: "Your assistant",
    book: "I’d like to book",
    choose: "Of course. Choose a service:",
    consultation: "Consultation",
    ask: "Ask a question",
    tomorrow: "Consultation, tomorrow",
    sent: "Request sent. We’ll be in touch!",
    message: "Message",
    team: "Team notification",
    enquiry: "New enquiry",
    details: "Consultation · tomorrow",
    view: "View request",
    note: "A reply for your customer.\nThe details for your team.",
  },
  ru: {
    assistant: "Ваш помощник",
    book: "Хочу записаться",
    choose: "Конечно. Выберите услугу:",
    consultation: "Консультация",
    ask: "Задать вопрос",
    tomorrow: "Консультация, завтра",
    sent: "Заявка отправлена. Скоро свяжемся!",
    message: "Сообщение",
    team: "Уведомление команде",
    enquiry: "Новая заявка",
    details: "Консультация · завтра",
    view: "Открыть заявку",
    note: "Клиенту — ответ.\nВам — нужные детали.",
  },
  uk: {
    assistant: "Ваш помічник",
    book: "Хочу записатися",
    choose: "Звісно. Оберіть послугу:",
    consultation: "Консультація",
    ask: "Поставити запитання",
    tomorrow: "Консультація, завтра",
    sent: "Заявку надіслано. Скоро зв’яжемося!",
    message: "Повідомлення",
    team: "Сповіщення команді",
    enquiry: "Нова заявка",
    details: "Консультація · завтра",
    view: "Відкрити заявку",
    note: "Клієнту — відповідь.\nВам — потрібні деталі.",
  },
} satisfies Record<Lang, Record<string, string>>;

/** A service illustration, not an interactive chat or a customer conversation. */
export function BotIllustration({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <div className="bot-illustration" aria-hidden="true">
      <div className="bot-chat">
        <div className="bot-chat-header">
          <span className="bot-avatar"><Icon name="telegram" size={27} /></span>
          <span><strong>{t.assistant}</strong><small>Telegram bot</small></span>
          <span className="bot-menu">···</span>
        </div>
        <div className="bot-conversation">
          <div className="bot-bubble bot-bubble-out">{t.book}<small>10:24 ✓✓</small></div>
          <div className="bot-bubble">
            {t.choose}
            <div className="bot-choices"><span>{t.consultation}</span><span>{t.ask}</span></div>
          </div>
          <div className="bot-bubble bot-bubble-out">{t.tomorrow}<small>10:25 ✓✓</small></div>
          <div className="bot-bubble bot-confirmation"><Icon name="check" size={18} /><span>{t.sent}</span></div>
        </div>
        <div className="bot-input"><span>{t.message}</span><Icon name="telegram" size={18} /></div>
      </div>
      <div className="bot-delivery">
        <div className="bot-route"><span /><Icon name="arrow" size={22} /></div>
        <div className="bot-notification">
          <span className="bot-notification-label"><span className="bot-status-dot" />{t.team}</span>
          <strong>{t.enquiry}</strong>
          <p>{t.details}</p>
          <div className="bot-notification-action">{t.view}<Icon name="open" size={17} /></div>
        </div>
        <span className="bot-flow-note">{t.note}</span>
      </div>
    </div>
  );
}

import { Icon } from "./components";
import type { Lang } from "./content";

/** A service illustration, not an interactive chat or a customer conversation. */
export function BotIllustration({ lang }: { lang: Lang }) {
  const ru = lang === "ru";
  return (
    <div className="bot-illustration" aria-hidden="true">
      <div className="bot-chat">
        <div className="bot-chat-header">
          <span className="bot-avatar"><Icon name="telegram" size={27} /></span>
          <span><strong>{ru ? "Ваш помощник" : "Your assistant"}</strong><small>Telegram bot</small></span>
          <span className="bot-menu">···</span>
        </div>
        <div className="bot-conversation">
          <div className="bot-bubble bot-bubble-out">{ru ? "Хочу записаться" : "I’d like to book"}<small>10:24 ✓✓</small></div>
          <div className="bot-bubble">
            {ru ? "Конечно. Выберите услугу:" : "Of course. Choose a service:"}
            <div className="bot-choices"><span>{ru ? "Консультация" : "Consultation"}</span><span>{ru ? "Задать вопрос" : "Ask a question"}</span></div>
          </div>
          <div className="bot-bubble bot-bubble-out">{ru ? "Консультация, завтра" : "Consultation, tomorrow"}<small>10:25 ✓✓</small></div>
          <div className="bot-bubble bot-confirmation"><Icon name="check" size={18} /><span>{ru ? "Заявка отправлена. Скоро свяжемся!" : "Request sent. We’ll be in touch!"}</span></div>
        </div>
        <div className="bot-input"><span>{ru ? "Сообщение" : "Message"}</span><Icon name="telegram" size={18} /></div>
      </div>
      <div className="bot-delivery">
        <div className="bot-route"><span /><Icon name="arrow" size={22} /></div>
        <div className="bot-notification">
          <span className="bot-notification-label"><span className="bot-status-dot" />{ru ? "Уведомление команде" : "Team notification"}</span>
          <strong>{ru ? "Новая заявка" : "New enquiry"}</strong>
          <p>{ru ? "Консультация · завтра" : "Consultation · tomorrow"}</p>
          <div className="bot-notification-action">{ru ? "Открыть заявку" : "View request"}<Icon name="open" size={17} /></div>
        </div>
        <span className="bot-flow-note">{ru ? "Клиенту — ответ.\nВам — нужные детали." : "A reply for your customer.\nThe details for your team."}</span>
      </div>
    </div>
  );
}

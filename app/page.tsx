import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/main-a-pic.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Привет, я Иван Гончаров!
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
Я занимаюсь разработкой серверных приложений на Python, специализируюсь на создании REST API для бизнеса. 
У меня 4.5 лет опыта в коммерческой разработке, работал в нескольких компаниях, решая задачи по построению и оптимизации backend-систем.<br/>

Мой основной стек: Python, FastAPI, Docker, MQ, Relational Databases, SQLAlchemy. 
Хорошо понимаю архитектуру веб-приложений, работаю с базами данных, настраиваю окружение и деплой. 
В прошлом также имел опыт работы сетевым инженером, что помогает мне лучше разбираться в инфраструктуре и оптимизации распределенных сервисов.

Предпочитаю чистый, поддерживаемый код и всегда стараюсь писать его с учетом лучших практик. Постоянно учусь, 
изучаю новые технологии и инструменты, чтобы быть эффективнее в работе. Спокойный, исполнительный, 
дружелюбный – умею работать как самостоятельно, так и в команде.

Если вам нужен надежный backend-разработчик, буду рад пообщаться!
        </p>
        <p>
          Ллюблю путешествовать и  
            <a href="https://www.beatport.com/it/artist/ivan-stereotekk/394712?srsltid=AfmBOor9Mo0o5s1YXIV6x-17HPSoDmSPpz8dUq6SWTFbA37OIGQK0oYs"> музыку.</a> <br/>

        </p>
    
        <p>
          Если у вас возникла необходимость ознакомится с моим резюме, то по этой ссылке вы найдете мою 
          страничку в{" "}
          <a href="https://hh.ru/resume/eeb0fec4ff0ded24490039ed1f73365749456d">HeadHunter</a>.
        </p>
        <p>
          Если вам понадобится мой репозиторий в{" "}
          <a href="https://github.com/ivanIStereotekk" target="_blank">
            GitHub
          </a>
          .
        </p>

        <p>
          Telegram Бот консультант по гражданским правам {" "}
          <a href="https://t.me/ZakonPravobot" target="_blank">
            ЗаконПодскажет
          </a>
          .
        </p>

      </div>
    </section>
  );
}

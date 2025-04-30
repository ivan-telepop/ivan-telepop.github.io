import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/photos/ivan-808.jpg"
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

Я занимаюсь разработкой серверных приложений на Python, специализируюсь на создании REST API для бизнеса. 
Имею опыт в коммерческой разработке, работал в проектах, решая задачи по построению и оптимизации backend-систем и инфраструктуры.<br/>

Мой основной стек: Python, FastAPI, Docker, MQ, Relational Databases, SQLAlchemy. 
Хорошо понимаю архитектуру веб-приложений, работаю с базами данных, настраиваю окружение и деплой. 
Есть опыт работы с LLM - Ollama, LangChain, OpenAI - RAG / Function Calling / Completions. 

<p>Так же имею опыт работы сетевым инженером, что помогает мне лучше разбираться в инфраструктуре и оптимизации распределенных сервисов.</p>

<p>Предпочитаю чистый, поддерживаемый код и всегда стараюсь писать его с учетом лучших практик. Постоянно учусь, 
изучаю новые технологии и инструменты, чтобы быть эффективнее в работе. Спокойный, исполнительный, 
дружелюбный – умею работать как самостоятельно, так и в команде.
</p>
<p>В чуть меньшей степени занимаюсь фронтенд разработкой, на текущий момент мне интересен React/Next.js. Этот сайт написан мною поддерживается - React/Next.js</p>
 
<p>Если вам нужен надежный backend-разработчик, буду рад пообщаться!</p>

        <p>
          Люблю путешествовать и  
            <a href="https://mixcult.bandcamp.com/album/self-object-id-ep"> музыку.</a> <br/>

        </p>
    
        <p>
          Если у вас возникла необходимость ознакомится с моим опытом, то по этой ссылке вы найдете мое{" "}
          <a href="https://drive.google.com/file/d/1kZa_vzmw8_OelB4wzrvNf51_-KX3pMh-/view?usp=sharing">РЕЗЮМЕ</a>.
        </p>
        <p>
          English Version of my {" "}
          <a href="https://drive.google.com/file/d/1MLT-dgXM2oEy2UY6ee7EwjIuxl4AAgnv/view?usp=sharing">Curriculum Vitae (CV).</a>.
        </p>
        <p>
          Если вам понадобится мой репозиторий в{" "}
          <a href="https://github.com/ivanIStereotekk" target="_blank">
            GitHub
          </a>
          .
        </p>

        <p>
          Telegram Бот ИИ (RAG) консультант по гражданским правам  {" "}
          <a href="https://t.me/ZakonPravobot" target="_blank">
            ЗаконПодскажет
          </a>
          .
        </p>

      </div>
    </section>
  );
}

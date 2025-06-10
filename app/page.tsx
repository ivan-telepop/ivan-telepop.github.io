import Image from "next/image";
import { socialLinks } from "./config";
import VideoYoutube from "./components/videocom";
import Link from "next/link";

export default function Page() {

  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/photos/iv-gon.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      

      <div className="prose prose-neutral dark:prose-invert">

      {/* <h3 className="uppercase">Cайты и лендинги на React / Next.js </h3>
<a href="https://t.me/ewanG808">telegram: @ewanG808</a>
<h3>Готов заниматься вашими IT проектами!</h3><br/> */}

<br/>
<h1 className="mb-8 text-2xl font-medium tracking-tight">
        Привет, я Иван Гончаров!
      </h1>

Я занимаюсь разработкой серверных приложений на Python, специализируюсь на создании REST API для бизнеса. 
Имею опыт в коммерческой разработке, работал в проектах, решая задачи по построению и оптимизации backend-систем и инфраструктуры.<br/>

<pre className="prose prose-neutral dark:prose-invert ">
Мой основной стек: <br/>
Python, FastAPI, Docker, MQ, <br/>
Relational Databases, SQLAlchemy. <br/>
Хорошо понимаю архитектуру веб-приложений <br/>
Работаю с базами данных, настраиваю окружение и деплой. <br/>
Есть опыт работы с LLM <br/> 
Ollama, LangChain, OpenAI <br/>
RAG / Function Calling / Completions. <br/>
<p>Разрабатываю <Link href="https://t.me/ewanG808" className=" p-1 no-underline bg-emerald-400 dark:bg-blue-500">frontend</Link></p> <br/>
React / Next.js / Tailwind и др.<br/>
</pre>

<p>Так же имею опыт работы сетевым инженером, что помогает мне лучше разбираться в инфраструктуре и оптимизации распределенных сервисов.</p>

<p>Предпочитаю чистый, поддерживаемый код и всегда стараюсь писать его с учетом лучших практик. Постоянно учусь, 
изучаю новые технологии и инструменты, чтобы быть эффективнее в работе. Спокойный, исполнительный, 
дружелюбный – умею работать как самостоятельно, так и в команде.
</p>
<p>Если вам нужен надежный разработчик, буду рад пообщаться!</p>
{/* <VideoYoutube></VideoYoutube> */}
<pre className="prose prose-neutral dark:prose-invert ">
<h3>Разрабатываю на React/Next.js и Tailwind </h3>
{/* <p>Пару лет назад начал изучать и заниматься фронтенд разработкой, на текущий момент мне интересен React/Next.js. <br/> */}
<p className="text-sm">Этот [вы смотрите] написан на <Link href="https://ivanistereotekk.github.io/hidden-garden/"> React / Next.js / Tailwind CSS</Link></p>
        <p>
          И этот тоже написан на   
            <Link href="https://ivanistereotekk.github.io/hidden-garden/"> React / Next.js / Tailwind.</Link> <br/>

        </p>
</pre>
    
        <p>
          Если у вас возникла необходимость ознакомится с моим опытом, то по этой ссылке вы найдете мое{" "}
          <Link href="https://drive.google.com/file/d/1e0Ld62ct05Fld14XClFR2olxGQd92Zrd/view?usp=sharing">РЕЗЮМЕ</Link>.
        </p>
        <p>
          Рекомендация с места работы{" "}
          <Link href="https://drive.google.com/file/d/1vmkdQpL6pjxc5wKelzC72vWGGa8ISG59/view?usp=drive_link">в этом письме.</Link>.
        </p>

        <p>
          Почитать автобиографию{" "}
          <Link href="blog/personal-story"> можно в этой статье.</Link>.
        </p>

        <p>
          English Version of my {" "}
          <Link href="https://drive.google.com/file/d/1MLT-dgXM2oEy2UY6ee7EwjIuxl4AAgnv/view?usp=sharing">Curriculum Vitae (CV).</Link>.
        </p>
        <p>
          Если вам понадобится мой репозиторий в{" "}
          <Link href="https://github.com/ivanIStereotekk" target="_blank">
            GitHub
          </Link>
          .
        </p>


        {/* <p>
          Telegram Бот ИИ (RAG) консультант по гражданским правам  {" "}
          <a href="https://t.me/ZakonPravobot" target="_blank">
            ЗаконПодскажет <br/>[ временно выключен ]
          </a>
          .
        </p> */}



            {/* <p> Собираю деньги на армию киборгов :</p>
            <p> Яндекс: 2204311016805377</p>
            <p>Mastercard: 5488880256755328</p>
            <p>bitcoin:12noHS1XiCec8WkzFrDfXRcsHhhKF9LQsf </p> */}


      </div>
    </section>
  );
}

import Image from "next/image";
import { socialLinks } from "./config";
import VideoYoutube from "./components/videocom";
import Link from "next/link";
import ChatComponent from "./components/chatcomponent";
import { LuBrainCircuit } from "react-icons/lu";
import AlertDialogGetContact from "./components/alertdialoguecomp"

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
<section id="eng">
          <Link className=" p-1 no-underline bg-emerald-400 dark:bg-blue-500" href="#russ">read rus</Link>
          {/* <Link className=" p-1 no-underline bg-blue-500 dark:bg-emerald-400" href="#ai-eng">ask AI</Link> */}
         
      <div>
      
<h1 className="mb-8 text-2xl font-medium tracking-tight">
  Hi, I'm Ivan Goncharov!
</h1>

I develop server-side applications in Python and specialize in building REST APIs for businesses.  
I have experience in commercial development and have worked on projects focused on backend system design and optimization, as well as infrastructure tasks.<br/>

<pre className="prose prose-neutral dark:prose-invert ">
My main stack: <br/>
Python, FastAPI, Docker, MQ, <br/>
Relational Databases, SQLAlchemy. <br/>
Strong understanding of web application architecture <br/>
Work with databases, set up environments and deployment processes. <br/>
I have experience working with LLMs <br/> 
Ollama, LangChain, OpenAI <br/>
RAG / Function Calling / Completions. <br/>
<p>I also develop <Link href="https://t.me/ewanG808" className=" p-1 no-underline bg-emerald-400 dark:bg-blue-500">frontend</Link></p> <br/>
React / Next.js / Tailwind and more.<br/>
</pre>

<p>I also have experience as a network engineer, which helps me better understand infrastructure and optimize distributed services.</p>

<p>I prefer clean, maintainable code and always strive to write it following best practices. I'm constantly learning, exploring new technologies and tools to be more effective in my work. Calm, reliable, and friendly — I can work both independently and as part of a team.</p>

<p>If you’re looking for a dependable developer, I’d be happy to chat!</p>
{/* <VideoYoutube></VideoYoutube> */}
<pre className="prose prose-neutral dark:prose-invert ">
<h3>I build with React/Next.js and Tailwind</h3>
{/* <p>A couple of years ago I started exploring frontend development, and currently I'm focused on React/Next.js. <br/> */}
<p className="text-sm">This [what you're viewing] is built with <Link href="https://ivanistereotekk.github.io/hidden-garden/">React / Next.js / Tailwind CSS</Link></p>
        <p>
          And so is this one   
            <Link href="https://ivanistereotekk.github.io/hidden-garden/"> React / Next.js / Tailwind.</Link> <br/>
        </p>
</pre>

<p>
  English Version of my{" "}
  <Link href="https://drive.google.com/file/d/1MLT-dgXM2oEy2UY6ee7EwjIuxl4AAgnv/view?usp=sharing">Curriculum Vitae (CV).</Link>
</p>
    
{/* <p>
  If you'd like to review my experience, here is my{" "}
  <Link href="https://drive.google.com/file/d/1e0Ld62ct05Fld14XClFR2olxGQd92Zrd/view?usp=sharing">RESUME</Link>.
</p> */}
<p>
  A recommendation letter from my previous job{" "}
  <Link href="https://drive.google.com/file/d/1vmkdQpL6pjxc5wKelzC72vWGGa8ISG59/view?usp=drive_link">can be found here.</Link>.
</p>

<p>
  You can read my autobiography{" "}
  <Link href="blog/personal-story-en">in this article.</Link>.
</p>

<p>
  If you need access to my{" "}
  <Link href="https://github.com/ivanIStereotekk" target="_blank">
    GitHub repository
  </Link>
  .
</p>
<pre>
<AlertDialogGetContact/>
</pre>

</div>
</section>



{/*
<section id="ai-eng">
<div className="max-w-2xl mx-auto flex flex-col min-h-80 min-w-full">
  <ChatComponent inputPlaceholder="Type your question..."></ChatComponent>
</div>
</section> */}

<hr/>


<section id="russ">
<Link className=" p-1 no-underline bg-emerald-400 dark:bg-blue-500" href="#eng">read eng</Link>
{/* <Link className=" p-1 no-underline bg-blue-500 dark:bg-emerald-400" href="#ai-russ">спросить ИИ</Link> */}
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
          <Link href="https://drive.google.com/file/d/1JKwN-AK3glRn_Geitr7PkRLX0SD70j-C/view?usp=sharing">РЕЗЮМЕ</Link>.
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
        </section>
        {/* <section id="ai-russ">
        <hr/>
        <div className="max-w-2xl mx-auto flex flex-col min-h-80 min-w-full">
        <ChatComponent description="Здесь вы можете задать вопросы ИИ о профессиональном опыте и качествах Ивана."  title="Спросите ИИ об Иване" inputPlaceholder="Пишите вопрос..."></ChatComponent>
        </div>
        </section> */}

      <pre>
      <AlertDialogGetContact/>
      </pre>  
      </div>
    </section>
  );
}

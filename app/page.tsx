import Image from "next/image";
import { socialLinks } from "./config";
import VideoYoutube from "./components/videocom";
import Link from "next/link";
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

<p>If you’re looking for a developer, I’d be happy to contact!</p>

<pre className="prose prose-neutral dark:prose-invert ">
<h3>I build with React/Next.js and Tailwind</h3>

<p className="text-sm">This [what you're viewing] is built with <Link href="https://ivan-telepop.github.io/hidden-garden/">React / Next.js / Tailwind CSS</Link></p>
        <p>
          And so is this one   
            <Link href="https://ivan-telepop.github.io/hidden-garden/"> React / Next.js / Tailwind.</Link> <br/>
        </p>
</pre>

<p>
  English Version of my{" "}
  <Link href="https://drive.google.com/file/d/1ijaxeUeIbSH7eeQ3xYlh-t5x3-tjw9cA/view?usp=sharing">Curriculum Vitae (CV).</Link>
</p>

<p>
  A recommendation letter from my previous job{" "}
  <Link href="https://drive.google.com/file/d/1vmkdQpL6pjxc5wKelzC72vWGGa8ISG59/view?usp=drive_link">can be found here.</Link>.
</p>


<p>
  If you need access to my{" "}
  <Link href="https://github.com/ivan-telepop" target="_blank">
    GitHub repository
  </Link>
  .
</p>
<pre>
<AlertDialogGetContact/>
</pre>

</div>
</section>
<hr/>
<section id="russ">
<Link className=" p-1 no-underline bg-emerald-400 dark:bg-blue-500" href="#eng">read eng</Link>
<h1 className="mb-8 text-2xl font-medium tracking-tight">
        Привет, я Иван Гончаров!
</h1>

Я Python разработчик, с богатым опытом работы в технологичных сферах. 
Работал в проектах, решая задачи по построению и оптимизации backend-систем для бизнеса и инфраструктуры.<br/>

<pre className="prose prose-neutral dark:prose-invert ">
Мой основной стек: <br/>
Python, FastAPI, Django, Docker<br/>
Relational Databases, SQLAlchemy. <br/>
Одно из основных моих приемуществ я глубоко вовлечен Open Source, постоянно изучаю технологические новинки и хорошо разбираюсь в том что есть на передовой.  <br/>
 <br/>
Есть опыт работы с моделями LLM <br/> 
Ollama, LangChain, OpenAI <br/>
RAG / Function Calling / Completions. <br/>
<p>Есть знания<Link href="https://t.me/ewanG808" className=" p-1 no-underline bg-emerald-400 dark:bg-blue-500">frontend</Link></p> <br/>
React / Next.js / Tailwind и др.<br/>
</pre>

<p>Так же имею опыт работы инженером в компаниях, что помогает мне лучше разбираться в архитектуре, инфраструктуре и оптимизации распределенных сервисов.</p>

<p>Предпочитаю чистый, поддерживаемый код и всегда стараюсь писать его с учетом лучших практик. Постоянно учусь, 
изучаю новые технологии и инструменты, чтобы быть эффективнее в работе. Спокойный, исполнительный, 
дружелюбный – умею работать как самостоятельно, так и в команде.
</p>
<p>Буду рад если по достоинству оцените мои навыки !</p>
{/* <VideoYoutube></VideoYoutube> */}
<pre className="prose prose-neutral dark:prose-invert ">
<h3>Разрабатываю на React/Next.js и Tailwind </h3>
<p className="text-sm">Этот [вы смотрите] написан на <Link href="https://ivan-telepop.github.io/hidden-garden/"> React / Next.js / Tailwind CSS</Link></p>
        <p>
          И этот тоже написан на   
            <Link href="https://ivan-telepop.github.io/hidden-garden/"> React / Next.js / Tailwind.</Link> <br/>

        </p>
</pre>
    
        <p>
          Если у вас возникла необходимость ознакомится с моим опытом, то по этой ссылке вы найдете мое{" "}
          <Link href="https://drive.google.com/file/d/1ijaxeUeIbSH7eeQ3xYlh-t5x3-tjw9cA/view?usp=sharing">РЕЗЮМЕ</Link>.
        </p>
        <p>
          Рекомендация с места работы{" "}
          <Link href="https://drive.google.com/file/d/1dZOx6UuyCLEF5ylc635VzaRzFWym4uOG/view?usp=drive_link">в этом письме.</Link>.
        </p>


        <p>
          English Version of my {" "}
          <Link href="https://drive.google.com/file/d/1ijaxeUeIbSH7eeQ3xYlh-t5x3-tjw9cA/view?usp=sharing">Curriculum Vitae (CV).</Link>.
        </p>
        <p>
          Если вам понадобится мой репозиторий в{" "}
          <Link href="https://github.com/ivan-telepop" target="_blank">
            GitHub
          </Link>
          .
        </p>
        </section>
    

      <pre>
      <AlertDialogGetContact/>
      </pre>  
      </div>
    </section>
  );
}

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
<hr/>
        <p className="text-sm">Electronic<Link href="https://www.beatport.com/artist/ivan-stereotekk/394712?srsltid=AfmBOopvGWILHl4jCFXtisaIioeAO8oVlLeYfrO93EezsY_yxMHWGARO"> music.</Link></p>
        <p>
          Music & Video    
            <Link href="https://www.youtube.com/@stereotekk_ivan"> on YouTube.</Link> <br/>
          

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



Я Python разработчик (обучался сам), с опытом работы в технологичных сферах. Работал в проектах, решая задачи по построению и оптимизации backend-систем для бизнеса и инфраструктуры.


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

<p>Работал инженером в компаниях, что как мне кажется помогает  разбираться в архитектуре, инфраструктуре и оптимизации распределенных сервисов.</p>

<p>Предпочитаю чистый, поддерживаемый код и всегда стараюсь писать его с учетом лучших практик. Постоянно учусь, 
изучаю новые технологии и инструменты, чтобы быть эффективнее в работе. Спокойный, исполнительный, 
дружелюбный – умею работать как самостоятельно, так и в команде.
</p>
<p>Буду рад если по достоинству оцените мои навыки !</p>

<hr/>
<cite>
  <p className="mb-8 text-xl font-medium tracking-tight">"Пару слов о профессии и о перспективах: "</p> <br/>
  События последних нескольких лет заставили пересмотреть мои взгляды на жизнь, и в целом сильно изменили мои планы. <br/>
  Профессию бекенд разработчика я начал осваивать в 40 лет, до этого просто эксперементировал с кодом и программированием, в основном как музыкант, или просто для себя и собственных нужд.<br/>
  В то же время, я не могу сказать что я начал изучать тему backend разработки вынужденно, или чисто по финансовым соображениям. Нет ! <br/>
  Так или иначе мне это все близко по духу, и очень нравится работать с данными и кодом ! А думая о своих перспективах в этом направлении, должна сложиться интересная картина. <br/>
  Понятное дело, мне необходимо быть успешным, зарабатывать, расти в профессии, развиваться, и конечно для этого я готов сделать много. <br/>
  Как я уже писал, в моем возрасте начинать что то новое, менять себя, стиль жизни, способ мыслить, иногда даже модель поведения. <br/>
  Очень непросто, особенно когда тебе за 40! <br/>
  И в этом смысле важна поддержка, быть словно среди своих. Я имею в виду найти тот коллектив, тех людей в котором будет обоюдно комфортно. Говорить на одном языке, решать совместно задачи !<br/>
  Кому то может показаться что я многого хочу, но это не так. Уверен что работу, нужно выбирать по душе. Когда занятие в радость, и позитивные люди вокруг, то вообще все прекрасно складывается у всех, и проект развивается!
  Прочитав этот текст думаю вы понимаете что ищу. Возможно вы тоже в поиске такого отношения от людей. Было бы здорово!<br/>
  Пока у меня не самый большой опыт работы в сфере разработки, но опыт все же есть. Как мне кажется, я неплохо разобрался с темой бекенда. Конечно есть куда расти, и есть чему поучиться у других ! <br/>
  - Если вы видите этот текст, значит я все еще в поиске вакансии и своей команды. <br/>
  Буду очень рад получить от вас, или через вас, оффер или просто хорошую новость ! <br/>
  Желаю хорошего дня ! 


</cite>
<hr/>

<p className="mb-8 text-xl font-medium tracking-tight">
  Книги и серии книг которые мне нравятся: 
</p>

<p>
- "Python – к вершинам мастерства" (O'Rally) <br/>
- "Parallel Loops in Python" - Jason Brownlee <br/>
- "Создание Микросервисов" - Сем Ньюмен <br/>
- "SQLAlchemy - путь к алхимику" <br/>
- "Грокаем Алгоритмы" <br/>
- "Грокаем Машинное Обучение" <br/>
- "Mastering Postgres 15 - Schönig Hans-Jürgen <br/>
- "Programming Patterns" - O'Rally <br/>
- Postgres SQL - Давыдов Н.Ф <br/>
- Kafka Streams - (O'Rally) <br/>
- Выразительный JS - (O'Rally) <br/>
- TypeScript - (O'Rally) <br/>
- Docker - (O'Rally) <br/>
- "Компьютерные сети" - Andre Tannenbaum <br/>
</p>

<p>
Хочу особенно выделить серию книг O'Rally с животными на обложках. Мне очень нравится эта серия ! А еще нравится читать Дейва Бизли, чувак очень весело подает материал. С юмором легче усваивать прочитанное!
Если выпадает случай я обязательно покупаю обычные книги. Но к сожалению из за большого количества переездов, мне не удается собрать свою большую библиотеку.  А на SSD диске, да! 
Собираю все pdf копии нужных книг некоторые из которых использую как справочники ! 
</p>



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
        <hr/>
        <p className="text-sm">Электронная <Link href="https://www.beatport.com/artist/ivan-stereotekk/394712?srsltid=AfmBOopvGWILHl4jCFXtisaIioeAO8oVlLeYfrO93EezsY_yxMHWGARO"> музыка.</Link></p>
        <p>
          Музыка и видео    
            <Link href="https://www.youtube.com/@stereotekk_ivan"> на YouTube.</Link> <br/>
          

        </p>




        </section>
    

      <pre>
      <AlertDialogGetContact/>
      </pre>  
      </div>
    </section>
    
  );
}

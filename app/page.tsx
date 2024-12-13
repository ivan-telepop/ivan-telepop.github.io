import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/ivan-glass.jpg"
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
          Добро пожаловать ко мне на страницу ! 
          Это место где я пишу о себе, публикую интересное, и просто сайт где я могу выкладываю свои мысли.
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
      </div>
    </section>
  );
}

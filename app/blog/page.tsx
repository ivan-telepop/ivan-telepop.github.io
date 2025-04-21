import Link from "next/link";
import { formatDate, getBlogPosts } from "app/lib/posts";

export const metadata = {
  title: "Blog",
  description: "Ivan Goncharov",
};

export default function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">О коде и технологиях</h1>

    <div className="pb-24 prose prose-neutral dark:prose-invert ">
<p>
      {/* Прежде чем что-либо делать, я всегда задаю себе вопрос...<br/> 
      <b>Зачем ?</b> */}
    <p>      
    В большей степени я пишу это для себя, чтобы быть в теме и закрепить материал.
    Но если вам покажется подача супер комфортной и понятной, 
    или же вы просто случайно нашли этот уютный блог,<br/> 
    то как говориться - welcome!
    </p>
</p>
    </div>
      <div>
        {allBlogs
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <Link
              key={post.slug}
              className="flex flex-col space-y-1 mb-4 transition-opacity duration-200 hover:opacity-80"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
                <p className="text-black text-lg not-italic hover:italic dark:text-white tracking-tight">
                  {post.metadata.title}
                </p>
                <p className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
}

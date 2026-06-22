import { useState } from "react"
import { Search, Clock, ArrowUpRight, ArrowRight } from "lucide-react"
import { useTranslation } from "react-i18next"
import { Helmet } from "react-helmet-async";


function CategoryPill({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={
        active
          ? "brand-gradient rounded-full px-4 py-1.5 text-sm font-semibold text-white"
          : "rounded-full border border-card-border bg-surface px-4 py-1.5 text-sm font-medium text-muted transition-colors hover:text-foreground hover:border-brand-cyan/40"
      }
    >
      {label}
    </button>
  )
}

function PostCard({ post }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-card-border bg-card/60 transition-all hover:border-brand-cyan/40 hover:bg-card">
      <div className="relative overflow-hidden">
        <img
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full border border-card-border bg-background/70 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-md">
          {post.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-balance text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-brand-cyan">
          {post.title}
        </h3>
        <p className="mt-2 text-pretty text-sm leading-relaxed text-muted">{post.excerpt}</p>
        <div className="mt-4 flex items-center justify-between border-t border-card-border pt-4">
          <div className="flex items-center gap-2 text-xs text-muted-2">
            <span className="text-muted">{post.author}</span>
            <span aria-hidden="true">·</span>
            <span>{post.date}</span>
          </div>
          <span className="flex items-center gap-1 text-xs text-muted-2">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            {post.readTime}
          </span>
        </div>
      </div>
    </article>
  )
}
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"
import img4 from "../assets/img4.png"
import img5 from "../assets/img5.png"
import img6 from "../assets/img6.png"
import img7 from "../assets/img7.png"
export default function Blog() {
  const { t, i18n } = useTranslation();
const isBangla = i18n.language === "bn";
  const categories = [t("blog.categories.all"), t("blog.posts.0.category"), t("blog.posts.1.category"), t("blog.posts.2.category"), t("blog.posts.3.category"), t("blog.posts.4.category")]
const featured = {
  category: t("blog.posts.0.category"),
  title: t("blog.posts.0.title"),
  excerpt:
    t("blog.posts.0.excerpt"),
  image: img1,
  author: "Maya Rahman",
  avatar: "/blog/author.png",
  date: "Jan 14, 2026",
  readTime: "8 min read",
}

const posts = [
  {
    category: t("blog.posts.1.category"),
    title: t("blog.posts.1.title"),
    excerpt: t("blog.posts.2.excerpt"),
    image: img2,
    author: "Daniel Cho",
    date: "Jan 9, 2026",
    readTime: "6 min read",
  },
  {
    category: t("blog.posts.2.category"),
    title: t("blog.posts.2.title"),
    excerpt: t("blog.posts.2.excerpt"),
    image: img3,
    author: "Lena Park",
    date: "Jan 6, 2026",
    readTime: "5 min read",
  },
  {
    category: t("blog.posts.3.category"),
    title: t("blog.posts.3.title"),
    excerpt: t("blog.posts.3.excerpt"),
    image: img4,
    author: "Arjun Mehta",
    date: "Jan 2, 2026",
    readTime: "7 min read",
  },
  {
    category: t("blog.posts.4.category"),
    title: t("blog.posts.4.title"),
    excerpt: t("blog.posts.4.excerpt"),
    image: img5,
    author: "Maya Rahman",
    date: "Dec 28, 2025",
    readTime: "4 min read",
  },
  {
    category: t("blog.posts.5.category"),
    title: t("blog.posts.5.title"),
    excerpt: t("blog.posts.5.excerpt"),
    image: img6,
    author: "Priya Nair",
    date: "Dec 20, 2025",
    readTime: "3 min read",
  },
  {
    category: t("blog.posts.6.category"),
    title: t("blog.posts.6.title"),
    excerpt: t("blog.posts.6.excerpt"),
    image: img7,
    author: "Daniel Cho",
    date: "Dec 15, 2025",
    readTime: "9 min read",
  },
]
  const [active, setActive] = useState("All")
  const [query, setQuery] = useState("")

  const filtered = posts.filter((p) => {
    const matchCat = active === "All" || p.category === active
    const matchQuery =
      query.trim() === "" ||
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(query.toLowerCase())
    return matchCat && matchQuery
  })

  return (
    <>
    <Helmet>
    <title>
      {isBangla
        ? "ব্লগ | Tramessy - ট্রান্সপোর্ট ম্যানেজমেন্ট সফটওয়্যার"
        : "Blog | Tramessy - Transport Management Software"}
    </title>

    <meta
      name="description"
      content={
        isBangla
          ? "পরিবহন ব্যবস্থাপনা, ফ্লিট ট্র্যাকিং, লজিস্টিকস, যানবাহন রক্ষণাবেক্ষণ এবং ব্যবসা পরিচালনা সম্পর্কিত সর্বশেষ ব্লগ ও নির্দেশিকা।"
          : "Explore transport management, fleet tracking, logistics optimization, vehicle maintenance, and business growth insights from the Tramessy blog."
      }
    />

    <meta
      name="keywords"
      content={
        isBangla
          ? "ট্রান্সপোর্ট ম্যানেজমেন্ট, ফ্লিট ম্যানেজমেন্ট, লজিস্টিকস সফটওয়্যার, যানবাহন ট্র্যাকিং, ট্রামেসি ব্লগ"
          : "transport management blog, fleet management software, logistics software Bangladesh, vehicle tracking system, Tramessy blog"
      }
    />

    <meta property="og:type" content="website" />

    <meta
      property="og:title"
      content={
        isBangla
          ? "Tramessy ব্লগ"
          : "Tramessy Blog"
      }
    />

    <meta
      property="og:description"
      content={
        isBangla
          ? "পরিবহন ও ফ্লিট ম্যানেজমেন্ট সম্পর্কিত গুরুত্বপূর্ণ তথ্য ও নির্দেশিকা।"
          : "Insights and guides on transport, logistics, and fleet management."
      }
    />

    <meta property="og:image" content="/blog-og.jpg" />

    <link
      rel="canonical"
      href={`https://tramessy.com/${isBangla ? "bn/" : ""}blog`}
    />
  </Helmet>
  <section className="mx-auto max-w-6xl px-4 pt-14 sm:pt-20">
      {/* Heading */}
      <div className="text-center">
        {/* <span className="inline-flex items-center gap-2 rounded-full border border-card-border bg-surface px-3 py-1 text-xs font-medium text-brand-cyan">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" aria-hidden="true" />
          The Tramessy Blog
        </span> */}
        <h1 className="mt-8 text-balance text-4xl font-bold tracking-tight sm:text-4xl">
          {t("blog.title")}
          <span className="block bg-gradient-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">
            from the road ahead
          </span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted">
          {/* Insights on logistics, engineering, design and AI — straight from the team building the future of fleet
          management. */}
          {t("blog.description")}
        </p>
      </div>

      {/* Featured */}
      <a
        href="#"
        className="group mt-12 grid gap-6 overflow-hidden rounded-3xl border border-card-border bg-card/60 p-3 transition-all hover:border-brand-cyan/40 md:grid-cols-2 md:p-4"
      >
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={featured.image || "/placeholder.svg"}
            alt={featured.title}
            className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-full"
          />
          <span className="absolute left-4 top-4 rounded-full border border-card-border bg-background/70 px-3 py-1 text-xs font-medium text-brand-cyan backdrop-blur-md">
            Featured · {featured.category}
          </span>
        </div>
        <div className="flex flex-col justify-center p-3 md:p-6">
          <h2 className="text-balance text-2xl font-bold leading-tight sm:text-3xl">{featured.title}</h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted">{featured.excerpt}</p>
          <div className="mt-6 flex items-center gap-3">
            <img src={featured.avatar || "/placeholder.svg"} alt="" className="h-10 w-10 rounded-full object-cover" />
            <div className="text-sm">
              <p className="font-medium text-foreground">{featured.author}</p>
              <p className="flex items-center gap-2 text-xs text-muted-2">
                {featured.date}
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  {featured.readTime}
                </span>
              </p>
            </div>
          </div>
          <span className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-brand-cyan transition-transform group-hover:translate-x-1">
            Read article
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>
      </a>

      {/* Filters + search */}
      <div className="mt-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <CategoryPill key={c} label={c} active={active === c} onClick={() => setActive(c)} />
          ))}
        </div>
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-2" aria-hidden="true" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles..."
            className="w-full rounded-lg border border-card-border bg-input py-2.5 pl-9 pr-3 text-sm text-foreground placeholder:text-muted-2 outline-none transition-colors focus:border-brand-cyan focus:ring-2 focus:ring-ring"
          />
        </div>
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <PostCard key={post.title} post={post} />
          ))}
        </div>
      ) : (
        <p className="mt-16 text-center text-muted">No articles found. Try a different search or category.</p>
      )}

      {/* Newsletter */}
      <div className="mt-16 overflow-hidden rounded-3xl border border-card-border bg-card/60 p-8 text-center sm:p-12">
        <h2 className="text-balance text-2xl font-bold sm:text-3xl">{t("blog.newsletter.title")}</h2>
        <p className="mx-auto mt-3 max-w-md text-pretty leading-relaxed text-muted">
          {t("blog.newsletter.description")}
        </p>
        <form
          className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            required
            placeholder="you@example.com"
            className="flex-1 rounded-lg border border-card-border bg-input px-4 py-2.5 text-sm text-foreground placeholder:text-muted-2 outline-none transition-colors focus:border-brand-cyan focus:ring-2 focus:ring-ring"
          />
          <button
            type="submit"
            className="brand-gradient flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Subscribe
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </form>
      </div>
    </section>
    </>   
  )
}

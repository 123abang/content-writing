import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { BookOpen, Mail, ArrowRight, FileText } from "lucide-react"

export default function Home() {
  // Project data
  const projects = [
    {
      id: 1,
      title: "The Alchemy of Love: Myth, Science, and the Unseen Forces That Bind Us",
      description:
        "An exploration of love through the lenses of mythology, scientific research, and the mysterious connections between humans.",
      year: "2023",
      category: "Romance/Science",
      image: "https://images.unsplash.com/photo-1544142293-4858ce9d4ad1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhlJTIwQWxjaGVteSUyMG9mJTIwTG92ZXxlbnwwfHwwfHx8MA%3D%3D",
      docLink: "https://docs.google.com/document/d/1aO5ihkHarx6DFNGIbzC5ZJQLkbYrIXXUd9Akcjz-jLc/edit?usp=sharing",
    },
    {
      id: 2,
      title: "The Dynamic Blueprint of Human Physiology",
      description:
        "Unraveling Movement, Evolution, and the Systems Governing Life through detailed analysis and research.",
      year: "2022",
      category: "Science/Health",
      image: "https://images.unsplash.com/photo-1716996236828-18583f5abe5d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VGhlJTIwRHluYW1pYyUyMEJsdWVwcmludCUyMG9mJTIwSHVtYW4lMjBQaHlzaW9sb2d5fGVufDB8fDB8fHww",
      docLink: "https://docs.google.com/document/d/13f2CSyCElMPnHUlwH-Zt1ewU6ip92i3Twb6_PsdoMK8/edit?usp=sharing",
    },
    {
      id: 3,
      title: "Apple Intelligence",
      description:
        "A comprehensive analysis of Apple's AI ecosystem and its impact on modern technology and user experience.",
      year: "2023",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1684846100353-97dd30cef0b4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEFwcGxlJTIwSW50ZWxsaWdlbmNlfGVufDB8fDB8fHww",
      docLink: "https://docs.google.com/document/d/1ieMcWi8Tp1iukzs0kEFB5Xz2SvycXZL-baPFiV8CENc/edit?usp=sharing",
    },
    {
      id: 4,
      title: "E-commerce Solutions",
      description:
        "Strategic approaches to modern e-commerce platforms with a focus on user experience and conversion optimization.",
      year: "2023",
      category: "Business/Technology",
      image: "https://plus.unsplash.com/premium_photo-1661456268709-bac8e7f21e51?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RSUyMGNvbW1lcmNlJTIwU29sdXRpb25zfGVufDB8fDB8fHww",
      docLink: "https://docs.google.com/document/d/1epRtXF2SsTVHbpA0wr5FmcdeC-Jx-oh62gHIT-sig_8/edit?usp=sharing",
    },
    {
      id: 5,
      title: "Why Dogs Are Human's Best Friends",
      description:
        "An in-depth look at the special bond between humans and dogs, and why they make better companions than other pets.",
      year: "2021",
      category: "Lifestyle/Psychology",
      image: "https://plus.unsplash.com/premium_photo-1739037146087-f7147b67a328?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8V2h5JTIwRG9ncyUyMEFyZSUyMEh1bWFuJ3MlMjBCZXN0JTIwRnJpZW5kc3xlbnwwfHwwfHx8MA%3D%3D",
      docLink: "https://docs.google.com/document/d/1aAqDlY4GLtZtwX6Ql6OhTzE9hY-0zBR1fowlriKUoo4/edit?usp=sharing",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <BookOpen className="h-6 w-6" />
          <span>Abang Tah</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
            About
          </Link>
          <Link href="#works" className="text-sm font-medium hover:underline underline-offset-4">
            Works
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>
        <Button asChild size="sm" className="hidden md:flex">
          <Link href="#contact">Get in Touch</Link>
        </Button>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Abang Tah</h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Writer, content creator, and AI enthusiast specializing in romance, science, and compelling
                    narratives that captivate readers.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild>
                    <Link href="#works">View My Works</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="#contact">Contact Me</Link>
                  </Button>
                </div>
              </div>
              <Image
                src="https://images.unsplash.com/photo-1705754139930-e73d4190fd53?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ldHJ5JTIwaW1hZ2VzfGVufDB8fDB8fHww"
                width={800}
                height={800}
                alt="Abang Tah portrait"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last shadow-lg"
              />
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I'm Abang Tah, a passionate writer with a focus on romance, technology, and the intersection of AI
                  with creative writing. My work explores human emotions, scientific concepts, and the relationships
                  between people and technology in the digital age.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src="https://plus.unsplash.com/premium_photo-1728650291164-1a6a512f219e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QWklMjByaXRpbmd8ZW58MHx8MHx8fDA%3D"
                width={800}
                height={800}
                alt="Abang Tah at work"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full shadow-lg"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">My Journey</h3>
                      <p className="text-muted-foreground">
                        I began writing with a passion for exploring the intersection of science and human emotion. My
                        work spans from deep dives into human physiology to the complex dynamics of love and
                        relationships.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">My Approach</h3>
                      <p className="text-muted-foreground">
                        I believe in creating content that bridges the gap between scientific understanding and
                        emotional resonance. My writing aims to make complex topics accessible while maintaining depth
                        and authenticity.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">AI & Writing</h3>
                      <p className="text-muted-foreground">
                        As an AI enthusiast, I explore how technology enhances our understanding of human connections,
                        from e-commerce solutions to the bonds we form with our animal companions.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="works" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Works</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore my published works, articles, and creative projects.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl gap-10 py-12 md:grid-cols-2 lg:grid-cols-2">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group relative overflow-hidden rounded-xl border bg-background shadow-md transition-all hover:shadow-xl"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      width={800}
                      height={500}
                      alt={`Cover for ${project.title}`}
                      className="object-cover transition-all group-hover:scale-105 w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold tracking-tight mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <span>{project.year}</span>
                        <span className="mx-2">•</span>
                        <span>{project.category}</span>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="gap-1" asChild>
                          <Link href={project.docLink} target="_blank">
                            <FileText className="h-4 w-4" />
                            <span>Google Doc</span>
                          </Link>
                        </Button>
                        <Button variant="default" size="sm" className="gap-1">
                          <span>Read More</span>
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
              <div>
                <Image
                  src="https://images.unsplash.com/photo-1655251635712-84c7b374c85f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFRoZSUyMEFsY2hlbXklMjBvZiUyMExvdmV8ZW58MHx8MHx8fDA%3D"
                  width={1200}
                  height={800}
                  alt="Featured project showcase"
                  className="mx-auto rounded-xl object-cover shadow-xl"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Featured Work</h2>
                  <p className="text-muted-foreground">
                    "The Alchemy of Love" explores the science behind human connections and the mysterious forces that
                    draw us together. This comprehensive work combines research from neuroscience, psychology, and
                    anthropology with timeless myths about love from cultures around the world.
                  </p>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                    <Button asChild>
                      <Link href={projects[0].docLink} target="_blank">
                        Read Full Document
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="#contact">Request More Information</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get in Touch</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Interested in collaborations, speaking engagements, or just want to say hello? Reach out to me.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    id="name"
                    placeholder="Name"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Your message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  ></textarea>
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
              <div className="flex items-center justify-center gap-4 mt-4">
                <div className="text-sm text-muted-foreground flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>abangtah43@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Abang Tah. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  )
}


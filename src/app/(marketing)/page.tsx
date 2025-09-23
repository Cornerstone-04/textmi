import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "TextMi — Minimal Texting, Maximum Focus",
  description:
    "A lightweight, distraction-free chat app. Clean UI, fast onboarding, and just the essentials.",
  keywords: ["chat", "messaging", "minimal", "texting", "TextMi"],
  openGraph: {
    title: "TextMi — Minimal Texting, Maximum Focus",
    description:
      "A lightweight, distraction-free chat app. Clean UI, fast onboarding, and just the essentials.",
    url: "https://textmi.example.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TextMi — Minimal Texting",
    description: "Distraction-free chat with only what matters.",
  },
};

const features = [
  {
    title: "Fast Onboarding",
    desc: "Sign up, set a profile, and start chatting in minutes.",
  },
  { title: "Buddy List", desc: "Add friends, accept requests, keep it close." },
  {
    title: "Clean Chat",
    desc: "Text, emojis, images & GIFs—no bloat, no clutter.",
  },
  {
    title: "Private by Design",
    desc: "Secure auth, optional 2FA, and clear privacy controls.",
  },
  {
    title: "Accessible",
    desc: "High-contrast, keyboard-friendly, readable typography.",
  },
  {
    title: "PWA-Ready Foundation",
    desc: "Optimized for future offline & install support.",
  },
];

export default function Page() {
  return (
    <main className="min-h-dvh bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      {/* Container: balanced margins (not too wide) */}
      <section className="mx-auto max-w-6xl px-5 sm:px-6 md:px-8">
        {/* Hero */}
        <div className="py-14 sm:py-20 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
              TEXTMI
            </p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
              Minimal texting.{" "}
              <span className="text-neutral-500 dark:text-neutral-400">
                Maximum focus.
              </span>
            </h1>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
              A lightweight chat app that keeps conversations clean, fast, and
              distraction-free.
            </p>
            <div className="mt-8 flex gap-3">
              <Button asChild size="lg">
                <Link href="/auth/sign-up">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#features">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Features */}
        <div id="features" className="py-8 sm:py-12 md:py-16">
          <h2 className="text-2xl font-semibold">Just what you need</h2>
          <p className="mt-2 max-w-2xl text-neutral-600 dark:text-neutral-300">
            TextMi focuses on the essentials—fast onboarding, a clean chat, and
            a simple buddy list.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <Card
                key={f.title}
                className="border-neutral-200 dark:border-neutral-800"
              >
                <CardHeader>
                  <CardTitle className="text-base">{f.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-neutral-600 dark:text-neutral-300">
                  {f.desc}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How it works */}
        <div className="py-8 sm:py-12 md:py-16">
          <h2 className="text-2xl font-semibold">How it works</h2>
          <ol className="mt-4 grid list-decimal gap-3 pl-5 text-neutral-700 dark:text-neutral-300 sm:grid-cols-2 lg:grid-cols-3">
            <li>Create an account</li>
            <li>Set your profile</li>
            <li>Find buddies</li>
            <li>Start chatting</li>
            <li>Keep it simple</li>
          </ol>
          <div className="mt-6">
            <Button asChild variant="secondary">
              <Link href="/#faq">Read FAQs</Link>
            </Button>
          </div>
        </div>

        {/* About Creator */}
        <div className="py-8 sm:py-12 md:py-16">
          <h2 className="text-2xl font-semibold">About the Creator</h2>
          <p className="mt-2 max-w-3xl text-neutral-600 dark:text-neutral-300">
            TextMi is built by Cornerstone Ephraim, a frontend engineer focused
            on fast, minimal user experiences. This project showcases a clean
            architecture with Next.js, Tailwind, shadcn/ui, and Supabase.
          </p>
        </div>

        {/* FAQ */}
        <div id="faq" className="py-8 sm:py-12 md:py-16">
          <h2 className="text-2xl font-semibold">FAQs</h2>
          <Accordion type="single" collapsible className="mt-4 max-w-3xl">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is TextMi free?</AccordionTrigger>
              <AccordionContent>
                Yes—TextMi is a minimal demo you can try freely.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Do I need an email?</AccordionTrigger>
              <AccordionContent>
                Yes. You can also sign in with Google for speed and convenience.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Are chats encrypted?</AccordionTrigger>
              <AccordionContent>
                Connection security is enabled; end-to-end encryption is planned
                for a future update.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Can I upload videos?</AccordionTrigger>
              <AccordionContent>
                Not yet—images & GIFs are supported now. Video is on the
                roadmap.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </main>
  );
}

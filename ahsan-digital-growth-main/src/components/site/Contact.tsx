import { useState, type FormEvent } from "react";
import {
  Facebook,
  Image as ImageIcon,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Phone,
  Send,
  Twitter,
  type LucideIcon,
} from "lucide-react";
import { toast } from "sonner";
import { CONTACT, SOCIALS } from "./data";
import { FaPinterest } from "react-icons/fa";

const SOCIAL_ICONS: Record<string, any> = {
  Facebook,
  Instagram,
  Linkedin,
  Image: ImageIcon,
  MessageCircle,
  Twitter,
  Pinterest: FaPinterest,
};

export function SocialLinks({ variant = "dark" }: { variant?: "dark" | "light" }) {
  return (
    <ul className="flex flex-wrap gap-3">
      {SOCIALS.map((social) => {
        const Icon = SOCIAL_ICONS[social.icon] ?? Twitter;
        return (
          <li key={social.name}>
            <a
              href={social.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={social.name}
              className={
                variant === "dark"
                  ? "inline-flex size-11 items-center justify-center rounded-xl border border-white/15 text-navy-foreground/80 transition-all hover:-translate-y-1 hover:border-accent/50 hover:text-accent"
                  : "inline-flex size-11 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-all hover:-translate-y-1 hover:border-primary hover:text-primary"
              }
            >
              <Icon className="size-5" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export function Contact() {
  const [sending, setSending] = useState(false);

const onSubmit = (event: FormEvent<HTMLFormElement>) => {

  event.preventDefault();

  const form = event.currentTarget;

  const formData = new FormData(form);

  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");


  const whatsappMessage = `
Hello, I want to contact you.

Name: ${name}

Email: ${email}

Message:
${message}
`;


  const whatsappURL =
    `https://wa.me/923246858170?text=${encodeURIComponent(whatsappMessage)}`;


  window.open(whatsappURL, "_blank");


  form.reset();


  toast.success("Opening WhatsApp", {
    description: "Your message is ready to send.",
  });

};

  return (
    <section className="surface-navy relative overflow-hidden py-24 lg:py-32">
      <div className="grid-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">Contact</p>
            <h1 className="mt-3 font-display text-4xl font-bold text-navy-foreground sm:text-5xl">
              Let&apos;s Grow Your Business Together
            </h1>
            <p className="mt-4 max-w-lg text-base text-navy-foreground/70">
              Tell me about your business, your goals and where you want to be in the next quarter.
              I&apos;ll come back with an honest view of what paid media can do for you.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href={`mailto:${CONTACT.email}`}
                className="glass-panel flex items-center gap-4 rounded-2xl p-4 transition-colors hover:border-accent/40"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground">
                  <Mail className="size-5" />
                </span>
                <span>
                  <span className="block text-xs text-navy-foreground/60">Email</span>
                  <span className="text-sm font-semibold text-navy-foreground">{CONTACT.email}</span>
                </span>
              </a>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noreferrer noopener"
                className="glass-panel flex items-center gap-4 rounded-2xl p-4 transition-colors hover:border-accent/40"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground">
                  <Phone className="size-5" />
                </span>
                <span>
                  <span className="block text-xs text-navy-foreground/60">Phone / WhatsApp</span>
                  <span className="text-sm font-semibold text-navy-foreground">{CONTACT.phone}</span>
                </span>
              </a>
              <a

href={CONTACT.linkedin}

target="_blank"

rel="noreferrer noopener"

className="glass-panel flex items-center gap-4 rounded-2xl p-4 hover:border-accent/40"

>


<span className="inline-flex size-11 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground">

<Linkedin className="size-5"/>

</span>


<span>

<span className="block text-xs text-navy-foreground/60">
LinkedIn
</span>


<span className="text-sm font-semibold text-navy-foreground">
View Profile
</span>


</span>


</a>







{/* Facebook */}

<a

href={CONTACT.facebook}

target="_blank"

rel="noreferrer noopener"

className="glass-panel flex items-center gap-4 rounded-2xl p-4 hover:border-accent/40"

>


<span className="inline-flex size-11 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground">

<Facebook className="size-5"/>

</span>


<span>

<span className="block text-xs text-navy-foreground/60">
Facebook
</span>


<span className="text-sm font-semibold text-navy-foreground">
Visit Page
</span>


</span>


</a>

<a

href={CONTACT.instagram}

target="_blank"

rel="noreferrer noopener"

className="glass-panel flex items-center gap-4 rounded-2xl p-4 hover:border-accent/40"

>


<span className="inline-flex size-11 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground">

<Instagram className="size-5"/>

</span>


<span>

<span className="block text-xs text-navy-foreground/60">
Instagram
</span>


<span className="text-sm font-semibold text-navy-foreground">
Follow Me
</span>


</span>


</a>
<a

href={CONTACT.twitter}

target="_blank"

rel="noreferrer noopener"

className="glass-panel flex items-center gap-4 rounded-2xl p-4 hover:border-accent/40"

>


<span className="inline-flex size-11 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground">

<Twitter className="size-5"/>

</span>


<span>

<span className="block text-xs text-navy-foreground/60">
Twitter / X
</span>


<span className="text-sm font-semibold text-navy-foreground">
Follow Updates
</span>


</span>


</a>
<a
  href={CONTACT.pinterest}
  target="_blank"
  rel="noreferrer noopener"
  className="glass-panel flex items-center gap-4 rounded-2xl p-4 hover:border-accent/40"
>
  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground">

    <FaPinterest className="size-5"/>

  </span>

  <span>

    <span className="block text-xs text-navy-foreground/60">
      Pinterest
    </span>

    <span className="text-sm font-semibold text-navy-foreground">
      View Profile
    </span>

  </span>

</a>
             
            </div>

            {/* <div className="mt-8">
              <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-navy-foreground/60 uppercase">
                Follow along
              </p>
              <SocialLinks />
            </div> */}
          </div>

          <form
            onSubmit={onSubmit}
            className="glass-panel rounded-[1.75rem] p-7 lg:p-9"
            aria-label="Contact form"
          >
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-navy-foreground">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-navy-foreground placeholder:text-navy-foreground/40 focus:border-accent focus:ring-2 focus:ring-accent/30 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-navy-foreground">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-navy-foreground placeholder:text-navy-foreground/40 focus:border-accent focus:ring-2 focus:ring-accent/30 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-navy-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="What are you looking to grow?"
                  className="w-full resize-none rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-navy-foreground placeholder:text-navy-foreground/40 focus:border-accent focus:ring-2 focus:ring-accent/30 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:scale-[1.02] disabled:opacity-70"
              >
                {sending ? "Sending..." : "Send Message"} <Send className="size-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

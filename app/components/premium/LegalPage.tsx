import Link from "next/link";
import type { ReactNode } from "react";
import { PageHero } from "./index";
import { Field, Managed } from "@/app/components/cms";

export type LegalSection = { id: string; title: string; body: ReactNode };

/*
 * Shared layout for the Privacy Policy and Terms & Conditions pages:
 * compact hero, sticky table of contents, and a readable prose column.
 */
export default function LegalPage({
  eyebrow,
  title,
  accent,
  intro,
  updated,
  path,
  sections,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  intro: string;
  updated: string;
  path: string;
  sections: LegalSection[];
}) {
  return (
    <div className="bg-white text-gray-800">
      <Managed id="hero" label="Hero"><PageHero
        compact
        eyebrow={eyebrow}
        title={title}
        accent={accent}
        subtitle={intro}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: `${title} ${accent}`, href: path },
        ]}
      /></Managed>

      <Managed id="content" label="Policy content"><section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <div className="premium-card p-7">
                  <div className="mb-1 font-mono text-[11px] uppercase tracking-[0.25em] text-red-600"><Field name="updatedLabel">Last updated</Field></div>
                  <div className="mb-6 font-semibold text-gray-900"><Field name="updated">{updated}</Field></div>
                  <nav aria-label="On this page" className="border-t border-gray-100 pt-5">
                    <ol className="space-y-2.5 text-sm">
                      {sections.map((s, i) => (
                        <li key={s.id}>
                          <a href={`#${s.id}`} className="group flex gap-3 text-gray-600 hover:text-red-600">
                            <span className="font-mono text-xs text-gray-300 group-hover:text-red-400">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <Field name={`sections.${s.id}.title`}>{s.title}</Field>
                          </a>
                        </li>
                      ))}
                    </ol>
                  </nav>
                </div>
              </div>
            </aside>

            <article className="lg:col-span-8">
              <div className="space-y-14">
                {sections.map((s, i) => (
                  <section key={s.id} id={s.id} className="scroll-mt-32">
                    <div className="mb-3 font-mono text-xs tracking-[0.2em] text-red-600">{String(i + 1).padStart(2, "0")}</div>
                    <h2 className="mb-5 text-2xl font-semibold text-gray-900 md:text-3xl" style={{ letterSpacing: "-0.025em" }}>
                      <Field name={`sections.${s.id}.title`}>{s.title}</Field>
                    </h2>
                    <div className="space-y-4 text-[1.05rem] leading-relaxed text-gray-600 [&_a]:font-medium [&_a]:text-red-600 [&_a:hover]:underline [&_li]:pl-1 [&_strong]:text-gray-900 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
                      {s.body}
                    </div>
                  </section>
                ))}
              </div>

              <div className="mt-16 rounded-3xl border border-gray-200 bg-gray-50 p-7 text-sm text-gray-600">
                <Field name="questions">Questions about this page? Email</Field>{" "}
                <a href="mailto:info@sharptel.pk" className="font-medium text-red-600 hover:underline">info@sharptel.pk</a> or visit our{" "}
                <Link href="/Contact-us" className="font-medium text-red-600 hover:underline">contact page</Link>.
              </div>
            </article>
          </div>
        </div>
      </section></Managed>
    </div>
  );
}

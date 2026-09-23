import {
  BarChart3,
  Check,
  Megaphone,
  Target,
  Wrench,
  TrendingUp,
  Code2,
  Layout,
  type LucideIcon,
} from "lucide-react";

import { SKILL_CATEGORIES } from "./data";


const ICONS: Record<string, LucideIcon> = {
  Megaphone,
  Target,
  BarChart3,
  Wrench,
  TrendingUp,
  Code2,
  Layout,
};


export function Skills({ heading = true }: { heading?: boolean }) {

  return (
    <section className="bg-background py-24 lg:py-32">

      <div className="mx-auto max-w-7xl px-5 lg:px-8">


        {heading && (

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">
              Skills & Tools
            </p>


            <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
              Digital Marketing & Development Expertise
            </h2>


            <p className="mt-4 text-muted-foreground">
              Combining marketing strategies, advertising platforms and modern
              development skills to build complete digital solutions.
            </p>

          </div>

        )}



        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">


          {SKILL_CATEGORIES.map((category)=>{


            const Icon = ICONS[category.icon] ?? Target;


            return (

              <article

                key={category.title}

                className="
                group
                rounded-3xl
                border
                border-border
                bg-card
                p-7
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
                "

              >


                <div className="flex items-center gap-4">


                  <div
                    className="
                    flex
                    size-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-brand
                    text-primary-foreground
                    "
                  >

                    <Icon className="size-7"/>

                  </div>



                  <h3 className="font-display text-xl font-semibold">

                    {category.title}

                  </h3>


                </div>



                <ul className="mt-7 space-y-3">


                  {category.items.map((item)=>(

                    <li

                    key={item}

                    className="
                    flex
                    items-center
                    gap-3
                    text-sm
                    text-muted-foreground
                    "

                    >

                      <span
                      className="
                      flex
                      size-5
                      items-center
                      justify-center
                      rounded-full
                      bg-primary/10
                      "
                      >

                        <Check className="size-3 text-primary"/>

                      </span>


                      {item}


                    </li>

                  ))}


                </ul>


              </article>

            )


          })}


        </div>


      </div>

    </section>
  );
}
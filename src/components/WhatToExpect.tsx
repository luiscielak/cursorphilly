/**
 * CHANGELOG:
 * - New component: "What to Expect" section
 * - 3 items: Lightning talks, Demos, Hangout
 * - Beginner-friendly tagline
 */

import { Zap, Monitor, Users } from "lucide-react";

const expectations = [
  {
    icon: Zap,
    title: "Lightning talks",
    description: "Tips, workflows, and real-world insights",
  },
  {
    icon: Monitor,
    title: "Demos",
    description: "Real projects built with AI tools",
  },
  {
    icon: Users,
    title: "Hangout",
    description: "Connect with builders and makers",
  },
];

const WhatToExpect = () => {
  return (
    <section className="noise-bg py-16 px-6">
      <div className="container max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
          What to expect
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {expectations.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="p-3 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm">
          Beginner-friendly.{" "}
          <span className="whitespace-nowrap">Curious is enough.</span>
        </p>
      </div>
    </section>
  );
};

export default WhatToExpect;

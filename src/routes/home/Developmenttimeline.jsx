import React from 'react';
import { Timeline } from '../../components/ui/timeline';
import timeline1 from '../../assets/timeline1.jpg';
import timeline2 from '../../assets/timeline2.jpg';
import timeline3 from '../../assets/timeline3.jpg';
import timeline4 from '../../assets/timeline4.jpg';
import timeline5 from '../../assets/timeline5.jpg';
import timeline6 from '../../assets/timeline6.jpeg';

export function DevelopmentTimeLine() {
  const data = [
    {
      title: "Sept 2024",
      content: (
        <div>
          <p className="text-neutral-200 text-base md:text-lg font-normal mb-8">
            Six of us came together during the university project allocation. Each bringing unique skills and perspectives,
            we clicked instantly over our shared vision for creating impactful technology. The early days were filled with
            exciting discussions about potential directions.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={timeline1}
              alt="team meeting"
              className="rounded-lg object-cover h-40 md:h-44 lg:h-60 w-full shadow-lg" />
            <img
              src={timeline5}
              alt="brainstorming session"
              className="rounded-lg object-cover h-40 md:h-44 lg:h-60 w-full shadow-lg" />
          </div>
        </div>
      ),
    },
    {
      title: "Oct 2024",
      content: (
        <div>
          <p className="text-neutral-200 text-base md:text-lg font-normal mb-8">
            Our breakthrough moment came during a late-night brainstorming session. After extensive market research
            and countless discussions, we identified a unique opportunity that perfectly matched our team's capabilities.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-300 text-base md:text-lg">
              🎯 Defined project scope
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-base md:text-lg">
              📊 Completed market analysis
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-base md:text-lg">
              💡 Finalized core concept
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Nov 2024",
      content: (
        <div>
          <p className="text-neutral-200 text-base md:text-lg font-normal mb-4">
            Development phase began in earnest. We set up our tech stack, established coding standards,
            and started building our first prototype. The excitement was palpable as our idea began
            taking shape in code.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-300 text-base md:text-lg">
              ✅ Development environment setup
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-base md:text-lg">
              ✅ Version control workflow established
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-base md:text-lg">
              ✅ First prototype development
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={timeline6}
              alt="coding session"
              className="rounded-lg object-cover h-40 md:h-44 lg:h-60 w-full shadow-lg" />
            <img
              src={timeline4}
              alt="team collaboration"
              className="rounded-lg object-cover h-40 md:h-44 lg:h-60 w-full shadow-lg" />
          </div>
        </div>
      ),
    },
    {
      title: "Feb 2025",
      content: (
        <div>
          <p className="text-neutral-200 text-base md:text-lg font-normal mb-4">
            Currently in an exciting phase of development. We're pushing boundaries with innovative features
            while maintaining rigorous testing and optimization. The project continues to evolve with new
            possibilities emerging regularly.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-300 text-base md:text-lg">
              🚧 Advanced features in development
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-base md:text-lg">
              🧪 Continuous testing and iteration
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-base md:text-lg">
              📱 Beta testing preparation
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-base md:text-lg">
              🎯 Next milestone planning
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={timeline3}
              alt="ongoing development"
              className="rounded-lg object-cover h-40 md:h-44 lg:h-60 w-full shadow-lg" />
            <img
              src={timeline2}
              alt="future planning"
              className="rounded-lg object-cover h-40 md:h-44 lg:h-60 w-full shadow-lg" />
          </div>
        </div>
      ),
    }
  ];
  
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
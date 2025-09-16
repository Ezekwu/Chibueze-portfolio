import { createFileRoute } from '@tanstack/react-router';
import { GoArrowRight } from 'react-icons/go';

import BaseWrapper from '@/components/general/BaseWrapper';
import MailIcon from '@/assets/icons/mail.svg';
import LinkedinIcon from '@/assets/icons/linkedin.svg';
import InstaIcon from '@/assets/icons/insta.svg';
import XIcon from '@/assets/icons/x.svg';

import { cn } from '@/utils/helpers';

export const Route = createFileRoute('/contact')({
  component: RouteComponent,
});

function RouteComponent() {
  const contactLinks = [
    {
      name: 'nwajiiugo',
      href: 'https://instagram.com/yourhandle',
      icon: InstaIcon,
    },
    {
      name: '@nwajirn',
      href: 'https://x.com/yourhandle',
      icon: XIcon,
    },
    {
      name: 'Chibueze Uchegbu',
      href: 'https://linkedin.com/in/chibueze-uchegbu',
      icon: LinkedinIcon,
    },

    {
      name: 'xavierchibueze@gmail.com',
      href: 'mailto:xavierchibueze@gmail.com',
      icon: MailIcon,
    },
  ];

  return (
    <BaseWrapper className="pt-28 md:pt-40 pb-24 md:pb-20">
      <div className="bg-white w-full sm:max-w-[513px] mx-auto md:py-8 md:px-6 py-6 px-4 rounded-[32px]">
        <h2 className="md:text-[22px] text-gray-500 font-semibold md:mb-6 mb-4">
          Please, feel free to reach out to me!
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {contactLinks.map(({name, href, icon: Icon}, index) => {
            return (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col justify-between h-[156px] px-4 py-5 rounded-3xl bg-gray-100 hover:border-gray-300 hover:shadow-md transition-all duration-200 group last:sm:col-span-3"
              >
                  <Icon 
                    className="w-10 h-10" 
                    title={name}
                  />
                <div className={cn("flex gap-2 w-full items-center", index === contactLinks.length - 1 && "justify-between")}>
                  <h3 className="font-semibold text-gray-900 text-sm">
                    {name}
                  </h3>
                  <GoArrowRight className="text-gray-600 text-xl flex-shrink-0" />
                    
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </BaseWrapper>
  );
}

import { cn } from '@/lib/utils'

export function Section({ id, alt = false, className, children }) {
  return (
    <section id={id} className={cn('py-12 lg:py-20', alt && 'bg-grey')}>
      <div className={cn('mx-auto max-w-site px-6 lg:max-w-stage lg:px-12', className)}>
        {children}
      </div>
    </section>
  )
}

export function SectionHead({ title, description }) {
  return (
    <div className="mb-6 lg:mb-10 lg:max-w-xl">
      <h2 className="font-serif text-[26px] font-normal leading-[1.2] tracking-[-0.4px] text-ink lg:text-[40px] lg:tracking-[-0.8px]">
        {title}
      </h2>
      {description && (
        <p className="mt-2 text-[14px] text-inksoft lg:text-[16px]">{description}</p>
      )}
    </div>
  )
}

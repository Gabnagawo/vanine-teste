import { motion } from 'motion/react'
import { colors } from '../theme/colors'
import { Section } from './Section'

export function Hero() {
  return (
    <Section className="lg:py-8">
      <div className="mx-auto flex flex-col items-center text-center">
        <img
          src="/logo-vanine.png"
          alt="Vanine Lima, Pediatria e Infectologia"
          className="mb-7 w-[180px] lg:w-[220px]"
          draggable={false}
        />

        <span className="mb-5 inline-block rounded-full bg-lilac/[0.12] px-3.5 py-1.5 text-[12px] text-lilac-dark">
          Clínica Santa Lourdes · Manaus
        </span>

        <h1 className="mb-7 max-w-[720px] font-serif text-[34px] font-normal leading-[1.15] tracking-[-0.5px] text-ink lg:text-[52px] lg:tracking-[-1px]">
          Cuidado pediátrico em <em className="italic text-sage-dark">todas as fases</em> da vida
        </h1>

        <div className="mb-7 flex w-full max-w-[560px] flex-col overflow-hidden rounded-3xl bg-lilac/[0.12] sm:flex-row">
          <img
            src="/dra-vanine.jpg"
            alt="Dra. Vanine Lima"
            className="h-[220px] w-full object-cover object-[center_15%] sm:h-auto sm:w-[180px] sm:object-center"
            draggable={false}
          />
          <div className="flex flex-col justify-center gap-2 p-6 text-left text-[14px] leading-[1.6] text-lilac-dark lg:p-7">
            <strong className="text-[11px] font-semibold tracking-wide">
              SOBRE A DRA. VANINE
            </strong>
            <p className="text-justify">
              Me chamo Vanine de Lourdes Aguiar Lima Fragoso. Sou médica pediatra, mestre em
              doenças infectocontagiosas. Me dedico aos cuidados de crianças com doenças
              infecciosas na FMT HVD, aos meus alunos, internos e residentes, e a todas as
              famílias que me escolhem para caminharmos juntas.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2.5 sm:flex-row">
          <motion.a
            href="#agendamento"
            initial={false}
            style={{ backgroundColor: colors.sage.DEFAULT }}
            whileHover={{ backgroundColor: colors.sage.dark }}
            whileTap={{ scale: 0.97, backgroundColor: colors.sage.dark }}
            transition={{ duration: 0.25 }}
            className="rounded-full px-6 py-3.5 text-[15px] font-medium text-white focus-visible:outline-sage-dark"
          >
            Agendar consulta
          </motion.a>
          <motion.a
            href="#observacoes"
            initial={false}
            style={{ backgroundColor: colors.lilac.light, color: colors.lilac.dark }}
            whileHover={{ backgroundColor: colors.lilac.dark, color: colors.white }}
            whileTap={{ scale: 0.97, backgroundColor: colors.lilac.dark, color: colors.white }}
            transition={{ duration: 0.25 }}
            className="rounded-full px-6 py-3.5 text-[15px] font-medium"
          >
            Ver dúvidas frequentes
          </motion.a>
        </div>
      </div>
    </Section>
  )
}

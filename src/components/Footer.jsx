export function Footer() {
  return (
    <footer className="px-6 pb-12 pt-10 text-center">
      <img src="/logo-icon.png" alt="" className="mx-auto mb-2.5 h-[26px] w-[26px]" />
      <p className="font-head text-[15px] font-semibold text-ink">Vanine Lima</p>
      <p className="text-[11px] tracking-wide text-inksoft">PEDIATRIA</p>
      <p className="mb-4 mt-0.5 text-[11px] tracking-wide text-inksoft">CRM-AM 5296 · RQE 3354</p>
      <address className="text-[13px] not-italic leading-[1.7] text-inksoft">
        Clínica Santa Lourdes
        <br />
        Rua dos Angelins, 6, Conj. Kissia, Dom Pedro
        <br />
        Manaus/AM, 69040-230
      </address>
      <div className="mt-3.5 flex justify-center gap-4 text-[13px] font-semibold text-lilac-dark">
        <a href="https://wa.me/5592984235695">WhatsApp</a>
        <a href="https://instagram.com/vanine_pediatra">@vanine_pediatra</a>
      </div>
    </footer>
  )
}

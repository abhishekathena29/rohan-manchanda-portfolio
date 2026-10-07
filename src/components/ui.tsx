import { useCallback, useEffect, useState, type ReactNode } from 'react'
import { Link } from 'react-router'
import { ArrowRight, ArrowUpRight, Close, Image } from './Icons'

/** Text label framed by a box with green "selection handle" corners. */
export function TagBox({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <span className={`tag-box${dark ? ' tag-box--dark' : ''}`}>
      <i /><i /><i /><i />
      {children}
    </span>
  )
}

export function SectionHead({ tag, title, intro }: { tag: string; title: string; intro?: string }) {
  return (
    <div className="section-head">
      <div>
        <TagBox>{tag}</TagBox>
        <h1>{title}</h1>
      </div>
      {intro && <p>{intro}</p>}
    </div>
  )
}

/** Shows the image if a src is set, otherwise a labelled placeholder. */
export function Media({ src, alt, label }: { src: string | null; alt: string; label: string }) {
  if (src) return <img className="media" src={src} alt={alt} loading="lazy" />
  return (
    <div className="media media--placeholder" role="img" aria-label={`${alt} (placeholder)`}>
      <Image width={28} height={28} />
      <span>{label}</span>
    </div>
  )
}

/** "Next page" link shown at the bottom of each inner page. */
export function PageCta({ to, label }: { to: string; label: string }) {
  return (
    <div className="container page-cta">
      <Link to={to} className="btn">
        {label} <ArrowRight width={16} height={16} />
      </Link>
    </div>
  )
}

type Photo = { src: string; caption: string }

/** Thumbnail grid; clicking a photo opens it full-size with prev/next navigation. */
export function Gallery({ photos, className = '' }: { photos: Photo[]; className?: string }) {
  const [index, setIndex] = useState<number | null>(null)
  const open = index !== null
  const step = useCallback(
    (d: number) => setIndex((i) => (i === null ? i : (i + d + photos.length) % photos.length)),
    [photos.length],
  )

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIndex(null)
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, step])

  return (
    <>
      <div className={`gallery ${className}`}>
        {photos.map((p, i) => (
          <button key={p.src} className="gallery__item" onClick={() => setIndex(i)}>
            <img src={p.src} alt={p.caption} loading="lazy" />
            <span>{p.caption}</span>
          </button>
        ))}
      </div>
      {open && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={photos[index].caption} onClick={() => setIndex(null)}>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={photos[index].src} alt={photos[index].caption} />
            <figcaption>
              {photos[index].caption}
              <span>{index + 1} / {photos.length}</span>
            </figcaption>
          </figure>
          <button className="lightbox__btn lightbox__close" aria-label="Close" onClick={() => setIndex(null)}><Close /></button>
          <button className="lightbox__btn lightbox__prev" aria-label="Previous" onClick={(e) => { e.stopPropagation(); step(-1) }}><ArrowRight style={{ transform: 'scaleX(-1)' }} /></button>
          <button className="lightbox__btn lightbox__next" aria-label="Next" onClick={(e) => { e.stopPropagation(); step(1) }}><ArrowRight /></button>
        </div>
      )}
    </>
  )
}

export function ExternalLinks({ links }: { links?: { label: string; href: string }[] }) {
  if (!links?.length) return null
  return (
    <div className="ext-links">
      {links.map((l) => (
        <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
          {l.label} <ArrowUpRight width={14} height={14} />
        </a>
      ))}
    </div>
  )
}

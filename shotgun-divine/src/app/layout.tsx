import Link from 'next/link'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Layout UI */}
        {/* Place children where you want to render a page or nested layout */}
        <main>
            <nav>
                {/* Prefetched when the link is hovered or enters the viewport */}
                <button>
                    <Link href="/">Home</Link>
                </button>
                <button>
                    <Link href="/photo_gallery">Photo Gallery</Link>
                </button>
                <button>
                    <Link href="/bio">Bios</Link>
                </button>
            </nav>
            {children}
        </main>
      </body>
    </html>
  )
} 
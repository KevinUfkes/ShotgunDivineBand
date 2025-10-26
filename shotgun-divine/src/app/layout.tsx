import Link from 'next/link'
import '@/app/ui/global.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Image from 'next/image';
import rainbowStain from '../../public/images/rainbow_stain.jpg'

import { Container, Card, CardBody } from "react-bootstrap";

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
          <nav className="relative bg-gray-800/50 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
            <div className="flex space-x-4 content-center">
              {/* Prefetched when the link is hovered or enters the viewport */}
                <button className='rounded-md px-3 py-2 text-sm font-medium bg-gray-950/50 text-white'>
                  <Link href="/">Home</Link>
                </button>
                <button className='rounded-md px-3 py-2 text-sm font-medium bg-gray-950/50 text-white'>
                  <Link href="/photo_gallery">Photo Gallery</Link>
                </button>
                <button className='rounded-md px-3 py-2 text-sm font-medium bg-gray-950/50 text-white'>
                  <Link href="/bio">Bio</Link>
                </button>    
            </div>        
          </nav>
          <div className="min-h-full content-center">
            <Image
              src={rainbowStain}
              alt="Background"
              layout="fill" // Stretches the image to fill the parent
              objectFit="cover" // Ensures the image covers the area without distortion
              quality={75} // Adjust quality as needed
              priority // For images above the fold
              style={{ zIndex: -2 }} // Puts the image behind other content
            />
            <Container className='min-w-xl opacity-80'>
              <Card className='bg-dark text-white'>
                <CardBody>
                  {children}
                </CardBody>
              </Card>
            </Container>
          </div>
        </main>
      </body>
    </html>
  )
} 

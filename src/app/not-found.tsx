import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Home, AlertCircle } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] max-w-md mx-auto px-4 text-center">
      <div className="mb-6">
        <AlertCircle className="h-16 w-16 text-primary mx-auto mb-1" />
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold mb-2">Page Not Found</h1>
      
      <p className="text-foreground/60 text-lg mb-5">
        Sorry, we couldn&apos;t find the page you were looking for.
      </p>
      
      <div className="flex gap-4">
        <Button asChild size="lg" className="flex items-center gap-2">
          <Link href="/">
            <Home className="h-4 w-4" />
            <span>Return Home</span>
          </Link>
        </Button>
      </div>
    </div>
  )
}
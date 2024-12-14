import Link from 'next/link'
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="bg-primary text-primary-foreground py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Driver Attendance</Link>
        <div>
          <Button asChild variant="secondary" className="mr-2">
            <Link href="/">Home</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/view-data">View Data</Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}


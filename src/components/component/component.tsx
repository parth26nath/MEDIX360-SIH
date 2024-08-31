
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Component() {
  /* Created By Parth Nath Chauhan
 */
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <CrossIcon className="h-6 w-6" />
            <span className="font-bold text-2xl">Medix360</span>
          </Link>
          <nav className="hidden space-x-4 md:flex">
            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              Patient Flow
            </Link>
            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              Bed Availability
            </Link>
            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              Inventory
            </Link>
            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              Analytics
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="hidden md:inline-flex">
              Contact Us
            </Button>
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-gradient-to-r from-primary to-primary-foreground py-20">
          <div className="container flex flex-col items-center justify-center gap-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-center text-4xl font-bold text-primary-foreground sm:text-5xl lg:text-6xl">
              Transforming Hospital Operations
            </h1>
            <p className="max-w-3xl text-center text-lg text-primary-foreground/80 sm:text-xl">
              Medix360 is a comprehensive hospital management platform that streamlines operations, improves efficiency,
              and enhances patient care.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button size="lg">Get Started</Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </section>
        <section className="py-16">
          <div className="container grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
            <div className="rounded-lg bg-muted p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                <BedIcon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-bold">Bed Availability</h3>
              <p className="mt-2 text-muted-foreground">
                Live visibility into available hospital beds across different wards and departments.
              </p>
            </div>
            <div className="rounded-lg bg-muted p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                <ClipboardListIcon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-bold">Patient Flow</h3>
              <p className="mt-2 text-muted-foreground">
                Real-time monitoring and dynamic allocation of resources to optimize wait times and throughput.
              </p>
            </div>
            <div className="rounded-lg bg-muted p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                <TruckIcon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-bold">Inventory Management</h3>
              <p className="mt-2 text-muted-foreground">
                Intelligent tracking and forecasting of medical supplies, equipment, and medications.
              </p>
            </div>
            <div className="rounded-lg bg-muted p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                <BarChartIcon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-bold">Reporting & Analytics</h3>
              <p className="mt-2 text-muted-foreground">
                Comprehensive dashboards and reports to support data-driven decision making.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-muted py-16">
          <div className="container grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
            <div className="rounded-lg bg-background p-6 shadow-sm">
              <h2 className="text-2xl font-bold">Patient Flow Management</h2>
              <p className="mt-2 text-muted-foreground">
                Optimize patient wait times and throughput with real-time monitoring and dynamic resource allocation.
              </p>
              <div className="mt-4 flex items-center justify-between">
                <Button size="sm">Learn More</Button>
                <ClipboardListIcon className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div className="rounded-lg bg-background p-6 shadow-sm">
              <h2 className="text-2xl font-bold">Bed Availability Tracking</h2>
              <p className="mt-2 text-muted-foreground">
                Get live visibility into available hospital beds to enable efficient bed management and patient
                admissions.
              </p>
              <div className="mt-4 flex items-center justify-between">
                <Button size="sm">Learn More</Button>
                <BedIcon className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div className="rounded-lg bg-background p-6 shadow-sm">
              <h2 className="text-2xl font-bold">Inventory Management</h2>
              <p className="mt-2 text-muted-foreground">
                Ensure optimal inventory levels and seamless restocking with intelligent tracking and forecasting.
              </p>
              
              <div className="mt-4 flex items-center justify-between">
                <Button size="sm">Learn More</Button>
                <TruckIcon className="h-6 w-6 text-primary" />
              </div>
            </div>
          </div>
        </section>
        <section className="py-16">
          <div className="container grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <h2 className="text-3xl font-bold">City-Wide Integration</h2>
              <p className="mt-4 text-muted-foreground">
                Medix360 integrates with a city-wide healthcare management system, enabling real-time data sharing,
                resource allocation, and cross-hospital coordination for more effective and efficient healthcare
                delivery.
              </p>
              <Button size="lg" className="mt-6">
                Learn More
              </Button>
            </div>
            <div>
              <h2 className="text-3xl font-bold">Reporting & Analytics</h2>
              <p className="mt-4 text-muted-foreground">
                Comprehensive dashboards and reports provide insights into hospital operations, identify bottlenecks,
                and support data-driven decision making.
              </p>
              <Button size="lg" className="mt-6">
                Explore Analytics
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-background">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <CrossIcon className="h-6 w-6" />
            <span className="font-bold text-xl">Medix360</span>
          </div>
          <nav className="flex gap-4">
            <Link href="#" className="text-sm font-medium transition-colors hover:text-primary" prefetch={false}>
              Privacy
            </Link>
            <Link href="#" className="text-sm font-medium transition-colors hover:text-primary" prefetch={false}>
              Terms
            </Link>
            <Link href="#" className="text-sm font-medium transition-colors hover:text-primary" prefetch={false}>
              Contact
            </Link>
          </nav>
          <p className="text-sm text-muted-foreground">&copy; 2024 Medix360. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function BarChartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  )
}


function BedIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 4v16" />
      <path d="M2 8h18a2 2 0 0 1 2 2v10" />
      <path d="M2 17h20" />
      <path d="M6 8v9" />
    </svg>
  )
}


function ClipboardListIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M12 11h4" />
      <path d="M12 16h4" />
      <path d="M8 11h.01" />
      <path d="M8 16h.01" />
    </svg>
  )
}

/* Created By Parth Nath Chauhan
 */
function CrossIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z" />
    </svg>
  )
}


function TruckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  )
  /* Created By Parth Nath Chauhan
 */
}

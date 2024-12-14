'use client'

import { Header } from '@/components/Header'
import { useLocalStorage } from '@/lib/useLocalStorage'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function ViewData() {
  const [attendanceData] = useLocalStorage<any[]>('attendanceData', [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto mt-8 p-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Saved Attendance Data</h1>
        <Table>
          <TableCaption>A list of driver attendance records.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Driver Name</TableHead>
              <TableHead>Site Visit</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>In Time</TableHead>
              <TableHead>Out Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {attendanceData.map((entry, index) => (
              <TableRow key={index}>
                <TableCell>{entry.driverName}</TableCell>
                <TableCell>{entry.siteVisit}</TableCell>
                <TableCell>{entry.date}</TableCell>
                <TableCell>{entry.inTime}</TableCell>
                <TableCell>{entry.outTime}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </main>
    </div>
  )
}


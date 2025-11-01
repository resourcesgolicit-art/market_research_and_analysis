"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ProfileSection } from "./sections/profile-section"
import { CoursesSection } from "./sections/courses-section"
import { WebinarsSection } from "./sections/webinars-section"
import { NotesSection } from "./sections/notes-section"
import { SupportSection } from "./sections/support-section"
import { NotificationsPopover } from "./notifications-popover"
import { SettingsModal } from "./settings-modal"
import { Bell, Settings } from "lucide-react"
import { useDashboard } from "@/lib/dashboard-context"


const Dashboard = () => {
  const [settingsOpen, setSettingsOpen] = useState(false)
  const { unreadCount } = useDashboard()

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-card border-b border-border">
        <div className="flex items-center justify-between px-6 py-4">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Welcome back!</h2>
            <p className="text-sm text-muted-foreground mt-1">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <NotificationsPopover>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                {unreadCount > 0 && <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full" />}
              </Button>
            </NotificationsPopover>

            <Button variant="ghost" size="icon" onClick={() => setSettingsOpen(true)}>
              <Settings className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6 lg:p-8 space-y-8">
        <ProfileSection />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CoursesSection />
          <WebinarsSection />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <NotesSection />
          <SupportSection />
        </div>
      </main>

      <SettingsModal open={settingsOpen} onOpenChange={setSettingsOpen} />
    </div>
  )
}

export default Dashboard;
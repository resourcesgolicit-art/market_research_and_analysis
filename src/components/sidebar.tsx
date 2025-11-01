"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, BookOpen, Video, FileText, MessageSquare, Menu, X, ChevronRight } from "lucide-react"
import logo from "@/assets/logo.png";

interface SidebarProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function Sidebar({ open, onOpenChange }: SidebarProps) {
  const [activeItem, setActiveItem] = useState("dashboard")

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "courses", label: "Courses", icon: BookOpen },
    { id: "webinars", label: "Webinars", icon: Video },
    { id: "notes", label: "Notes & E-Reader", icon: FileText },
    { id: "support", label: "Support", icon: MessageSquare },
  ]

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={() => onOpenChange(!open)}
      >
        {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </Button>

      {/* Overlay */}
      {open && <div className="fixed inset-0 bg-black/50 md:hidden z-30" onClick={() => onOpenChange(false)} />}

      {/* Sidebar */}
      <aside
        className={`fixed md:relative w-64 h-screen bg-sidebar border-r border-sidebar-border flex flex-col transition-transform duration-300 z-40 md:z-auto ${
          open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Header */}
        <div className="p-6 border-b border-sidebar-border">
          <div className="flex items-center gap-2">
          <img src={logo} alt="Logo"   className="h-16 w-16 rounded-sm object-cover text-accent-foreground" />

            <h1 className="text-xl font-bold text-sidebar-foreground">AB Institue</h1>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeItem === item.id

            return (
              <button
                key={item.id}
                onClick={() => setActiveItem(item.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? "bg-sidebar-primary text-sidebar-primary-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent/20"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </div>
                {isActive && <ChevronRight className="w-4 h-4" />}
              </button>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-sidebar-border">
          <Button
            variant="outline"
            className="w-full text-sidebar-foreground border-sidebar-border hover:bg-sidebar-accent/20 bg-transparent"
          >
            Sign Out
          </Button>
        </div>
      </aside>
    </>
  )
}

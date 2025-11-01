"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { X, CheckCheck } from "lucide-react"
import { useDashboard } from "@/lib/dashboard-context"
import { useState, useRef, useEffect } from "react"

interface NotificationsPopoverProps {
  children: React.ReactNode
}

export function NotificationsPopover({ children }: NotificationsPopoverProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const { notifications, markNotificationRead, markAllNotificationsRead, deleteNotification } = useDashboard()

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={ref}>
      <div onClick={() => setOpen(!open)}>{children}</div>

      {open && (
        <Card className="absolute right-0 mt-2 w-96 max-h-96 bg-card border-border shadow-lg z-50">
          <div className="p-4 border-b border-border flex items-center justify-between">
            <h3 className="font-semibold text-foreground">Notifications</h3>
            <Button size="sm" variant="ghost" onClick={() => markAllNotificationsRead()} className="text-xs">
              <CheckCheck className="w-3 h-3 mr-1" />
              Mark all read
            </Button>
          </div>

          <div className="overflow-y-auto max-h-80">
            {notifications.length > 0 ? (
              notifications.map((notif) => (
                <div
                  key={notif.id}
                  className={`p-4 border-b border-border hover:bg-background/50 transition-colors cursor-pointer flex items-start gap-3 ${
                    !notif.read ? "bg-secondary/5" : ""
                  }`}
                  onClick={() => markNotificationRead(notif.id)}
                >
                  <div
                    className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                      notif.type === "success"
                        ? "bg-accent"
                        : notif.type === "warning"
                          ? "bg-yellow-500"
                          : "bg-secondary"
                    }`}
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm text-foreground">{notif.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{notif.message}</p>
                    <p className="text-xs text-muted-foreground mt-1">{notif.timestamp.toLocaleTimeString()}</p>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={(e) => {
                      e.stopPropagation()
                      deleteNotification(notif.id)
                    }}
                  >
                    <X className="w-3 h-3" />
                  </Button>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-muted-foreground">
                <p className="text-sm">No notifications</p>
              </div>
            )}
          </div>
        </Card>
      )}
    </div>
  )
}

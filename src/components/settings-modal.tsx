"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { Bell, Mail, MessageCircle, Volume2, Moon, Globe, Lock } from "lucide-react"

interface SettingsModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SettingsModal({ open, onOpenChange }: SettingsModalProps) {
  const [settings, setSettings] = useState({
    pushNotifications: true,
    emailNotifications: true,
    webinarReminders: true,
    courseUpdates: false,
    darkMode: true,
    soundEnabled: true,
    language: "English",
    twoFactor: false,
  })

  const handleToggle = (key: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl bg-card border-border max-h-96 overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Settings & Preferences</DialogTitle>
          <DialogDescription>Customize your dashboard experience</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Notification Settings */}
          <Card className="p-4 bg-background/50 border-border">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Bell className="w-4 h-4 text-accent" />
              Notifications
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label className="flex items-center gap-2 text-sm">
                  <MessageCircle className="w-4 h-4" />
                  Push Notifications
                </Label>
                <Switch
                  checked={settings.pushNotifications}
                  onCheckedChange={() => handleToggle("pushNotifications")}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label className="flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4" />
                  Email Notifications
                </Label>
                <Switch
                  checked={settings.emailNotifications}
                  onCheckedChange={() => handleToggle("emailNotifications")}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label className="text-sm">Webinar Reminders</Label>
                <Switch checked={settings.webinarReminders} onCheckedChange={() => handleToggle("webinarReminders")} />
              </div>
              <div className="flex items-center justify-between">
                <Label className="text-sm">Course Updates</Label>
                <Switch checked={settings.courseUpdates} onCheckedChange={() => handleToggle("courseUpdates")} />
              </div>
            </div>
          </Card>

          {/* Display Settings */}
          <Card className="p-4 bg-background/50 border-border">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Moon className="w-4 h-4 text-accent" />
              Display
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label className="text-sm">Dark Mode</Label>
                <Switch checked={settings.darkMode} onCheckedChange={() => handleToggle("darkMode")} />
              </div>
              <div className="flex items-center justify-between">
                <Label className="flex items-center gap-2 text-sm">
                  <Volume2 className="w-4 h-4" />
                  Sound Effects
                </Label>
                <Switch checked={settings.soundEnabled} onCheckedChange={() => handleToggle("soundEnabled")} />
              </div>
              <div className="flex items-center justify-between">
                <Label className="flex items-center gap-2 text-sm">
                  <Globe className="w-4 h-4" />
                  Language
                </Label>
                <select className="bg-input border border-border text-foreground text-sm px-2 py-1 rounded">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                </select>
              </div>
            </div>
          </Card>

          {/* Security Settings */}
          <Card className="p-4 bg-background/50 border-border">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Lock className="w-4 h-4 text-accent" />
              Security
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label className="text-sm">Two-Factor Authentication</Label>
                <Switch checked={settings.twoFactor} onCheckedChange={() => handleToggle("twoFactor")} />
              </div>
            </div>
          </Card>
        </div>

        <div className="flex gap-3 pt-4">
          <Button className="flex-1 bg-secondary hover:bg-secondary/90" onClick={() => onOpenChange(false)}>
            Save Changes
          </Button>
          <Button variant="outline" className="flex-1 bg-transparent" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

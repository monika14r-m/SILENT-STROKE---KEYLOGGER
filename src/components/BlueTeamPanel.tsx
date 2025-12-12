import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ScrollArea } from './ui/scroll-area';
import { Shield, Monitor, FileSearch, AlertCircle } from 'lucide-react';

const siemAlerts = [
  { id: 1, time: '14:42:15', severity: 'high', message: 'Suspicious process spawned: .sys_daemon', source: 'EDR' },
  { id: 2, time: '14:41:33', severity: 'critical', message: 'Unauthorized file access detected: /etc/shadow', source: 'SIEM' },
  { id: 3, time: '14:40:22', severity: 'medium', message: 'Registry modification detected', source: 'Endpoint Agent' },
  { id: 4, time: '14:38:15', severity: 'high', message: 'Outbound connection to unknown IP: 192.168.1.100', source: 'Firewall' },
];

const endpoints = [
  { id: 1, device: 'DESKTOP-WIN10-01', ip: '10.0.1.45', status: 'monitored', lastSeen: '2 min ago' },
  { id: 2, device: 'LAPTOP-MAC-02', ip: '10.0.1.67', status: 'monitored', lastSeen: '5 min ago' },
  { id: 3, device: 'SERVER-LINUX-01', ip: '10.0.1.100', status: 'alert', lastSeen: '1 min ago' },
];

const forensicLogs = [
  { id: 1, timestamp: '2024-11-05 14:42:15', event: 'File Creation', path: '/tmp/.sys_daemon', hash: 'a4f3e2d1...' },
  { id: 2, timestamp: '2024-11-05 14:40:22', event: 'Registry Write', path: 'HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run', hash: 'b8c4f3a2...' },
  { id: 3, timestamp: '2024-11-05 14:38:15', event: 'Network Connection', path: 'TCP 192.168.1.100:8443', hash: 'c9d5e4b3...' },
];

export function BlueTeamPanel() {
  return (
    <div className="space-y-6">
      {/* SIEM Monitoring */}
      <Card className="bg-white border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h3 className="flex items-center gap-2">
            <Shield className="text-blue-600" size={18} />
            SIEM Integration - Malicious Activity Alerts
          </h3>
        </div>
        <ScrollArea className="h-[250px]">
          <div className="p-4 space-y-2">
            {siemAlerts.map((alert) => (
              <div
                key={alert.id}
                className="p-3 bg-gray-50 border-l-4 border-gray-200 rounded-lg"
                style={{
                  borderLeftColor: 
                    alert.severity === 'critical' ? '#dc2626' :
                    alert.severity === 'high' ? '#f97316' : '#eab308'
                }}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <AlertCircle size={16} className={
                      alert.severity === 'critical' ? 'text-red-600' :
                      alert.severity === 'high' ? 'text-orange-600' : 'text-yellow-600'
                    } />
                    <span className="text-xs text-gray-500">{alert.time}</span>
                  </div>
                  <Badge
                    variant="outline"
                    className={`text-xs ${
                      alert.severity === 'critical'
                        ? 'bg-red-50 text-red-700 border-red-300'
                        : alert.severity === 'high'
                        ? 'bg-orange-50 text-orange-700 border-orange-300'
                        : 'bg-yellow-50 text-yellow-700 border-yellow-300'
                    }`}
                  >
                    {alert.severity}
                  </Badge>
                </div>
                <p className="text-sm text-gray-700 mb-1">{alert.message}</p>
                <p className="text-xs text-gray-500">Source: {alert.source}</p>
              </div>
            ))}
          </div>
        </ScrollArea>
      </Card>

      <div className="grid grid-cols-2 gap-6">
        {/* Endpoint Monitoring */}
        <Card className="bg-white border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <h3 className="flex items-center gap-2">
              <Monitor className="text-green-600" size={18} />
              Endpoint Monitoring
            </h3>
          </div>
          <div className="p-4 space-y-2">
            {endpoints.map((endpoint) => (
              <div key={endpoint.id} className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm">{endpoint.device}</span>
                  <Badge
                    variant="outline"
                    className={`text-xs ${
                      endpoint.status === 'monitored'
                        ? 'bg-green-50 text-green-700 border-green-300'
                        : 'bg-red-50 text-red-700 border-red-300'
                    }`}
                  >
                    {endpoint.status}
                  </Badge>
                </div>
                <p className="text-xs text-gray-500">IP: {endpoint.ip}</p>
                <p className="text-xs text-gray-500">Last seen: {endpoint.lastSeen}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Forensic Section */}
        <Card className="bg-white border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <h3 className="flex items-center gap-2">
              <FileSearch className="text-purple-600" size={18} />
              Digital Forensics & Evidence
            </h3>
          </div>
          <ScrollArea className="h-[250px]">
            <div className="p-4 space-y-2">
              {forensicLogs.map((log) => (
                <div key={log.id} className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs bg-purple-50 text-purple-700 border-purple-300">
                      {log.event}
                    </Badge>
                    <span className="text-xs text-gray-500">{log.timestamp}</span>
                  </div>
                  <p className="text-xs text-gray-600 font-mono mb-1">{log.path}</p>
                  <p className="text-xs text-gray-400">Hash: {log.hash}</p>
                </div>
              ))}
            </div>
          </ScrollArea>
        </Card>
      </div>
    </div>
  );
}
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ScrollArea } from './ui/scroll-area';
import { Shield, CheckCircle2, Network, FileKey } from 'lucide-react';

const auditLogs = [
  { id: 1, timestamp: '2024-11-05 14:42:15.342', action: 'LOG_ENCRYPT', checksum: 'SHA256:a4f3e2d1c8b7...', verified: true },
  { id: 2, timestamp: '2024-11-05 14:41:33.128', action: 'DATA_EXPORT', checksum: 'SHA256:b8c4f3a2d9e6...', verified: true },
  { id: 3, timestamp: '2024-11-05 14:40:22.567', action: 'CONFIG_CHANGE', checksum: 'SHA256:c9d5e4b3f1a8...', verified: true },
  { id: 4, timestamp: '2024-11-05 14:38:15.891', action: 'CAPTURE_START', checksum: 'SHA256:d1e6f5c4a2b9...', verified: true },
  { id: 5, timestamp: '2024-11-05 14:35:42.234', action: 'USER_AUTH', checksum: 'SHA256:e2f7a6d5b3c1...', verified: true },
];

const ipLogs = [
  { id: 1, ip: '192.168.1.100', cert: 'CN=keylogger.local', port: 8443, protocol: 'TLS 1.3', status: 'active' },
  { id: 2, ip: '10.0.1.45', cert: 'CN=control.internal', port: 9000, protocol: 'TLS 1.3', status: 'active' },
  { id: 3, ip: '172.16.0.50', cert: 'CN=backup.secure', port: 8443, protocol: 'TLS 1.2', status: 'standby' },
];

export function SecurityPanel() {
  return (
    <div className="space-y-6">
      {/* Audit Logs */}
      <Card className="bg-white border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h3 className="flex items-center gap-2">
            <Shield className="text-green-600" size={18} />
            Encrypted Audit Logs with Integrity Verification
          </h3>
        </div>
        <ScrollArea className="h-[300px]">
          <div className="p-4 space-y-2">
            {auditLogs.map((log) => (
              <div
                key={log.id}
                className="p-3 bg-gray-50 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-green-600" />
                    <span className="text-xs text-gray-500">{log.timestamp}</span>
                  </div>
                  <Badge
                    variant="outline"
                    className={`text-xs ${
                      log.verified
                        ? 'bg-green-50 text-green-700 border-green-300'
                        : 'bg-red-50 text-red-700 border-red-300'
                    }`}
                  >
                    {log.verified ? 'VERIFIED' : 'FAILED'}
                  </Badge>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-700">{log.action}</p>
                  <p className="text-xs text-gray-400 font-mono">{log.checksum}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </Card>

      <div className="grid grid-cols-2 gap-6">
        {/* Certificate/IP Tracking */}
        <Card className="bg-white border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <h3 className="flex items-center gap-2">
              <Network className="text-blue-600" size={18} />
              Certificate & IP Tracking
            </h3>
          </div>
          <div className="p-4 space-y-2">
            {ipLogs.map((log) => (
              <div key={log.id} className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-mono">{log.ip}:{log.port}</span>
                  <Badge
                    variant="outline"
                    className={`text-xs ${
                      log.status === 'active'
                        ? 'bg-green-50 text-green-700 border-green-300'
                        : 'bg-yellow-50 text-yellow-700 border-yellow-300'
                    }`}
                  >
                    {log.status}
                  </Badge>
                </div>
                <p className="text-xs text-gray-500 mb-1">{log.cert}</p>
                <p className="text-xs text-gray-400">Protocol: {log.protocol}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* User Consent */}
        <Card className="bg-white border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <h3 className="flex items-center gap-2">
              <FileKey className="text-purple-600" size={18} />
              User Consent & Compliance
            </h3>
          </div>
          <div className="p-4 space-y-4">
            <div className="p-4 bg-green-50 border border-green-300 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle2 className="text-green-600" size={20} />
                <span className="text-sm">User Consent Recorded</span>
              </div>
              <p className="text-xs text-gray-500">Timestamp: 2024-11-05 09:15:32</p>
              <p className="text-xs text-gray-500">IP Address: 10.0.1.45</p>
              <p className="text-xs text-gray-500">Signature: 0x4f3a2e1d...</p>
            </div>

            <div className="p-4 bg-green-50 border border-green-300 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle2 className="text-green-600" size={20} />
                <span className="text-sm">Legal Compliance Active</span>
              </div>
              <p className="text-xs text-gray-500">GDPR Compliant: Yes</p>
              <p className="text-xs text-gray-500">Data Retention: 30 days</p>
              <p className="text-xs text-gray-500">Audit Trail: Enabled</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
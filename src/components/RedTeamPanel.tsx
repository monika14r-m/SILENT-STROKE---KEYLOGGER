import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ScrollArea } from './ui/scroll-area';
import { Upload, Database, AlertTriangle } from 'lucide-react';

const simulationLogs = [
  { id: 1, time: '14:32:15', action: 'Modified variant deployed to /tmp/sys_proc', status: 'success' },
  { id: 2, time: '14:33:42', action: 'Exfiltration route established: 192.168.1.100:8443', status: 'success' },
  { id: 3, time: '14:35:18', action: 'Hidden executable created: .sys_daemon', status: 'success' },
  { id: 4, time: '14:37:05', action: 'Unauthorized data access: /etc/shadow', status: 'warning' },
  { id: 5, time: '14:38:22', action: 'Data exfiltration test: 2.4 MB transferred', status: 'success' },
  { id: 6, time: '14:40:11', action: 'Persistence mechanism activated', status: 'success' },
];

export function RedTeamPanel() {
  return (
    <div className="grid grid-cols-2 gap-6">
      {/* Testing Controls */}
      <Card className="bg-white border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h3 className="flex items-center gap-2">
            <AlertTriangle className="text-red-600" size={18} />
            Red Team Testing
          </h3>
        </div>
        <div className="p-4 space-y-3">
          <Button className="w-full bg-red-600 hover:bg-red-700">
            <Upload size={16} className="mr-2" />
            Deploy Modified Variant
          </Button>
          <Button className="w-full bg-orange-600 hover:bg-orange-700">
            <Database size={16} className="mr-2" />
            Exfiltration Test
          </Button>
          <Button className="w-full" variant="outline">
            <AlertTriangle size={16} className="mr-2" />
            Simulate Unauthorized Access
          </Button>
          <Button className="w-full" variant="outline">
            Test Hidden Executable
          </Button>
        </div>

        <div className="p-4 border-t border-gray-200">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Attack Vector</span>
              <span>Process Injection</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Evasion Technique</span>
              <span>Polymorphic Code</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Persistence Method</span>
              <span>Registry Modification</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Simulation Logs */}
      <Card className="bg-white border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h3>Simulation Logs</h3>
        </div>
        <ScrollArea className="h-[400px]">
          <div className="p-4 space-y-2">
            {simulationLogs.map((log) => (
              <div
                key={log.id}
                className="p-3 bg-gray-50 border border-gray-200 rounded-lg"
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="text-xs text-gray-500">{log.time}</span>
                  <Badge
                    variant="outline"
                    className={`text-xs ${
                      log.status === 'success'
                        ? 'bg-green-50 text-green-700 border-green-300'
                        : 'bg-yellow-50 text-yellow-700 border-yellow-300'
                    }`}
                  >
                    {log.status}
                  </Badge>
                </div>
                <p className="text-sm text-gray-700">{log.action}</p>
              </div>
            ))}
          </div>
        </ScrollArea>
      </Card>
    </div>
  );
}
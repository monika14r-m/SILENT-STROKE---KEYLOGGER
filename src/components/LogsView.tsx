import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ScrollArea } from './ui/scroll-area';
import { Input } from './ui/input';
import { Search } from 'lucide-react';

interface LogsViewProps {
  isCapturing: boolean;
}

const mockKeystrokeLogs = [
  { id: 1, time: '14:32:15', window: 'Google Chrome - Login', keys: 'password123', app: 'chrome.exe' },
  { id: 2, time: '14:32:18', window: 'Google Chrome - Login', keys: 'user@email.com', app: 'chrome.exe' },
  { id: 3, time: '14:32:45', window: 'Notepad - Document1', keys: 'Meeting notes: Project deadline...', app: 'notepad.exe' },
  { id: 4, time: '14:33:12', window: 'Slack - #general', keys: 'Hey team, can we discuss the...', app: 'slack.exe' },
  { id: 5, time: '14:33:28', window: 'Windows Terminal', keys: 'sudo apt-get install python3', app: 'wt.exe' },
  { id: 6, time: '14:34:05', window: 'Google Chrome - Admin Panel', keys: 'admin@company.com', app: 'chrome.exe' },
  { id: 7, time: '14:34:22', window: 'Visual Studio Code', keys: 'const apiKey = "sk_test_..."', app: 'code.exe' },
  { id: 8, time: '14:35:01', window: 'Discord - Chat', keys: 'Anyone free for a quick call?', app: 'discord.exe' },
  { id: 9, time: '14:35:34', window: 'Spotify - Settings', keys: 'securePassword!2024', app: 'spotify.exe' },
  { id: 10, time: '14:36:12', window: 'Windows Terminal', keys: 'git commit -m "Update auth"', app: 'wt.exe' },
  { id: 11, time: '14:36:45', window: 'Microsoft Word - Report.docx', keys: 'The quarterly results show...', app: 'winword.exe' },
  { id: 12, time: '14:37:18', window: 'Google Chrome - Gmail', keys: 'Dear Sir, I am writing to...', app: 'chrome.exe' },
];

export function LogsView({ isCapturing }: LogsViewProps) {
  return (
    <div className="p-6 space-y-6 bg-gray-50">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl mb-1">Keystroke Logs</h2>
          <p className="text-sm text-gray-500">Real-time keystroke monitoring and logging</p>
        </div>
        {isCapturing && (
          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-300">
            RECORDING
          </Badge>
        )}
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
        <Input
          placeholder="Search logs..."
          className="pl-10 bg-white border-gray-300"
        />
      </div>

      <Card className="bg-white border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3>Realtime Keystroke Logs</h3>
            <span className="text-xs text-gray-500">{mockKeystrokeLogs.length} entries</span>
          </div>
        </div>
        <ScrollArea className="h-[calc(100vh-300px)]">
          <div className="p-4 space-y-2">
            {mockKeystrokeLogs.map((log) => (
              <div
                key={log.id}
                className="p-4 bg-gray-50 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-500 font-mono">{log.time}</span>
                    <Badge variant="outline" className="text-xs bg-gray-100 border-gray-300">
                      {log.app}
                    </Badge>
                  </div>
                </div>
                <div className="space-y-2">
                  <div>
                    <span className="text-xs text-gray-500">Window Title:</span>
                    <p className="text-sm text-gray-700 mt-1">{log.window}</p>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500">Keys Pressed:</span>
                    <p className="text-sm text-gray-900 font-mono mt-1 p-2 bg-white rounded border border-gray-300">
                      {log.keys}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </Card>
    </div>
  );
}
import { useState } from 'react';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Play, Square, FileDown, FileText } from 'lucide-react';

interface MainPanelProps {
  activeTab: string;
  isCapturing: boolean;
  setIsCapturing: (value: boolean) => void;
}

// Mock keystroke data
const mockKeystrokeLogs = [
  { id: 1, time: '14:32:15', app: 'Chrome', text: 'password123', type: 'credential' },
  { id: 2, time: '14:32:18', app: 'Chrome', text: 'user@email.com', type: 'email' },
  { id: 3, time: '14:32:45', app: 'Notepad', text: 'Meeting notes: Project deadline...', type: 'text' },
  { id: 4, time: '14:33:12', app: 'Slack', text: 'Hey team, can we discuss the...', type: 'text' },
  { id: 5, time: '14:33:28', app: 'Terminal', text: 'sudo apt-get install...', type: 'command' },
  { id: 6, time: '14:34:05', app: 'Chrome', text: 'admin@company.com', type: 'email' },
  { id: 7, time: '14:34:22', app: 'VSCode', text: 'const apiKey = "sk_test_..."', type: 'code' },
  { id: 8, time: '14:35:01', app: 'Discord', text: 'Anyone free for a quick call?', type: 'text' },
  { id: 9, time: '14:35:34', app: 'Chrome', text: 'securePassword!2024', type: 'credential' },
  { id: 10, time: '14:36:12', app: 'Terminal', text: 'git commit -m "Update auth"', type: 'command' },
];

export function MainPanel({ activeTab, isCapturing, setIsCapturing }: MainPanelProps) {
  if (activeTab !== 'logs') {
    return (
      <div className="flex-1 flex items-center justify-center bg-zinc-950">
        <div className="text-center text-zinc-500">
          <p className="mb-2">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} View</p>
          <p className="text-sm">Content for this section</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-zinc-950 p-6 overflow-auto">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Control Buttons */}
        <div className="flex gap-3">
          <Button
            onClick={() => setIsCapturing(!isCapturing)}
            className={`${
              isCapturing
                ? 'bg-red-600 hover:bg-red-700'
                : 'bg-green-600 hover:bg-green-700'
            }`}
          >
            {isCapturing ? (
              <>
                <Square size={16} className="mr-2" />
                Stop Capture
              </>
            ) : (
              <>
                <Play size={16} className="mr-2" />
                Start Capture
              </>
            )}
          </Button>
          <Button variant="outline" className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800">
            <FileText size={16} className="mr-2" />
            Generate Report
          </Button>
          <Button variant="outline" className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800">
            <FileDown size={16} className="mr-2" />
            Export Logs
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Keystroke Logs */}
          <div className="col-span-2">
            <Card className="bg-zinc-900 border-zinc-800">
              <div className="p-4 border-b border-zinc-800">
                <h2 className="flex items-center gap-2">
                  Realtime Keystroke Logs
                  {isCapturing && (
                    <Badge variant="outline" className="bg-red-950 text-red-400 border-red-800">
                      LIVE
                    </Badge>
                  )}
                </h2>
              </div>
              <ScrollArea className="h-[600px]">
                <div className="p-4 space-y-2">
                  {mockKeystrokeLogs.map((log) => (
                    <div
                      key={log.id}
                      className="p-3 bg-zinc-950 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-zinc-500">{log.time}</span>
                          <Badge variant="outline" className="text-xs bg-zinc-800 border-zinc-700">
                            {log.app}
                          </Badge>
                        </div>
                        <Badge
                          variant="outline"
                          className={`text-xs ${
                            log.type === 'credential'
                              ? 'bg-red-950 text-red-400 border-red-800'
                              : log.type === 'email'
                              ? 'bg-blue-950 text-blue-400 border-blue-800'
                              : log.type === 'command'
                              ? 'bg-purple-950 text-purple-400 border-purple-800'
                              : 'bg-zinc-800 text-zinc-400 border-zinc-700'
                          }`}
                        >
                          {log.type}
                        </Badge>
                      </div>
                      <p className="text-sm text-zinc-300 font-mono">{log.text}</p>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </Card>
          </div>

          {/* Screenshot Preview */}
          <div className="col-span-1">
            <Card className="bg-zinc-900 border-zinc-800">
              <div className="p-4 border-b border-zinc-800">
                <h2>Screenshot Preview</h2>
              </div>
              <div className="p-4 space-y-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="aspect-video bg-zinc-950 border border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-700 transition-colors cursor-pointer"
                  >
                    <div className="w-full h-full flex flex-col items-center justify-center text-zinc-600">
                      <div className="w-16 h-16 bg-zinc-800 rounded-lg flex items-center justify-center mb-2">
                        <span className="text-2xl">📸</span>
                      </div>
                      <p className="text-xs">Screenshot {i}</p>
                      <p className="text-xs text-zinc-700">14:3{i}:00</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

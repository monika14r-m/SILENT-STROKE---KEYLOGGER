import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Camera } from 'lucide-react';

const screenshots = [
  { id: 1, time: '14:31:00', title: 'Chrome - Login Page', size: '1.2 MB' },
  { id: 2, time: '14:32:15', title: 'Notepad - Document', size: '856 KB' },
  { id: 3, time: '14:33:42', title: 'Slack - General Channel', size: '1.5 MB' },
  { id: 4, time: '14:34:28', title: 'Terminal - Commands', size: '742 KB' },
  { id: 5, time: '14:35:55', title: 'VS Code - Editor', size: '1.8 MB' },
  { id: 6, time: '14:37:12', title: 'Discord - Chat', size: '1.1 MB' },
  { id: 7, time: '14:38:30', title: 'Chrome - Admin Panel', size: '1.4 MB' },
  { id: 8, time: '14:39:45', title: 'Word - Report', size: '923 KB' },
];

export function ScreenshotsView() {
  return (
    <div className="p-6 space-y-6 bg-gray-50">
      <div>
        <h2 className="text-2xl mb-1">Screenshot Gallery</h2>
        <p className="text-sm text-gray-500">Captured screenshots from monitored sessions</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {screenshots.map((screenshot) => (
          <Card
            key={screenshot.id}
            className="bg-white border-gray-200 overflow-hidden hover:border-gray-300 transition-colors cursor-pointer group"
          >
            <div className="aspect-video bg-gray-100 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200/50 to-gray-100/50" />
              <Camera className="text-gray-300 group-hover:text-gray-400 transition-colors" size={32} />
              <Badge
                variant="outline"
                className="absolute top-2 right-2 text-xs bg-white/80 border-gray-300"
              >
                {screenshot.time}
              </Badge>
            </div>
            <div className="p-3">
              <p className="text-sm text-gray-700 mb-1 truncate">{screenshot.title}</p>
              <p className="text-xs text-gray-500">{screenshot.size}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
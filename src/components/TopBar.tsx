import { Shield, Play, Square, FileText } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface TopBarProps {
  isCapturing: boolean;
  setIsCapturing: (value: boolean) => void;
  systemStatus: 'active' | 'inactive';
  setSystemStatus: (status: 'active' | 'inactive') => void;
}

export function TopBar({ isCapturing, setIsCapturing, systemStatus }: TopBarProps) {
  return (
    <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      <div className="flex items-center gap-3">
        <Shield className="text-red-600" size={24} />
        <h1 className="text-xl">Keylogger Dashboard</h1>
        <Badge 
          variant="outline" 
          className={`ml-3 ${
            systemStatus === 'active' 
              ? 'bg-green-50 text-green-700 border-green-300' 
              : 'bg-gray-100 text-gray-600 border-gray-300'
          }`}
        >
          System Status: {systemStatus === 'active' ? 'Active' : 'Inactive'}
        </Badge>
      </div>

      <div className="flex gap-2">
        <Button
          onClick={() => setIsCapturing(true)}
          disabled={isCapturing}
          size="sm"
          className="bg-green-600 hover:bg-green-700 disabled:opacity-50"
        >
          <Play size={14} className="mr-1" />
          Start Capture
        </Button>
        <Button
          onClick={() => setIsCapturing(false)}
          disabled={!isCapturing}
          size="sm"
          className="bg-red-600 hover:bg-red-700 disabled:opacity-50"
        >
          <Square size={14} className="mr-1" />
          Stop Capture
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="bg-white border-gray-300 hover:bg-gray-50"
        >
          <FileText size={14} className="mr-1" />
          Generate Report
        </Button>
      </div>
    </div>
  );
}
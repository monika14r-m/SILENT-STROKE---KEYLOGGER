import { Circle, Check } from 'lucide-react';

interface StatusBarProps {
  isCapturing: boolean;
}

export function StatusBar({ isCapturing }: StatusBarProps) {
  const currentTime = new Date().toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit' 
  });

  return (
    <div className="h-10 bg-gray-50 border-t border-gray-200 flex items-center justify-between px-6 text-xs text-gray-600">
      <div className="flex items-center gap-4">
        <span>Last Sync: Today {currentTime}</span>
        
        <div className="w-px h-4 bg-gray-300" />
        
        <div className="flex items-center gap-2">
          <Check size={14} className="text-green-600" />
          <span>User Consent Status: ✅</span>
        </div>
        
        <div className="w-px h-4 bg-gray-300" />
        
        <div className="flex items-center gap-2">
          <Check size={14} className="text-green-600" />
          <span>Legal Compliance: ✅</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Circle
          size={8}
          className={`${
            isCapturing ? 'fill-green-600 text-green-600' : 'fill-gray-400 text-gray-400'
          }`}
        />
        <span>{isCapturing ? 'Capturing' : 'Paused'}</span>
      </div>
    </div>
  );
}
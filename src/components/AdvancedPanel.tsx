import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Switch } from './ui/switch';
import { Label } from './ui/label';
import { useState } from 'react';
import { Code2, Monitor, Power, Key, RefreshCw } from 'lucide-react';

export function AdvancedPanel() {
  const [selectedPlatform, setSelectedPlatform] = useState<'windows' | 'linux' | 'macos'>('windows');
  const [autoRun, setAutoRun] = useState(true);
  const [encryptionKey, setEncryptionKey] = useState('AES256:a4f3e2d1c8b7f6a5...');

  const regenerateKey = () => {
    const randomKey = 'AES256:' + Math.random().toString(36).substring(2, 15) + '...';
    setEncryptionKey(randomKey);
  };

  return (
    <div className="grid grid-cols-2 gap-6">
      {/* Metamorphic Code Section */}
      <Card className="bg-white border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h3 className="flex items-center gap-2">
            <Code2 className="text-purple-600" size={18} />
            Metamorphic Code Visualization
          </h3>
        </div>
        <div className="p-4 space-y-3">
          <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-500">Code Variant</span>
              <Badge variant="outline" className="text-xs bg-purple-50 text-purple-700 border-purple-300">
                v3.42a
              </Badge>
            </div>
            <p className="text-xs font-mono text-gray-600">
              def obf_6a2x(): exec(b64decode('aW1wb3J0IG9z...'))
            </p>
          </div>

          <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-500">Mutation Rate</span>
              <Badge variant="outline" className="text-xs">
                87%
              </Badge>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-purple-600" style={{ width: '87%' }} />
            </div>
          </div>

          <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
            <div className="space-y-1">
              <p className="text-xs text-gray-500">Dynamic Adaptations:</p>
              <p className="text-xs text-gray-600">• Function name randomization</p>
              <p className="text-xs text-gray-600">• Variable obfuscation</p>
              <p className="text-xs text-gray-600">• Control flow flattening</p>
              <p className="text-xs text-gray-600">• String encryption</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Cross-Platform Compatibility */}
      <Card className="bg-white border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h3 className="flex items-center gap-2">
            <Monitor className="text-blue-600" size={18} />
            Cross-Platform Compatibility
          </h3>
        </div>
        <div className="p-4 space-y-3">
          <div className="flex gap-2">
            <Button
              onClick={() => setSelectedPlatform('windows')}
              variant={selectedPlatform === 'windows' ? 'default' : 'outline'}
              className={`flex-1 ${
                selectedPlatform === 'windows' 
                  ? 'bg-blue-600 hover:bg-blue-700' 
                  : 'bg-white border-gray-300'
              }`}
            >
              Windows
            </Button>
            <Button
              onClick={() => setSelectedPlatform('linux')}
              variant={selectedPlatform === 'linux' ? 'default' : 'outline'}
              className={`flex-1 ${
                selectedPlatform === 'linux' 
                  ? 'bg-blue-600 hover:bg-blue-700' 
                  : 'bg-white border-gray-300'
              }`}
            >
              Linux
            </Button>
            <Button
              onClick={() => setSelectedPlatform('macos')}
              variant={selectedPlatform === 'macos' ? 'default' : 'outline'}
              className={`flex-1 ${
                selectedPlatform === 'macos' 
                  ? 'bg-blue-600 hover:bg-blue-700' 
                  : 'bg-white border-gray-300'
              }`}
            >
              macOS
            </Button>
          </div>

          <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
            <p className="text-xs text-gray-500 mb-2">Platform: {selectedPlatform.toUpperCase()}</p>
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600">Kernel Hooks</span>
                <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-300">
                  Compatible
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600">Input Capture</span>
                <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-300">
                  Compatible
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600">Screenshot API</span>
                <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-300">
                  Compatible
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600">Network Stack</span>
                <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-300">
                  Compatible
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Auto-Execution */}
      <Card className="bg-white border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h3 className="flex items-center gap-2">
            <Power className="text-orange-600" size={18} />
            Auto-Execution Settings
          </h3>
        </div>
        <div className="p-4 space-y-4">
          <div className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200 rounded-lg">
            <div>
              <Label htmlFor="auto-run" className="text-sm">Auto-Run on System Boot</Label>
              <p className="text-xs text-gray-500 mt-1">Start capture automatically when system starts</p>
            </div>
            <Switch
              id="auto-run"
              checked={autoRun}
              onCheckedChange={setAutoRun}
            />
          </div>

          <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
            <p className="text-xs text-gray-500 mb-2">Persistence Mechanisms:</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${autoRun ? 'bg-green-600' : 'bg-gray-300'}`} />
                <span className="text-xs text-gray-600">Registry Run Key (Windows)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${autoRun ? 'bg-green-600' : 'bg-gray-300'}`} />
                <span className="text-xs text-gray-600">Systemd Service (Linux)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${autoRun ? 'bg-green-600' : 'bg-gray-300'}`} />
                <span className="text-xs text-gray-600">LaunchAgent (macOS)</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Dynamic Encryption */}
      <Card className="bg-white border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h3 className="flex items-center gap-2">
            <Key className="text-green-600" size={18} />
            Dynamic Encryption
          </h3>
        </div>
        <div className="p-4 space-y-3">
          <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
            <p className="text-xs text-gray-500 mb-2">Current Encryption Key:</p>
            <p className="text-xs font-mono text-gray-700 break-all">{encryptionKey}</p>
          </div>

          <Button
            onClick={regenerateKey}
            className="w-full bg-green-600 hover:bg-green-700"
          >
            <RefreshCw size={16} className="mr-2" />
            Regenerate Encryption Key
          </Button>

          <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Algorithm</span>
                <span className="text-gray-700">AES-256-GCM</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Key Rotation</span>
                <span className="text-gray-700">Every 24 hours</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">IV Generation</span>
                <span className="text-gray-700">Random (per session)</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Key Derivation</span>
                <span className="text-gray-700">PBKDF2-HMAC-SHA256</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { RedTeamPanel } from './RedTeamPanel';
import { BlueTeamPanel } from './BlueTeamPanel';
import { SecurityPanel } from './SecurityPanel';
import { AdvancedPanel } from './AdvancedPanel';
import { Activity, Shield, Lock, Zap } from 'lucide-react';

interface DashboardViewProps {
  isCapturing: boolean;
}

export function DashboardView({ isCapturing }: DashboardViewProps) {
  return (
    <div className="p-6 space-y-6 bg-gray-50">
      {/* Stats Overview */}
      <div className="grid grid-cols-4 gap-4">
        <Card className="bg-white border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 mb-1">Keystrokes Today</p>
              <p className="text-2xl">12,847</p>
            </div>
            <Activity className="text-red-600" size={24} />
          </div>
        </Card>
        
        <Card className="bg-white border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 mb-1">Screenshots</p>
              <p className="text-2xl">342</p>
            </div>
            <Shield className="text-blue-600" size={24} />
          </div>
        </Card>
        
        <Card className="bg-white border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 mb-1">Security Events</p>
              <p className="text-2xl">8</p>
            </div>
            <Lock className="text-yellow-600" size={24} />
          </div>
        </Card>
        
        <Card className="bg-white border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 mb-1">Active Sessions</p>
              <p className="text-2xl">3</p>
            </div>
            <Zap className="text-green-600" size={24} />
          </div>
        </Card>
      </div>

      {/* Main Tabs */}
      <Tabs defaultValue="redteam" className="space-y-4">
        <TabsList className="bg-white border border-gray-200">
          <TabsTrigger value="redteam" className="data-[state=active]:bg-red-50 data-[state=active]:text-red-700">
            Red Team (Attackers)
          </TabsTrigger>
          <TabsTrigger value="blueteam" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">
            Blue Team (Defenders)
          </TabsTrigger>
          <TabsTrigger value="security" className="data-[state=active]:bg-purple-50 data-[state=active]:text-purple-700">
            Security & Traceability
          </TabsTrigger>
          <TabsTrigger value="advanced" className="data-[state=active]:bg-orange-50 data-[state=active]:text-orange-700">
            Advanced Functionality
          </TabsTrigger>
        </TabsList>

        <TabsContent value="redteam">
          <RedTeamPanel />
        </TabsContent>

        <TabsContent value="blueteam">
          <BlueTeamPanel />
        </TabsContent>

        <TabsContent value="security">
          <SecurityPanel />
        </TabsContent>

        <TabsContent value="advanced">
          <AdvancedPanel />
        </TabsContent>
      </Tabs>
    </div>
  );
}
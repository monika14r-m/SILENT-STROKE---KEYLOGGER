import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { FileText, Download, Calendar, FileBarChart } from 'lucide-react';

const recentReports = [
  { id: 1, date: '2024-11-05', title: 'Daily Activity Report', entries: 12847, size: '4.2 MB', status: 'ready' },
  { id: 2, date: '2024-11-04', title: 'Daily Activity Report', entries: 11234, size: '3.8 MB', status: 'ready' },
  { id: 3, date: '2024-11-03', title: 'Weekly Summary Report', entries: 78456, size: '24.5 MB', status: 'ready' },
  { id: 4, date: '2024-11-01', title: 'Monthly Analysis', entries: 324567, size: '98.3 MB', status: 'ready' },
];

export function ReportsView() {
  return (
    <div className="p-6 space-y-6 bg-gray-50">
      <div>
        <h2 className="text-2xl mb-1">Reports & Export</h2>
        <p className="text-sm text-gray-500">Generate and download activity reports</p>
      </div>

      {/* Generate Report Section */}
      <Card className="bg-white border-gray-200">
        <div className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="mb-2">Generate New Report</h3>
              <p className="text-sm text-gray-500 mb-6">
                Export logs, screenshots, and system status for analysis and documentation.
              </p>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                  <p className="text-xs text-gray-500 mb-2">Report Type</p>
                  <select className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-sm">
                    <option>Daily Activity</option>
                    <option>Weekly Summary</option>
                    <option>Monthly Analysis</option>
                    <option>Custom Range</option>
                  </select>
                </div>
                
                <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                  <p className="text-xs text-gray-500 mb-2">Format</p>
                  <select className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-sm">
                    <option>PDF</option>
                    <option>CSV</option>
                    <option>JSON</option>
                    <option>HTML</option>
                  </select>
                </div>
                
                <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                  <p className="text-xs text-gray-500 mb-2">Include</p>
                  <div className="space-y-2 text-sm">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-xs">Keystrokes</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-xs">Screenshots</span>
                    </label>
                  </div>
                </div>
              </div>

              <Button className="bg-red-600 hover:bg-red-700">
                <FileBarChart size={16} className="mr-2" />
                Generate Report
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Recent Reports */}
      <Card className="bg-white border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h3>Recent Reports</h3>
        </div>
        <div className="p-4 space-y-2">
          {recentReports.map((report) => (
            <div
              key={report.id}
              className="p-4 bg-gray-50 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                    <FileText size={20} className="text-gray-500" />
                  </div>
                  <div>
                    <h4 className="text-sm mb-1">{report.title}</h4>
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {report.date}
                      </span>
                      <span>{report.entries.toLocaleString()} entries</span>
                      <span>{report.size}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-300">
                    {report.status}
                  </Badge>
                  <Button size="sm" variant="outline" className="bg-white border-gray-300">
                    <Download size={14} className="mr-1" />
                    Download
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
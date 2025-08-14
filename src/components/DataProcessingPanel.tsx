// Data Processing & Pipeline Management Panel
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Database, Code, BarChart3, RefreshCw, CheckCircle, AlertCircle, 
  Clock, Play, Pause, Settings, FileText, Download
} from "lucide-react";

// Mock data processing pipeline status
const pythonJobs = [
  {
    id: 'py001',
    name: 'Demand Forecasting Model',
    status: 'running',
    progress: 75,
    eta: '2 min remaining',
    lastRun: '5 min ago',
    script: 'demand_forecast.py',
    accuracy: 89.2
  },
  {
    id: 'py002',
    name: 'Inventory Optimization',
    status: 'completed',
    progress: 100,
    eta: 'Completed',
    lastRun: '15 min ago',
    script: 'inventory_optimizer.py',
    accuracy: 94.1
  },
  {
    id: 'py003',
    name: 'Expiration Risk Analysis',
    status: 'scheduled',
    progress: 0,
    eta: 'Starting in 10 min',
    lastRun: '1 hour ago',
    script: 'expiration_risk.py',
    accuracy: 91.8
  }
];

const rJobs = [
  {
    id: 'r001',
    name: 'Statistical Quality Control',
    status: 'running',
    progress: 60,
    eta: '3 min remaining',
    lastRun: '2 min ago',
    script: 'quality_control.R',
    pValue: 0.001
  },
  {
    id: 'r002',
    name: 'Seasonal Decomposition',
    status: 'completed',
    progress: 100,
    eta: 'Completed',
    lastRun: '30 min ago',
    script: 'seasonal_analysis.R',
    pValue: 0.02
  }
];

const sqlJobs = [
  {
    id: 'sql001',
    name: 'ETL Data Pipeline',
    status: 'completed',
    progress: 100,
    recordsProcessed: 45620,
    lastRun: '1 hour ago',
    query: 'inventory_etl_pipeline.sql',
    executionTime: '2.3s'
  },
  {
    id: 'sql002',
    name: 'Aggregated Metrics',
    status: 'running',
    progress: 45,
    recordsProcessed: 12890,
    lastRun: 'Running now',
    query: 'metrics_aggregation.sql',
    executionTime: '1.8s'
  }
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'running': return <RefreshCw className="h-4 w-4 animate-spin text-primary" />;
    case 'completed': return <CheckCircle className="h-4 w-4 text-success" />;
    case 'scheduled': return <Clock className="h-4 w-4 text-warning" />;
    case 'error': return <AlertCircle className="h-4 w-4 text-destructive" />;
    default: return <Clock className="h-4 w-4 text-muted-foreground" />;
  }
};

const getStatusVariant = (status: string) => {
  switch (status) {
    case 'running': return 'default';
    case 'completed': return 'success';
    case 'scheduled': return 'warning';
    case 'error': return 'destructive';
    default: return 'secondary';
  }
};

export const DataProcessingPanel = () => {
  return (
    <Card className="bg-gradient-to-br from-card to-card/50 shadow-[var(--shadow-card)]">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Database className="h-5 w-5 text-primary" />
          Data Processing Pipeline
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Real-time analytics processing • Python, R & SQL integration
        </p>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="python" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="python" className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              Python
            </TabsTrigger>
            <TabsTrigger value="r" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              R
            </TabsTrigger>
            <TabsTrigger value="sql" className="flex items-center gap-2">
              <Database className="h-4 w-4" />
              SQL
            </TabsTrigger>
            <TabsTrigger value="tableau" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Tableau
            </TabsTrigger>
          </TabsList>

          {/* Python Jobs */}
          <TabsContent value="python" className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold">Machine Learning Models</h4>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  <Play className="h-4 w-4 mr-2" />
                  Run All
                </Button>
                <Button size="sm" variant="outline">
                  <Settings className="h-4 w-4 mr-2" />
                  Configure
                </Button>
              </div>
            </div>
            
            {pythonJobs.map((job) => (
              <div key={job.id} className="p-4 bg-muted/20 rounded-lg border border-border/30">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(job.status)}
                    <div>
                      <div className="font-medium">{job.name}</div>
                      <div className="text-sm text-muted-foreground">{job.script}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={getStatusVariant(job.status) as any}>
                      {job.status}
                    </Badge>
                    <Button size="sm" variant="ghost">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Progress value={job.progress} className="h-2" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{job.eta}</span>
                    <span>Last run: {job.lastRun}</span>
                  </div>
                  <div className="text-xs text-success">
                    Model Accuracy: {job.accuracy}%
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>

          {/* R Jobs */}
          <TabsContent value="r" className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold">Statistical Analysis</h4>
              <Button size="sm" variant="outline">
                <Play className="h-4 w-4 mr-2" />
                Execute Scripts
              </Button>
            </div>
            
            {rJobs.map((job) => (
              <div key={job.id} className="p-4 bg-muted/20 rounded-lg border border-border/30">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(job.status)}
                    <div>
                      <div className="font-medium">{job.name}</div>
                      <div className="text-sm text-muted-foreground">{job.script}</div>
                    </div>
                  </div>
                  <Badge variant={getStatusVariant(job.status) as any}>
                    {job.status}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <Progress value={job.progress} className="h-2" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{job.eta}</span>
                    <span>p-value: {job.pValue}</span>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>

          {/* SQL Jobs */}
          <TabsContent value="sql" className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold">Data Pipeline</h4>
              <Button size="sm" variant="outline">
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh Data
              </Button>
            </div>
            
            {sqlJobs.map((job) => (
              <div key={job.id} className="p-4 bg-muted/20 rounded-lg border border-border/30">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(job.status)}
                    <div>
                      <div className="font-medium">{job.name}</div>
                      <div className="text-sm text-muted-foreground">{job.query}</div>
                    </div>
                  </div>
                  <Badge variant={getStatusVariant(job.status) as any}>
                    {job.status}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <Progress value={job.progress} className="h-2" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{job.recordsProcessed.toLocaleString()} records</span>
                    <span>Execution: {job.executionTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>

          {/* Tableau Integration */}
          <TabsContent value="tableau" className="space-y-4">
            <div className="p-6 text-center bg-muted/20 rounded-lg border-2 border-dashed border-border">
              <FileText className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Tableau Integration</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Connect to Tableau Server for advanced visualization and reporting
              </p>
              <div className="space-y-2">
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Export Data Extract (.hyper)
                </Button>
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4 mr-2" />
                  Configure Connection
                </Button>
              </div>
              
              <div className="mt-6 p-4 bg-card rounded-lg">
                <div className="text-sm">
                  <div className="font-medium mb-2">Available Tableau Workbooks:</div>
                  <div className="space-y-1 text-muted-foreground">
                    <div>• Supply Chain Executive Dashboard</div>
                    <div>• Inventory Analytics Deep Dive</div>
                    <div>• Predictive Modeling Results</div>
                    <div>• Cost Analysis & Variance Reports</div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
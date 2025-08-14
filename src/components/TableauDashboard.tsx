// Tableau-style Advanced Analytics Dashboard
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  LineChart, Line, BarChart, Bar, AreaChart, Area, ScatterChart, Scatter,
  XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend, Tooltip,
  PieChart, Pie, Cell, ComposedChart, ReferenceLine
} from "recharts";
import { TrendingUp, TrendingDown, AlertTriangle, Download, Filter } from "lucide-react";

// Advanced analytics data (simulating Tableau-level complexity)
const demandForecastData = [
  { month: "Jan", actual: 1240, predicted: 1180, upper_ci: 1320, lower_ci: 1040, accuracy: 92 },
  { month: "Feb", actual: 1380, predicted: 1420, upper_ci: 1560, lower_ci: 1280, accuracy: 94 },
  { month: "Mar", actual: 1560, predicted: 1520, upper_ci: 1680, lower_ci: 1360, accuracy: 89 },
  { month: "Apr", actual: 1420, predicted: 1480, upper_ci: 1620, lower_ci: 1340, accuracy: 91 },
  { month: "May", actual: 1680, predicted: 1640, upper_ci: 1780, lower_ci: 1500, accuracy: 88 },
  { month: "Jun", actual: 1720, predicted: 1780, upper_ci: 1920, lower_ci: 1640, accuracy: 90 },
  { month: "Jul", actual: 0, predicted: 1820, upper_ci: 1960, lower_ci: 1680, accuracy: null },
  { month: "Aug", actual: 0, predicted: 1900, upper_ci: 2040, lower_ci: 1760, accuracy: null },
  { month: "Sep", actual: 0, predicted: 1850, upper_ci: 1990, lower_ci: 1710, accuracy: null }
];

const inventoryTurnoverData = [
  { department: "Emergency", current: 12.5, target: 10.0, efficiency: 125 },
  { department: "Surgery", current: 8.2, target: 9.0, efficiency: 91 },
  { department: "ICU", current: 15.8, target: 12.0, efficiency: 132 },
  { department: "Cardiology", current: 6.8, target: 8.0, efficiency: 85 },
  { department: "Pharmacy", current: 18.2, target: 15.0, efficiency: 121 },
  { department: "Radiology", current: 4.5, target: 6.0, efficiency: 75 }
];

const costAnalysisData = [
  { category: "PPE", budget: 250000, actual: 218000, variance: -32000, trend: "decreasing" },
  { category: "Pharmaceuticals", budget: 480000, actual: 520000, variance: 40000, trend: "increasing" },
  { category: "Surgical", budget: 180000, actual: 165000, variance: -15000, trend: "stable" },
  { category: "Consumables", budget: 120000, actual: 135000, variance: 15000, trend: "increasing" },
  { category: "Equipment", budget: 320000, actual: 298000, variance: -22000, trend: "decreasing" }
];

const riskAssessmentData = [
  { item: "Ventilator Filters", risk_score: 0.89, days_to_stockout: 3, impact: "Critical", probability: 0.92 },
  { item: "IV Fluid Bags", risk_score: 0.76, days_to_stockout: 7, impact: "High", probability: 0.84 },
  { item: "Surgical Masks", risk_score: 0.45, days_to_stockout: 14, impact: "Medium", probability: 0.68 },
  { item: "Blood Glucose Strips", risk_score: 0.38, days_to_stockout: 21, impact: "Medium", probability: 0.55 },
  { item: "Bed Linens", risk_score: 0.22, days_to_stockout: 35, impact: "Low", probability: 0.41 }
];

const COLORS = ['hsl(var(--primary))', 'hsl(var(--success))', 'hsl(var(--warning))', 'hsl(var(--destructive))', 'hsl(var(--medical-amber))'];

export const TableauDashboard = () => {
  return (
    <div className="space-y-6">
      {/* Dashboard Controls */}
      <Card className="bg-gradient-to-r from-card to-card/50 shadow-[var(--shadow-card)]">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-bold text-foreground">Advanced Supply Chain Analytics</CardTitle>
            <div className="flex items-center gap-2">
              <Select defaultValue="30">
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Time Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7">7 Days</SelectItem>
                  <SelectItem value="30">30 Days</SelectItem>
                  <SelectItem value="90">90 Days</SelectItem>
                  <SelectItem value="365">1 Year</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      <Tabs defaultValue="forecasting" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="forecasting">Demand Forecasting</TabsTrigger>
          <TabsTrigger value="optimization">Inventory Optimization</TabsTrigger>
          <TabsTrigger value="financial">Financial Analysis</TabsTrigger>
          <TabsTrigger value="risk">Risk Assessment</TabsTrigger>
        </TabsList>

        {/* Demand Forecasting Tab */}
        <TabsContent value="forecasting" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="lg:col-span-2 bg-gradient-to-br from-card to-card/50 shadow-[var(--shadow-card)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-success" />
                  ML-Powered Demand Prediction with Confidence Intervals
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Random Forest model with 89% accuracy • Updated every 6 hours
                </p>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <ComposedChart data={demandForecastData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }}
                    />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="upper_ci"
                      stackId="1"
                      stroke="none"
                      fill="hsl(var(--success))"
                      fillOpacity={0.1}
                      name="Confidence Interval"
                    />
                    <Area
                      type="monotone"
                      dataKey="lower_ci"
                      stackId="1"
                      stroke="none"
                      fill="hsl(var(--card))"
                      fillOpacity={1}
                    />
                    <Line
                      type="monotone"
                      dataKey="actual"
                      stroke="hsl(var(--primary))"
                      strokeWidth={3}
                      name="Actual Demand"
                      dot={{ fill: "hsl(var(--primary))", strokeWidth: 2 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="predicted"
                      stroke="hsl(var(--success))"
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      name="ML Prediction"
                      dot={{ fill: "hsl(var(--success))" }}
                    />
                    <ReferenceLine y={1600} stroke="hsl(var(--warning))" strokeDasharray="8 8" label="Capacity Limit" />
                  </ComposedChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Model Performance Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-gradient-to-br from-success/10 to-success/5">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-success">89.2%</div>
                <div className="text-sm text-muted-foreground">Model Accuracy</div>
                <div className="text-xs text-success mt-1">↗ +2.1% vs last month</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-primary">$284K</div>
                <div className="text-sm text-muted-foreground">Cost Savings</div>
                <div className="text-xs text-primary mt-1">YTD from predictions</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-medical-amber/10 to-medical-amber/5">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-medical-amber">12 hrs</div>
                <div className="text-sm text-muted-foreground">Forecast Horizon</div>
                <div className="text-xs text-medical-amber mt-1">Next model update</div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Inventory Optimization Tab */}
        <TabsContent value="optimization" className="space-y-6">
          <Card className="bg-gradient-to-br from-card to-card/50 shadow-[var(--shadow-card)]">
            <CardHeader>
              <CardTitle>Inventory Turnover Analysis by Department</CardTitle>
              <p className="text-sm text-muted-foreground">
                EOQ model optimization • Target vs Actual performance
              </p>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <ComposedChart data={inventoryTurnoverData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="department" 
                    angle={-45}
                    textAnchor="end"
                    height={100}
                    stroke="hsl(var(--muted-foreground))"
                  />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="current" fill="hsl(var(--primary))" name="Current Turnover" />
                  <Bar dataKey="target" fill="hsl(var(--success))" name="Target Turnover" opacity={0.7} />
                  <Line 
                    type="monotone" 
                    dataKey="efficiency" 
                    stroke="hsl(var(--medical-amber))" 
                    strokeWidth={3}
                    name="Efficiency %"
                    yAxisId="right"
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Financial Analysis Tab */}
        <TabsContent value="financial" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-card to-card/50 shadow-[var(--shadow-card)]">
              <CardHeader>
                <CardTitle>Budget vs Actual Spending</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={costAnalysisData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="category" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip />
                    <Bar dataKey="budget" fill="hsl(var(--muted))" name="Budget" />
                    <Bar dataKey="actual" fill="hsl(var(--primary))" name="Actual" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card to-card/50 shadow-[var(--shadow-card)]">
              <CardHeader>
                <CardTitle>Cost Variance Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {costAnalysisData.map((item, index) => (
                    <div key={item.category} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                      <div>
                        <div className="font-medium">{item.category}</div>
                        <div className="text-sm text-muted-foreground">
                          ${item.actual.toLocaleString()} / ${item.budget.toLocaleString()}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={item.variance > 0 ? "destructive" : "success"}>
                          {item.variance > 0 ? '+' : ''}${item.variance.toLocaleString()}
                        </Badge>
                        {item.trend === 'increasing' ? (
                          <TrendingUp className="h-4 w-4 text-destructive" />
                        ) : item.trend === 'decreasing' ? (
                          <TrendingDown className="h-4 w-4 text-success" />
                        ) : (
                          <div className="h-4 w-4" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Risk Assessment Tab */}
        <TabsContent value="risk" className="space-y-6">
          <Card className="bg-gradient-to-br from-card to-card/50 shadow-[var(--shadow-card)]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-warning" />
                AI Risk Assessment Matrix
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Probability vs Impact analysis • Machine learning risk scoring
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <ResponsiveContainer width="100%" height={300}>
                  <ScatterChart data={riskAssessmentData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis 
                      dataKey="probability" 
                      domain={[0, 1]}
                      stroke="hsl(var(--muted-foreground))"
                      label={{ value: 'Probability', position: 'insideBottom', offset: -5 }}
                    />
                    <YAxis 
                      dataKey="risk_score" 
                      domain={[0, 1]}
                      stroke="hsl(var(--muted-foreground))"
                      label={{ value: 'Risk Score', angle: -90, position: 'insideLeft' }}
                    />
                    <Tooltip
                      content={({ payload }) => {
                        if (payload && payload[0]) {
                          const data = payload[0].payload;
                          return (
                            <div className="bg-card p-3 border rounded-lg shadow-lg">
                              <div className="font-semibold">{data.item}</div>
                              <div className="text-sm">Risk Score: {(data.risk_score * 100).toFixed(1)}%</div>
                              <div className="text-sm">Days to Stockout: {data.days_to_stockout}</div>
                              <div className="text-sm">Impact: {data.impact}</div>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Scatter dataKey="risk_score" fill="hsl(var(--destructive))" />
                  </ScatterChart>
                </ResponsiveContainer>

                <div className="space-y-3">
                  <h4 className="font-semibold">High-Risk Items</h4>
                  {riskAssessmentData
                    .filter(item => item.risk_score > 0.7)
                    .map((item, index) => (
                      <div key={index} className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div className="font-medium text-destructive">{item.item}</div>
                          <Badge variant="destructive">{item.impact}</Badge>
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">
                          {item.days_to_stockout} days to potential stockout
                        </div>
                        <div className="text-sm text-destructive mt-1">
                          Risk Score: {(item.risk_score * 100).toFixed(1)}%
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
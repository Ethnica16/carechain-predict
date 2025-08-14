import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from "recharts";

const demandData = [
  { month: "Jan", actual: 120, predicted: 115, optimal: 110 },
  { month: "Feb", actual: 135, predicted: 140, optimal: 125 },
  { month: "Mar", actual: 160, predicted: 155, optimal: 145 },
  { month: "Apr", actual: 175, predicted: 180, optimal: 165 },
  { month: "May", actual: 190, predicted: 185, optimal: 175 },
  { month: "Jun", actual: 210, predicted: 215, optimal: 200 },
  { month: "Jul", actual: 0, predicted: 225, optimal: 210 },
  { month: "Aug", actual: 0, predicted: 240, optimal: 220 },
  { month: "Sep", actual: 0, predicted: 235, optimal: 215 },
];

export const DemandChart = () => {
  return (
    <Card className="bg-gradient-to-br from-card to-card/50 shadow-[var(--shadow-card)]">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">AI Demand Prediction</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={demandData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="month" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="actual" 
              stroke="hsl(var(--primary))" 
              strokeWidth={2}
              name="Actual Demand"
              dot={{ fill: "hsl(var(--primary))" }}
            />
            <Line 
              type="monotone" 
              dataKey="predicted" 
              stroke="hsl(var(--success))" 
              strokeWidth={2}
              strokeDasharray="5 5"
              name="AI Prediction"
              dot={{ fill: "hsl(var(--success))" }}
            />
            <Line 
              type="monotone" 
              dataKey="optimal" 
              stroke="hsl(var(--medical-amber))" 
              strokeWidth={2}
              name="Optimal Stock"
              dot={{ fill: "hsl(var(--medical-amber))" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
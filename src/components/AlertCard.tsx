import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Clock, Package } from "lucide-react";

interface AlertItem {
  id: string;
  type: "expiring" | "stockout" | "overstock";
  item: string;
  department: string;
  severity: "high" | "medium" | "low";
  timeframe: string;
  quantity?: number;
}

interface AlertCardProps {
  alerts: AlertItem[];
}

export const AlertCard = ({ alerts }: AlertCardProps) => {
  const getAlertIcon = (type: AlertItem["type"]) => {
    switch (type) {
      case "expiring":
        return Clock;
      case "stockout":
        return AlertTriangle;
      case "overstock":
        return Package;
      default:
        return AlertTriangle;
    }
  };

  const getAlertColor = (severity: AlertItem["severity"]) => {
    switch (severity) {
      case "high":
        return "destructive";
      case "medium":
        return "warning";
      case "low":
        return "secondary";
      default:
        return "secondary";
    }
  };

  return (
    <Card className="bg-gradient-to-br from-card to-card/50 shadow-[var(--shadow-card)]">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">Critical Alerts</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {alerts.map((alert) => {
          const Icon = getAlertIcon(alert.type);
          return (
            <div key={alert.id} className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
              <Icon className="h-5 w-5 text-primary flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm font-medium text-foreground truncate">{alert.item}</p>
                  <Badge variant={getAlertColor(alert.severity) as any} className="ml-2">
                    {alert.severity}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">{alert.department}</p>
                <p className="text-xs text-muted-foreground">{alert.timeframe}</p>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};
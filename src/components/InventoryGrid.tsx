import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface InventoryItem {
  id: string;
  name: string;
  department: string;
  currentStock: number;
  maxStock: number;
  status: "critical" | "low" | "optimal" | "overstock";
  lastRestocked: string;
}

const inventoryData: InventoryItem[] = [
  { id: "1", name: "Surgical Masks", department: "Surgery", currentStock: 150, maxStock: 500, status: "low", lastRestocked: "2 days ago" },
  { id: "2", name: "IV Bags", department: "Emergency", currentStock: 350, maxStock: 400, status: "optimal", lastRestocked: "1 day ago" },
  { id: "3", name: "Syringes", department: "General", currentStock: 50, maxStock: 300, status: "critical", lastRestocked: "5 days ago" },
  { id: "4", name: "Blood Pressure Cuffs", department: "Cardiology", currentStock: 45, maxStock: 50, status: "optimal", lastRestocked: "3 days ago" },
  { id: "5", name: "Gauze Pads", department: "Surgery", currentStock: 800, maxStock: 600, status: "overstock", lastRestocked: "1 week ago" },
  { id: "6", name: "Antibiotics", department: "Pharmacy", currentStock: 120, maxStock: 200, status: "optimal", lastRestocked: "Today" },
];

export const InventoryGrid = () => {
  const getStatusColor = (status: InventoryItem["status"]) => {
    switch (status) {
      case "critical":
        return "destructive";
      case "low":
        return "warning";
      case "optimal":
        return "success";
      case "overstock":
        return "secondary";
      default:
        return "secondary";
    }
  };

  const getProgressColor = (status: InventoryItem["status"]) => {
    switch (status) {
      case "critical":
        return "bg-destructive";
      case "low":
        return "bg-warning";
      case "optimal":
        return "bg-success";
      case "overstock":
        return "bg-medical-amber";
      default:
        return "bg-primary";
    }
  };

  return (
    <Card className="bg-gradient-to-br from-card to-card/50 shadow-[var(--shadow-card)]">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">Real-Time Inventory Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {inventoryData.map((item) => (
            <div key={item.id} className="p-4 bg-muted/20 rounded-lg border border-border/30">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="font-medium text-sm text-foreground">{item.name}</h4>
                  <p className="text-xs text-muted-foreground">{item.department}</p>
                </div>
                <Badge variant={getStatusColor(item.status) as any} className="text-xs">
                  {item.status}
                </Badge>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{item.currentStock} units</span>
                  <span>Max: {item.maxStock}</span>
                </div>
                <Progress 
                  value={(item.currentStock / item.maxStock) * 100} 
                  className="h-2"
                />
                <p className="text-xs text-muted-foreground">Last restocked: {item.lastRestocked}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
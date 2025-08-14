import { Header } from "@/components/Header";
import { MetricCard } from "@/components/MetricCard";
import { AlertCard } from "@/components/AlertCard";
import { DemandChart } from "@/components/DemandChart";
import { InventoryGrid } from "@/components/InventoryGrid";
import { 
  DollarSign, 
  Package, 
  TrendingDown, 
  AlertTriangle,
  BarChart3,
  Clock,
  ShieldCheck
} from "lucide-react";
import dashboardHero from "@/assets/dashboard-hero.jpg";

const alertData = [
  {
    id: "1",
    type: "expiring" as const,
    item: "Insulin Vials",
    department: "Pharmacy",
    severity: "high" as const,
    timeframe: "Expires in 3 days",
  },
  {
    id: "2",
    type: "stockout" as const,
    item: "N95 Masks",
    department: "ICU",
    severity: "high" as const,
    timeframe: "Stock depleted",
  },
  {
    id: "3",
    type: "overstock" as const,
    item: "Disposable Gowns",
    department: "Surgery",
    severity: "medium" as const,
    timeframe: "150% over capacity",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-12 bg-gradient-to-br from-primary/5 to-primary-glow/10">
        <div className="absolute inset-0 opacity-10">
          <img 
            src={dashboardHero} 
            alt="Healthcare Analytics Dashboard" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Predictive Supply Chain Analytics
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              AI-powered hospital inventory management saving millions in costs while improving patient outcomes
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Key Metrics */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-foreground">Executive Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              title="Annual Cost Savings"
              value="$2.3M"
              change="+15% vs last year"
              changeType="positive"
              icon={DollarSign}
              description="Target: $3M annually"
            />
            <MetricCard
              title="Inventory Efficiency"
              value="94.5%"
              change="+12.3% this quarter"
              changeType="positive"
              icon={BarChart3}
              description="Industry avg: 78%"
            />
            <MetricCard
              title="Waste Reduction"
              value="32%"
              change="Down 8% this month"
              changeType="positive"
              icon={TrendingDown}
              description="Expires & overstock"
            />
            <MetricCard
              title="Stock Accuracy"
              value="98.7%"
              change="+2.1% improvement"
              changeType="positive"
              icon={ShieldCheck}
              description="Real-time tracking"
            />
          </div>
        </section>

        {/* Charts and Alerts Row */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <DemandChart />
          </div>
          <div>
            <AlertCard alerts={alertData} />
          </div>
        </section>

        {/* Inventory Grid */}
        <section>
          <InventoryGrid />
        </section>

        {/* Impact Summary */}
        <section className="bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-lg p-8 border border-primary/20">
          <h2 className="text-2xl font-semibold mb-6 text-foreground">Projected Annual Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-success mb-2">25-40%</div>
              <p className="text-sm text-muted-foreground">Reduction in Supply Waste</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">$5M+</div>
              <p className="text-sm text-muted-foreground">Annual Cost Savings Potential</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-medical-green mb-2">99%</div>
              <p className="text-sm text-muted-foreground">Critical Supply Availability</p>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="border-t bg-muted/30 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            Built with predictive analytics to revolutionize healthcare supply chain management
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
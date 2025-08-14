// Hospital Supply Chain Data Models
// Represents data structures from SQL database and Python/R analytics

export interface HospitalItem {
  id: string;
  name: string;
  category: 'medical_device' | 'pharmaceutical' | 'surgical' | 'ppe' | 'consumable';
  department: string;
  unit_cost: number;
  critical_level: number;
  max_stock: number;
  lead_time_days: number;
  supplier_id: string;
  ndc_code?: string; // National Drug Code for pharmaceuticals
}

export interface InventoryTransaction {
  id: string;
  item_id: string;
  transaction_type: 'receipt' | 'usage' | 'transfer' | 'adjustment' | 'expiry';
  quantity: number;
  unit_cost: number;
  department: string;
  user_id: string;
  timestamp: string;
  batch_number?: string;
  expiry_date?: string;
  notes?: string;
}

export interface DemandPattern {
  item_id: string;
  date: string;
  daily_usage: number;
  day_of_week: number;
  month: number;
  is_holiday: boolean;
  patient_census: number;
  surgical_cases: number;
  emergency_admissions: number;
}

export interface SupplyChainKPI {
  metric_name: string;
  current_value: number;
  target_value: number;
  previous_period_value: number;
  trend: 'increasing' | 'decreasing' | 'stable';
  department?: string;
  calculation_date: string;
}

export interface PredictiveModel {
  model_id: string;
  model_name: string;
  model_type: 'regression' | 'classification' | 'time_series' | 'clustering';
  target_variable: string;
  features: string[];
  accuracy_score: number;
  training_date: string;
  last_prediction_date: string;
  hyperparameters: Record<string, any>;
}

// Mock dataset representing real hospital data
export const mockHospitalData = {
  items: [
    {
      id: 'ITM001',
      name: 'N95 Respirator Masks',
      category: 'ppe' as const,
      department: 'All Departments',
      unit_cost: 2.50,
      critical_level: 100,
      max_stock: 1000,
      lead_time_days: 7,
      supplier_id: 'SUP001'
    },
    {
      id: 'ITM002', 
      name: 'Morphine 10mg/mL',
      category: 'pharmaceutical' as const,
      department: 'Emergency',
      unit_cost: 15.75,
      critical_level: 20,
      max_stock: 100,
      lead_time_days: 14,
      supplier_id: 'SUP002',
      ndc_code: '12345-678-90'
    },
    {
      id: 'ITM003',
      name: 'Surgical Sutures 4-0',
      category: 'surgical' as const,
      department: 'Surgery',
      unit_cost: 8.25,
      critical_level: 50,
      max_stock: 200,
      lead_time_days: 5,
      supplier_id: 'SUP003'
    }
  ] as HospitalItem[],

  transactions: [
    {
      id: 'TXN001',
      item_id: 'ITM001',
      transaction_type: 'usage' as const,
      quantity: -25,
      unit_cost: 2.50,
      department: 'ICU',
      user_id: 'USR001',
      timestamp: '2024-08-13T08:30:00Z',
      notes: 'COVID patient care'
    },
    {
      id: 'TXN002',
      item_id: 'ITM002',
      transaction_type: 'usage' as const,
      quantity: -2,
      unit_cost: 15.75,
      department: 'Emergency',
      user_id: 'USR002',
      timestamp: '2024-08-13T14:15:00Z',
      batch_number: 'BATCH123',
      expiry_date: '2025-12-31'
    }
  ] as InventoryTransaction[],

  demandPatterns: [
    {
      item_id: 'ITM001',
      date: '2024-08-13',
      daily_usage: 45,
      day_of_week: 2,
      month: 8,
      is_holiday: false,
      patient_census: 285,
      surgical_cases: 12,
      emergency_admissions: 8
    }
  ] as DemandPattern[],

  kpis: [
    {
      metric_name: 'Inventory Turnover Rate',
      current_value: 8.2,
      target_value: 10.0,
      previous_period_value: 7.8,
      trend: 'increasing' as const,
      calculation_date: '2024-08-13'
    },
    {
      metric_name: 'Stockout Incidents',
      current_value: 3,
      target_value: 0,
      previous_period_value: 5,
      trend: 'decreasing' as const,
      calculation_date: '2024-08-13'
    },
    {
      metric_name: 'Expired Inventory Value',
      current_value: 12500,
      target_value: 5000,
      previous_period_value: 15000,
      trend: 'decreasing' as const,
      calculation_date: '2024-08-13'
    }
  ] as SupplyChainKPI[],

  models: [
    {
      model_id: 'MDL001',
      model_name: 'Demand Forecasting - PPE',
      model_type: 'time_series' as const,
      target_variable: 'daily_usage',
      features: ['patient_census', 'day_of_week', 'month', 'is_holiday', 'covid_cases'],
      accuracy_score: 0.87,
      training_date: '2024-08-01',
      last_prediction_date: '2024-08-13',
      hyperparameters: {
        'seasonal_periods': 7,
        'trend': 'additive',
        'seasonal': 'multiplicative'
      }
    }
  ] as PredictiveModel[]
};
"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { DollarSign, TrendingUp, TrendingDown, FileText, Download, Plus } from "lucide-react"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from "recharts"
import type { Tenant } from "@/lib/multi-tenant/get-domain-tenant"

interface AccountingSectionProps {
  tenant: Tenant
}

export function AccountingSection({ tenant }: AccountingSectionProps) {
  // Mock financial data
  const monthlyRevenue = [
    { month: "Jan", revenue: 4500, expenses: 1200 },
    { month: "Feb", revenue: 5200, expenses: 1400 },
    { month: "Mar", revenue: 4800, expenses: 1100 },
    { month: "Apr", revenue: 6100, expenses: 1600 },
    { month: "May", revenue: 7200, expenses: 1800 },
    { month: "Jun", revenue: 6800, expenses: 1500 },
  ]

  const expenseCategories = [
    { name: "Equipment", value: 2400, color: "#ff00ff" },
    { name: "Software", value: 800, color: "#00ffff" },
    { name: "Marketing", value: 1200, color: "#ffffff" },
    { name: "Travel", value: 600, color: "#888888" },
  ]

  const recentTransactions = [
    { id: 1, description: "OnlyFans Subscription Revenue", amount: 2500, type: "income", date: "2024-01-15" },
    { id: 2, description: "Camera Equipment", amount: -800, type: "expense", date: "2024-01-14" },
    { id: 3, description: "Brand Partnership - FashionCo", amount: 1500, type: "income", date: "2024-01-12" },
    { id: 4, description: "Adobe Creative Suite", amount: -52.99, type: "expense", date: "2024-01-10" },
    { id: 5, description: "Content Collaboration", amount: 750, type: "income", date: "2024-01-08" },
  ]

  const taxDocuments = [
    { id: 1, name: "Q4 2023 Tax Summary", type: "PDF", date: "2024-01-01", status: "ready" },
    { id: 2, name: "1099-NEC Forms", type: "PDF", date: "2024-01-15", status: "pending" },
    { id: 3, name: "Expense Report - December", type: "Excel", date: "2023-12-31", status: "ready" },
    { id: 4, name: "Revenue Summary 2023", type: "PDF", date: "2024-01-01", status: "ready" },
  ]

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Tax & Accounting</h1>
          <p className="text-gray-400">Manage your finances and tax obligations</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-gray-700 text-white">
            <Download className="mr-2 h-4 w-4" />
            Export Data
          </Button>
          <Button className="bg-gradient-to-r from-[#ff00ff] to-[#00ffff] text-white">
            <Plus className="mr-2 h-4 w-4" />
            Add Transaction
          </Button>
        </div>
      </div>

      {/* Financial Overview Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-[#181e2b] border-[#2a2b30]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-[#ff00ff]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">$34,600</div>
            <p className="text-xs text-green-400 flex items-center">
              <TrendingUp className="mr-1 h-3 w-3" />
              +12.5% from last month
            </p>
          </CardContent>
        </Card>
        <Card className="bg-[#181e2b] border-[#2a2b30]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">Total Expenses</CardTitle>
            <TrendingDown className="h-4 w-4 text-[#00ffff]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">$9,600</div>
            <p className="text-xs text-red-400 flex items-center">
              <TrendingUp className="mr-1 h-3 w-3" />
              +8.2% from last month
            </p>
          </CardContent>
        </Card>
        <Card className="bg-[#181e2b] border-[#2a2b30]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">Net Profit</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">$25,000</div>
            <p className="text-xs text-green-400 flex items-center">
              <TrendingUp className="mr-1 h-3 w-3" />
              +15.3% from last month
            </p>
          </CardContent>
        </Card>
        <Card className="bg-[#181e2b] border-[#2a2b30]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">Tax Estimate</CardTitle>
            <FileText className="h-4 w-4 text-yellow-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">$6,250</div>
            <p className="text-xs text-gray-400">Q1 2024 estimate</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="expenses">Expenses</TabsTrigger>
          <TabsTrigger value="taxes">Tax Documents</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="bg-[#181e2b] border-[#2a2b30]">
              <CardHeader>
                <CardTitle className="text-white">Revenue vs Expenses</CardTitle>
                <CardDescription>Monthly comparison for 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={monthlyRevenue}>
                    <XAxis dataKey="month" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip />
                    <Bar dataKey="revenue" fill="#ff00ff" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="expenses" fill="#00ffff" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="bg-[#181e2b] border-[#2a2b30]">
              <CardHeader>
                <CardTitle className="text-white">Expense Breakdown</CardTitle>
                <CardDescription>Current month categories</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={expenseCategories}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {expenseCategories.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="mt-4 space-y-2">
                  {expenseCategories.map((category) => (
                    <div key={category.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: category.color }} />
                        <span className="text-sm text-gray-300">{category.name}</span>
                      </div>
                      <span className="text-sm font-medium text-white">${category.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="transactions" className="space-y-4">
          <Card className="bg-[#181e2b] border-[#2a2b30]">
            <CardHeader>
              <CardTitle className="text-white">Recent Transactions</CardTitle>
              <CardDescription>Your latest income and expenses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTransactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-3 rounded-lg bg-[#252d3a]">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-2 h-2 rounded-full ${transaction.type === "income" ? "bg-green-400" : "bg-red-400"}`}
                      />
                      <div>
                        <p className="text-sm font-medium text-white">{transaction.description}</p>
                        <p className="text-xs text-gray-400">{transaction.date}</p>
                      </div>
                    </div>
                    <div
                      className={`text-sm font-medium ${transaction.type === "income" ? "text-green-400" : "text-red-400"}`}
                    >
                      {transaction.type === "income" ? "+" : ""}${Math.abs(transaction.amount).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="expenses" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="bg-[#181e2b] border-[#2a2b30]">
              <CardHeader>
                <CardTitle className="text-white">Monthly Budget</CardTitle>
                <CardDescription>Track your spending limits</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Equipment</span>
                    <span className="text-white">$800 / $1,000</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Software</span>
                    <span className="text-white">$200 / $300</span>
                  </div>
                  <Progress value={67} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Marketing</span>
                    <span className="text-white">$450 / $500</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#181e2b] border-[#2a2b30]">
              <CardHeader>
                <CardTitle className="text-white">Tax Deductions</CardTitle>
                <CardDescription>Potential deductible expenses</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-300">Home Office</span>
                  <Badge className="bg-green-500/20 text-green-400">$2,400</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-300">Equipment</span>
                  <Badge className="bg-green-500/20 text-green-400">$1,800</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-300">Software</span>
                  <Badge className="bg-green-500/20 text-green-400">$600</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-300">Travel</span>
                  <Badge className="bg-green-500/20 text-green-400">$400</Badge>
                </div>
                <div className="pt-2 border-t border-gray-700">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-white">Total Deductions</span>
                    <Badge className="bg-[#ff00ff]/20 text-[#ff00ff]">$5,200</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="taxes" className="space-y-4">
          <Card className="bg-[#181e2b] border-[#2a2b30]">
            <CardHeader>
              <CardTitle className="text-white">Tax Documents</CardTitle>
              <CardDescription>Download and manage your tax-related documents</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {taxDocuments.map((doc) => (
                  <div key={doc.id} className="flex items-center justify-between p-3 rounded-lg bg-[#252d3a]">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-[#ff00ff]" />
                      <div>
                        <p className="text-sm font-medium text-white">{doc.name}</p>
                        <p className="text-xs text-gray-400">
                          {doc.type} • {doc.date}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge
                        className={
                          doc.status === "ready" ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"
                        }
                      >
                        {doc.status}
                      </Badge>
                      <Button size="sm" variant="ghost" className="text-[#00ffff]">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
